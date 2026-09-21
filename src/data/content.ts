import type { Lang } from '../i18n/translations'

// ─────────────────────────────────────────────────────────────
// CONTENT DATA — the single place to edit the portal's substance.
// Every text field is localised as { en, ru, uz }.
// Add a sector/project/opportunity by copying an existing object.
//
// ⚠️  NUMBERS ARE INDICATIVE. Replace stat values, capex estimates
//     and counts with official Navoi/Uzbekistan figures before the
//     site goes live.
// ─────────────────────────────────────────────────────────────

export interface Localized {
  en: string
  ru: string
  uz: string
}

/** Pick the active language from a Localized field, falling back to English. */
export const L = (field: Localized, lang: Lang): string => field[lang] || field.en

// Official external resources
export const LINKS = {
  govPortal: 'https://gov.uz/oz/navoi',
  map: 'https://niim.vercel.app',
  trustPhone: '+998 79 220 10 20',
  deptPhone: '+998 79 229 62 23',
  specialistPhone: '+998 99 079 32 53',
}

export type ProjectStatus = 'operating' | 'construction' | 'planned'

export interface Stat {
  value: string
  label: Localized
}

export interface Advantage {
  icon: string
  title: Localized
  text: Localized
}

export interface Sector {
  id: string
  icon: string
  title: Localized
  text: Localized
}

export interface Project {
  icon: string
  status: ProjectStatus
  title: Localized
  sector: Localized
  text: Localized
  /** Optional photo. Drop a file at this path in public/ to show it;
   *  if missing/undefined a themed gradient placeholder is shown. */
  image?: string
}

export interface Opportunity {
  sector: Localized
  title: Localized
  capex: string
  text: Localized
}

export interface Incentive {
  icon: string
  title: Localized
  text: Localized
}

export interface ProcessStep {
  title: Localized
  text: Localized
}

// ── Headline statistics ──────────────────────────────────────
export const stats: Stat[] = [
  {
    value: '111,076 km²',
    label: { en: 'Territory — largest region of Uzbekistan', ru: 'Территория — крупнейший регион Узбекистана', uz: 'Hudud — O‘zbekistonning eng yirik viloyati' },
  },
  {
    value: '1.1 M+',
    label: { en: 'Population', ru: 'Население', uz: 'Aholi' },
  },
  {
    value: '11',
    label: { en: 'Districts', ru: 'Районов', uz: 'Tuman' },
  },
  {
    value: '42,223 ha',
    label: { en: 'Free land bank for investors', ru: 'Свободный земельный банк', uz: 'Investorlar uchun bo‘sh yer fondi' },
  },
  {
    value: '744',
    label: { en: 'Mapped investment plots', ru: 'Инвестплощадок на карте', uz: 'Xaritadagi investitsiya maydoni' },
  },
  {
    value: 'Top-5',
    label: { en: 'Global gold producer (NMMC)', ru: 'Мировой производитель золота (НГМК)', uz: 'Jahon oltin ishlab chiqaruvchisi (NKMK)' },
  },
  {
    value: '2008',
    label: { en: "Uzbekistan's first Free Economic Zone", ru: 'Первая СЭЗ Узбекистана', uz: 'O‘zbekistonning birinchi EIZ' },
  },
  {
    value: '24/7',
    label: { en: 'Intercontinental air-cargo hub', ru: 'Межконтинентальный авиахаб', uz: 'Qit’alararo yuk aviamarkazi' },
  },
]

