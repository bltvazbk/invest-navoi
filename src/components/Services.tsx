import { useLanguage } from '../i18n/LanguageContext'
import { L, services } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Services() {
  const { t, lang } = useLanguage()

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          subtitle={t('services.subtitle')}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <a
                href="#contact"
                className="glass-card glass-card-hover group flex h-full items-start gap-4 p-7"
              >
                <span className="inline-grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-navy-950 shadow-lg shadow-gold-500/10">
                  <Icon name={service.icon} size={22} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-heading">
                    {L(service.title, lang)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{L(service.text, lang)}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
