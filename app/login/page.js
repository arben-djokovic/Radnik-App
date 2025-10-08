'use client'
import React from 'react'
import Link from 'next/link'
import { Lock, Mail } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const errorRef = React.useRef(null)

  const logIn = (e) => {
    e.preventDefault()
    // Logic for logging in the user
    if(true) return errorRef.current.classList.remove('hidden');
    errorRef.current.classList.add('hidden');
  }
  
  return (
    <div className='bg-bg-blue min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col justify-center items-center gap-6 p-5'>
      <form onSubmit={logIn} className='bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-2 w-full max-w-md'>
        <h2 className='text-2xl font-bold'>Prijavite se</h2>
        <p className='text-xs md:text-sm'>Unesite svoje podatke da pristupite nalogu</p>
        <p ref={errorRef} className="hidden text-sm text-red-500">Pogrešan email ili lozinka</p>
        <div className='flex flex-col gap-4 my-4'>
          <div className='flex flex-col gap-1'>
            <p>Email:</p>
            <div className="relative">
              <Mail className='absolute top-2 left-2 text-gray-400' size={16} />
              <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Unesite email' className='border pl-8 border-gray-300 p-1 w-full rounded-md' />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <div className='flex justify-between items-center'>
              <p>Lozinka</p>
              <Link className='text-blue-400 hover:text-blue-500 text-sm text-right ml-1' href={'/forgot-password'}>Zaboravili ste lozinku?</Link>
            </div>
            <div className="relative">
              <Lock className='absolute top-2 left-2 text-gray-400' size={16} />
              <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Unesite lozinku' className='border pl-8 border-gray-300 p-1 w-full rounded-md' />
            </div>
          </div>
          <button className='bg-black text-white py-1 rounded-md cursor-pointer hover:bg-gray-800'>Prijavi se</button>
        </div>
        <p className='text-sm text-center'>Nemate nalog? <Link className='text-blue-400 hover:text-blue-500' href={'/signup'}>Registrujte se</Link></p>
      </form>

      <Link className='hover:text-gray-600' href={'/'}>← Nazad na početnu</Link>
    </div>
  )
}
