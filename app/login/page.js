import React from 'react'
import LoginForm from './LoginForm'
import Link from 'next/link'

export const metadata = {
  title: 'Radnik App - Prijavite se',
  description: 'Prijavite se i pristupi RadnikApp. Povezujemo vas sa proverenim radnicima u vašoj blizini.',
}
export default function LoginPageContainer() {
  return (
    <div className='bg-bg-blue min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col justify-center items-center gap-6 p-5'>
      <LoginForm />
      <Link className='hover:text-gray-600' href={'/'}>← Nazad na početnu</Link>
    </div>)
}
