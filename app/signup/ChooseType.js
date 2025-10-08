import { User, Wrench } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ChooseType({ type, setType, setIsChooseType, setIsForm }) {
    const [isUser, setIsUser] = React.useState(type === 'user')
    const [isWorker, setIsWorker] = React.useState(type === 'worker')
    const errorRef = React.useRef(null)

    const goNext = () => {
        if(!isUser && !isWorker) return errorRef.current.classList.remove('hidden');
        errorRef.current.classList.add('hidden');
        if(isUser) setType('user');
        if(isWorker) setType('worker');
        setIsChooseType(false);
        setIsForm(true);
    }
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Napravite nalog</h2>
        <p className='text-xs md:text-sm'>Izaberite kako želite da koristite RadnikApp</p>
        <p ref={errorRef} className="hidden text-sm text-red-500">Izaberite jednu od opcija</p>
        <div className='flex flex-col gap-4 mt-2'>
            <div onClick={() => {setIsUser(true); setIsWorker(false)}} className={`border border-gray-300 p-5 rounded-lg shadow-md flex gap-4 w-full items-center cursor-pointer hover:shadow-lg ${isUser ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-white'}`}>
                <div className=' bg-blue-100 text-blue-500 rounded-full p-3'>
                    <User size={25} />   
                </div>
                <div>
                    <h2>Korisnik</h2>
                    <p className='text-xs md:text-sm'>Objavljujte poslove i pronađite stručnjake za sve vaše potrebe oko kuće i posla.</p>
                </div>
            </div>
            <div onClick={() => {setIsUser(false); setIsWorker(true)}} className={`border border-gray-300 p-5 rounded-lg shadow-md flex gap-4 w-full items-center cursor-pointer hover:shadow-lg ${isWorker ? 'ring-2 ring-blue-400 bg-blue-50' : 'bg-white'}`}>
                <div className=' bg-green-100 text-green-500 rounded-full p-3'>
                    <Wrench size={25} />   
                </div>
                <div>
                    <h2>Radnik</h2>
                    <p className='text-xs md:text-sm'>Pronađite nove poslove, gradite reputaciju i proširite svoju klijentelu.</p>
                </div>
            </div>
            <button onClick={goNext} className='w-full min-w-[100px] py-1 bg-black text-center text-white border border-black cursor-pointer hover:bg-gray-800 rounded-md'>Nastavi</button>
            <p className='text-center text-sm'>Već imate nalog? <Link href={'/login'} className='text-blue-400 hover:text-blue-500'>Prijavite se</Link></p>
        </div>
    </div>
  )
}
