'use client'
import React from 'react'
import Link from 'next/link'
import { Lock, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation';
import api from '../api/api';
import { setToken } from '../config/config';

export default function LoginForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const errorRef = React.useRef(null)
  const router = useRouter();

  const logIn = async (e) => {
    e.preventDefault()
    if(!email || !password) {
      errorRef.current.classList.remove('hidden');
      return
    }
    errorRef.current.classList.add('hidden');
    try{
      const response = await api.post('/login', { email, password });
      const data = response.data;
      console.log(data);
      if(data.success === false) return errorRef.current.classList.remove('hidden');
      setToken(data.token);
      return router.push(`/users/${data.user._id}`);
    }catch(err){
      console.log(err);
      if(err.response?.data?.success === false) return errorRef.current.classList.remove('hidden');
    }
  }
  
  return (
      <form onSubmit={logIn} className='bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-2 w-full max-w-xl'>
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
  )
}
