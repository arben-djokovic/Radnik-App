'use client'
import React, { useEffect } from 'react'
import MyProfileNav from '../../components/profile/MyProfileNav'
import ProfileHeader from '../../components/profile/ProfileHeader';
import AboutMe from '@/app/components/profile/AboutMe';
import Reviews from '@/app/components/review/Reviews';
import ContactInfo from '@/app/components/profile/ContactInfo';
import MyCategories from '@/app/components/profile/MyCategories';
import { getDecodedToken } from '@/app/config/config';
import { useParams, useRouter } from 'next/navigation';
import api from '@/app/api/api';

export default function ProfilePage() {
    const router = useRouter();
    const [isMe, setIsMe] = React.useState(false)
    const { id } = useParams();
    const [user, setUser] = React.useState({ role: '' });

    useEffect(() => {
      const token = getDecodedToken();
      const isMyProfile = id === token?._id;
      setIsMe(isMyProfile);

      const getUser = async () => {
        try{
          const response = await api.get(`/users/${id}`);
          const data = await response.data;
          if(!data || data.success === false) return router.push('/404');
          setUser(data.user);
        }catch(err){
          console.log(err)
          return router.push('/404')
        }
      }
      getUser();
    }, [])
  return (
    <div className='flex flex-col items-center gap-6 text-gray-600 p-5 py-10 max-w-5xl mx-auto w-full'>
        {isMe && <MyProfileNav  />}
        <ProfileHeader user={user} isMe={isMe} />
        <div className={user.role === 'worker' ? 'grid grid-cols-1 md:grid-cols-[auto_auto] gap-5 w-full' : "flex flex-col w-full"} >
          {user.role === 'worker' && <div className={`md:col-start-1 md:row-start-1`}><AboutMe about={user?.about} /></div>}
          {user.role === 'worker' && <div className={`row-start-4 md:col-start-1 md:row-start-2`}><Reviews userId={user?._id}  /></div>}
          <div className='md:col-start-2 md:row-start-1'><ContactInfo user={user} /></div>
          <div className={`${user.role !== 'worker' && 'hidden'} md:col-start-2 md:row-start-2`}><MyCategories categories={user?.categoriesId} /></div>
        </div>
    </div>
  )
}