// ── Why Navoi — competitive advantages ───────────────────────
export const advantages: Advantage[] = [
  {
    icon: 'map-pin',
    title: { en: 'Strategic location', ru: 'Стратегическое положение', uz: 'Strategik joylashuv' },
    text: {
      en: 'At the centre of Uzbekistan and Central Asia, linked by road, rail and intercontinental air routes.',
      ru: 'В центре Узбекистана и Центральной Азии, связан авто-, ж/д и межконтинентальными авиамаршрутами.',
      uz: 'O‘zbekiston va Markaziy Osiyo markazida; avto, temir yo‘l va qit’alararo havo yo‘llari bilan bog‘langan.',
    },
  },
  {
    icon: 'gem',
    title: { en: 'World-class resources', ru: 'Ресурсы мирового класса', uz: 'Jahon darajasidagi resurslar' },
    text: {
      en: 'Gold, uranium, phosphorites, marble, natural gas and rare metals across the Kyzylkum desert.',
      ru: 'Золото, уран, фосфориты, мрамор, природный газ и редкие металлы в пустыне Кызылкум.',
      uz: 'Qizilqum sahrosida oltin, uran, fosforit, marmar, tabiiy gaz va nodir metallar.',
    },
  },
  {
    icon: 'shield',
    title: { en: 'Free Economic Zone', ru: 'Свободная экономическая зона', uz: 'Erkin iqtisodiy zona' },
    text: {
      en: 'Tax and customs privileges plus ready sites in the country’s first and most established FEZ.',
      ru: 'Налоговые и таможенные льготы и готовые площадки в первой и самой развитой СЭЗ страны.',
      uz: 'Mamlakatning birinchi va eng rivojlangan EIZ’sida soliq-bojxona imtiyozlari va tayyor maydonlar.',
    },
  },
  {
    icon: 'bolt',
    title: { en: 'Ready infrastructure', ru: 'Готовая инфраструктура', uz: 'Tayyor infratuzilma' },
    text: {
      en: 'Power, gas, water and the cargo terminal of Navoi International Airport already in place.',
      ru: 'Электроэнергия, газ, вода и грузовой терминал аэропорта Навои уже в наличии.',
      uz: 'Elektr, gaz, suv va Navoiy xalqaro aeroporti yuk terminali allaqachon mavjud.',
    },
  },
  {
    icon: 'users',
    title: { en: 'Young, skilled workforce', ru: 'Молодые квалифицированные кадры', uz: 'Yosh, malakali kadrlar' },
    text: {
      en: 'Deep industrial traditions and a young population trained for heavy and processing industry.',
      ru: 'Глубокие промышленные традиции и молодое население, подготовленное для тяжёлой промышленности.',
      uz: 'Chuqur sanoat an’analari va og‘ir hamda qayta ishlash sanoatiga tayyorlangan yosh aholi.',
    },
  },
  {
    icon: 'sparkles',
    title: { en: 'One Gateway support', ru: 'Поддержка «одного окна»', uz: 'Yagona darvoza qo‘llab-quvvatlashi' },
    text: {
      en: 'A single team handles permits, land and incentives — from first enquiry to production launch.',
      ru: 'Единая команда занимается разрешениями, землёй и льготами — от заявки до запуска производства.',
      uz: 'Yagona jamoa ruxsatnoma, yer va imtiyozlar bilan shug‘ullanadi — murojaatdan ishga tushirishgacha.',
    },
  },
]

