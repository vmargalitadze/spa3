

import Link from "next/link"
import { FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
    <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start text-sm space-y-8 sm:space-y-0">
      
      {/* About Spa Section */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">About</h3>
        <Link href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" prefetch={false}>
          About Us
        </Link>
        <Link href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" prefetch={false}>
          Our Services
        </Link>
        <Link href="#gallery" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" prefetch={false}>
          Gallery
        </Link>
        <Link href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" prefetch={false}>
          Contact Us
        </Link>
      </div>
  
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">Contact Information</h3>
        <p className="text-gray-600 dark:text-gray-400">მიცკევიჩის ქუჩა 25B,II სადარბაზო, ბინა 28, Tbilisi, Georgia
        </p>
        <p className="text-gray-600 dark:text-gray-400">Phone: +158 996 888</p>
        <p className="text-gray-600 dark:text-gray-400">Email: crazymimino@gmail.com</p>
      </div>
  
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold">Social Network</h3>
        <Link href="https://www.facebook.com/profile.php?id=61564196570406" target="_blank" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" prefetch={false}>
          <FaFacebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Link>
      </div>
     
    
    </div>
  
    <div className="container max-w-7xl mx-auto mt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
      <p className="text-gray-500 dark:text-gray-400">
        &copy; 2024 Harmoneria. All rights reserved.
      </p>
    </div>
  </footer>
  
  
  )
}




