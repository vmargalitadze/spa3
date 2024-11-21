import Link from 'next/link'
import React from 'react'
import LocalSwitcher from '../switcher'

function Link2() {
  return (
   <>
      <div className="md:hidden mt-3 space-y-2">
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="/"
        >
          Home
        </Link>
        <div className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900">
          <LocalSwitcher />
        </div>
       
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
           href="#team"
        >
          Team
        </Link>
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#serv"
        >
          Services
        </Link>
        <Link
          aria-current="page"
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#gallery"
        >
          Gallery
        </Link>
        <Link
          className="block w-full rounded-lg px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
          href="#contact"
        >
         Contacts
        </Link>
      </div>
   </>
  )
}

export default Link2