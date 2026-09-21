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
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                    {L(opp.sector, lang)}
                  </span>
                  <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-[11px] font-semibold text-sky-400">
                    {t('projects.status.planned')}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold leading-snug text-white">
                  {L(opp.title, lang)}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {L(opp.text, lang)}
                </p>
                <div className="mt-5 flex items-end justify-between border-t border-white/10 pt-4">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500">
                      {t('opportunities.capex')}
                    </div>
                    <div className="font-display text-lg font-bold text-gold-400">{opp.capex}</div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-400 transition hover:text-gold-300"
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
