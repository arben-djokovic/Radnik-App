import React from 'react'

export default function ProfileCategory({category, icon}) {
  return (
    <div className='flex items-center gap-3 p-3 border border-blue-500 rounded-md bg-blue-50'>
        {icon}
        <p>{category}</p>
    </div>
  )
}
