import { useLanguage } from '../i18n/LanguageContext'
import { freeZoneBenefits, L } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function FreeZone() {
  const { t, lang } = useLanguage()

  return (
    <section id="freezone" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-bgalt" />
        <div className="pattern-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" />
      </div>

      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="section-eyebrow">
              <Icon name="shield" size={14} />
              {t('freezone.eyebrow')}
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="section-title mt-4">{t('freezone.title')}</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-4 text-base leading-relaxed text-muted">{t('freezone.subtitle')}</p>
          </Reveal>
          <Reveal delay={180}>
            <a href="#contact" className="btn-primary mt-8">
              {t('freezone.cta')}
              <Icon name="arrow-right" size={16} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="glass-card p-8">
            <h3 className="mb-5 font-display text-lg font-bold text-heading">
              {t('freezone.benefitsTitle')}
            </h3>
            <ul className="space-y-4">
              {freeZoneBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/15 text-accenttext">
                    <Icon name="check" size={14} strokeWidth={2.4} />
                  </span>
                  <span className="text-sm leading-relaxed text-body">{L(benefit, lang)}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
