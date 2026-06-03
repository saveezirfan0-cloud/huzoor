-- =====================================================================
--  HUDOOR — Supabase schema
--  Run this in the Supabase SQL Editor (Dashboard → SQL → New query).
--  It creates all user-data tables with Row-Level Security so each
--  person can only read/write their own rows.
-- =====================================================================

-- 1. PROFILES ----------------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  language     text default 'en',         -- 'en' | 'ur'
  madhhab      text default 'general',     -- general | hanafi | shafii | maliki | hanbali
  timezone     text,
  created_at   timestamptz default now()
);

-- 2. PRAYER LOGS -------------------------------------------------------
create table if not exists public.prayer_logs (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  prayer_name text not null,               -- Fajr, Dhuhr, ...
  focus_score int check (focus_score between 1 and 5),
  logged_on   date not null default current_date,
  created_at  timestamptz default now(),
  unique (user_id, prayer_name, logged_on)
);

-- 3. DHIKR LOGS --------------------------------------------------------
create table if not exists public.dhikr_logs (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  adhkar_id  text not null,
  count      int default 0,
  logged_on  date not null default current_date,
  created_at timestamptz default now(),
  unique (user_id, adhkar_id, logged_on)
);

-- 4. EMOTION / MOOD LOGS ----------------------------------------------
create table if not exists public.emotion_logs (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  mood       text not null,
  logged_on  date not null default current_date,
  created_at timestamptz default now()
);

-- 5. JOURNAL / REFLECTIONS --------------------------------------------
create table if not exists public.journal_entries (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  ayah_ref   text,
  note       text not null,
  created_at timestamptz default now()
);

-- 6. CHARACTER PROGRESS ------------------------------------------------
create table if not exists public.character_progress (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  trait_id    text not null,
  current_day int default 1,
  updated_at  timestamptz default now(),
  unique (user_id, trait_id)
);

-- 7. BOOKMARKS ---------------------------------------------------------
create table if not exists public.saved_content (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  content_type text not null,              -- 'dua' | 'ayah' | 'hadith'
  content_id   text not null,
  created_at   timestamptz default now(),
  unique (user_id, content_type, content_id)
);

-- =====================================================================
--  ROW-LEVEL SECURITY
-- =====================================================================
alter table public.profiles           enable row level security;
alter table public.prayer_logs        enable row level security;
alter table public.dhikr_logs         enable row level security;
alter table public.emotion_logs       enable row level security;
alter table public.journal_entries    enable row level security;
alter table public.character_progress enable row level security;
alter table public.saved_content      enable row level security;

-- Helper: a single policy per table that ties every row to auth.uid()
do $$
declare t text;
begin
  foreach t in array array[
    'profiles','prayer_logs','dhikr_logs','emotion_logs',
    'journal_entries','character_progress','saved_content'
  ]
  loop
    -- profiles keys on id; others on user_id
    if t = 'profiles' then
      execute format($f$
        create policy "own_select" on public.%1$I for select using (auth.uid() = id);
        create policy "own_insert" on public.%1$I for insert with check (auth.uid() = id);
        create policy "own_update" on public.%1$I for update using (auth.uid() = id);
        create policy "own_delete" on public.%1$I for delete using (auth.uid() = id);
      $f$, t);
    else
      execute format($f$
        create policy "own_select" on public.%1$I for select using (auth.uid() = user_id);
        create policy "own_insert" on public.%1$I for insert with check (auth.uid() = user_id);
        create policy "own_update" on public.%1$I for update using (auth.uid() = user_id);
        create policy "own_delete" on public.%1$I for delete using (auth.uid() = user_id);
      $f$, t);
    end if;
  end loop;
end $$;

-- =====================================================================
--  AUTO-CREATE A PROFILE ROW WHEN A USER SIGNS UP
-- =====================================================================
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'full_name', split_part(new.email,'@',1)))
  on conflict (id) do nothing;
  return new;
end $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
