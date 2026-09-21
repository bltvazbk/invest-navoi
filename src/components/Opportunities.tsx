import { useLanguage } from '../i18n/LanguageContext'
import { L, opportunities } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Opportunities() {
  const { t, lang } = useLanguage()

  return (
    <section id="opportunities" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('opportunities.eyebrow')}
          title={t('opportunities.title')}
          subtitle={t('opportunities.subtitle')}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opp, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="glass-card glass-card-hover flex h-full flex-col p-7">
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full border border-line bg-surface-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-body">
                    {L(opp.sector, lang)}
                  </span>
                  <span className="rounded-full border border-sky-400/30 bg-sky-400/15 px-3 py-1 text-[11px] font-semibold text-sky-500">
                    {t('projects.status.planned')}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-heading">
                  {L(opp.title, lang)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {L(opp.text, lang)}
                </p>
                <div className="mt-5 flex items-end justify-between border-t border-line pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-subtle">
                      {t('opportunities.capex')}
                    </div>
                    <div className="font-display text-lg font-bold text-accenttext">{opp.capex}</div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-accenttext transition hover:text-gold-500"
                  >
                    {t('opportunities.request')}
                    <Icon name="arrow-right" size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