// ── Priority sectors ─────────────────────────────────────────
export const sectors: Sector[] = [
  {
    id: 'mining',
    icon: 'gem',
    title: { en: 'Mining & Metallurgy', ru: 'Горное дело и металлургия', uz: 'Kon-metallurgiya' },
    text: {
      en: 'Gold, uranium and rare & precious metals from the Kyzylkum, with growing deep-processing and refining capacity.',
      ru: 'Золото, уран, редкие и драгоценные металлы Кызылкума с растущими мощностями глубокой переработки.',
      uz: 'Qizilqumdan oltin, uran, nodir va qimmatbaho metallar; chuqur qayta ishlash quvvatlari ortib bormoqda.',
    },
  },
  {
    id: 'chemical',
    icon: 'flask',
    title: { en: 'Chemical Industry', ru: 'Химическая промышленность', uz: 'Kimyo sanoati' },
    text: {
      en: 'Nitrogen fertilizers and industrial chemicals built on Navoiazot and abundant local gas feedstock.',
      ru: 'Азотные удобрения и промхимия на базе «Навоиазот» и местного газового сырья.',
      uz: 'Navoiyazot va mahalliy gaz xomashyosi asosida azotli o‘g‘itlar va sanoat kimyosi.',
    },
  },
  {
    id: 'energy',
    icon: 'sun',
    title: { en: 'Energy & Green Power', ru: 'Энергетика и зелёная энергия', uz: 'Energetika va yashil energiya' },
    text: {
      en: 'Gas generation alongside large-scale solar and wind — including landmark projects with global developers.',
      ru: 'Газовая генерация вместе с крупными солнечными и ветровыми проектами мировых девелоперов.',
      uz: 'Gaz generatsiyasi bilan bir qatorda yirik quyosh va shamol loyihalari — jahon developerlari bilan.',
    },
  },
  {
    id: 'logistics',
    icon: 'plane',
    title: { en: 'Transport & Logistics', ru: 'Транспорт и логистика', uz: 'Transport va logistika' },
    text: {
      en: 'An intercontinental air-cargo hub, rail corridors and warehousing linking Asia and Europe.',
      ru: 'Межконтинентальный авиахаб, ж/д коридоры и склады, связывающие Азию и Европу.',
      uz: 'Osiyo va Yevropani bog‘lovchi qit’alararo yuk aviamarkazi, temir yo‘l koridorlari va omborlar.',
    },
  },
  {
    id: 'textile',
    icon: 'spool',
    title: { en: 'Textiles & Garments', ru: 'Текстиль и швейная отрасль', uz: 'To‘qimachilik va tikuvchilik' },
    text: {
      en: 'Vertically integrated cotton-to-garment value chains oriented to export markets.',
      ru: 'Вертикально интегрированные цепочки «хлопок — одежда», ориентированные на экспорт.',
      uz: 'Eksportga yo‘naltirilgan «paxtadan tayyor kiyimgacha» vertikal integratsiyalashgan zanjirlar.',
    },
  },
  {
    id: 'materials',
    icon: 'bricks',
    title: { en: 'Building Materials', ru: 'Стройматериалы', uz: 'Qurilish materiallari' },
    text: {
      en: 'Cement, marble, gypsum and glass drawn from rich local mineral and quartz deposits.',
      ru: 'Цемент, мрамор, гипс и стекло из богатых местных минеральных и кварцевых месторождений.',
      uz: 'Boy mahalliy mineral va kvarts konlaridan sement, marmar, gips va oyna.',
    },
  },
  {
    id: 'agriculture',
    icon: 'leaf',
    title: { en: 'Agriculture & Food', ru: 'Сельское хозяйство и пищепром', uz: 'Qishloq xo‘jaligi va oziq-ovqat' },
    text: {
      en: 'Karakul livestock, greenhouses and food processing in an efficient, arid-adapted agro-sector.',
      ru: 'Каракулеводство, теплицы и пищепереработка в эффективном засухоустойчивом агросекторе.',
      uz: 'Qorako‘lchilik, issiqxonalar va oziq-ovqatni qayta ishlash — qurg‘oqchilikka moslashgan agrosektor.',
    },
  },
  {
    id: 'machinery',
    icon: 'gear',
    title: { en: 'Machinery & Electrical', ru: 'Машиностроение и электротехника', uz: 'Mashinasozlik va elektrotexnika' },
    text: {
      en: 'Localised equipment, electrical goods and industrial assembly serving domestic and export demand.',
      ru: 'Локализованное оборудование, электротовары и промсборка для внутреннего и экспортного спроса.',
      uz: 'Ichki va eksport talabini qondiruvchi mahalliylashtirilgan uskuna, elektr tovarlari va yig‘uv.',
    },
  },
  {
    id: 'tourism',
    icon: 'mountain',
    title: { en: 'Tourism', ru: 'Туризм', uz: 'Turizm' },
    text: {
      en: 'The Nurata mountains, desert eco-tourism and the living Silk Road heritage of the region.',
      ru: 'Горы Нурата, пустынный экотуризм и живое наследие Великого шёлкового пути.',
      uz: 'Nurota tog‘lari, sahro ekoturizmi va mintaqaning Buyuk ipak yo‘li merosi.',
    },
  },
]

