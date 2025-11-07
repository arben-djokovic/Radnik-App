'use client'
import React from 'react'
import MyProfileNav from './MyProfileNav'
import ProfileHeader from './ProfileHeader';
import Reviews from '../components/review/Reviews';
import AboutMe from '../components/profile/AboutMe';
import ContactInfo from '../components/profile/ContactInfo';
import MyCategories from '../components/profile/MyCategories';

export default function ProfilePage() {
    const [selectedNav, setSelectedNav] = React.useState(0);
    const role = 'worker'
    const isMe = true
  return (
    <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto'>
        {isMe && <MyProfileNav selected={selectedNav} setSelected={setSelectedNav}  />}
        <ProfileHeader isMe={isMe} />
        <div className='grid grid-cols-1 md:grid-cols-[auto_auto] gap-5'>
          <div className={`${role !== 'worker' && 'hidden'} md:col-start-1 md:row-start-1`}><AboutMe /></div>
          <div className={`${role === 'worker' ? 'row-start-4 md:col-start-1 md:row-start-2' : 'row-start-2 md:col-start-1 md:row-start-1'} `}><Reviews /></div>
          <div className='md:col-start-2 md:row-start-1'><ContactInfo /></div>
          <div className={`${role !== 'worker' && 'hidden'} md:col-start-2 md:row-start-2`}><MyCategories /></div>
        </div>
    </div>
  )
}
