import { useLanguage } from '../i18n/LanguageContext'
import { LINKS } from '../data/content'
import { Icon } from './Icon'
import { Logo } from './Logo'
import { UzFlag } from './UzFlag'

const EXPLORE = [
  { id: 'government', key: 'nav.government' },
  { id: 'why', key: 'nav.why' },
  { id: 'sectors', key: 'nav.sectors' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'map', key: 'nav.map' },
  { id: 'freezone', key: 'nav.freezone' },
  { id: 'incentives', key: 'nav.incentives' },
  { id: 'process', key: 'nav.process' },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-wide py-14">
        {/* Official government attribution */}
        <div className="mb-12 flex flex-col gap-6 rounded-2xl border border-line bg-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/images/emblem.svg"
              alt={t('gov.republic')}
              className="h-14 w-auto shrink-0"
              width={53}
              height={56}
            />
            <div>
              <div className="font-display text-base font-bold text-heading">
                {t('gov.hokimlik')}
              </div>
              <div className="text-sm text-muted">{t('gov.department')}</div>
              <div className="mt-0.5 text-xs text-subtle">{t('gov.republic')}</div>
            </div>
          </div>
          <UzFlag className="h-9 w-auto rounded ring-1 ring-line" />
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="max-w-sm lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{t('footer.about')}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-heading">{t('footer.explore')}</h4>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE.map((e) => (
                <li key={e.id}>
                  <a
                    href={`#${e.id}`}
                    className="text-sm text-muted transition hover:text-accenttext"
                  >
                    {t(e.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-heading">{t('footer.resources')}</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={LINKS.govPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accenttext"
                >
                  {t('government.official')}
                  <Icon name="arrow-right" size={13} />
                </a>
              </li>
              <li>
                <a
                  href={LINKS.map}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accenttext"
                >
                  {t('nav.map')} · NIIM
                  <Icon name="arrow-right" size={13} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-heading">{t('footer.contact')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted">
              <li>
                <a href="mailto:info@investnavoi.com" className="transition hover:text-accenttext">
                  info@investnavoi.com
                </a>
              </li>
              <li>
                <a
                  href={`tel:${LINKS.trustPhone.replace(/\s/g, '')}`}
                  className="transition hover:text-accenttext"
                >
                  {LINKS.trustPhone} (1066)
                </a>
              </li>
              <li>{t('contact.address')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-subtle">
            © {year} InvestNavoi. {t('footer.rights')}
          </p>
          <p className="max-w-xl text-xs text-subtle md:text-right">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  )
}
