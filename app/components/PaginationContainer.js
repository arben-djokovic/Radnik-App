'use client'
import React from 'react'
import Pagination from './Pagination';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function PaginationContainer({ totalPages}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = parseInt(searchParams.get('page') || 1);

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
