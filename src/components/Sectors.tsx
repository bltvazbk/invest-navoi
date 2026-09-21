import { useLanguage } from '../i18n/LanguageContext'
import { L, sectors } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Sectors() {
  const { t, lang } = useLanguage()

  return (
    <section id="sectors" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-navy-900/40" />
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('sectors.eyebrow')}
          title={t('sectors.title')}
          subtitle={t('sectors.subtitle')}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector, i) => (
            <Reveal key={sector.id} delay={(i % 3) * 80}>
              <a
                href="#opportunities"
                className="glass-card glass-card-hover group flex h-full flex-col p-7"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-gold-400/90 to-gold-600/90 text-navy-950 shadow-lg shadow-gold-500/10">
                    <Icon name={sector.icon} size={24} strokeWidth={2} />
                  </span>
                  <Icon
                    name="arrow-right"
                    size={18}
                    className="text-slate-600 transition group-hover:translate-x-1 group-hover:text-gold-400"
                  />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{L(sector.title, lang)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {L(sector.text, lang)}
                </p>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wider text-gold-400/80">
                  {t('sectors.explore')}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
