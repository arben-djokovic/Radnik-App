import JobHistoryItem from '@/app/components/profile/JobHistoryItem'
import JobsHistoryHeader from '@/app/components/profile/JobsHistoryHeader'
import MyProfileNav from '@/app/components/profile/MyProfileNav'
import React from 'react'

const getUser = async (id) => {
  try{
    const response = await fetch(`http://localhost:5000/api/users/${id}`, {cache: 'no-store'});
    return response.json();
  }catch(err){
    return null
  }
}

export default async function JobsHistory({ params }) {
  const { id } = params
  const data = await getUser(id);
  const user = data?.user || null;

  return (
    <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto'>
        <MyProfileNav user={user} />
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
