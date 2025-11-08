'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function MyProfileNav() {

  const path = usePathname();
  console.log(path);
  const lastPart = path.split('/').pop();
  const isProfile = !path.includes('my-jobs') && !path.includes('jobs-history');

  return (
    <div className='bg-[#ededed] w-full grid grid-cols-3 p-1 rounded-md text-center'>
        <Link href={'/users/1'} className={`${isProfile && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Profil</Link>
        <Link href={'/users/1/my-jobs'} className={`${lastPart === 'my-jobs' && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Moji poslovi</Link>
        <Link href={'/users/1/jobs-history'} className={`${lastPart === 'jobs-history' && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Istorija radova</Link>
    </div>
  )
}
