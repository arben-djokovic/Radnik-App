import { Briefcase, Calendar, CircleUserRound, Edit, MapPin, Phone, StarIcon } from 'lucide-react'
import React from 'react'

export default function ProfileHeader({isMe}) {
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5'>
        <div className='flex gap-5 w-full'>
            <CircleUserRound size={100} />
            <div className='flex gap-2 flex-col'>
                <h1 className='text-2xl mt-2 font-bold'>Marko Jovanovic</h1>
                <div className='flex gap-1 items-center text-gray-600'>
                    <MapPin size={20} />
                    <p>Novi Sad, Srbija</p>
                </div>
                <div className='flex items-start gap-3 text-gray-600 flex-col md:items-center md:flex-row'>
                    <div className='flex gap-1 items-center'>
                        <StarIcon size={20} color='gold' />
                        <p>4.8 (8 recenzija)</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Briefcase size={20} color='black' />
                        <p>87 zavrsenih poslova</p>
                    </div>
                </div>
                <div className='flex items-start flex-col gap-2 text-gray-600 md:flex-row md:items-center'>
                    <div className='flex gap-1 items-center'>
                        <Calendar size={20} />
                        <p>Clan od Mart, 2022</p>
                    </div>
                    <p>12 objavjenih poslova</p>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-1'>
            <button className='bg-black text-white w-full p-1.5 rounded-md text-center flex items-center justify-center gap-2'>
                <Phone size={20} />
                <p>Pozovi</p>
            </button>
            {isMe && <button className='bg-white text-black p-1.5 rounded-md text-center flex items-center justify-center gap-2 border border-black whitespace-nowrap w-full md:w-auto'>
                <Edit size={20} />
                <p>Uredi profil</p>
            </button>}
        </div>
    </div>
  )
}
