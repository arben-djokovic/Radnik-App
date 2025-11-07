'use client'
import React from 'react'
import MyProfileNav from './MyProfileNav'
import ProfileHeader from './ProfileHeader';

export default function ProfilePage() {
    const [selectedNav, setSelectedNav] = React.useState(0);
  return (
    <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 p-5 py-10 max-w-6xl mx-auto'>
        <MyProfileNav selected={selectedNav} setSelected={setSelectedNav}  />
        <ProfileHeader />
    </div>
  )
}
