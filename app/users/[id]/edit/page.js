'use client'
import api from '@/app/api/api';
import UserForm from '@/app/components/userForm/UserForm'
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function EditProfile() {
  const [user, setUser] = React.useState(null);
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
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
    <div>
      {user && <UserForm isEdit={true} user={user} />}
    </div>
  )
}
