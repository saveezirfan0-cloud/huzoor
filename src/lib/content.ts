// All religious content below is drawn from widely-known authenticated sources
// (Qur'an; Sahih al-Bukhari/Muslim; Sunan Abu Dawud/Tirmidhi; Hisnul Muslim).
// Source references are included on each item. Have a qualified scholar
// review this content before any public launch.

export type Bi = { en: string; ur: string };

export interface Dua {
  id: string;
  title: Bi;
  arabic: string;
  transliteration: string;
  translation: Bi;
  why: Bi;
  builds: Bi;
  when: Bi;
  source: string;
}

export const DUAS: Dua[] = [
  {
    id: "afiyah",
    title: { en: "Dua for Well-being (After Salah)", ur: "عافیت کی دعا (نماز کے بعد)" },
    arabic:
      "اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي",
    transliteration:
      "Allahumma 'afini fi badani, Allahumma 'afini fi sam'i, Allahumma 'afini fi basari",
    translation: {
      en: "O Allah, grant me well-being in my body. O Allah, grant me well-being in my hearing. O Allah, grant me well-being in my sight.",
      ur: "اے اللہ! میرے جسم کو عافیت دے۔ اے اللہ! میری سماعت کو عافیت دے۔ اے اللہ! میری بینائی کو عافیت دے۔",
    },
    why: {
      en: "The Prophet ﷺ repeated this morning and evening, teaching us to be thankful for the faculties we overlook and to depend on Allah for them.",
      ur: "نبی ﷺ یہ دعا صبح و شام پڑھتے تھے، ہمیں ان نعمتوں پر شکر اور اللہ پر بھروسہ سکھاتے ہوئے جنہیں ہم نظر انداز کر دیتے ہیں۔",
    },
    builds: { en: "Gratitude · Dependence on Allah", ur: "شکر · توکل" },
    when: { en: "Morning, evening & after salah", ur: "صبح، شام اور نماز کے بعد" },
    source: "Abu Dawud 5090 · Hisnul Muslim",
  },
  {
    id: "anxiety",
    title: { en: "Dua for Anxiety & Grief", ur: "پریشانی و غم کی دعا" },
    arabic:
      "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ",
    transliteration:
      "Allahumma inni a'udhu bika minal-hammi wal-hazan, wal-'ajzi wal-kasal",
    translation: {
      en: "O Allah, I seek refuge in You from anxiety and grief, from helplessness and laziness.",
      ur: "اے اللہ! میں پریشانی اور غم سے، اور بے بسی اور سستی سے تیری پناہ مانگتا ہوں۔",
    },
    why: {
      en: "Taught by the Prophet ﷺ to a companion overwhelmed by worry and debt — naming our burdens before Allah lightens the heart.",
      ur: "نبی ﷺ نے یہ دعا ایک پریشان حال صحابی کو سکھائی — اپنے بوجھ اللہ کے سامنے رکھنا دل کو ہلکا کرتا ہے۔",
    },
    builds: { en: "Calm · Tawakkul", ur: "سکون · توکل" },
    when: { en: "When worry overwhelms you", ur: "جب پریشانی غالب آ جائے" },
    source: "Sahih al-Bukhari 6369",
  },
  {
    id: "sleep",
    title: { en: "Dua Before Sleep", ur: "سونے سے پہلے کی دعا" },
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    transliteration: "Bismika Allahumma amutu wa ahya",
    translation: {
      en: "In Your name, O Allah, I die and I live.",
      ur: "اے اللہ! تیرے نام کے ساتھ میں مرتا اور جیتا ہوں۔",
    },
    why: {
      en: "Sleep is a small death; the Prophet ﷺ entrusted his soul to Allah each night, training surrender and trust.",
      ur: "نیند ایک چھوٹی موت ہے؛ نبی ﷺ ہر رات اپنی روح اللہ کے سپرد کرتے تھے، تسلیم و توکل کی تربیت۔",
    },
    builds: { en: "Trust · Letting go", ur: "بھروسہ · سپردگی" },
    when: { en: "On lying down to sleep", ur: "سوتے وقت" },
    source: "Sahih al-Bukhari 6324",
  },
  {
    id: "istikhfar",
    title: { en: "Sayyid al-Istighfar (Best Forgiveness)", ur: "سید الاستغفار" },
    arabic:
      "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ",
    transliteration:
      "Allahumma anta Rabbi la ilaha illa anta, khalaqtani wa ana 'abduk",
    translation: {
      en: "O Allah, You are my Lord, none has the right to be worshipped but You. You created me and I am Your servant.",
      ur: "اے اللہ! تو میرا رب ہے، تیرے سوا کوئی معبود نہیں۔ تو نے مجھے پیدا کیا اور میں تیرا بندہ ہوں۔",
    },
    why: {
      en: "The Prophet ﷺ called it the best way to seek forgiveness — a daily reset of who you are and Who you belong to.",
      ur: "نبی ﷺ نے اسے بہترین استغفار کہا — روزانہ یاد دہانی کہ آپ کون ہیں اور کس کے ہیں۔",
    },
    builds: { en: "Humility · Renewal", ur: "تواضع · تجدید" },
    when: { en: "Morning & evening", ur: "صبح و شام" },
    source: "Sahih al-Bukhari 6306",
  },
];

