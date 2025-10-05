'use client'

import { Menu, Wrench, X } from 'lucide-react';
import React from 'react'
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <header className={`border-b top-0 left-0 bg-white border-gray-300 fixed w-full z-50 ${isNavOpen ? 'h-screen' : 'h-auto'} md:h-auto`}>
        <div className='flex items-center justify-between px-[5vw] py-4 border-gray-300 border-b'>
            <div className='flex items-center gap-2'>
                <Wrench color='blue' size={32}/>
                <span className='font-bold text-2xl'>Radnik App</span>
            </div>
            {!isNavOpen ? <Menu onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer hover:text-gray-600' /> : <X onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer hover:text-gray-600' />}
        </div>

        {isNavOpen && <Nav />}

        {isNavOpen && <div className='flex flex-col gap-3 py-7 px-2 border-b border-gray-300'>
            <button className='w-full py-1 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-md'><Link href="/prijava">Prijavi se</Link></button>
            <button className='w-full py-1 bg-black text-white border border-black cursor-pointer hover:bg-gray-800 rounded-md'><Link href="/registracija">Registruj se</Link></button>
        </div>}
    </header>
  )
}
