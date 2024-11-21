import React from 'react'
import { useTranslations } from 'next-intl';
function GalleryText() {
    const t = useTranslations('HomePage');
  return (
    <div className=" text-3xl md:text-5xl mb-2 text-center text-[#a56c6c] font-extrabold">{t('nav5')}</div>
  )
}

export default GalleryText