// ── Flagship projects & enterprises ──────────────────────────
export const projects: Project[] = [
  {
    icon: 'gem',
    status: 'operating',
    image: '/images/projects/nmmc.jpg',
    title: { en: 'Navoi Mining & Metallurgical Combinat', ru: 'Навоийский ГМК', uz: 'Navoiy kon-metallurgiya kombinati' },
    sector: { en: 'Mining & Metallurgy', ru: 'Горное дело', uz: 'Kon-metallurgiya' },
    text: {
      en: 'One of the world’s largest gold producers, operating the Muruntau open-pit mine and modern refining complexes.',
      ru: 'Один из крупнейших в мире производителей золота; карьер Мурунтау и современные аффинажные комплексы.',
      uz: 'Jahonning eng yirik oltin ishlab chiqaruvchilaridan biri; Muruntov karyeri va zamonaviy affinaj majmualari.',
    },
  },
  {
    icon: 'flask',
    status: 'operating',
    image: '/images/projects/navoiazot.jpg',
    title: { en: 'Navoiazot Chemical Complex', ru: 'Химкомплекс «Навоиазот»', uz: 'Navoiyazot kimyo majmuasi' },
    sector: { en: 'Chemical Industry', ru: 'Химия', uz: 'Kimyo' },
    text: {
      en: 'A major producer of ammonia, urea and nitrogen fertilizers supplying agriculture and industry.',
      ru: 'Крупный производитель аммиака, карбамида и азотных удобрений для АПК и промышленности.',
      uz: 'Qishloq xo‘jaligi va sanoat uchun ammiak, karbamid va azotli o‘g‘itlarning yirik ishlab chiqaruvchisi.',
    },
  },
  {
    icon: 'plane',
    status: 'operating',
    image: '/images/projects/airport.jpg',
    title: { en: 'Navoi International Airport', ru: 'Международный аэропорт Навои', uz: 'Navoiy xalqaro aeroporti' },
    sector: { en: 'Logistics', ru: 'Логистика', uz: 'Logistika' },
    text: {
      en: 'An intercontinental cargo and logistics hub connecting Central Asia with Europe and East Asia.',
      ru: 'Межконтинентальный грузовой и логистический хаб, связывающий Центральную Азию с Европой и Азией.',
      uz: 'Markaziy Osiyoni Yevropa va Sharqiy Osiyo bilan bog‘lovchi qit’alararo yuk va logistika markazi.',
    },
  },
  {
    icon: 'sun',
    status: 'operating',
    image: '/images/projects/solar.jpg',
    title: { en: 'Nur Navoi Solar & Wind', ru: 'Солнце и ветер «Нур Навои»', uz: 'Nur Navoiy quyosh va shamoli' },
    sector: { en: 'Green Energy', ru: 'Зелёная энергетика', uz: 'Yashil energetika' },
    text: {
      en: 'Utility-scale renewable power — a pioneer solar plant now expanding with new solar and wind capacity.',
      ru: 'ВИЭ промышленного масштаба — пионерная СЭС, расширяемая новыми солнечными и ветровыми мощностями.',
      uz: 'Sanoat miqyosidagi qayta tiklanuvchi energiya — kashshof QES yangi quyosh va shamol quvvatlari bilan kengaymoqda.',
    },
  },
  {
    icon: 'bolt',
    status: 'operating',
    image: '/images/projects/tpp.jpg',
    title: { en: 'Navoi Thermal Power Plant', ru: 'Навоийская ТЭС', uz: 'Navoiy issiqlik elektr stansiyasi' },
    sector: { en: 'Energy', ru: 'Энергетика', uz: 'Energetika' },
    text: {
      en: 'Combined-cycle gas generation anchoring the region’s industrial power supply.',
      ru: 'Парогазовая генерация — опора промышленного энергоснабжения региона.',
      uz: 'Bug‘-gaz generatsiyasi — mintaqa sanoat energiya ta’minotining tayanchi.',
    },
  },
  {
    icon: 'shield',
    status: 'operating',
    image: '/images/projects/fez.jpg',
    title: { en: 'Navoi Free Economic Zone', ru: 'СЭЗ «Навои»', uz: 'Navoiy erkin iqtisodiy zonasi' },
    sector: { en: 'Manufacturing', ru: 'Производство', uz: 'Ishlab chiqarish' },
    text: {
      en: 'An export-oriented manufacturing cluster beside the airport, with tax privileges and ready plots.',
      ru: 'Экспортно ориентированный производственный кластер у аэропорта с налоговыми льготами и готовыми участками.',
      uz: 'Aeroport yonidagi eksportga yo‘naltirilgan ishlab chiqarish klasteri — soliq imtiyozlari va tayyor uchastkalar bilan.',
    },
  },
]

