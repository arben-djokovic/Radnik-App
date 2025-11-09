import Link from 'next/link'
import React from 'react'

export default function JobsHistoryHeader() {
  return (
    <div className='flex flex-col items-start md:items-center justify-between w-full md:flex-row gap-3'>
        <div>
            <h1 className='font-bold text-2xl'>Istorija radova</h1>
            <p>Pregled svih vaših završenih poslova</p>
        </div>
    </div>
  )
}
