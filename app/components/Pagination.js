'use client'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react'
import React from 'react'

export default function Pagination({currentPage, goToPage, totalPages}) {

    const previousPage = () => {
        if(currentPage > 1) goToPage(currentPage - 1)
    }
    const nextPage = () => {
        if(currentPage < totalPages) goToPage(currentPage + 1)   
    }
    
  return (
    <div className='flex items-center gap-3 justify-center'>
        <button disabled={currentPage === 1} onClick={previousPage}><ArrowLeftCircleIcon color={currentPage === 1 ? 'gray' : 'black'} size={35} /></button> 
        <div className='flex gap-1 items-center font-bold'>
            <span>{currentPage}</span>
            <span>/</span>
            <span>{totalPages}</span>
        </div>
        <button disabled={currentPage === totalPages} onClick={nextPage}><ArrowRightCircleIcon color={currentPage === totalPages ? 'gray' : 'black'} size={35} /></button>
    </div>
  )
}