export interface Ayah {
  surah: Bi;
  ref: string;
  arabic: string;
  translation: Bi;
  reflection: Bi;
}

export const AYAT: Ayah[] = [
  {
    surah: { en: "Ar-Ra'd", ur: "الرعد" },
    ref: "13:28",
    arabic: "أَلَا بِذِكْرِ ٱللَّهِ تَطْمَئِنُّ ٱلْقُلُوبُ",
    translation: {
      en: "Verily, in the remembrance of Allah do hearts find rest.",
      ur: "یاد رکھو! اللہ کے ذکر سے ہی دلوں کو اطمینان نصیب ہوتا ہے۔",
    },
    reflection: {
      en: "Where do you turn first when restless? Try turning to dhikr before the phone today.",
      ur: "بے چینی میں آپ پہلے کہاں رجوع کرتے ہیں؟ آج فون سے پہلے ذکر کی طرف رجوع کریں۔",
    },
  },
  {
    surah: { en: "Al-Mu'minun", ur: "المؤمنون" },
    ref: "23:1-2",
    arabic: "قَدْ أَفْلَحَ ٱلْمُؤْمِنُونَ ۝ ٱلَّذِينَ هُمْ فِى صَلَاتِهِمْ خَٰشِعُونَ",
    translation: {
      en: "Successful indeed are the believers — those who humble themselves in their prayer.",
      ur: "یقیناً ایمان والے کامیاب ہو گئے، جو اپنی نماز میں عاجزی کرتے ہیں۔",
    },
    reflection: {
      en: "Success is tied to presence, not just performance. Pick one rak'ah today to pray slowly.",
      ur: "کامیابی حضورِ قلب سے جڑی ہے، محض ادائیگی سے نہیں۔ آج ایک رکعت آہستہ پڑھیں۔",
    },
  },
  {
    surah: { en: "Ash-Sharh", ur: "الشرح" },
    ref: "94:5-6",
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    translation: {
      en: "For indeed, with hardship comes ease. Indeed, with hardship comes ease.",
      ur: "پس بے شک ہر مشکل کے ساتھ آسانی ہے۔ یقیناً ہر مشکل کے ساتھ آسانی ہے۔",
    },
    reflection: {
      en: "Name one hardship today. The ease is promised alongside it, not only after it.",
      ur: "آج ایک مشکل کا نام لیں۔ آسانی اس کے ساتھ وعدہ کی گئی ہے، صرف بعد میں نہیں۔",
    },
  },
];

export interface Emotion {
  id: string;
  label: Bi;
  emoji: string;
  ayah: { ref: string; text: Bi };
  hadith: { text: Bi; source: string };
  dua: { arabic: string; translit: string };
  action: Bi;
}

