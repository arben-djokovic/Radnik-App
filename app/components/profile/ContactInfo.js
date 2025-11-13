import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ContactInfo({ user }) {
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5 text-sm md:text-md'>
        <h1 className='text-xl'>Kontakt informacije</h1>
        <div className='flex flex-col gap-2 items-start'>
            <div className='flex items-center gap-2'>
                <Phone size={18} />
                <Link href="tel:+382 69 405 596">{user?.phone}</Link>
            </div>
            <div className='flex items-center gap-2'>
                <Mail size={18} />
                <Link href="mailto:arben.djokovic12@gmail.com">{user?.email}</Link>
            </div>
            <div className='flex items-center gap-2'>
                <MapPin size={18} />
                <p>{user?.city}, {user?.country }</p>
            </div>
        </div>
    </div>
  )
}
