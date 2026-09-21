import { useLanguage } from '../i18n/LanguageContext'
import { L, stats } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

// Four headline cards drawn from the shared stats data.
const HERO_CARDS = [stats[2], stats[3], stats[0], stats[1]]

export function Hero() {
  const { t, lang } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-[120px]">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-bgalt via-bg to-bg" />
        <div className="pattern-grid absolute inset-0 opacity-60" />
        <div className="absolute -right-32 top-10 h-[520px] w-[520px] rounded-full bg-gold-500/20 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-500/10 blur-[120px]" />
        {/* faint geometric ornament */}
        <svg
          className="absolute right-[-60px] top-1/2 hidden -translate-y-1/2 text-gold-500/10 lg:block"
          width="640"
          height="640"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <rect
              key={i}
              x={100 - (i + 1) * 15}
              y={100 - (i + 1) * 15}
              width={(i + 1) * 30}
              height={(i + 1) * 30}
              transform={`rotate(${i * 15} 100 100)`}
            />
          ))}
        </svg>
      </div>

      <div className="container-wide grid items-center gap-14 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* Left: message */}
        <div>
          <Reveal>
            <span className="section-eyebrow">
              <Icon name="sparkles" size={14} />
              {t('hero.badge')}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-heading sm:text-5xl lg:text-6xl">
              {t('hero.titleTop')}
              <br />
              <span className="text-gradient-gold">{t('hero.titleAccent')}</span>
              <br />
              {t('hero.titleBottom')}
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t('hero.subtitle')}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#sectors" className="btn-primary">
                {t('hero.ctaPrimary')}
                <Icon name="arrow-right" size={16} />
              </a>
              <a href="#contact" className="btn-secondary">
                <Icon name="download" size={16} />
                {t('hero.ctaSecondary')}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right: stat cluster */}
        <Reveal delay={200} className="grid grid-cols-2 gap-4 sm:gap-5">
          {HERO_CARDS.map((stat, i) => (
            <div
              key={i}
              className={`glass-card glass-card-hover p-5 sm:p-6 ${i % 2 === 0 ? 'sm:translate-y-3' : ''}`}
            >
              <div className="font-display text-2xl font-extrabold text-accenttext sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs leading-snug text-muted sm:text-sm">
                {L(stat.label, lang)}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