export const EMOTIONS: Emotion[] = [
  {
    id: "anxious",
    label: { en: "Anxious", ur: "بے چین" },
    emoji: "🌊",
    ayah: {
      ref: "Ra'd 13:28",
      text: {
        en: "In the remembrance of Allah do hearts find rest.",
        ur: "اللہ کے ذکر سے دلوں کو سکون ملتا ہے۔",
      },
    },
    hadith: {
      text: {
        en: "How wonderful is the affair of the believer — if hardship befalls him, he is patient, and that is good for him.",
        ur: "مومن کا معاملہ عجیب ہے — اگر مشکل آئے تو صبر کرتا ہے، اور یہ اس کے لیے بہتر ہے۔",
      },
      source: "Sahih Muslim 2999",
    },
    dua: {
      arabic: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ",
      translit: "Hasbunallahu wa ni'mal-wakil",
    },
    action: {
      en: "Place your hand on your chest, breathe slowly, and say 'Hasbunallah' three times.",
      ur: "اپنا ہاتھ سینے پر رکھیں، آہستہ سانس لیں، اور تین بار 'حسبنا اللہ' کہیں۔",
    },
  },
  {
    id: "angry",
    label: { en: "Angry", ur: "غصے میں" },
    emoji: "🔥",
    ayah: {
      ref: "Al-Imran 3:134",
      text: {
        en: "...those who restrain anger and pardon people — Allah loves the doers of good.",
        ur: "...جو غصہ پی جاتے اور لوگوں کو معاف کرتے ہیں — اللہ نیکی کرنے والوں سے محبت کرتا ہے۔",
      },
    },
    hadith: {
      text: {
        en: "When one of you becomes angry while standing, let him sit down.",
        ur: "جب تم میں سے کسی کو کھڑے ہوئے غصہ آئے تو بیٹھ جائے۔",
      },
      source: "Sunan Abi Dawud 4782",
    },
    dua: {
      arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
      translit: "A'udhu billahi minash-shaytanir-rajim",
    },
    action: {
      en: "If standing, sit. Delay your response by two minutes. Ask: what is my ego protecting?",
      ur: "اگر کھڑے ہیں تو بیٹھ جائیں۔ جواب دو منٹ ٹال دیں۔ سوچیں: میرا نفس کس چیز کی حفاظت کر رہا ہے؟",
    },
  },
  {
    id: "lonely",
    label: { en: "Lonely", ur: "تنہا" },
    emoji: "🌙",
    ayah: {
      ref: "Qaf 50:16",
      text: {
        en: "We are closer to him than his jugular vein.",
        ur: "ہم اس کی شہ رگ سے بھی زیادہ قریب ہیں۔",
      },
    },
    hadith: {
      text: {
        en: "Allah says: I am as My servant thinks of Me, and I am with him when he remembers Me.",
        ur: "اللہ فرماتا ہے: میں اپنے بندے کے گمان کے مطابق ہوں، اور جب وہ مجھے یاد کرے میں اس کے ساتھ ہوں۔",
      },
      source: "Sahih al-Bukhari 7405",
    },
    dua: {
      arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ",
      translit: "Ya Hayyu ya Qayyum, bi-rahmatika astaghith",
    },
    action: {
      en: "Speak to Allah out loud as you would a present friend. You are not unseen.",
      ur: "اللہ سے بلند آواز میں بات کریں جیسے کسی موجود دوست سے۔ آپ نظر انداز نہیں ہیں۔",
    },
  },
  {
    id: "distracted",
    label: { en: "Distracted", ur: "منتشر" },
    emoji: "🍃",
    ayah: {
      ref: "Al-Mu'minun 23:2",
      text: {
        en: "...those who humble themselves in their prayer.",
        ur: "...جو اپنی نماز میں عاجزی کرتے ہیں۔",
      },
    },
    hadith: {
      text: {
        en: "Worship Allah as though you see Him, for if you do not see Him, He surely sees you.",
        ur: "اللہ کی عبادت ایسے کرو گویا تم اسے دیکھ رہے ہو، اگر تم اسے نہیں دیکھتے تو وہ تمہیں دیکھتا ہے۔",
      },
      source: "Sahih al-Bukhari 50 (Hadith Jibril)",
    },
    dua: {
      arabic: "رَبِّ زِدْنِي عِلْمًا",
      translit: "Rabbi zidni 'ilma",
    },
    action: {
      en: "Before your next task, pause and name your intention. One thing, fully present.",
      ur: "اگلے کام سے پہلے رکیں اور اپنی نیت کا نام لیں۔ ایک کام، مکمل حضور کے ساتھ۔",
    },
  },
  {
    id: "guilty",
    label: { en: "Guilty", ur: "نادم" },
    emoji: "💧",
    ayah: {
      ref: "Az-Zumar 39:53",
      text: {
        en: "Do not despair of the mercy of Allah. Indeed, Allah forgives all sins.",
        ur: "اللہ کی رحمت سے مایوس نہ ہو۔ بے شک اللہ تمام گناہ معاف کر دیتا ہے۔",
      },
    },
    hadith: {
      text: {
        en: "The one who repents from sin is like one who has no sin.",
        ur: "گناہ سے توبہ کرنے والا ایسا ہے جیسے اس نے گناہ کیا ہی نہ ہو۔",
      },
      source: "Sunan Ibn Majah 4250",
    },
    dua: {
      arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
      translit: "Astaghfirullaha wa atubu ilayh",
    },
    action: {
      en: "Say istighfar three times, then do one small good deed now to turn the page.",
      ur: "تین بار استغفار کریں، پھر ابھی ایک چھوٹی نیکی کریں تاکہ صفحہ پلٹ جائے۔",
    },
  },
  {
    id: "lazy",
    label: { en: "Lazy in Deen", ur: "دین میں سست" },
    emoji: "⛰️",
    ayah: {
      ref: "Al-Ankabut 29:69",
      text: {
        en: "Those who strive for Us — We will surely guide them to Our ways.",
        ur: "جو ہمارے لیے کوشش کرتے ہیں، ہم انہیں اپنے راستوں کی ہدایت دیتے ہیں۔",
      },
    },
    hadith: {
      text: {
        en: "The most beloved deeds to Allah are the most consistent, even if small.",
        ur: "اللہ کو سب سے محبوب عمل وہ ہیں جو مستقل ہوں، چاہے تھوڑے ہوں۔",
      },
      source: "Sahih al-Bukhari 6464",
    },
    dua: {
      arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
      translit: "Allahumma a'inni 'ala dhikrika wa shukrika wa husni 'ibadatik",
    },
    action: {
      en: "Pick the smallest possible deed — one ayah, one dhikr — and do it right now.",
      ur: "سب سے چھوٹا عمل چنیں — ایک آیت، ایک ذکر — اور ابھی کریں۔",
    },
  },
];

