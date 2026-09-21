import { useLanguage } from '../i18n/LanguageContext'

// Yandex Maps embed centred on the department's address in Navoi city.
// Adjust the ll (lon,lat) / pt marker coordinates for pinpoint accuracy.
const YANDEX_SRC =
  'https://yandex.com/map-widget/v1/?ll=65.3792%2C40.0844&z=15&pt=65.3792%2C40.0844%2Cpm2rdm'

export function LocationMap() {
  const { t } = useLanguage()
  return (
    <div className="mt-12 overflow-hidden rounded-2xl border border-line shadow-lg">
      <iframe
        title={t('contact.address')}
        src={YANDEX_SRC}
        loading="lazy"
        allowFullScreen
        className="h-[340px] w-full sm:h-[380px]"
      />
    </div>
  )
}