// ── Open opportunities (projects seeking investors) ──────────
export const opportunities: Opportunity[] = [
  {
    sector: { en: 'Mining', ru: 'Горное дело', uz: 'Kon' },
    title: { en: 'Gold & copper deep-processing plant', ru: 'Завод глубокой переработки золота и меди', uz: 'Oltin va misni chuqur qayta ishlash zavodi' },
    capex: '≈ $250M',
    text: {
      en: 'Value-added refining and products from locally mined ore concentrates.',
      ru: 'Аффинаж и продукция с добавленной стоимостью из местных рудных концентратов.',
      uz: 'Mahalliy ruda konsentratlaridan qo‘shilgan qiymatli affinaj va mahsulotlar.',
    },
  },
  {
    sector: { en: 'Energy', ru: 'Энергетика', uz: 'Energetika' },
    title: { en: 'Kyzylkum wind farm', ru: 'Ветропарк «Кызылкум»', uz: 'Qizilqum shamol elektr stansiyasi' },
    capex: '≈ $180M',
    text: {
      en: 'Greenfield utility-scale wind generation feeding the national grid.',
      ru: 'Новый ветропарк промышленного масштаба с подачей в национальную сеть.',
      uz: 'Milliy tarmoqqa ulanadigan sanoat miqyosidagi yangi shamol elektr stansiyasi.',
    },
  },
  {
    sector: { en: 'Textiles', ru: 'Текстиль', uz: 'To‘qimachilik' },
    title: { en: 'Textile & garment technopark', ru: 'Текстильно-швейный технопарк', uz: 'To‘qimachilik-tikuvchilik texnoparki' },
    capex: '≈ $60M',
    text: {
      en: 'Vertically integrated cotton-to-garment cluster for export.',
      ru: 'Вертикально интегрированный кластер «хлопок — одежда» на экспорт.',
      uz: 'Eksport uchun «paxtadan kiyimgacha» vertikal integratsiyalashgan klaster.',
    },
  },
  {
    sector: { en: 'Building Materials', ru: 'Стройматериалы', uz: 'Qurilish materiallari' },
    title: { en: 'Cement & glass complex', ru: 'Цементно-стекольный комплекс', uz: 'Sement va oyna majmuasi' },
    capex: '≈ $120M',
    text: {
      en: 'New capacity from local limestone and quartz sands.',
      ru: 'Новые мощности на базе местного известняка и кварцевых песков.',
      uz: 'Mahalliy ohaktosh va kvars qumlaridan yangi quvvatlar.',
    },
  },
  {
    sector: { en: 'Logistics', ru: 'Логистика', uz: 'Logistika' },
    title: { en: 'Cold-chain logistics centre', ru: 'Центр холодовой логистики', uz: 'Sovuq zanjir logistika markazi' },
    capex: '≈ $45M',
    text: {
      en: 'Refrigerated warehousing at the Navoi air-cargo hub.',
      ru: 'Рефрижераторные склады при грузовом авиахабе Навои.',
      uz: 'Navoiy yuk aviamarkazida sovutilgan omborxona.',
    },
  },
  {
    sector: { en: 'Tourism', ru: 'Туризм', uz: 'Turizm' },
    title: { en: 'Nurata eco-tourism resort', ru: 'Экокурорт «Нурата»', uz: 'Nurota ekoturizm kurorti' },
    capex: '≈ $30M',
    text: {
      en: 'Sustainable desert resort on a Silk Road heritage circuit.',
      ru: 'Устойчивый пустынный курорт на маршруте наследия Шёлкового пути.',
      uz: 'Ipak yo‘li merosi marshrutidagi barqaror sahro kurorti.',
    },
  },
]

// ── FEZ resident privileges ──────────────────────────────────
export const freeZoneBenefits: Localized[] = [
  { en: 'Exemption from land, property and profit tax during the incentive period', ru: 'Освобождение от налога на землю, имущество и прибыль на льготный период', uz: 'Imtiyoz davrida yer, mulk va foyda solig‘idan ozod etish' },
  { en: 'Customs-duty exemption on imported equipment, raw materials and components', ru: 'Освобождение от таможенных пошлин на оборудование, сырьё и комплектующие', uz: 'Import qilinadigan uskuna, xomashyo va butlovchilarga bojdan ozod etish' },
  { en: 'Free repatriation of profits and guaranteed protection of investments', ru: 'Свободная репатриация прибыли и гарантированная защита инвестиций', uz: 'Foydani erkin repatriatsiya qilish va investitsiyalarning kafolatli himoyasi' },
  { en: 'Ready plots with power, gas, water and road & rail access', ru: 'Готовые участки с электричеством, газом, водой и авто/ж-д доступом', uz: 'Elektr, gaz, suv hamda avto va temir yo‘l bilan ta’minlangan tayyor uchastkalar' },
  { en: 'Simplified customs regime and fast company registration', ru: 'Упрощённый таможенный режим и быстрая регистрация компании', uz: 'Soddalashtirilgan bojxona rejimi va tez kompaniya ro‘yxati' },
  { en: 'A single FEZ administrator supporting every resident', ru: 'Единый администратор СЭЗ, сопровождающий каждого резидента', uz: 'Har bir rezidentni qo‘llab-quvvatlovchi yagona EIZ ma’muri' },
]

