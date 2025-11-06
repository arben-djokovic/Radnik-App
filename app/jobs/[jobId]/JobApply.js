'use client'
import { Select, Textarea } from '@headlessui/react'
import React from 'react'

export default function JobApply() {
    const [time, setTime] = React.useState('')
    const [date, setDate] = React.useState('')
    const [message, setMessage] = React.useState('')
    const [price, setPrice] = React.useState('')
    
    const timeErrorRef = React.useRef(null);
    const dateErrorRef = React.useRef(null);
    
    const checkTime = () => {
        if(!time){
            timeErrorRef.current.classList.remove('hidden');
            return false
        }
        timeErrorRef.current.classList.add('hidden');
        return true;
    }
    const checkDate = () => {
        if(!date) {
            dateErrorRef.current.classList.remove('hidden');
            return false
        };
        dateErrorRef.current.classList.add('hidden');
        return true;
    }

    const applyToJob = () => {
        const timeCheck = checkTime();
        const dateCheck = checkDate();
        if(timeCheck && dateCheck){
            console.log(time, date, message, price);
        }
    }
  return (
    <div className='flex flex-col gap-5 border border-gray-300 p-5 rounded-md'>
        <div>
            <h3 className='font-bold text-lg'>Prijavite se za posao</h3>
            <p>Pošaljite svoju ponudu vlasniku posla</p>
        </div>
        <form className='flex flex-col gap-3' onSubmit={(e) => {e.preventDefault()}}>
            <div className='flex flex-col gap-1'>
                <p>Vasa poruka</p>
                <Textarea onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Opisite sta cete da uradite, posebne napomene...' rows={3} className='px-2 border border-gray-300 w-full' />
            </div>
            <div className='flex flex-col gap-1'>
                <p>Okvirna cijena (EUR)</p>
                <input onChange={(e) => setPrice(e.target.value)} value={price} placeholder='npr. 300' className='border border-gray-300 p-1 w-full' type="number" />
            </div>
            <div className='flex flex-col gap-1'>
                <p>Datum* <span className='hidden error text-sm' ref={dateErrorRef}>Izaberite datum</span></p>
                <input onChange={(e) => setDate(e.target.value)} value={date} type="date" className='border border-gray-300 p-1 w-full' />
            </div>
            <div className='flex flex-col gap-1'>
                <p>Vrijeme* <span className='hidden error text-sm' ref={timeErrorRef}>Izaberite vrijeme</span></p>
                <Select onChange={(e) => setTime(e.target.value)} value={time} name='time' className='border border-gray-300 p-1 w-full'>
                    <option value="">Izaberite vrijeme</option>
                    <option value="jutro">09:00 - 12:00 (Jutro)</option>
                    <option value="podne">12:00 - 15:00 (Podne)</option>
                    <option value="popodne">15:00 - 18:00 (Popodne)</option>
                    <option value="vece">18:00 - 21:00 (Veče)</option>
                    <option value="fleksibilno">Fleksibilno - kad stignete</option>
                </Select>
            </div>
        </form>
        <button onClick={applyToJob} className='w-full text-white bg-black py-2 rounded-md'>Posaljite prijavu</button>
    </div>
  )
}
