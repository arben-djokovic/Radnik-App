import React from 'react'
import MyProfileNav from '../../../components/profile/MyProfileNav'
import MyJobsHeader from '@/app/components/profile/MyJobsHeader'
import MyJobItem from '@/app/components/profile/MyJobItem'

const getUser = async (id) => {
  try{
    const response = await fetch(`http://localhost:5000/api/users/${id}`, {cache: 'no-store'});
    return response.json();
  }catch(err){
    return null
  }
}

export default async function MyJobs({ params }) {
  const { id } = params
  const data = await getUser(id);
  const user = data?.user || null;
      
  if (!user) return notFound();
  return (
    <div className='min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto'>
        <MyProfileNav user={user} />
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
