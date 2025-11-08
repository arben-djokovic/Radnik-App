'use client'
import React from 'react'
import MyProfileNav from '../../components/profile/MyProfileNav'
import ProfileHeader from '../../components/profile/ProfileHeader';
import AboutMe from '@/app/components/profile/AboutMe';
import Reviews from '@/app/components/review/Reviews';
import ContactInfo from '@/app/components/profile/ContactInfo';
import MyCategories from '@/app/components/profile/MyCategories';

export default function ProfilePage() {
    const [selectedNav, setSelectedNav] = React.useState(0);
    const role = 'worker'
    const isMe = true
  return (
    <div className='flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto w-full'>
        {isMe && <MyProfileNav selected={selectedNav} setSelected={setSelectedNav}  />}
        <ProfileHeader isMe={isMe} role={role} />
        <div className={role === 'worker' ? 'grid grid-cols-1 md:grid-cols-[auto_auto] gap-5 w-full' : "flex flex-col w-full"} >
          {role === 'worker' && <div className={`md:col-start-1 md:row-start-1`}><AboutMe /></div>}
          {role === 'worker' && <div className={`row-start-4 md:col-start-1 md:row-start-2`}><Reviews /></div>}
          <div className='md:col-start-2 md:row-start-1'><ContactInfo /></div>
          <div className={`${role !== 'worker' && 'hidden'} md:col-start-2 md:row-start-2`}><MyCategories /></div>
        </div>
    </div>
  )
}
