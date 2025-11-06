import React, { Suspense } from 'react'
import JobFilters from './JobFilters'
import JobItem from '../components/JobItem'
import PaginationContainer from '../components/PaginationContainer'

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
        <p className='text-gray-500 text-md'>Pronađeno {jobs.length} poslova</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {jobs.map(job => <JobItem key={job.id} job={job} />)}
        </div>
        <Suspense fallback={null}>
          <PaginationContainer totalPages={10} />
        </Suspense>
    </div>
  )
}
