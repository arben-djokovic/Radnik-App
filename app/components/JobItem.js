import { Calendar, CircleUserRound, MapPin, MessageSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

export default function JobItem({noButtons}) {
  return (
    <div className='flex flex-col gap-5 border border-gray-300 p-5 rounded-md'>
        <div className='flex flex-col gap-2'>
            <div className='flex items-start justify-between'>
                <div>
                    <h2 className='font-bold text-xl'>Popravka slavine u kuhinji</h2>
                    <p className='flex gap-1 text-blue-500 text-sm cursor-pointer hover:opacity-80'>Vodoinstalateri</p>
                </div>
                {/* <p className='text-xs border border-red-800 bg-red-50 text-red-800 py-1 px-2 font-bold rounded-md text-nowrap'>Hitno (danas)</p> */}
                {/* <p className='text-xs border border-green-800 bg-green-50 text-green-800 py-1 px-2 font-bold rounded-md text-nowrap'>Normalno (1-2 nedelje)</p> */}
                {/* <p className='text-xs border border-orange-800 bg-orange-50 text-orange-800 py-1 px-2 font-bold rounded-md text-nowrap'>Normalno (1-2 nedelje)</p> */}
                <p className='text-[10px] border border-blue-800 bg-blue-50 text-blue-800 py-1 px-2 font-bold rounded-md text-nowrap'>Fleksibilno (kad stignete)</p>
            </div>
            <div className='flex gap-3 text-[12px] text-gray-600 md:text-sm'>
                <p className='flex gap-1'><MapPin size={20} /> <span>Novi Sad</span></p>
                <p className='flex gap-1'><Calendar size={20} /> <span>Pre 2 sata</span></p>
                <p className='flex gap-1'><MessageSquare size={20} /> <span>0 prijava</span></p>
            </div>
        </div>
        <p>Potrebno je popraviti slavinu u kuhinji koja curi. Slavina je stara oko 5 godina, mislim da treba zameniti zaptivač. Hitno je jer se voda troši nepotrebno. Mogu da obezbedim materijal ako je potrebno.</p>
        <div className='flex flex-col gap-3'>
            <div className='flex gap-2 cursor-pointer hover:opacity-80'>
                <CircleUserRound size={45} />
                <p>Marko Jovanovic</p>
            </div>
            {!noButtons &&
            <div className='flex md:flex-row flex-col gap-2'>
                <button className='bg-white text-black border border-black py-1 px-3 rounded-md cursor-pointer hover:bg-gray-100 w-full md:w-auto'>
                    <span className="flex gap-1 w-full justify-center items-center"><MessageSquare size={15} /> Kontakt</span>
                </button>
                <Link href={'/jobs/1'} className='bg-black text-white border border-black py-1 px-3 rounded-md text-center cursor-pointer hover:bg-gray-800 w-full'>Prijavi se</Link>
            </div>}
        </div>
    </div>
  )
}
