import React from 'react'
import JobFilters from './JobFilters'
import JobItem from '../components/JobItem'

const jobs = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
]
export default function MainJobs() {
  return (
    <div className='w-full max-w-5xl flex flex-col gap-5'>
        <JobFilters />
        <p className='text-gray-500 text-md'>Pronađeno 6 poslova</p>
        <div className='flex flex-col gap-5'>
          {jobs.map(job => <JobItem key={job.id} job={job} />)}
        </div>
    </div>
  )
}
