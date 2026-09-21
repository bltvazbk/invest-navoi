// UI "chrome" strings (navigation, headings, buttons, labels).
// Rich content (sectors, projects, stats) lives in src/data/content.ts,
// where each item carries its own { en, ru, uz } fields.
//
// To add or change wording, edit the matching key in all three languages.
// Any key missing from ru/uz automatically falls back to English.

export type Lang = 'en' | 'ru' | 'uz'

export const LANGUAGES: { code: Lang; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'ru', label: 'Русский', short: 'RU' },
  { code: 'uz', label: "O'zbekcha", short: 'UZ' },
]

type Dict = Record<string, unknown>

export const translations: Record<Lang, Dict> = {
  en: {
    brand: {
      name: 'Invest Navoi',
      region: 'Navoi Region · Uzbekistan',
    },
    gov: {
      hokimlik: 'Government of the Navoi Region',
      department: 'Department of Investment, Industry and Trade',
      republic: 'Republic of Uzbekistan',
    },
    nav: {
      why: 'Why Navoi',
      sectors: 'Sectors',
      projects: 'Projects',
      freezone: 'Free Zone',
      incentives: 'Incentives',
      process: 'How to Invest',
      contact: 'Contact',
      investNow: 'Invest Now',
    },
    hero: {
      badge: 'One Gateway to Investment',
      titleTop: 'Navoi Region —',
      titleAccent: 'The Industrial Heart',
      titleBottom: 'of New Uzbekistan',
      subtitle:
        'Gold, chemicals, green energy and a continental logistics hub in the centre of Central Asia. Everything an investor needs to explore, decide and launch a project in Navoi — in one place.',
      ctaPrimary: 'Explore Opportunities',
      ctaSecondary: 'Download Investment Guide',
      scroll: 'Scroll to discover',
    },
    why: {
      eyebrow: 'Why Navoi',
      title: 'Built for large-scale industry',
      subtitle:
        'Navoi combines world-class natural resources, ready infrastructure and one of the most generous incentive regimes in the region.',
    },
    stats: {
      eyebrow: 'Navoi in Numbers',
      title: 'A region at the scale of a country',
      note: 'Indicative figures — confirm against the latest official statistics before publication.',
    },
    sectors: {
      eyebrow: 'Priority Sectors',
      title: 'Where capital meets opportunity',
      subtitle:
        'From the mines of the Kyzylkum to green power and export-ready manufacturing — explore the sectors driving Navoi forward.',
      explore: 'Explore sector',
    },
    projects: {
      eyebrow: 'Flagship Projects',
      title: 'Landmark projects & enterprises',
      subtitle:
        'The engines of the regional economy — operating giants and new projects open to partnership and investment.',
      status: {
        operating: 'Operating',
        construction: 'Under construction',
        planned: 'Open for investment',
      },
    },
    freezone: {
      eyebrow: 'Navoi Free Economic Zone',
      title: "Uzbekistan's first Free Economic Zone",
      subtitle:
        'Established in 2008 beside an intercontinental airport, the Navoi FEZ offers tax and customs privileges, ready sites and streamlined administration for export-oriented production.',
      benefitsTitle: 'Resident privileges',
      cta: 'Talk to the FEZ team',
    },
    incentives: {
      eyebrow: 'Incentives & Support',
      title: 'A generous, guaranteed framework',
      subtitle:
        'National and regional preferences reduce your entry cost and protect your capital across the life of the project.',
    },
    process: {
      eyebrow: 'One-Stop-Shop',
      title: 'Invest in five clear steps',
      subtitle:
        'Our One Gateway team walks with you from first enquiry to launch — a single point of contact for permits, land, utilities and incentives.',
    },
    opportunities: {
      eyebrow: 'Open Opportunities',
      title: 'Projects seeking investors',
      subtitle:
        'A live shortlist of investment-ready projects across the region. Request the full project passport for any of them.',
      capex: 'Est. investment',
      request: 'Request details',
    },
    contact: {
      eyebrow: 'One Gateway',
      title: 'Start your Navoi project today',
      subtitle:
        'Send us a short note about your idea. Our investment team replies within two business days with next steps and a dedicated project manager.',
      formName: 'Full name',
      formCompany: 'Company',
      formEmail: 'Email',
      formCountry: 'Country',
      formSector: 'Sector of interest',
      formMessage: 'Tell us about your project',
      formSubmit: 'Send enquiry',
      formNote:
        'By sending this form you agree to be contacted by the Navoi investment team regarding your enquiry.',
      directTitle: 'Direct contacts',
      address: 'Navoi city, Navoi Region, Republic of Uzbekistan',
      hours: 'Mon–Fri, 09:00–18:00 (GMT+5)',
      thanks: 'Thank you! Your enquiry has been noted. Our team will be in touch shortly.',
    },
    footer: {
      about:
        'The single gateway to investment in the Navoi region of Uzbekistan — sectors, projects, incentives and support in one place.',
      explore: 'Explore',
      resources: 'Resources',
      guide: 'Investment Guide',
      faq: 'FAQ',
      legal: 'Legal framework',
      contact: 'Contact',
      rights: 'All rights reserved.',
      disclaimer:
        'This is an informational portal. Figures are indicative and should be verified with official sources before making investment decisions.',
    },
    common: {
      learnMore: 'Learn more',
      readMore: 'Read more',
      backToTop: 'Back to top',
    },
  },

  ru: {
    brand: {
      name: 'Invest Navoi',
      region: 'Навоийская область · Узбекистан',
    },
    gov: {
      hokimlik: 'Хокимият Навоийской области',
      department: 'Управление инвестиций, промышленности и торговли',
      republic: 'Республика Узбекистан',
    },
    nav: {
      why: 'Почему Навои',
      sectors: 'Отрасли',
      projects: 'Проекты',
      freezone: 'Свободная зона',
      incentives: 'Льготы',
      process: 'Как инвестировать',
      contact: 'Контакты',
      investNow: 'Инвестировать',
    },
    hero: {
      badge: 'Единое окно для инвестиций',
      titleTop: 'Навоийская область —',
      titleAccent: 'промышленное сердце',
      titleBottom: 'Нового Узбекистана',
      subtitle:
        'Золото, химия, зелёная энергетика и континентальный логистический хаб в центре Центральной Азии. Всё, что нужно инвестору, чтобы изучить, решить и запустить проект в Навои — в одном месте.',
      ctaPrimary: 'Изучить возможности',
      ctaSecondary: 'Скачать инвест-гайд',
      scroll: 'Листайте вниз',
    },
    why: {
      eyebrow: 'Почему Навои',
      title: 'Создано для крупной промышленности',
      subtitle:
        'Навои сочетает природные ресурсы мирового класса, готовую инфраструктуру и один из самых щедрых режимов льгот в регионе.',
    },
    stats: {
      eyebrow: 'Навои в цифрах',
      title: 'Регион масштаба целой страны',
      note: 'Ориентировочные данные — сверьте с последней официальной статистикой перед публикацией.',
    },
    sectors: {
      eyebrow: 'Приоритетные отрасли',
      title: 'Где капитал встречает возможности',
      subtitle:
        'От рудников Кызылкума до зелёной энергетики и экспортного производства — изучите отрасли, движущие Навои вперёд.',
      explore: 'Подробнее',
    },
    projects: {
      eyebrow: 'Ключевые проекты',
      title: 'Знаковые проекты и предприятия',
      subtitle:
        'Двигатели региональной экономики — действующие гиганты и новые проекты, открытые для партнёрства и инвестиций.',
      status: {
        operating: 'Действует',
        construction: 'Строится',
        planned: 'Открыт для инвестиций',
      },
    },
    freezone: {
      eyebrow: 'СЭЗ «Навои»',
      title: 'Первая свободная экономическая зона Узбекистана',
      subtitle:
        'Созданная в 2008 году рядом с межконтинентальным аэропортом, СЭЗ «Навои» предлагает налоговые и таможенные льготы, готовые площадки и упрощённое администрирование для экспортного производства.',
      benefitsTitle: 'Привилегии резидентов',
      cta: 'Связаться с командой СЭЗ',
    },
    incentives: {
      eyebrow: 'Льготы и поддержка',
      title: 'Щедкие и гарантированные условия',
      subtitle:
        'Национальные и региональные преференции снижают затраты на вход и защищают ваш капитал на всём протяжении проекта.',
    },
    process: {
      eyebrow: 'Единое окно',
      title: 'Инвестируйте за пять понятных шагов',
      subtitle:
        'Наша команда «Единого окна» сопровождает вас от первого обращения до запуска — единая точка контакта по разрешениям, земле, коммуникациям и льготам.',
    },
    opportunities: {
      eyebrow: 'Открытые возможности',
      title: 'Проекты в поиске инвесторов',
      subtitle:
        'Актуальный список готовых к инвестициям проектов области. Запросите полный паспорт по любому из них.',
      capex: 'Оценка инвестиций',
      request: 'Запросить детали',
    },
    contact: {
      eyebrow: 'Единое окно',
      title: 'Начните свой проект в Навои сегодня',
      subtitle:
        'Опишите вашу идею в нескольких словах. Инвестиционная команда ответит в течение двух рабочих дней со следующими шагами и персональным менеджером.',
      formName: 'ФИО',
      formCompany: 'Компания',
      formEmail: 'Эл. почта',
      formCountry: 'Страна',
      formSector: 'Интересующая отрасль',
      formMessage: 'Расскажите о вашем проекте',
      formSubmit: 'Отправить запрос',
      formNote:
        'Отправляя форму, вы соглашаетесь на связь с инвестиционной командой Навои по вашему запросу.',
      directTitle: 'Прямые контакты',
      address: 'г. Навои, Навоийская область, Республика Узбекистан',
      hours: 'Пн–Пт, 09:00–18:00 (GMT+5)',
      thanks: 'Спасибо! Ваш запрос принят. Наша команда скоро свяжется с вами.',
    },
    footer: {
      about:
        'Единый портал для инвестиций в Навоийскую область Узбекистана — отрасли, проекты, льготы и поддержка в одном месте.',
      explore: 'Разделы',
      resources: 'Ресурсы',
      guide: 'Инвест-гайд',
      faq: 'Вопросы и ответы',
      legal: 'Правовая база',
      contact: 'Контакты',
      rights: 'Все права защищены.',
      disclaimer:
        'Это информационный портал. Данные являются ориентировочными; перед принятием решений сверяйтесь с официальными источниками.',
    },
    common: {
      learnMore: 'Подробнее',
      readMore: 'Читать далее',
      backToTop: 'Наверх',
    },
  },

  uz: {
    brand: {
      name: 'Invest Navoi',
      region: "Navoiy viloyati · O'zbekiston",
    },
    gov: {
      hokimlik: 'Navoiy viloyati hokimligi',
      department: 'Investitsiyalar, sanoat va savdo boshqarmasi',
      republic: 'O‘zbekiston Respublikasi',
    },
    nav: {
      why: 'Nega Navoiy',
      sectors: 'Tarmoqlar',
      projects: 'Loyihalar',
      freezone: 'Erkin zona',
      incentives: 'Imtiyozlar',
      process: 'Qanday investitsiya qilish',
      contact: 'Aloqa',
      investNow: 'Investitsiya qilish',
    },
    hero: {
      badge: 'Investitsiya uchun yagona darvoza',
      titleTop: 'Navoiy viloyati —',
      titleAccent: 'Yangi O‘zbekistonning',
      titleBottom: 'sanoat yuragi',
      subtitle:
        'Oltin, kimyo, yashil energetika va Markaziy Osiyo markazidagi qit’alararo logistika markazi. Investorga Navoiyda loyihani o‘rganish, qaror qabul qilish va ishga tushirish uchun kerak bo‘lgan hamma narsa — bir joyda.',
      ctaPrimary: 'Imkoniyatlarni ko‘rish',
      ctaSecondary: 'Investitsiya qo‘llanmasi',
      scroll: 'Pastga suring',
    },
    why: {
      eyebrow: 'Nega Navoiy',
      title: 'Yirik sanoat uchun yaratilgan',
      subtitle:
        'Navoiy jahon darajasidagi tabiiy resurslar, tayyor infratuzilma va mintaqadagi eng qulay imtiyozlar tizimini o‘zida jamlagan.',
    },
    stats: {
      eyebrow: 'Raqamlarda Navoiy',
      title: 'Bir davlat miqyosidagi viloyat',
      note: 'Taxminiy ko‘rsatkichlar — e’lon qilishdan oldin rasmiy statistikaga solishtiring.',
    },
    sectors: {
      eyebrow: 'Ustuvor tarmoqlar',
      title: 'Kapital imkoniyat bilan uchrashadigan joy',
      subtitle:
        'Qizilqum konlaridan yashil energetika va eksportga tayyor ishlab chiqarishgacha — Navoiyni oldinga siljitayotgan tarmoqlarni o‘rganing.',
      explore: 'Tarmoqni ko‘rish',
    },
    projects: {
      eyebrow: 'Yirik loyihalar',
      title: 'Yetakchi loyiha va korxonalar',
      subtitle:
        'Mintaqa iqtisodiyotining harakatlantiruvchi kuchlari — faoliyat yuritayotgan gigantlar va hamkorlik uchun ochiq yangi loyihalar.',
      status: {
        operating: 'Faoliyatda',
        construction: 'Qurilmoqda',
        planned: 'Investitsiya uchun ochiq',
      },
    },
    freezone: {
      eyebrow: 'Navoiy erkin iqtisodiy zonasi',
      title: "O‘zbekistonning birinchi erkin iqtisodiy zonasi",
      subtitle:
        '2008-yilda qit’alararo aeroport yonida tashkil etilgan Navoiy EIZ eksportga yo‘naltirilgan ishlab chiqarish uchun soliq va bojxona imtiyozlari, tayyor maydonlar va soddalashtirilgan boshqaruvni taklif etadi.',
      benefitsTitle: 'Rezident imtiyozlari',
      cta: 'EIZ jamoasi bilan bog‘lanish',
    },
    incentives: {
      eyebrow: 'Imtiyoz va qo‘llab-quvvatlash',
      title: 'Saxovatli va kafolatlangan tizim',
      subtitle:
        'Milliy va hududiy imtiyozlar kirish xarajatlaringizni kamaytiradi va loyiha davomida kapitalingizni himoya qiladi.',
    },
    process: {
      eyebrow: 'Yagona darcha',
      title: 'Besh aniq bosqichda investitsiya qiling',
      subtitle:
        'Yagona darvoza jamoamiz sizni birinchi murojaatdan ishga tushirishgacha kuzatib boradi — ruxsatnoma, yer, kommunikatsiya va imtiyozlar bo‘yicha yagona aloqa nuqtasi.',
    },
    opportunities: {
      eyebrow: 'Ochiq imkoniyatlar',
      title: 'Investor izlayotgan loyihalar',
      subtitle:
        'Viloyat bo‘ylab investitsiyaga tayyor loyihalarning dolzarb ro‘yxati. Har biri bo‘yicha to‘liq loyiha pasportini so‘rang.',
      capex: 'Taxminiy investitsiya',
      request: 'Ma’lumot so‘rash',
    },
    contact: {
      eyebrow: 'Yagona darvoza',
      title: 'Navoiydagi loyihangizni bugun boshlang',
      subtitle:
        'G‘oyangiz haqida qisqacha yozing. Investitsiya jamoamiz ikki ish kuni ichida keyingi qadamlar va shaxsiy loyiha menejeri bilan javob beradi.',
      formName: 'To‘liq ism',
      formCompany: 'Kompaniya',
      formEmail: 'Email',
      formCountry: 'Davlat',
      formSector: 'Qiziqish tarmog‘i',
      formMessage: 'Loyihangiz haqida yozing',
      formSubmit: 'Murojaat yuborish',
      formNote:
        'Ushbu shaklni yuborish orqali siz murojaatingiz yuzasidan Navoiy investitsiya jamoasi bilan bog‘lanishga rozilik bildirasiz.',
      directTitle: 'To‘g‘ridan-to‘g‘ri aloqa',
      address: 'Navoiy shahri, Navoiy viloyati, O‘zbekiston Respublikasi',
      hours: 'Dush–Jum, 09:00–18:00 (GMT+5)',
      thanks: 'Rahmat! Murojaatingiz qabul qilindi. Jamoamiz tez orada bog‘lanadi.',
    },
    footer: {
      about:
        'O‘zbekistonning Navoiy viloyasiga investitsiya uchun yagona darvoza — tarmoqlar, loyihalar, imtiyozlar va qo‘llab-quvvatlash bir joyda.',
      explore: 'Bo‘limlar',
      resources: 'Resurslar',
      guide: 'Investitsiya qo‘llanmasi',
      faq: 'Savol-javob',
      legal: 'Huquqiy asos',
      contact: 'Aloqa',
      rights: 'Barcha huquqlar himoyalangan.',
      disclaimer:
        'Bu axborot portali. Ko‘rsatkichlar taxminiy; qaror qabul qilishdan oldin rasmiy manbalarga solishtiring.',
    },
    common: {
      learnMore: 'Batafsil',
      readMore: 'Ko‘proq',
      backToTop: 'Yuqoriga',
    },
  },
}
