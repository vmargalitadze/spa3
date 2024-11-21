import React from 'react'
import LocalSwitcher from '../switcher'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
function Link1() {
  const t = useTranslations('HomePage');
  return (
   <>
   
        <Link
          aria-current="page"
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="/"
        >
          {t('mess')}
        </Link>
     
      
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#serv"
        >
         {t('serv')}
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#team"
        >
       {t('nav4')}
        </Link>
        <Link
          aria-current="page"
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#gallery"
        >
           {t('nav5')}
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#contact"
          style={{scrollBehavior:'smooth'}}
        >
        {t('nav6')}
        </Link>
   <div >
          <LocalSwitcher />
        </div>
   </>
  )
}

export default Link1