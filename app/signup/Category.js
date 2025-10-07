import { Droplets, Hammer, Paintbrush, Settings, Wrench, Zap } from 'lucide-react'
import React from 'react'

export default function Category({ setIsCategory, setIsForm, finishRegistration}) {
    const [selectedCategories, setSelectedCategories] = React.useState([])

    const changeCategories = (category) => {
        if(selectedCategories.includes(category)) {
            setSelectedCategories(prev => prev.filter(cat => cat !== category))
        } else {
            setSelectedCategories(prev => [...prev, category])
        }
    }
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Izaberite kategorije</h2>
      <p className="text-xs md:text-sm">Označite sve oblasti u kojima radite (možete izabrati više)</p>
      <div className='flex flex-col gap-3 mt-4'>
        <div onClick={() => changeCategories('vodoinstalateri')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${selectedCategories.includes('vodoinstalateri') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Droplets size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Vodoinstalateri</span>
        </div>
        <div onClick={() => changeCategories('elektricar')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${selectedCategories.includes('elektricar') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Zap size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Električari</span>
        </div>
        <div onClick={() => changeCategories('moleri')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${selectedCategories.includes('moleri') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Paintbrush size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Moleri</span>
        </div>
        <div onClick={() => changeCategories('stolarija')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${selectedCategories.includes('stolarija') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Hammer size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Stolarija</span>
        </div>
        <div onClick={() => changeCategories('klimatizacija')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${selectedCategories.includes('klimatizacija') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Settings size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Klimatizacija</span>
        </div>
        <div onClick={() => changeCategories('opsti-radovi')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${selectedCategories.includes('opsti-radovi') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Wrench size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Opšti radovi</span>
        </div>
        <div>
            <p>O vama (opciono)</p>
            <textarea maxLength={200} placeholder='Napišite nešto o sebi...' className='w-full border border-gray-300 rounded-md p-2 mt-1 min-h-[50px] resize-none'></textarea>
        </div>
      </div>
        <div className="flex flex-row gap-1 mt-2">
            <button onClick={() => {setIsForm(true); setIsCategory(false)}} className="w-full bg-white text-black py-1 rounded-md border border-gray-400 cursor-pointer mt-2 hover:bg-gray-50">
                Nazad
            </button>
            <button onClick={finishRegistration} className="w-full bg-black text-white py-1 rounded-md cursor-pointer mt-2 hover:bg-gray-800">
                Zavrsi registraciju
            </button>
        </div>
    </div>
  )
}