export interface Trait {
  id: string;
  name: Bi;
  arabic: string;
  intro: Bi;
  ayah: { ref: string; text: Bi };
  hadith: { text: Bi; source: string };
  challenge: Bi;
}

export const TRAITS: Trait[] = [
  {
    id: "sabr",
    name: { en: "Patience", ur: "صبر" },
    arabic: "صبر",
    intro: {
      en: "Patience is not passivity — it is steady restraint of the self under pressure.",
      ur: "صبر بے عملی نہیں — یہ دباؤ میں نفس کو تھامے رکھنا ہے۔",
    },
    ayah: {
      ref: "Al-Baqarah 2:153",
      text: {
        en: "Indeed, Allah is with the patient.",
        ur: "بے شک اللہ صبر کرنے والوں کے ساتھ ہے۔",
      },
    },
    hadith: {
      text: {
        en: "No one is given a gift better and more comprehensive than patience.",
        ur: "صبر سے بہتر اور وسیع کوئی عطیہ کسی کو نہیں دیا گیا۔",
      },
      source: "Sahih al-Bukhari 1469",
    },
    challenge: {
      en: "Today, delay one angry response by 30 seconds.",
      ur: "آج، ایک غصے کے جواب کو ۳۰ سیکنڈ ٹال دیں۔",
    },
  },
  {
    id: "shukr",
    name: { en: "Gratitude", ur: "شکر" },
    arabic: "شكر",
    intro: {
      en: "Gratitude reframes what you have before you reach for what you lack.",
      ur: "شکر آپ کے پاس موجود نعمت کو نمایاں کرتا ہے، اس سے پہلے کہ آپ کمی کی طرف دیکھیں۔",
    },
    ayah: {
      ref: "Ibrahim 14:7",
      text: {
        en: "If you are grateful, I will surely increase you.",
        ur: "اگر تم شکر کرو گے تو میں ضرور زیادہ دوں گا۔",
      },
    },
    hadith: {
      text: {
        en: "He who does not thank people does not thank Allah.",
        ur: "جو لوگوں کا شکر ادا نہیں کرتا وہ اللہ کا شکر ادا نہیں کرتا۔",
      },
      source: "Sunan Abi Dawud 4811",
    },
    challenge: {
      en: "Write down three specific blessings before sleeping tonight.",
      ur: "آج رات سونے سے پہلے تین مخصوص نعمتیں لکھیں۔",
    },
  },
  {
    id: "hilm",
    name: { en: "Anger Control", ur: "حلم" },
    arabic: "حلم",
    intro: {
      en: "Strength is not overpowering others — it is mastering yourself when provoked.",
      ur: "طاقت دوسروں پر غالب آنا نہیں — اشتعال میں خود پر قابو پانا ہے۔",
    },
    ayah: {
      ref: "Ash-Shura 42:37",
      text: {
        en: "...and when they are angry, they forgive.",
        ur: "...اور جب غصہ آئے تو معاف کر دیتے ہیں۔",
      },
    },
    hadith: {
      text: {
        en: "The strong is not the one who overcomes by wrestling, but who controls himself in anger.",
        ur: "طاقتور وہ نہیں جو کشتی میں غالب آئے، بلکہ وہ جو غصے میں خود پر قابو پائے۔",
      },
      source: "Sahih al-Bukhari 6114",
    },
    challenge: {
      en: "Next time you feel anger rise, change your posture and stay silent for a moment.",
      ur: "اگلی بار غصہ بڑھے تو اپنی حالت بدلیں اور لمحہ بھر خاموش رہیں۔",
    },
  },
  {
    id: "tawakkul",
    name: { en: "Tawakkul", ur: "توکل" },
    arabic: "توكل",
    intro: {
      en: "Tie your camel, then trust. Effort is yours; outcomes are Allah's.",
      ur: "اونٹ باندھو پھر توکل کرو۔ کوشش آپ کی ہے، نتیجہ اللہ کا۔",
    },
    ayah: {
      ref: "At-Talaq 65:3",
      text: {
        en: "Whoever relies upon Allah — He is sufficient for him.",
        ur: "جو اللہ پر بھروسہ کرے، وہ اس کے لیے کافی ہے۔",
      },
    },
    hadith: {
      text: {
        en: "If you relied on Allah as He should be relied on, He would provide for you as He provides for the birds.",
        ur: "اگر تم اللہ پر صحیح بھروسہ کرو تو وہ تمہیں ایسے رزق دے جیسے پرندوں کو دیتا ہے۔",
      },
      source: "Sunan at-Tirmidhi 2344",
    },
    challenge: {
      en: "Do your best on one task today, then consciously hand the result to Allah.",
      ur: "آج ایک کام میں پوری کوشش کریں، پھر شعوری طور پر نتیجہ اللہ کے سپرد کریں۔",
    },
  },
];

