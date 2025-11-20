'use client'
import api from '@/app/api/api';
import { getDecodedToken } from '@/app/config/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react'

export default function MyProfileNav({user}) {
  const path = usePathname();
  const [userId, setUserId] = React.useState('');
  const [isMine, setIsMine] = React.useState(false);
  const lastPart = path.split('/').pop();
  const isProfile = !path.includes('my-jobs') && !path.includes('jobs-history');

  useEffect(() => {
    if(user){
      setUserId(user._id);
      const decodedToken = getDecodedToken();
      if(decodedToken && decodedToken._id === user._id){
        setIsMine(true);
      }
    }else{
      setIsMine(false);
    }
  }, [])

  return (
    <div className={`bg-[#ededed] w-full grid grid-cols-3 p-1 rounded-md text-center ${!isMine && 'hidden'}`}>
        <Link href={`/users/${userId}`} className={`${isProfile && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Profil</Link>
        <Link href={`/users/${userId}/my-jobs`} className={`${lastPart === 'my-jobs' && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Moji poslovi</Link>
        <Link href={`/users/${userId}/jobs-history`} className={`${lastPart === 'jobs-history' && 'bg-white'} p-0.5 rounded-md shadow-xs`}>Istorija radova</Link>
    </div>
  )
}
