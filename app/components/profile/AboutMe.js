import React from 'react'

export default function AboutMe({ about }) {
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5'>
        <h1 className='text-xl'>O meni</h1>
        <p>{about}</p>
    </div>
  )
}