export interface MindfulPractice {
  id: string;
  title: Bi;
  prompts: Bi[];
}

export const MINDFULNESS: MindfulPractice[] = [
  {
    id: "wudu",
    title: { en: "Mindful Wudu", ur: "باوضو حضور" },
    prompts: [
      { en: "Washing hands — set your intention.", ur: "ہاتھ دھوتے ہوئے — نیت کریں۔" },
      { en: "Rinsing mouth — become aware of your speech.", ur: "کلی کرتے ہوئے — اپنی گفتگو پر غور کریں۔" },
      { en: "Washing face — remember your true identity as a servant.", ur: "چہرہ دھوتے ہوئے — اپنی بندگی یاد کریں۔" },
      { en: "Wiping head — ask for clarity of mind.", ur: "سر کا مسح کرتے ہوئے — ذہنی صفائی مانگیں۔" },
    ],
  },
  {
    id: "sleep",
    title: { en: "Mindful Sleep", ur: "باحضور نیند" },
    prompts: [
      { en: "Make wudu before lying down.", ur: "لیٹنے سے پہلے وضو کریں۔" },
      { en: "Recite Ayatul Kursi for protection.", ur: "حفاظت کے لیے آیت الکرسی پڑھیں۔" },
      { en: "Reflect on one good deed from today.", ur: "آج کی ایک نیکی پر غور کریں۔" },
      { en: "Entrust your soul to Allah: 'Bismika Allahumma amutu wa ahya.'", ur: "اپنی روح اللہ کے سپرد کریں۔" },
    ],
  },
  {
    id: "anger",
    title: { en: "Mindful Anger", ur: "غصے میں حضور" },
    prompts: [
      { en: "Notice the heat rising — name it.", ur: "بڑھتی حرارت کو محسوس کریں — اسے پہچانیں۔" },
      { en: "Seek refuge: 'A'udhu billahi minash-shaytanir-rajim.'", ur: "پناہ مانگیں: اعوذ باللہ من الشیطان الرجیم۔" },
      { en: "If standing, sit. If sitting, lie down.", ur: "کھڑے ہیں تو بیٹھیں، بیٹھے ہیں تو لیٹیں۔" },
      { en: "Delay any response by two full minutes.", ur: "کوئی بھی جواب دو منٹ ٹال دیں۔" },
    ],
  },
];

