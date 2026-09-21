import { useLanguage } from '../i18n/LanguageContext'
import { L, stats } from '../data/content'
import { Reveal } from './Reveal'

export function Stats() {
  const { t, lang } = useLanguage()

  return (
    <section className="border-y border-white/10 bg-navy-900/50">
      <div className="container-wide py-14 md:py-16">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            {t('stats.eyebrow')}
          </span>
          <h2 className="mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">
            {t('stats.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat, i) => (
            <Reveal
              key={i}
              delay={i * 60}
              className="bg-navy-900/60 p-6 text-center transition hover:bg-navy-800/60"
            >
              <div className="font-display text-2xl font-extrabold text-gold-400 lg:text-[1.7rem]">
                {stat.value}
              </div>
              <div className="mt-2 text-xs leading-snug text-slate-400">{L(stat.label, lang)}</div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-center text-xs text-slate-500">{t('stats.note')}</p>
      </div>
    </section>
  )
}
