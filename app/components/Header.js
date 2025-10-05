'use client'

import { Menu, Wrench, X } from 'lucide-react';
import React from 'react'
import Nav from './Nav';
import Link from 'next/link';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(false);

  return (<>
    { isNavOpen && <div onClick={() => setIsNavOpen(false)} className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] md:hidden'></div>}
    <header className={`border-b top-0 left-0 backdrop-blur-md bg-[rgba(255,255,255,0.7)] border-gray-300 fixed w-full z-50 md:h-auto md:flex justify-between md:px-[3%] md:py-3 md:items-center md:gap-[1%] md:text-sm lg:text-base`}>
        <div className='flex items-center justify-between px-[5vw] py-4 border-gray-300 border-b md:p-0 md:border-0'>
            <div className='flex items-center gap-2'>
                <Wrench size={32} className='text-blue-400'/>
                <Link href="/" className='font-bold text-2xl text-nowrap'>Radnik App</Link>
            </div>
            <div className='md:hidden'>
                {!isNavOpen && <Menu onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer hover:text-gray-600' />}
                {isNavOpen && <X onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer hover:text-gray-600' />}
            </div>
        </div>

        <Nav isNavOpen={isNavOpen} />

        <div className={`${isNavOpen ? 'block' : 'hidden'} flex flex-col gap-3 py-7 px-2 border-b border-gray-300 md:flex md:border-0 md:flex-row md:p-0 md:gap-[2%]`}>
            <button className='w-full min-w-[100px] py-1 border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-md'>
                {!isLogged ? <Link href="/prijava">Prijavi se</Link>: <Link href="/profil">Moj profil</Link>}
            </button>
            <button className='w-full min-w-[100px] py-1 bg-black text-white border border-black cursor-pointer hover:bg-gray-800 rounded-md'>
                {!isLogged ? <Link href="/registracija">Registruj se</Link> : <Link href="/odjava">Odjavi se</Link>}
            </button>
        </div>

    </header></>
  )
}
