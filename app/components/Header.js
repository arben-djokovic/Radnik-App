'use client'

import { Menu, X} from 'lucide-react';
import React from 'react'
import Nav from './Nav';
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(false);

  return (<>
    { isNavOpen && <div onClick={() => setIsNavOpen(false)} className='fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] md:hidden'></div>}
    <header className={`border-b top-0 left-0 backdrop-blur-lg bg-[rgba(255,255,255,1)] border-gray-300 fixed w-full z-50 md:h-auto md:flex justify-between md:px-[3%] md:py-3 md:items-center md:gap-[1%] md:text-sm lg:text-base`}>
        <div className='flex items-center justify-between px-[5vw] py-4 border-gray-300 border-b md:p-0 md:border-0'>
            <Logo size={32} fontsize={'2xl'}/>
            <div className='md:hidden'>
                {!isNavOpen && <Menu onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer hover:text-gray-600' />}
                {isNavOpen && <X onClick={() => setIsNavOpen(!isNavOpen)} className='cursor-pointer hover:text-gray-600' />}
            </div>
        </div>

        <Nav setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />

        <div className={`${isNavOpen ? 'block' : 'hidden'} flex flex-col gap-3 py-7 px-2 border-b border-gray-300 md:flex md:border-0 md:flex-row md:p-0 md:gap-[2%]`}>           
           
           <Link href={!isLogged ? '/login' : '/profile'} onClick={() => setIsNavOpen(false)} className='w-full min-w-[100px] py-1 text-center border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-md'>
                {!isLogged ? <button className='cursor-pointer'>Prijavi se</button> : <button className='cursor-pointer'>Moj profil</button>}
            </Link>
            <Link href={!isLogged ? '/signup' : '/logout'} onClick={() => setIsNavOpen(false)} className='w-full min-w-[100px] py-1 bg-black text-center text-white border border-black cursor-pointer hover:bg-gray-800 rounded-md'>
                {!isLogged ? <button className='cursor-pointer'>Registruj se</button> : <button className='cursor-pointer'>Odjavi se</button>}
            </Link>
        </div>

    </header></>
  )
}
