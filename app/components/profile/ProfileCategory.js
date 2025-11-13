import { categoryIcons } from '@/app/config/categoryIcons.config';
import React from 'react'

export default function ProfileCategory({ category }) {
  const Icon = categoryIcons[category.slug];
  return (
    <div className='flex items-center gap-3 p-3 border border-blue-500 rounded-md bg-blue-50'>
        {Icon && <Icon size={18} className="text-blue-600" />}
        <p>{category?.name}</p>
    </div>
  )
}
