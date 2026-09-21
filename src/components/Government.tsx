import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { L, LINKS, leadership, type Leader } from '../data/content'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

function LeaderCard({ leader }: { leader: Leader }) {
  const { lang } = useLanguage()
  const [failed, setFailed] = useState(false)
  const showImg = leader.photo && !failed

  return (
    <div className="glass-card flex items-center gap-4 p-4 sm:p-5">
      <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl border border-line bg-bgalt sm:h-28 sm:w-24">
        <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-navy-700 to-navy-950 text-gold-500/50">
          <Icon name="users" size={28} />
        </div>
        {showImg && (
          <img
            src={leader.photo}
            alt={L(leader.name, lang)}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        )}
      </div>
      <div className="min-w-0">
        <div className="font-display text-base font-bold text-heading">{L(leader.name, lang)}</div>
        <div className="mt-0.5 text-xs font-medium leading-snug text-accenttext">
          {L(leader.role, lang)}
        </div>
        {leader.reception && (
          <div className="mt-2 flex items-center gap-1.5 text-[11px] text-subtle">
            <Icon name="clock" size={12} />
            {L(leader.reception, lang)}
          </div>
        )}
        {leader.phone && (
          <a
            href={`tel:${leader.phone.replace(/\s/g, '')}`}
            className="mt-1 flex items-center gap-1.5 text-[11px] text-muted transition hover:text-accenttext"
          >
            <Icon name="phone" size={12} />
            {leader.phone}
          </a>
        )}
      </div>
    </div>
  )
}

export function Government() {
  const { t } = useLanguage()

  return (
    <section id="government" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t('government.eyebrow')}
          title={t('government.title')}
          subtitle={t('government.subtitle')}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* About the department */}
          <Reveal>
            <div className="glass-card h-full p-8">
              <div className="flex items-center gap-4">
                <img
                  src="/images/emblem.png"
                  alt={t('gov.republic')}
                  className="h-16 w-auto shrink-0"
                  width={60}
                  height={64}
                />
                <div>
                  <div className="font-display text-lg font-bold text-heading">
                    {t('gov.hokimlik')}
                  </div>
                  <div className="text-sm text-muted">{t('gov.department')}</div>
                </div>
              </div>

              <h3 className="mt-6 font-display text-base font-bold text-heading">
                {t('government.aboutTitle')}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t('government.aboutText')}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={LINKS.govPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Icon name="globe" size={16} />
                  {t('government.official')}
                </a>
                <a
                  href={`tel:${LINKS.trustPhone.replace(/\s/g, '')}`}
                  className="btn inline-flex items-center gap-2 border border-line bg-surface-2 text-heading hover:bg-surface"
                >
                  <Icon name="phone" size={16} className="text-accenttext" />
                  {t('government.trustLine')}: {LINKS.trustPhone} (1066)
                </a>
              </div>
            </div>
          </Reveal>

          {/* Leadership */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col">
              <h3 className="mb-4 font-display text-base font-bold text-heading">
                {t('government.leadershipTitle')}
              </h3>
              <div className="flex flex-1 flex-col justify-center gap-4">
                {leadership.map((leader, i) => (
                  <LeaderCard key={i} leader={leader} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
