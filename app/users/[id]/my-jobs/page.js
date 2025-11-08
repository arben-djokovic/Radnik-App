import React from 'react'
import MyProfileNav from '../../../components/profile/MyProfileNav'
import MyJobsHeader from '@/app/components/profile/MyJobsHeader'
import MyJobItem from '@/app/components/profile/MyJobItem'

export default function MyJobs() {
  return (
    <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto'>
        <MyProfileNav />
        <MyJobsHeader />
        <div className='flex flex-col gap-2 w-full'>
          <MyJobItem />
          <MyJobItem />
          <MyJobItem />
          <MyJobItem />
        </div>
    </div>
  )
}
