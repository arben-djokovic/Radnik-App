import { MapPin, Phone, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function WorkerItem({worker}) {
  return (
    <div className='flex flex-col gap-3 border border-gray-300 p-5 rounded-md w-full justify-between'>
        <div>
            <h2 className='text-lg font-bold'>{worker.fullName}</h2>
            <p className='text-sm text-blue-500'>
                {worker.categoriesId.map((category, i) => {
                    if(i == worker.categoriesId.length - 1) return <span key={category._id}>{category.name}</span>
                    return <span key={category._id}>{category.name} <span className='text-black'>{" | "}</span></span>
                })}
            </p>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='flex gap-1 items-center'>
                <StarIcon size={20} color='gold' />
                <p>4.8 (8 recenzija)</p>
            </div>
            <div className='flex gap-1 items-center'>
                <MapPin size={20} />
                <p>{worker.city}</p>
            </div>
        </div>
        <p>{worker.about}</p>
        <div className='flex items-center gap-2'>
            <Link href={`tel:${worker.phone}`} className='text-center cursor-pointer w-full bg-black text-white border border-black py-1 px-3 rounded-md'>
                <div className='flex items-center gap-1 w-full text-center justify-center'>
                    <Phone size={15} /> 
                    <p>Pozovi</p>
                </div>
            </Link>
            <Link href={`/users/${worker._id}`} className='cursor-pointer bg-white text-black border border-black py-1 px-3 rounded-md'>Profil</Link>
        </div>
    </div>
  )
}
