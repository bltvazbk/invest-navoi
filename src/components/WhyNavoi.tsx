import { useLanguage } from '../i18n/LanguageContext'
import { advantages, L } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function WhyNavoi() {
  const { t, lang } = useLanguage()

  return (
    <section id="why" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('why.eyebrow')}
          title={t('why.title')}
          subtitle={t('why.subtitle')}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <div className="glass-card glass-card-hover h-full p-7">
                <span className="mb-5 inline-grid h-12 w-12 place-items-center rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-400">
                  <Icon name={adv.icon} size={24} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{L(adv.title, lang)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{L(adv.text, lang)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
