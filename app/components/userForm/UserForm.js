'use client'
import React from 'react'
import ChooseType from './ChooseType'
import Form from './Form'
import Category from './Category'

export default function UserForm({ isEdit, user }) {
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
    const [categories, setCategories] = React.useState(user?.categories || []);

    const finishRegistration = () => {
      let user = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        city: city,
        about: about,
        categories: categories,
        type: type
      }
      console.log(user);
    }

  return (
    <div className='bg-bg-blue h-full min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col justify-center items-center gap-6 p-5'>
      <div className='bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-2 w-full max-w-xl'>
        {isChooseType && <ChooseType isEdit={isEdit} type={type} setType={setType} setIsChooseType={setIsChooseType} setIsForm={setIsForm} />}
        {isForm && type !== null && <Form isEdit={isEdit} type={type} setIsChooseType={setIsChooseType} setIsForm={setIsForm} setIsCategory={setIsCategory} finishRegistration={finishRegistration} setName={setName} setEmail={setEmail} setPassword={setPassword} setPhone={setPhone} setCity={setCity} name={name} email={email} password={password} phone={phone} city={city} />}
        {isCategory && type === 'worker' && <Category isEdit={isEdit} setIsChooseType={setIsChooseType} setIsCategory={setIsCategory} setIsForm={setIsForm} finishRegistration={finishRegistration} categories={categories} setCategories={setCategories} about={about} setAbout={setAbout} />}
      </div>
    </div>
  )
}
