import React from 'react'

export default function MyJobsHeader() {
  return (
    <div className='flex flex-col items-start md:items-center justify-between w-full md:flex-row gap-3'>
        <div>
            <h1 className='font-bold text-2xl'>Moji poslovi</h1>
            <p>Pregled svih vaših objavljenih poslova</p>
        </div>
        <button className='bg-black text-white border border-black py-1 px-3 rounded-md'>Objavi novi posao</button>
    </div>
  )
}
