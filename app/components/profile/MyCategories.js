import { Droplets, Paintbrush, Zap } from 'lucide-react'
import React from 'react'
import ProfileCategory from './ProfileCategory'

export default function MyCategories({ categories }) {
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5'>
        <h1 className='text-xl'>Oblasti rada</h1>
        <div className='flex flex-col gap-2'>
          {categories && categories.map((category, i) => {
            return <ProfileCategory key={i} category={category} />
          })}
        </div>
    </div>
  )
}
