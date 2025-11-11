import React, { Suspense } from "react";
import WorkersFilters from "./WorkersFilters";
import WorkerItem from "../components/WorkerItem";
import PaginationContainer from "../components/PaginationContainer";

async function getWorkers(searchParams) {
  const query = new URLSearchParams(
    Object.entries(searchParams || {}).reduce((acc, [key, value]) => {
      acc[key] = String(value ?? ''); // forsiraj string, izbjegava Symbol
      return acc;
    }, {})
  ).toString();
  try{
    console.log(query)
    const res = await fetch(`http://localhost:5000/api/workers?${query}`, {
      cache: 'no-store',
    });
    return res.json();
  }catch(err){
    console.log(err)
  }
}


export default async function WorkersPage({ searchParams: searchParamsPromise }) {
  const searchParams = await searchParamsPromise;
  const data = await getWorkers(searchParams);
  const workers = data?.workers || [];

  console.log(workers);

  return (
    <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 p-5 py-10">
      <div className="w-full max-w-5xl flex flex-col gap-1">
        <h1 className="text-3xl font-bold md:text-4xl">Pronađi radnike</h1>
        <p className="text-xs md:text-sm">
          Pregledajte profile proverenih stručnjaka u vašoj blizini
        </p>
      </div>
      <div className="w-full max-w-5xl flex flex-col gap-5">
        <WorkersFilters />
        <p className="text-gray-500 text-md">Pronađeno 6 radnika</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
          {workers.map(worker => <WorkerItem key={worker._id} worker={worker} />)}
        </div>
        <Suspense fallback={null}>
          <PaginationContainer totalPages={10} />
        </Suspense>
      </div>
    </div>
  );
}
