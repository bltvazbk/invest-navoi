import { useLanguage } from '../i18n/LanguageContext'
import { Logo } from './Logo'

const EXPLORE = [
  { id: 'why', key: 'nav.why' },
  { id: 'sectors', key: 'nav.sectors' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'freezone', key: 'nav.freezone' },
  { id: 'incentives', key: 'nav.incentives' },
  { id: 'process', key: 'nav.process' },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="container-wide py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-sm lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">{t('footer.about')}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t('footer.explore')}</h4>
            <ul className="mt-4 space-y-2.5">
              {EXPLORE.map((e) => (
                <li key={e.id}>
                  <a
                    href={`#${e.id}`}
                    className="text-sm text-slate-400 transition hover:text-gold-400"
                  >
                    {t(e.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t('footer.contact')}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <a href="mailto:info@investnavoi.com" className="transition hover:text-gold-400">
                  info@investnavoi.com
                </a>
              </li>
              <li>{t('contact.address')}</li>
              <li>{t('contact.hours')}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-slate-500">
            © {year} InvestNavoi. {t('footer.rights')}
          </p>
          <p className="max-w-xl text-xs text-slate-600 md:text-right">{t('footer.disclaimer')}</p>
        </div>
      </div>
    </footer>
  )
}
