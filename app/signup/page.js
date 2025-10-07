'use client'
import React from 'react'
import Logo from '../components/Logo'
import Link from 'next/link'
import ChooseType from './ChooseType'
import Form from './Form'
import Category from './Category'

export default function SingupPage() {
    const [isChooseType, setIsChooseType] = React.useState(true)
    const [isForm, setIsForm] = React.useState(false)
    const [type, setType] = React.useState(null);
    const [isCategory, setIsCategory] = React.useState(false)

    const finishRegistration = () => {
      alert('Registracija uspešna! Sada se možete prijaviti na vaš nalog.')
    }

  return (
    <div className='bg-bg-blue h-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col justify-center items-center gap-6 p-5'>
      <div className='bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-2 w-full max-w-md'>
        {isChooseType && <ChooseType type={type} setType={setType} setIsChooseType={setIsChooseType} setIsForm={setIsForm} />}
        {isForm && type !== null && <Form type={type} setIsChooseType={setIsChooseType} setIsForm={setIsForm} setIsCategory={setIsCategory} finishRegistration={finishRegistration} />}
        {isCategory && type === 'worker' && <Category setIsCategory={setIsCategory} setIsForm={setIsForm} finishRegistration={finishRegistration} />}
      </div>
    </div>
  )
}
