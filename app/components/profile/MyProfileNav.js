'use client'
import { getDecodedToken } from '@/app/config/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

export default function MyProfileNav() {
  const path = usePathname();
  const [userId, setUserId] = React.useState('');
  const lastPart = path.split('/').pop();
  const isProfile = !path.includes('my-jobs') && !path.includes('jobs-history');

  useEffect(() => {
    setUserId(getDecodedToken()._id)
  }, [])

  return (
    <div className='bg-[#ededed] w-full grid grid-cols-3 p-1 rounded-md text-center'>
        <Link href={`/users/${userId}`} className={`${isProfile && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Profil</Link>
        <Link href={`/users/${userId}/my-jobs`} className={`${lastPart === 'my-jobs' && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Moji poslovi</Link>
        <Link href={`/users/${userId}/jobs-history`} className={`${lastPart === 'jobs-history' && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Istorija radova</Link>
    </div>
  )
}
