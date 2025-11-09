import Link from 'next/link'
import React from 'react'

export default function MyJobItem() {
  return (
    <Link href="/jobs/1" className='rounded-md border border-gray-300 p-5 hover:bg-gray-100 flex flex-col gap-2'>
      <div>
        <h1 className='text-lg font-bold'>Popravka slavine</h1>
        <p className='text-blue-500 text-sm'>Vodoinstalateri</p>
      </div>
      <div className='text-sm flex gap-5 items-center justify-between text-center md:justify-start'>
          <p className='flex flex-col items-center gap-1 md:flex-row'><span>Objavljeno:</span> <span>15. Dec 2024</span></p>
          <p className='flex flex-col items-center gap-1 md:flex-row'><span>5</span> <span>prijava</span></p>
          <p className='flex flex-col items-center gap-1 md:flex-row'><span>Radnik:</span> <span>Ana Jovanovic</span></p>
      </div>
    </Link>
  )
}