export const SALAH_PRESENCE = {
  before: [
    { en: "Stand still. You are about to stand before Allah.", ur: "ٹھہریں۔ آپ اللہ کے سامنے کھڑے ہونے والے ہیں۔" },
    { en: "Set your intention clearly in your heart.", ur: "دل میں واضح نیت کریں۔" },
    { en: "Let go of what is behind and ahead of this moment.", ur: "اس لمحے کے ماضی و مستقبل کو چھوڑ دیں۔" },
  ],
  during: [
    {
      phrase: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
      meaning: { en: "All praise to Allah, Lord of all worlds.", ur: "تمام تعریف اللہ کے لیے، تمام جہانوں کا رب۔" },
      prompt: { en: "Pause. Allah is taking care of everything.", ur: "ٹھہریں۔ اللہ ہر چیز کا انتظام فرما رہا ہے۔" },
    },
    {
      phrase: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      meaning: { en: "You alone we worship, You alone we ask for help.", ur: "ہم صرف تیری عبادت کرتے اور تجھ سے مدد مانگتے ہیں۔" },
      prompt: { en: "This is a direct conversation. Mean every word.", ur: "یہ براہِ راست گفتگو ہے۔ ہر لفظ دل سے کہیں۔" },
    },
    {
      phrase: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
      meaning: { en: "Glory to my Lord, the Most Great.", ur: "پاک ہے میرا رب، عظمت والا۔" },
      prompt: { en: "In ruku', lower your self along with your body.", ur: "رکوع میں جسم کے ساتھ نفس کو بھی جھکائیں۔" },
    },
  ],
  after: ["afiyah", "istikhfar"], // dua ids
};

export const MOODS: { id: string; label: Bi; emoji: string }[] = [
  { id: "grateful", label: { en: "Grateful", ur: "شکر گزار" }, emoji: "🌿" },
  { id: "anxious", label: { en: "Anxious", ur: "بے چین" }, emoji: "🌊" },
  { id: "angry", label: { en: "Angry", ur: "غصے میں" }, emoji: "🔥" },
  { id: "distracted", label: { en: "Distracted", ur: "منتشر" }, emoji: "🍃" },
  { id: "sad", label: { en: "Sad", ur: "اداس" }, emoji: "💧" },
  { id: "lazy", label: { en: "Low", ur: "سست" }, emoji: "⛰️" },
];

// --- Salah tracker definitions ---------------------------------------
// The five obligatory prayers + their associated Sunnah rak'ah counts.
export interface PrayerDef {
  id: string;
  name: Bi;
  arabic: string;
  fard: number;          // obligatory rak'ahs
  sunnah: Bi;            // associated Sunnah rak'ahs (for reference)
}

