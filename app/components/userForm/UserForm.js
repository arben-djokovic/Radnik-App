'use client'
import React, { useEffect } from 'react'
import ChooseType from './ChooseType'
import Form from './Form'
import Category from './Category'
import api from '@/app/api/api'
import { setToken } from '@/app/config/config'
import { useRouter } from 'next/navigation'

export default function UserForm({ isEdit, user }) {
    const router = useRouter();
    const [isChooseType, setIsChooseType] = React.useState(true)
    const [isForm, setIsForm] = React.useState(false)
    const [isCategory, setIsCategory] = React.useState(false)

    const [type, setType] = React.useState(user?.role);
    const [name, setName] = React.useState(user?.fullName || '');
    const [email, setEmail] = React.useState(user?.email || '');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState(user?.phone || '');
    const [city, setCity] = React.useState(user?.city || '');
    const [about, setAbout] = React.useState(user?.about || '');
    const [selectedCategories, setSelectedCategories] = React.useState(user?.categoriesId || []);

    const finishRegistration = () => {
      let newUser = {
        _id: user?._id,
        fullName: name,
        email: email,
        password: password,
        phone: phone,
        city: city,
        about: about,
        categories: selectedCategories,
        role: type
      }
      if(!isEdit){
        registerUser(newUser);
      }else{
        editUser(newUser);
      }
    }

    const registerUser = async (newUser) => {
      try {
        const response = await api.post('/register', newUser);
        const data = await response.data;
        if(!data || data.success === false || !data.token) return console.log(data);
        setToken(data.token);
        return router.push(`/users/${data.user._id}`);
      } catch (error) {
        if(error.response?.data?.message === "Validation failed. Please check the following fields."){
          error.response?.data?.failedFields.forEach((field) => {
            alert(field.message);
          })
        }
        console.log(error);
      }
    };

    const editUser = async (newUser) => {
      try {
        const response = await api.put(`/users/${newUser._id}`, newUser);
        const data = await response.data;
        if(!data || data.success === false) return console.log(data);
        return router.push(`/users/${data.user._id}`);
      } catch (error) {
        if(error.response?.data?.message === "Validation failed. Please check the following fields."){
          error.response?.data?.failedFields.forEach((field) => {
            alert(field.message);
          })
        }
        console.log(error);
      }
    };

    useEffect(() => {
      if(user.categoriesId?.length > 0){
        const categoriesIds = user.categoriesId.map(cat => cat._id);
        setSelectedCategories(categoriesIds);
      }
    }, [user])

  return (
    <div className='bg-bg-blue h-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col justify-center items-center gap-6 p-5'>
      <div className='bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-2 w-full max-w-xl'>
        {isChooseType && <ChooseType isEdit={isEdit} type={type} setType={setType} setIsChooseType={setIsChooseType} setIsForm={setIsForm} />}
        {isForm && type !== null && <Form isEdit={isEdit} type={type} setIsChooseType={setIsChooseType} setIsForm={setIsForm} setIsCategory={setIsCategory} finishRegistration={finishRegistration} setName={setName} setEmail={setEmail} setPassword={setPassword} setPhone={setPhone} setCity={setCity} name={name} email={email} password={password} phone={phone} city={city} />}
        {isCategory && type === 'worker' && <Category isEdit={isEdit} setIsChooseType={setIsChooseType} setIsCategory={setIsCategory} setIsForm={setIsForm} finishRegistration={finishRegistration} selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} about={about} setAbout={setAbout} />}
      </div>
    </div>
  )
}
