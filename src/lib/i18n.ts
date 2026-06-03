export type Lang = "en" | "ur";

export const dict = {
  appName: { en: "Hudoor", ur: "حضور" },
  tagline: { en: "Become mindful through Deen", ur: "دین کے ذریعے یکسوئی" },
  nav: {
    dashboard: { en: "Home", ur: "ہوم" },
    salah: { en: "Salah", ur: "نماز" },
    tracker: { en: "Tracker", ur: "ٹریکر" },
    duas: { en: "Duas", ur: "دعائیں" },
    azkar: { en: "Azkar", ur: "اذکار" },
    sunnah: { en: "Sunnah", ur: "سنت" },
    mindfulness: { en: "Mindfulness", ur: "یکسوئی" },
    emotions: { en: "Feelings", ur: "احساسات" },
    character: { en: "Character", ur: "کردار" },
    reflection: { en: "Reflect", ur: "غور" },
  },
  common: {
    signIn: { en: "Sign in", ur: "سائن اِن" },
    signOut: { en: "Sign out", ur: "سائن آؤٹ" },
    signUp: { en: "Create account", ur: "اکاؤنٹ بنائیں" },
    email: { en: "Email", ur: "ای میل" },
    password: { en: "Password", ur: "پاس ورڈ" },
    continue: { en: "Continue", ur: "آگے بڑھیں" },
    save: { en: "Save", ur: "محفوظ کریں" },
    saved: { en: "Saved", ur: "محفوظ" },
    today: { en: "Today", ur: "آج" },
    streak: { en: "day streak", ur: "دن کا تسلسل" },
    meaning: { en: "Meaning", ur: "مطلب" },
    why: { en: "Why it's taught", ur: "کیوں سکھائی گئی" },
    builds: { en: "Builds", ur: "پیدا کرتی ہے" },
    source: { en: "Source", ur: "ماخذ" },
  },
  dash: {
    focusToday: { en: "Today's Deen Focus", ur: "آج کی توجہ" },
    salahStatus: { en: "Prayer", ur: "نماز" },
    dhikr: { en: "Daily Dhikr", ur: "روزانہ ذکر" },
    reflection: { en: "Reflection", ur: "غور و فکر" },
    mood: { en: "How are you feeling?", ur: "آپ کیسا محسوس کر رہے ہیں؟" },
    greeting: { en: "Assalamu alaikum", ur: "السلام علیکم" },
  },
  salah: {
    title: { en: "Salah Companion", ur: "نماز کا ساتھی" },
    before: { en: "Before — Grounding", ur: "پہلے — تیاری" },
    during: { en: "During — Presence", ur: "دوران — حضور" },
    after: { en: "After — Adhkar", ur: "بعد — اذکار" },
    focusScore: { en: "How focused were you?", ur: "آپ کتنے یکسو تھے؟" },
    beginPresence: { en: "Begin Presence Mode", ur: "حضور موڈ شروع کریں" },
  },
  emotions: {
    title: { en: "How are you feeling?", ur: "آپ کیسا محسوس کر رہے ہیں؟" },
    sub: {
      en: "Tap a feeling for guidance from Qur'an & Sunnah",
      ur: "قرآن و سنت سے رہنمائی کے لیے ایک احساس منتخب کریں",
    },
    action: { en: "One small step", ur: "ایک چھوٹا قدم" },
  },
  character: {
    title: { en: "Character Building", ur: "کردار سازی" },
    sub: {
      en: "Worship that shapes who you become",
      ur: "عبادت جو آپ کا کردار بناتی ہے",
    },
    challenge: { en: "Today's challenge", ur: "آج کا چیلنج" },
    journey7: { en: "7-day", ur: "۷ دن" },
    journey30: { en: "30-day", ur: "۳۰ دن" },
    journeyLife: { en: "Lifelong", ur: "تاحیات" },
  },
  tracker: {
    title: { en: "Salah Tracker", ur: "نماز ٹریکر" },
    sub: { en: "Log your five daily prayers", ur: "اپنی پانچ نمازیں درج کریں" },
    todayDone: { en: "prayed today", ur: "آج ادا کیں" },
    sunnahRakah: { en: "Sunnah", ur: "سنت" },
  },
  azkar: {
    title: { en: "Azkar Tracker", ur: "اذکار ٹریکر" },
    sub: { en: "Morning & evening remembrance", ur: "صبح و شام کے اذکار" },
    morning: { en: "Morning", ur: "صبح" },
    evening: { en: "Evening", ur: "شام" },
    anytime: { en: "Anytime", ur: "ہر وقت" },
    complete: { en: "Complete", ur: "مکمل" },
    reset: { en: "Reset", ur: "ری سیٹ" },
  },
  sunnah: {
    title: { en: "Daily Sunnahs", ur: "روزمرہ سنتیں" },
    sub: {
      en: "Revive a Sunnah today — tap to track",
      ur: "آج ایک سنت زندہ کریں — ٹریک کرنے کے لیے دبائیں",
    },
    followedToday: { en: "followed today", ur: "آج اپنائیں" },
  },
  gender: {
    welcome: { en: "Welcome to Hudoor", ur: "حضور میں خوش آمدید" },
    intro: {
      en: "To tailor your worship reminders, let us know who you're praying as. This stays private to you and you can change or remove it anytime in Settings.",
      ur: "آپ کی عبادت کی یاد دہانیاں بہتر بنانے کے لیے بتائیں۔ یہ آپ تک نجی رہتا ہے اور آپ اسے سیٹنگز میں کبھی بھی بدل یا ہٹا سکتی/سکتے ہیں۔",
    },
    male: { en: "Male", ur: "مرد" },
    female: { en: "Female", ur: "عورت" },
    skip: { en: "Prefer not to say", ur: "بتانا نہیں چاہتا/چاہتی" },
    settings: { en: "Gender (for tailored reminders)", ur: "جنس (موزوں یاد دہانیوں کے لیے)" },
    clear: { en: "Clear", ur: "ہٹا دیں" },
  },
  hayd: {
    title: { en: "Monthly Companion", ur: "ماہانہ ساتھی" },
    sub: {
      en: "Worship continues — in different forms",
      ur: "عبادت جاری رہتی ہے — مختلف صورتوں میں",
    },
    onToday: { en: "On my cycle today", ur: "آج ایام میں ہوں" },
    acts: { en: "What you can do now", ur: "اب آپ کیا کر سکتی ہیں" },
    note: {
      en: "General guidance; scholars differ on some details. For personal rulings, ask a trusted scholar.",
      ur: "عمومی رہنمائی؛ بعض تفصیلات میں علما کا اختلاف ہے۔ ذاتی مسائل کے لیے کسی معتبر عالم سے رجوع کریں۔",
    },
  },
} as const;

export function t(
  group: keyof typeof dict,
  key: string,
  lang: Lang
): string {
  // @ts-expect-error dynamic access on typed dict
  const node = dict[group]?.[key];
  if (node && typeof node === "object") return node[lang] ?? node.en;
  return key;
}