// ── Incentives & support ─────────────────────────────────────
export const incentives: Incentive[] = [
  {
    icon: 'shield',
    title: { en: 'Tax holidays', ru: 'Налоговые каникулы', uz: 'Soliq ta’tillari' },
    text: {
      en: 'Multi-year exemption from profit, property and land tax, scaled to investment volume.',
      ru: 'Многолетнее освобождение от налога на прибыль, имущество и землю в зависимости от объёма инвестиций.',
      uz: 'Investitsiya hajmiga qarab foyda, mulk va yer solig‘idan ko‘p yillik ozod etish.',
    },
  },
  {
    icon: 'truck',
    title: { en: 'Customs privileges', ru: 'Таможенные льготы', uz: 'Bojxona imtiyozlari' },
    text: {
      en: 'Duty-free import of equipment, components and raw materials for production.',
      ru: 'Беспошлинный ввоз оборудования, комплектующих и сырья для производства.',
      uz: 'Ishlab chiqarish uchun uskuna, butlovchi va xomashyoni bojsiz olib kirish.',
    },
  },
  {
    icon: 'lock',
    title: { en: 'Investment protection', ru: 'Защита инвестиций', uz: 'Investitsiya himoyasi' },
    text: {
      en: 'State guarantees, free profit repatriation and stability of legal terms.',
      ru: 'Государственные гарантии, свободная репатриация прибыли и стабильность правовых условий.',
      uz: 'Davlat kafolatlari, foydani erkin repatriatsiya qilish va huquqiy shartlar barqarorligi.',
    },
  },
  {
    icon: 'bolt',
    title: { en: 'Subsidised infrastructure', ru: 'Субсидируемая инфраструктура', uz: 'Subsidiyalangan infratuzilma' },
    text: {
      en: 'State co-financing of external utilities, access roads and connections.',
      ru: 'Софинансирование государством внешних сетей, подъездных дорог и подключений.',
      uz: 'Tashqi tarmoqlar, kirish yo‘llari va ulanishlarni davlat tomonidan hammoliyalashtirish.',
    },
  },
  {
    icon: 'bank',
    title: { en: 'Preferential financing', ru: 'Льготное финансирование', uz: 'Imtiyozli moliyalashtirish' },
    text: {
      en: 'Access to state and international development-bank funding lines.',
      ru: 'Доступ к линиям финансирования государства и международных банков развития.',
      uz: 'Davlat va xalqaro taraqqiyot banklari moliyalashtirish liniyalariga kirish.',
    },
  },
  {
    icon: 'sparkles',
    title: { en: 'Sector subsidies', ru: 'Отраслевые субсидии', uz: 'Tarmoq subsidiyalari' },
    text: {
      en: 'Targeted support for exporters, textiles, agriculture and green energy.',
      ru: 'Адресная поддержка экспортёров, текстиля, АПК и зелёной энергетики.',
      uz: 'Eksportchilar, to‘qimachilik, qishloq xo‘jaligi va yashil energetika uchun maqsadli yordam.',
    },
  },
]

// ── One-Stop-Shop process ────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    title: { en: 'Enquiry', ru: 'Заявка', uz: 'Murojaat' },
    text: {
      en: 'Send your project idea through the One Gateway — online, by email or in person.',
      ru: 'Отправьте идею проекта через «единое окно» — онлайн, по почте или лично.',
      uz: 'Loyiha g‘oyangizni yagona darvoza orqali yuboring — onlayn, email yoki shaxsan.',
    },
  },
  {
    title: { en: 'Consultation', ru: 'Консультация', uz: 'Konsultatsiya' },
    text: {
      en: 'A dedicated manager assesses the project and matches sites, sector and incentives.',
      ru: 'Персональный менеджер оценивает проект и подбирает площадки, отрасль и льготы.',
      uz: 'Shaxsiy menejer loyihani baholaydi va maydon, tarmoq va imtiyozlarni tanlaydi.',
    },
  },
  {
    title: { en: 'Agreement', ru: 'Соглашение', uz: 'Kelishuv' },
    text: {
      en: 'Sign an investment agreement with clear, mutual commitments and timelines.',
      ru: 'Подпишите инвестиционное соглашение с чёткими взаимными обязательствами и сроками.',
      uz: 'Aniq o‘zaro majburiyat va muddatlar bilan investitsiya shartnomasini imzolang.',
    },
  },
  {
    title: { en: 'Set-up', ru: 'Оформление', uz: 'Ro‘yxatdan o‘tkazish' },
    text: {
      en: 'Company registration, land, permits and utility connections — handled together.',
      ru: 'Регистрация компании, земля, разрешения и подключения — всё вместе.',
      uz: 'Kompaniya ro‘yxati, yer, ruxsatnoma va ulanishlar — birgalikda hal qilinadi.',
    },
  },
  {
    title: { en: 'Launch', ru: 'Запуск', uz: 'Ishga tushirish' },
    text: {
      en: 'Build, hire and start production — with ongoing after-care from our team.',
      ru: 'Стройте, нанимайте и запускайте производство — с постоянным сопровождением нашей команды.',
      uz: 'Quring, xodim yollang va ishlab chiqarishni boshlang — jamoamiz doimiy hamrohligida.',
    },
  },
]

