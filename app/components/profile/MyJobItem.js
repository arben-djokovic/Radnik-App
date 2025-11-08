import Link from 'next/link'
import React from 'react'

export default function MyJobItem() {
  return (
    <Link href="/jobs/1" className='rounded-md border border-gray-300 p-5 hover:bg-gray-100'>
        <h1 className='text-lg font-bold'>Popravka slavine</h1>
        <p className='text-blue-500'>Vodoinstalateri</p>
        <div className='text-sm flex gap-2 items-center'>
            <p>Objavljeno: 15. Dec 2024</p>
            <p>5 prijava</p>
            <p>Radnik: Ana Jovanović</p>
        </div>
    </Link>
  )
}
