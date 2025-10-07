import { Wrench } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo({ size, fontsize}) {
  return (
    <div className='flex items-center gap-2'>
        <Wrench size={size} className='text-blue-400'/>
        <Link href="/" className={`font-bold text-${fontsize} text-nowrap`} >Radnik App</Link>
    </div>
  )
}
