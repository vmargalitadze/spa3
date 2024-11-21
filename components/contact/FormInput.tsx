import React from 'react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import BookingCalendar from './BookingCalendar';

type FormInputProps = {
    name:string;
    type:string;
    label?:string;
    defaultValue?:string;
    placeholder?:string
}

function FormInput(props:FormInputProps) {
    const {label, name, type, defaultValue, placeholder} = props
  return (
    <div className="mb-2">

    <Label htmlFor={name} className='capitalize' > {label || name} </Label>
    <Input  id={name} defaultValue={defaultValue} required type={type} placeholder={placeholder} name={name} />
    
    </div>
  )
}

export default FormInput