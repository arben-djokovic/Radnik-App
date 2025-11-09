import { MapPin, Phone, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function WorkerItem({worker}) {
  return (
    <div className='flex flex-col gap-3 border border-gray-300 p-5 rounded-md w-full justify-between'>
        <div>
            <h2 className='text-lg font-bold'>Marko Jovanovic</h2>
            <p className='text-sm text-blue-500'>
                <span>Vodoinstalateri</span>
                {worker % 2 == 0 && <><span className='text-black'>{" | "}</span><span>Električari</span><span className='text-black'>{" | "}</span></>}
                {worker % 2 == 0 && <><span>Moleri</span><span className='text-black'>{" | "}</span></>}
                {worker % 2 == 0 && <><span>Stolarija</span><span className='text-black'>{" | "}</span></>}
                {worker % 2 == 0 && <><span>Klimatizacija</span><span className='text-black'>{" | "}</span></>}
                {worker % 2 == 0 && <><span>Opsti radovi</span></>}
            </p>
        </div>
        <div className='flex gap-3 items-center'>
            <div className='flex gap-1 items-center'>
                <StarIcon size={20} color='gold' />
                <p>4.8 (8 recenzija)</p>
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
            <Link href={`tel:+38161234567`} className='text-center cursor-pointer w-full bg-black text-white border border-black py-1 px-3 rounded-md'>
                <div className='flex items-center gap-1 w-full text-center justify-center'>
                    <Phone size={15} /> 
                    <p>Pozovi</p>
                </div>
            </Link>
            <Link href={`/users/1`} className='cursor-pointer bg-white text-black border border-black py-1 px-3 rounded-md'>Profil</Link>
        </div>
    </div>
  )
}
