import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
  title: 'Radnik App - Page not found',
  description: 'Stranica nije pronađena.',
}

export default function NotFound() {
  return (
    <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col justify-center items-center'>
        <Image src="/assets/404.png" alt="404" width={500} height={500} />
        <Link href="/" className='bg-blue-400 text-white py-2 px-4 rounded-md'>Povratak na pocetnu</Link>
    </div>
  )
}
