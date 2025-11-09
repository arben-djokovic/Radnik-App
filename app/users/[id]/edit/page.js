import UserForm from '@/app/components/userForm/UserForm'
import React from 'react'

export default function EditProfile() {
    const user = {
        name: 'test',
        email: 'test@test',
        password: 'test',
        phone: '123123123',
        city: 'test',
        about: 'test',
        categories: ['vodoinstalateri', 'moleri'],
        type: 'worker'
    }
  return (
    <div>
        <UserForm isEdit={true} user={user} />
    </div>
  )
}
