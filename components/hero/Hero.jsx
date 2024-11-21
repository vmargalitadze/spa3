import {Inter} from 'next/font/google'
import React from 'react'
import { useTranslations } from 'next-intl';

const inter = Inter({
  subsets: ['latin']
})

 function Hero() {
  const  t  =  useTranslations('HomePage');
  return (
    <div className="align-center heroImage overflow-hidden ">
        <div className="relative z-[1]"  >
        
        <div className="container">
        <div className="relative flex flex-col items-center justify-center h-screen ">
            <h1 style={{ fontFamily: inter }} className="title text-[200px] ">{t('salon')}</h1>
            <h2 className="sub-title ">{t('heroinfo')}</h2>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Hero