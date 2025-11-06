import JobItem from '@/app/components/JobItem'
import React from 'react'
import JobApply from './JobApply'
import JobApplications from './JobApplications'

export default function JobPage() {
  return (
    <div className='flex flex-col justify-center items-center py-10 px-3'>
        <div className='max-w-4xl flex flex-col gap-5'>
            <JobItem noButtons={true} />
            <JobApply />
            <JobApplications />
        </div>
    </div>
  )
}
