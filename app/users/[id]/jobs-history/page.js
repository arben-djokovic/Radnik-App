import JobHistoryItem from '@/app/components/profile/JobHistoryItem'
import JobsHistoryHeader from '@/app/components/profile/JobsHistoryHeader'
import MyProfileNav from '@/app/components/profile/MyProfileNav'
import React from 'react'

export default function JobsHistory() {
  return (
    <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto'>
        <MyProfileNav />
        <JobsHistoryHeader />
        <div className='flex flex-col gap-2 w-full'>
          <JobHistoryItem />
          <JobHistoryItem />
          <JobHistoryItem />
          <JobHistoryItem />
        </div>
    </div>
  )
}