// ── Department leadership ────────────────────────────────────
// Fill `name` and drop portrait photos into public/images/leaders/.
// Until a name is set, the role card shows the "Full name" placeholder.
export interface Leader {
  role: Localized
  name: Localized
  photo?: string
  phone?: string
  reception?: Localized
}

// Source: official Navoi region government portal (gov.uz/en/navoi/guides).
export const leadership: Leader[] = [
  {
    role: { en: 'Governor of the Navoi Region', ru: 'Хоким Навоийской области', uz: 'Navoiy viloyati hokimi' },
    name: { en: 'Normat Tursunov', ru: 'Нормат Турсунов', uz: 'Normat Tursunov' },
    photo: '/images/leaders/tursunov.jpg',
    phone: '+998 79 229 62 06',
    reception: {
      en: 'Reception: 4th Saturday, 10:00–12:30',
      ru: 'Приём: 4-я суббота, 10:00–12:30',
      uz: 'Qabul: har oy 4-shanba, 10:00–12:30',
    },
  },
  {
    role: {
      en: 'Head of the Department of Investment, Industry and Trade',
      ru: 'Начальник управления инвестиций, промышленности и торговли',
      uz: 'Investitsiyalar, sanoat va savdo boshqarmasi boshlig‘i',
    },
    name: { en: 'Elbek Gafforov', ru: 'Элбек Гаффоров', uz: 'Elbek G‘afforov' },
    photo: '/images/leaders/gafforov.jpg',
    phone: '+998 79 229 62 23',
    reception: {
      en: 'Reception: Wednesday, 08:00–17:00',
      ru: 'Приём: среда, 08:00–17:00',
      uz: 'Qabul: chorshanba, 08:00–17:00',
    },
  },
]

// ── Government services (Davlat xizmatlari) ──────────────────
export interface Service {
  icon: string
  title: Localized
  text: Localized
}

export const services: Service[] = [
  {
    icon: 'shield',
    title: { en: 'Investment agreements', ru: 'Инвестиционные соглашения', uz: 'Investitsiya shartnomalari' },
    text: {
      en: 'Preparation and signing of investment agreements with clear mutual commitments.',
      ru: 'Подготовка и подписание инвестиционных соглашений с чёткими обязательствами.',
      uz: 'Aniq o‘zaro majburiyatli investitsiya shartnomalarini tayyorlash va imzolash.',
    },
  },
  {
    icon: 'map-pin',
    title: { en: 'Land allocation', ru: 'Выделение земли', uz: 'Yer ajratish' },
    text: {
      en: 'Selection and allocation of ready plots with utilities and access roads.',
      ru: 'Подбор и выделение готовых участков с коммуникациями и подъездами.',
      uz: 'Kommunikatsiya va yo‘llarga ega tayyor uchastkalarni tanlash va ajratish.',
    },
  },
  {
    icon: 'check',
    title: { en: 'Permits & licences', ru: 'Разрешения и лицензии', uz: 'Ruxsat va litsenziyalar' },
    text: {
      en: 'Single-window support for construction, environmental and sector permits.',
      ru: 'Сопровождение по строительным, экологическим и отраслевым разрешениям.',
      uz: 'Qurilish, ekologik va tarmoq ruxsatnomalari bo‘yicha yagona darcha yordami.',
    },
  },
  {
    icon: 'bank',
    title: { en: 'Incentives & subsidies', ru: 'Льготы и субсидии', uz: 'Imtiyoz va subsidiyalar' },
    text: {
      en: 'Applications for tax holidays, customs privileges and sector subsidies.',
      ru: 'Оформление налоговых каникул, таможенных льгот и отраслевых субсидий.',
      uz: 'Soliq ta’tili, bojxona imtiyozlari va tarmoq subsidiyalarini rasmiylashtirish.',
    },
  },
  {
    icon: 'building',
    title: { en: 'Company registration', ru: 'Регистрация компании', uz: 'Kompaniya ro‘yxati' },
    text: {
      en: 'Fast company registration and residency in the Free Economic Zone.',
      ru: 'Быстрая регистрация компании и получение статуса резидента СЭЗ.',
      uz: 'Kompaniyani tez ro‘yxatdan o‘tkazish va EIZ rezidentligini rasmiylashtirish.',
    },
  },
  {
    icon: 'bolt',
    title: { en: 'Utility connections', ru: 'Подключение к сетям', uz: 'Tarmoqlarga ulanish' },
    text: {
      en: 'Connection to power, gas, water and telecoms, with state co-financing.',
      ru: 'Подключение к электро-, газо-, водо- и телеком-сетям при софинансировании.',
      uz: 'Elektr, gaz, suv va aloqa tarmoqlariga davlat hammoliyasi bilan ulanish.',
    },
  },
]

