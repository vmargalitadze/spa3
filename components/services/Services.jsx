import React from 'react'
import Items from './Items'
import { useTranslations } from 'next-intl';
function Services() {
  const t = useTranslations('HomePage'); // Adjust namespace accordingly
  return (
<div id='serv' className=" spa-price   lg:py-24">
  <div className="mb-[50px] text-center">
    <h2 className="text-[#0f1b48] font1 leading-[80px] text-[50px] md:text-[70px] font-[600px]">{t('serv')}</h2>
  </div>
 <Items />
</div>


  
  )
}

export default Services