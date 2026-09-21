import { useLanguage } from '../i18n/LanguageContext'

// Yandex Maps embed pinned on the Navoi Region Government building
// (Navoiy viloyat hokimligi, org id 162534550193).
const YANDEX_SRC =
  'https://yandex.uz/map-widget/v1/?ll=65.373772%2C40.103350&z=17&mode=poi&poi%5Bpoint%5D=65.373772%2C40.103350&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D162534550193'

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
