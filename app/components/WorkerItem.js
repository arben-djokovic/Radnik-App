import { MapPin, StarIcon } from 'lucide-react'
import React from 'react'

export default function WorkerItem() {
  return (
    <div className='flex flex-col gap-3 md:max-w-sm border border-gray-300 p-5 rounded-md w-full'>
        <div>
            <h2 className='text-lg font-bold'>Marko Jovanovic</h2>
            <p className='flex flex-col text-sm text-blue-500'>
                <span>Vodoinstalateri</span>
                <span>Opsti radovi</span>
            </p>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='flex gap-1 items-center'>
                <StarIcon size={20} color='gold' />
                <p>4.8</p>
            </div>
            <div className='flex gap-1 items-center'>
                <MapPin size={20} />
                <p>Novi Sad</p>
            </div>
        </div>
        <p>
            Iskusni vodoinstalater sa 15 godina iskustva. Specijalizovan za hitne intervencije i renoviranje kupatila.
        </p>
        <div className='flex items-center gap-2'>
            <button className='cursor-pointer w-full bg-black text-white border border-black py-1 px-3 rounded-md'>Kontaktiraj</button>
            <button className='cursor-pointer bg-white text-black border border-black py-1 px-3 rounded-md'>Profil</button>
        </div>
    </div>
  )
}