export const PRAYER_DEFS: PrayerDef[] = [
  { id: "fajr", name: { en: "Fajr", ur: "فجر" }, arabic: "فجر", fard: 2, sunnah: { en: "2 before", ur: "۲ پہلے" } },
  { id: "dhuhr", name: { en: "Dhuhr", ur: "ظہر" }, arabic: "ظهر", fard: 4, sunnah: { en: "4 before · 2 after", ur: "۴ پہلے · ۲ بعد" } },
  { id: "asr", name: { en: "Asr", ur: "عصر" }, arabic: "عصر", fard: 4, sunnah: { en: "4 before (ghayr mu'akkadah)", ur: "۴ پہلے (غیر مؤکدہ)" } },
  { id: "maghrib", name: { en: "Maghrib", ur: "مغرب" }, arabic: "مغرب", fard: 3, sunnah: { en: "2 after", ur: "۲ بعد" } },
  { id: "isha", name: { en: "Isha", ur: "عشاء" }, arabic: "عشاء", fard: 4, sunnah: { en: "2 after · Witr", ur: "۲ بعد · وتر" } },
];

export type PrayerStatus = "prayed" | "jamaah" | "qaza" | "missed" | null;

export const PRAYER_STATUSES: { id: Exclude<PrayerStatus, null>; label: Bi; emoji: string }[] = [
  { id: "jamaah", label: { en: "In congregation", ur: "باجماعت" }, emoji: "🕌" },
  { id: "prayed", label: { en: "Prayed", ur: "ادا کی" }, emoji: "✅" },
  { id: "qaza", label: { en: "Made up (qaza)", ur: "قضا" }, emoji: "🕒" },
  { id: "missed", label: { en: "Missed", ur: "چھوٹ گئی" }, emoji: "—" },
];

// --- Azkar tracker (morning / evening adhkar with target counts) ------
export interface Zikr {
  id: string;
  category: "morning" | "evening" | "anytime";
  arabic: string;
  transliteration: string;
  translation: Bi;
  target: number;
  source: string;
}

export const AZKAR: Zikr[] = [
  {
    id: "subhanallah-100",
    category: "anytime",
    arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
    transliteration: "Subhanallahi wa bihamdihi",
    translation: { en: "Glory and praise be to Allah.", ur: "اللہ پاک ہے اور اس کی تعریف کے ساتھ۔" },
    target: 100,
    source: "Sahih al-Bukhari 6405",
  },
  {
    id: "istighfar-100",
    category: "anytime",
    arabic: "أَسْتَغْفِرُ اللَّهَ",
    transliteration: "Astaghfirullah",
    translation: { en: "I seek forgiveness from Allah.", ur: "میں اللہ سے بخشش مانگتا ہوں۔" },
    target: 100,
    source: "Sahih Muslim 2702",
  },
  {
    id: "ayatul-kursi",
    category: "morning",
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ…",
    transliteration: "Allahu la ilaha illa huwal-Hayyul-Qayyum…",
    translation: { en: "Recite Ayatul Kursi for protection.", ur: "حفاظت کے لیے آیت الکرسی پڑھیں۔" },
    target: 1,
    source: "Recite morning & evening · Al-Baqarah 2:255",
  },
  {
    id: "ikhlas-muawwidhatayn",
    category: "morning",
    arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ · قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ · قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
    transliteration: "Al-Ikhlas · Al-Falaq · An-Nas",
    translation: { en: "Recite the three Quls, three times each.", ur: "تینوں قل، ہر ایک تین بار پڑھیں۔" },
    target: 3,
    source: "Sunan Abi Dawud 5082",
  },
  {
    id: "sayyid-istighfar",
    category: "morning",
    arabic: "اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ…",
    transliteration: "Allahumma anta Rabbi la ilaha illa anta…",
    translation: { en: "The best way of seeking forgiveness.", ur: "بہترین استغفار۔" },
    target: 1,
    source: "Sahih al-Bukhari 6306",
  },
  {
    id: "evening-protection",
    category: "evening",
    arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
    transliteration: "A'udhu bikalimatillahit-tammati min sharri ma khalaq",
    translation: { en: "I seek refuge in Allah's perfect words from the evil of what He created.", ur: "میں اللہ کے کامل کلمات کی پناہ مانگتا ہوں اس کی مخلوق کے شر سے۔" },
    target: 3,
    source: "Sahih Muslim 2708",
  },
];

