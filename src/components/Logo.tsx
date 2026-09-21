import { useLanguage } from '../i18n/LanguageContext'

export function Logo({ compact = false }: { compact?: boolean }) {
  const { t } = useLanguage()
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={t('brand.name')}>
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 font-display text-lg font-extrabold text-navy-950 shadow-lg shadow-gold-500/20">
        N
        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/30" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-heading">
            Invest<span className="text-accenttext">Navoi</span>
          </span>
          <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
            {t('brand.region')}
          </span>
        </span>
      )}
    </a>
  )
}
