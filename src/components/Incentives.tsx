import { useLanguage } from '../i18n/LanguageContext'
import { incentives, L } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Incentives() {
  const { t, lang } = useLanguage()

  return (
    <section id="incentives" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('incentives.eyebrow')}
          title={t('incentives.title')}
          subtitle={t('incentives.subtitle')}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {incentives.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="glass-card glass-card-hover flex h-full items-start gap-4 p-7">
                <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-accenttext">
                  <Icon name={item.icon} size={22} />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-heading">
                    {L(item.title, lang)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{L(item.text, lang)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
