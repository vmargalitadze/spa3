import React from 'react'

import ContactInfo from '@/components/contact/contactInfo'
import ContactForm from '@/components/contact/ContactForm'

function Contact() {
    
  return (
   <>
   <div id="contact" className="mt-[100px] mb-[100px] max-w-6xl max-lg:max-w-3xl mx-auto bg-[#e7dfd9]     rounded-lg">
            <div className="grid lg:grid-cols-2  gap-14 sm:p-8 p-4 font-[sans-serif]">
              <ContactInfo />
                <ContactForm />
               
            </div>
        </div>

   
   
   </>
  )
}

export default Contact