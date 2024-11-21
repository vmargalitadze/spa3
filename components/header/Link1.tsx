import React from 'react'
import LocalSwitcher from '../switcher'
import Link from 'next/link'

function Link1() {
  return (
   <>
   <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
          <LocalSwitcher />
        </div>
        <Link
          aria-current="page"
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="/"
        >
          Home
        </Link>
     
      
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#serv"
        >
         Services
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#team"
        >
       Team
        </Link>
        <Link
          aria-current="page"
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#gallery"
        >
          Gallery
        </Link>
        <Link
          className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#contact"
          style={{scrollBehavior:'smooth'}}
        >
        Contacts
        </Link>
   
   </>
  )
}

export default Link1