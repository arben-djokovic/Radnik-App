import Link from 'next/link'
import React from 'react'

export default function Nav({ isNavOpen }) {
  return (<div className={`${isNavOpen ? 'block' : 'hidden'} md:block md:max-w-[60%] md:text-nowrap md:overflow-auto`}>
    <ul className={`flex flex-col gap-7 p-7 text-gray-700 md:flex md:flex-row md:p-0 `}>
        <li className='hover:text-gray-900'><Link href="/">Pocetna</Link></li>
        <li className='hover:text-gray-900'><Link href="/radnici">Radnici</Link></li>
        <li className='hover:text-gray-900'><Link href="/poslovi">Poslovi</Link></li>
        <li className='hover:text-gray-900'><Link href="/objavi-posao">Objavi posao</Link></li>
    </ul>
    <hr className='border-gray-300 w-[90%] mx-auto md:hidden'/>
  </div>)
}
