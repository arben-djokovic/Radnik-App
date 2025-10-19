import React from "react";
import WorkersFilters from "./WorkersFilters";
import WorkerItem from "../components/WorkerItem";

export default function WorkersPage() {
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
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(worker => <WorkerItem key={worker} worker={worker} />)}
        </div>
      </div>
    </div>
  );
}
