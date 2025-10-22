import React from 'react'
import MainJobs from './MainJobs'

const metadata = {
    title: 'Radnik App - Dostupni poslovi',
    description: 'Pregledajte poslove u vašoj oblasti i prijavite se za one koji vas zanimaju' 
}
export default function JobsPageContainer() {
  return (
    <div className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 p-5 py-10">
      <div className="w-full max-w-5xl flex flex-col gap-1">
        <h1 className="text-3xl font-bold md:text-4xl">Dostupni poslovi</h1>
        <p className="text-xs md:text-sm">
          Pregledajte poslove u vašoj oblasti i prijavite se za one koji vas zanimaju
        </p>
      </div>
      <MainJobs />
    </div>
  )
}
