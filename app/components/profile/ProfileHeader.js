import { formatJoinDate } from '@/app/config/config'
import { Briefcase, Calendar, CircleUserRound, Edit, MapPin, Phone, StarIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ProfileHeader({ user}) {
    const isMe = false
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5'>
        <div className='flex gap-5 w-full'>
            <CircleUserRound size={100} />
            <div className='flex gap-2 flex-col text-sm'>
                <h1 className='text-2xl mt-2 font-bold'>{user.fullName}</h1>
                <div className='flex gap-1 items-center text-gray-600'>
                    <MapPin size={20} />
                    <p>{user.city}, {user.country}</p>
                </div>
                {user.role === 'worker' && <div className='flex items-start gap-3 text-gray-600 flex-col md:items-center md:flex-row'>
                    <div className='flex gap-1 items-center'>
                        <StarIcon size={20} color='gold' />
                        <p>{user.averageRating} ({user.totalReviews} recenzija)</p>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <Briefcase size={20} color='black' />
                        <p>{user.totalCompletedJobs} zavrsenih poslova</p>
                    </div>
                </div>}
                <div className='flex items-start flex-col gap-2 text-gray-600 md:flex-row md:items-center'>
                    <div className='flex gap-1 items-center'>
                        <Calendar size={20} />
                        <p>Clan od {formatJoinDate(user.createdAt)}</p>
                    </div>
                    <p>{user.totalPostedJobs} objavjenih poslova</p>
                </div>
            </div>
        </div>
        <div className='flex items-center gap-1'>
            {!isMe && <Link href={`tel:${user.phone}`} className='bg-black text-white w-full p-1.5 rounded-md text-center flex items-center justify-center gap-2'>
                <Phone size={20} />
                <p>Pozovi</p>
            </Link>}
            {isMe && <><Link href={`/users/${user._id}/edit`} className='bg-white w-full text-black p-1.5 rounded-md text-center flex items-center justify-center gap-2 border border-black whitespace-nowrap'>
                <Edit size={20} />
                <p>Uredi profil</p>
            </Link>
            <button className='bg-black text-white py-1.5 px-3 rounded-md text-center flex items-center justify-center gap-2 whitespace-nowrap'>
                {/* <Edit size={20} /> */}
                <p>Promijeni lozinku</p>
            </button>
            </>}
        </div>
    </div>
  )
}
