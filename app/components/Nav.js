import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (<div>
    <ul className='flex flex-col gap-7 p-7 text-gray-700'>
        <li className='hover:text-gray-900'><Link href="/">Pocetna</Link></li>
        <li className='hover:text-gray-900'><Link href="/radnici">Pronadji radnike</Link></li>
        <li className='hover:text-gray-900'><Link href="/objavi-posao">Objavi posao</Link></li>
        <li className='hover:text-gray-900'><Link href="/poslovi">Dostupni poslovi</Link></li>
    </ul>
    <hr className='border-gray-300 w-[90%] mx-auto'/>
  </div>)
}
