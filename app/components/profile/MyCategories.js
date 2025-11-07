import { Droplets, Paintbrush, Zap } from 'lucide-react'
import React from 'react'
import ProfileCategory from './ProfileCategory'

export default function MyCategories() {
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5'>
        <h1 className='text-xl'>Oblasti rada</h1>
        <div className='flex flex-col gap-2'>
            <ProfileCategory category='Električar' icon={<Zap className='text-blue-600' size={20} />} />
            <ProfileCategory category='Vodoinstalateri' icon={<Droplets className='text-blue-600' size={20} />} />
            <ProfileCategory category='Moleri' icon={<Paintbrush className='text-blue-600' size={20} />} />
        </div>
    </div>
  )
}