// --- Sunnah library + tracker ----------------------------------------
export interface Sunnah {
  id: string;
  title: Bi;
  detail: Bi;
  category: "daily" | "food" | "sleep" | "social" | "worship";
  source: string;
}

export const SUNNAHS: Sunnah[] = [
  {
    id: "miswak",
    title: { en: "Use the miswak", ur: "مسواک کرنا" },
    detail: {
      en: "Clean the teeth with miswak, especially before salah and on waking.",
      ur: "دانتوں کو مسواک سے صاف کرنا، خاص طور پر نماز سے پہلے اور بیداری پر۔",
    },
    category: "daily",
    source: "Sahih al-Bukhari 887",
  },
  {
    id: "bismillah-food",
    title: { en: "Say Bismillah before eating", ur: "کھانے سے پہلے بسم اللہ" },
    detail: {
      en: "Begin food with Allah's name and eat with the right hand.",
      ur: "کھانے کا آغاز اللہ کے نام سے کریں اور دائیں ہاتھ سے کھائیں۔",
    },
    category: "food",
    source: "Sahih al-Bukhari 5376",
  },
  {
    id: "right-hand",
    title: { en: "Begin with the right", ur: "دائیں سے آغاز" },
    detail: {
      en: "Favour the right side in dressing, entering the masjid, and eating.",
      ur: "لباس، مسجد میں داخلے اور کھانے میں دائیں جانب کو ترجیح دیں۔",
    },
    category: "daily",
    source: "Sahih al-Bukhari 168",
  },
  {
    id: "salam",
    title: { en: "Spread the salam", ur: "سلام پھیلانا" },
    detail: {
      en: "Greet others with salam, even those you don't know.",
      ur: "دوسروں کو سلام کریں، چاہے آپ انہیں نہ جانتے ہوں۔",
    },
    category: "social",
    source: "Sahih al-Bukhari 12",
  },
  {
    id: "right-sleep",
    title: { en: "Sleep on the right side", ur: "دائیں کروٹ سونا" },
    detail: {
      en: "Lie on your right side and recite the sleep adhkar before sleeping.",
      ur: "دائیں کروٹ لیٹیں اور سونے سے پہلے نیند کے اذکار پڑھیں۔",
    },
    category: "sleep",
    source: "Sahih al-Bukhari 6314",
  },
  {
    id: "duha",
    title: { en: "Pray Duha", ur: "نمازِ چاشت" },
    detail: {
      en: "Offer the forenoon (Duha) prayer — a charity for every joint.",
      ur: "چاشت کی نماز ادا کریں — ہر جوڑ کے لیے ایک صدقہ۔",
    },
    category: "worship",
    source: "Sahih Muslim 720",
  },
  {
    id: "smile",
    title: { en: "Smile at others", ur: "مسکرانا" },
    detail: {
      en: "A smile in your brother's face is charity.",
      ur: "اپنے بھائی کے سامنے مسکرانا صدقہ ہے۔",
    },
    category: "social",
    source: "Sunan at-Tirmidhi 1956",
  },
  {
    id: "dhikr-after-salah",
    title: { en: "Dhikr after salah", ur: "نماز کے بعد ذکر" },
    detail: {
      en: "33× SubhanAllah, 33× Alhamdulillah, 34× Allahu Akbar after each prayer.",
      ur: "ہر نماز کے بعد ۳۳ بار سبحان اللہ، ۳۳ بار الحمد للہ، ۳۴ بار اللہ اکبر۔",
    },
    category: "worship",
    source: "Sahih Muslim 596",
  },
];

// Deterministic "daily" pick so content rotates by date
export function daily<T>(arr: T[]): T {
  const day = Math.floor(Date.now() / 86400000);
  return arr[day % arr.length];
}
