'use client'
import React from 'react'
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

    const [type, setType] = React.useState(user?.type || '');
    const [name, setName] = React.useState(user?.name || '');
    const [email, setEmail] = React.useState(user?.email || '');
    const [password, setPassword] = React.useState('');
    const [phone, setPhone] = React.useState(user?.phone || '');
    const [city, setCity] = React.useState(user?.city || '');
    const [about, setAbout] = React.useState(user?.about || '');
    const [selectedCategories, setSelectedCategories] = React.useState(user?.categories || []);

    const finishRegistration = () => {
      let user = {
        fullName: name,
        email: email,
        password: password,
        phone: phone,
        city: city,
        about: about,
        categories: selectedCategories || [],
        role: type
      }
      if(!isEdit){
        console.log(password)
        registerUser(user);
      }else{

      }
    }

    const registerUser = async (user) => {
      console.log(user)
      try {
        const response = await api.post('/register', user);
        const data = await response.data;
        if(!data || data.success === false || !data.token) return console.log(data);
        setToken(data.token);
        return router.push('/users/1');
      } catch (error) {
        if(error.response?.data?.message === "Validation failed. Please check the following fields."){
          error.response?.data?.failedFields.forEach((field) => {
            alert(field.message);
          })
        }
        console.log(error);
      }
    };

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