// ── News — real items sourced from spot.uz / gazeta.uz ──────
export interface NewsItem {
  date: string
  image: string
  tag: Localized
  title: Localized
  excerpt: Localized
  link: string
}

export const news: NewsItem[] = [
  {
    date: '2026-02-11',
    image: '/images/news/news1.jpg',
    link: 'https://www.spot.uz/oz/2026/02/11/navoi-cooperation',
    tag: { en: 'Investment', ru: 'Инвестиции', uz: 'Investitsiya' },
    title: {
      en: 'Navoi to attract $4.2 billion in investment in 2026',
      ru: 'В 2026 году Навои привлечёт $4,2 млрд инвестиций',
      uz: 'Navoiyga 2026-yilda 4,2 mlrd dollar investitsiya jalb etiladi',
    },
    excerpt: {
      en: 'The region aims to attract $4.2 billion in foreign investment and lift exports to $1.5 billion in 2026.',
      ru: 'Регион намерен привлечь $4,2 млрд иностранных инвестиций и довести экспорт до $1,5 млрд в 2026 году.',
      uz: 'Viloyat 2026-yilda 4,2 mlrd dollar xorijiy investitsiya jalb qilib, eksportni 1,5 mlrd dollarga yetkazishni maqsad qilgan.',
    },
  },
  {
    date: '2026-02-12',
    image: '/images/news/news2.jpg',
    link: 'https://www.gazeta.uz/oz/2026/02/12/navoi/',
    tag: { en: 'Industry', ru: 'Промышленность', uz: 'Sanoat' },
    title: {
      en: 'Granite industrial park and stone processing to be set up in Nurata',
      ru: 'В Нуратинском районе создадут гранитный индустриальный парк',
      uz: 'Nurota tumanida granit sanoat parki va tosh qayta ishlash tashkil etiladi',
    },
    excerpt: {
      en: 'A decorative-stone cluster and a polished-stone market will be built on a 50-hectare site.',
      ru: 'На участке в 50 га построят кластер декоративного камня и рынок полированного камня.',
      uz: '50 gektar maydonda dekorativ toshlarni qayta ishlash klasteri va sayqallangan tosh bozori barpo etiladi.',
    },
  },
  {
    date: '2026-02-02',
    image: '/images/news/news3.jpg',
    link: 'https://www.gazeta.uz/oz/2026/02/02/dangerous-waste/',
    tag: { en: 'Ecology', ru: 'Экология', uz: 'Ekologiya' },
    title: {
      en: 'A $265M hazardous-waste recycling complex to be built in Navoi',
      ru: 'В Навои построят комплекс переработки опасных отходов за $265 млн',
      uz: 'Navoiyda 265 mln dollarlik xavfli chiqindilarni qayta ishlash majmuasi quriladi',
    },
    excerpt: {
      en: 'The project will be implemented in three phases between 2026 and 2046.',
      ru: 'Проект будет реализован в три этапа в 2026–2046 годах.',
      uz: 'Loyiha 2026–2046-yillarda uch bosqichda amalga oshiriladi.',
    },
  },
]
