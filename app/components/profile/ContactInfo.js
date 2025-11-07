import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

export default function ContactInfo() {
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5'>
        <h1>Kontakt informacije</h1>
        <div className='flex flex-col gap-2 items-start'>
            <div className='flex items-center gap-2'>
                <Phone size={18} />
                <p>+382 69 405 596</p>
            </div>
            <div className='flex items-center gap-2'>
                <Mail size={18} />
                <p>arben.djokovic12@gmail.com</p>
            </div>
            <div className='flex items-center gap-2'>
                <MapPin size={18} />
                <p>Novi Sad, Srbija</p>
            </div>
        </div>
    </div>
  )
}
