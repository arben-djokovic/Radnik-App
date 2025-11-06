import { Calendar, CircleCheckBigIcon, Euro, StarIcon, TimerIcon, X } from "lucide-react";
import React from 'react'

export default function JobApplication() {
  return (
      <div className="flex flex-col gap-5 border border-gray-300 p-5 rounded-md">
        <div className="flex gap-2 cursor-pointer hover:opacity-80">
            <div className="rounded-full border border-black w-10 h-10 bg-gray-600"></div>
            <div>
                <p>Marko Jovanovic</p>
                <p className='text-sm text-blue-500'>
                    <span>Vodoinstalateri</span>
                    <span className='text-black'>{" | "}</span><span>Električari</span><span className='text-black'>{" | "}</span>
                    <span>Moleri</span><span className='text-black'>{" | "}</span>
                </p>
                <div className="text-sm flex gap-5 mt-1">
                    <div className='flex gap-1 items-center'>
                        <StarIcon size={20} color='gold' />
                        <p>4.8</p>
                    </div>
                    <p>Aplicirao prije 2 sata</p>
                </div>
            </div>
        </div>
        <div className="text-sm">
            <p className="font-bold">Ponuda:</p>
            <p>Imam 15 godina iskustva sa servisom klima uređaja. Mogu da dođem narednog utorka oko 10h. Pregledam sve vrste uređaja.</p>
        </div>
        <div className="flex gap-[20%]">
            <div className="flex items-center gap-1 text-sm">
                <Calendar size={24} />
                <div>
                    <p>Datum</p>
                    <p>12. Dec 2024</p>
                </div>
            </div>
            <div className="flex items-center gap-1 text-sm">
                <TimerIcon size={24} />
                <div>
                    <p>Vreme</p>
                    <p>10:00 - 12:00</p>
                </div>
            </div>
            <div className="flex items-center gap-1 text-sm">
                <Euro size={24} />
                <div>
                    <p>Cijena</p>
                    <p>1000 EUR</p>
                </div>
            </div>
        </div>
        <div className="flex gap-2">
            <button className="w-full bg-green-600 py-1 px-3 rounded-md flex items-center justify-center gap-2 text-white text-center hover:opacity-80">
                <CircleCheckBigIcon size={24} />
                <p className="text-sm">Prihvati</p>
            </button>
            <button className="w-full py-1 px-3 rounded-md text-center border border-red-600 text-red-600 hover:bg-red-50">
                Odbij
            </button>
        </div>

        {/* Prihvacen radnik */}
        {/* <div className="flex gap-3 items-center bg-green-100 text-green-800 py-1 px-3 rounded-md">
            <CircleCheckBigIcon size={24} />
            <div>
                <p>Prihvaćeno</p>
                <p className="text-sm">Radnik je obavešten o prihvacanju</p>
            </div>
        </div> */}

        {/* Odbijen radnik */}
        {/* <div className="flex gap-3 items-center bg-red-100 text-red-800 py-1 px-3 rounded-md">
            <X size={24} />
            <div>
                <p>Odbijeno</p>
                <p className="text-sm">Radnik je odbijen</p>
            </div>
        </div> */}
      </div> 
  )
}
