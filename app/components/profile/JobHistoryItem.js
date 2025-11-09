import { Calendar, Star, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function JobHistoryItem() {
  return (
    <div className='rounded-md border border-gray-300 p-5 flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
            <h2 className='font-bold text-lg'>Ugradnja novih utičnica</h2>
            <p className='text-sm text-blue-500'>Električari</p>
        </div>
        <div className='flex items-center gap-4 text-sm'>
            <Link href="/user/1" className='flex items-center gap-0.5 hover:underline'>
                <User size={15} />
                <p>Klijent: Marko Jovanovic</p>
            </Link>
            <div className='flex items-center gap-0.5'>
                <Calendar size={15} />
                <p>15. Dec 2024</p>
            </div>
        </div>
        <div className='border border-gray-300 p-2 rounded-md'>
            <div className='flex items-center gap-2'>
                <div className='flex items-center gap-0.5'>
                    <Star size={16} className='text-yellow-400' />
                    <Star size={16} className='text-yellow-400' />
                    <Star size={16} className='text-yellow-400' />
                    <Star size={16} className='text-yellow-400' />
                    <Star size={16} className='text-yellow-400' />
                </div>
                <p>5/5</p>
            </div>
            <p>Odličan rad, brzo i profesionalno. Topla preporuka!</p>
        </div>
    </div>
  )
}
