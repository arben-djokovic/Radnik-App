import { CircleUserRound, Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ReviewItem() {
  return (
    <div className='border-b border-t border-gray-300 py-2'>
        <div className='flex items-center justify-between'>
            <Link href="/user/1" className='flex items-center gap-3'>
                <CircleUserRound size={30} />
                <div>
                    <p className='font-bold'>Marko Jovanovic</p>
                    <p className='text-sm'>10. Dec 2024</p>
                </div>
            </Link>
            <div className='flex gap-1'>
                <Star size={16} className='text-yellow-400' />
                <Star size={16} className='text-yellow-400' />
                <Star size={16} className='text-yellow-400' />
                <Star size={16} className='text-yellow-400' />
                <Star size={16} className='text-yellow-400' />
            </div>
        </div>
        <p>
            "Odličan rad, brzo i profesionalno. Ana je stigla tačno na vreme i rešila problem sa električnom tablom za manje od sat vremena. Topla preporuka!"
        </p>
    </div>
  )
}
