'use client'
import React from 'react'
import Pagination from './Pagination';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function PaginationContainer({currentPage, totalPages}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  
  const goToPage = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <Pagination currentPage={currentPage} goToPage={goToPage} totalPages={totalPages} />
    </div>
  )
}
