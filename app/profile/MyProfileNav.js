'use client'
import React, { useEffect } from 'react'

export default function MyProfileNav({selected, setSelected}) {
    const profilRed = React.useRef(null);
    const myJobsRef = React.useRef(null);
    const historyOfJobsRef = React.useRef(null);

    useEffect(() => {
        if (selected === 0) {
            profilRed.current.classList.add('bg-white');
            myJobsRef.current.classList.remove('bg-white');
            historyOfJobsRef.current.classList.remove('bg-white');
        } else if (selected === 1) {
            profilRed.current.classList.remove('bg-white');
            myJobsRef.current.classList.add('bg-white');
            historyOfJobsRef.current.classList.remove('bg-white');
        } else if (selected === 2) {
            profilRed.current.classList.remove('bg-white');
            myJobsRef.current.classList.remove('bg-white');
            historyOfJobsRef.current.classList.add('bg-white');
        }
    }, [selected]);
  return (
    <div className='bg-[#ededed] w-full grid grid-cols-3 p-1 rounded-md'>
        <button onClick={() => setSelected(0)} ref={profilRed} className='bg-white p-0.5 rounded-md shadow-xs'>Profil</button>
        <button onClick={() => setSelected(1)} ref={myJobsRef} className='p-0.5 rounded-md shadow-xs'>Moji poslovi</button>
        <button onClick={() => setSelected(2)} ref={historyOfJobsRef} className='p-0.5 rounded-md shadow-xs'>Istorija radova</button>
    </div>
  )
}
