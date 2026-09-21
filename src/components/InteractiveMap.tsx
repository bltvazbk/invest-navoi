import { useLanguage } from '../i18n/LanguageContext'
import { LINKS } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

// Embeds the NIIM (Navoi Investment Intelligence Map) app. If the host blocks
// framing, the "Open the full map" buttons still take visitors to the live app.
export function InteractiveMap() {
  const { t } = useLanguage()

  return (
    <section id="map" className="relative overflow-hidden border-y border-line bg-bgalt py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={t('map.eyebrow')}
            title={t('map.title')}
            subtitle={t('map.subtitle')}
          />
          <Reveal delay={120}>
            <a
              href={LINKS.map}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              {t('map.open')}
              <Icon name="arrow-right" size={16} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-line bg-navy-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-line bg-surface px-4 py-2.5">
              <div className="flex items-center gap-2 text-xs font-medium text-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                NIIM · niim.vercel.app
              </div>
              <a
                href={LINKS.map}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-accenttext transition hover:text-gold-500"
              >
                {t('map.open')}
                <Icon name="arrow-right" size={13} />
              </a>
            </div>
            <div className="relative aspect-[16/10] w-full bg-navy-950 sm:aspect-[16/9]">
              <iframe
                src={LINKS.map}
                title="Navoi Investment Intelligence Map"
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                allow="fullscreen; geolocation"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
