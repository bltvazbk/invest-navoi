import { useLanguage } from '../i18n/LanguageContext'
import { L, LINKS, news } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const LOCALES: Record<string, string> = { en: 'en-US', ru: 'ru-RU', uz: 'uz-UZ' }

export function News() {
  const { t, lang } = useLanguage()

  const formatDate = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString(LOCALES[lang] ?? 'en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    } catch {
      return iso
    }
  }

  return (
    <section id="news" className="border-y border-line bg-bgalt py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t('news.eyebrow')}
            title={t('news.title')}
            subtitle={t('news.subtitle')}
          />
          <Reveal delay={120}>
            <a
              href={LINKS.govPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0"
            >
              {t('news.all')}
              <Icon name="arrow-right" size={16} />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {news.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover group flex h-full flex-col overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden border-b border-line">
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-semibold text-navy-950">
                    {L(item.tag, lang)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-1.5 text-xs text-subtle">
                    <Icon name="clock" size={12} />
                    {formatDate(item.date)}
                  </div>
                  <h3 className="mt-2 font-display text-base font-bold leading-snug text-heading">
                    {L(item.title, lang)}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {L(item.excerpt, lang)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accenttext">
                    {t('common.readMore')}
                    <Icon name="arrow-right" size={14} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
