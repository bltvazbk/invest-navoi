import { useLanguage } from '../i18n/LanguageContext'
import { L, processSteps } from '../data/content'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Process() {
  const { t, lang } = useLanguage()

  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-white/10 bg-navy-900/40 py-20 md:py-28"
    >
      <div className="container-wide">
        <SectionHeading
          center
          eyebrow={t('process.eyebrow')}
          title={t('process.title')}
          subtitle={t('process.subtitle')}
        />

        <div className="relative mt-16">
          {/* Connector line behind the step numbers (desktop only) */}
          <div className="absolute inset-x-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 80} className="relative text-center lg:text-left">
                <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-500 font-display text-xl font-extrabold text-navy-950 shadow-lg shadow-gold-500/20 lg:mx-0">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-white">{L(step.title, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{L(step.text, lang)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
