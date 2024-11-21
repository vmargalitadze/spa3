import BookingCalendar from '@/components/contact/BookingCalendar'
import { SubmitButton } from '@/components/contact/Buttons'
import FormContainer from '@/components/contact/FormContainer'
import FormInput from '@/components/contact/FormInput'
import { createBookingAction } from '@/utils/actions'
import { useTranslations } from 'next-intl'
import React from 'react'
import Time from './Time'
import db from "@/db/time.json";
function ContactForm() {
    const  t  =  useTranslations('HomePage');
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
                   
              

    <FormContainer action={createBookingAction}

     >
      <div className="mt-8 space-y-4">
      <FormInput label={t('1')} name='firstName'  type='text'   />
<FormInput label={t('2')} name='lastName'  type='text ' />
<FormInput label={t('3')} name='email'  type='text ' />
<FormInput label={t('4')} name='phoneNumber'  type='text ' />
<BookingCalendar name="date" />
<Time name="time"   />
      </div>
      <SubmitButton text='Booking' className='text-white bg-[#a91079] hover:bg-[#a91079e2] tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6' />
       
      

    </FormContainer>
</div>
  )
}

export default ContactForm