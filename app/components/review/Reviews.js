import React from 'react'
import ReviewItem from './ReviewItem'

export default function Reviews() {
  return (
    <div className='border border-gray-300 p-5 rounded-md w-full flex flex-col gap-5'>
        <h1 className='text-xl'>Recenzije (4)</h1>
        <div className='flex flex-col gap-3'>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
        </div>
    </div>
  )
}
