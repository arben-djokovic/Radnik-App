import { Droplets, Hammer, Paintbrush, Settings, Wrench, Zap } from 'lucide-react'
import React from 'react'

export default function Category({ isEdit, setIsCategory, setIsForm, finishRegistration, categories, setCategories, about, setAbout }) {

    const errorRef = React.useRef(null);
    const checkFields = () => {
        if(categories.length === 0){
            errorRef.current.classList.remove('hidden');
            window.scrollTo(0, 0);
            return false
        }else{
            errorRef.current.classList.add('hidden');
            return true
        }
    }
    const changeCategories = (category) => {
        if(categories.includes(category)) {
            setCategories(prev => prev.filter(cat => cat !== category))
        } else {
            setCategories(prev => [...prev, category])
        }
    }

    const handleFinishRegistration = () => {
        if(!checkFields()) return
        finishRegistration();
    }
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Izaberite kategorije</h2>
      <p className="text-xs md:text-sm">Označite sve oblasti u kojima radite (možete izabrati više)</p>
      <p ref={errorRef} className="hidden text-sm text-red-500">Morate izabrati barem jednu kategoriju</p>
      <div className='flex flex-col gap-3 mt-4'>
        <div onClick={() => changeCategories('vodoinstalateri')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${categories.includes('vodoinstalateri') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Droplets size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Vodoinstalateri</span>
        </div>
        <div onClick={() => changeCategories('elektricar')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${categories.includes('elektricar') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Zap size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Električari</span>
        </div>
        <div onClick={() => changeCategories('moleri')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${categories.includes('moleri') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Paintbrush size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Moleri</span>
        </div>
        <div onClick={() => changeCategories('stolarija')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${categories.includes('stolarija') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Hammer size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Stolarija</span>
        </div>
        <div onClick={() => changeCategories('klimatizacija')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${categories.includes('klimatizacija') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Settings size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Klimatizacija</span>
        </div>
        <div onClick={() => changeCategories('opsti-radovi')} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${categories.includes('opsti-radovi') ? 'ring-2 ring-blue-400' : ''}`}>
            <div className='p-3 bg-blue-100 rounded-full'>
                <Wrench size={18} className='text-blue-600' />
            </div>
            <span className='text-[17px]'>Opšti radovi</span>
        </div>
        <div>
            <p>O vama (opciono)</p>
            <textarea value={about} onChange={(e) => setAbout(e.target.value)} maxLength={200} placeholder='Napišite nešto o sebi...' className='w-full border border-gray-300 rounded-md p-2 mt-1 min-h-[50px] resize-none'></textarea>
        </div>
      </div>
        <div className="flex flex-row gap-1 mt-2">
            <button onClick={() => {setIsForm(true); setIsCategory(false)}} className="w-full bg-white text-black py-1 rounded-md border border-gray-400 cursor-pointer mt-2 hover:bg-gray-50">
                Nazad
            </button>
            <button onClick={handleFinishRegistration} className="w-full bg-black text-white py-1 rounded-md cursor-pointer mt-2 hover:bg-gray-800">
                {isEdit ? 'Izmijeni' : 'Zavrsi registraciju'}
            </button>
        </div>
    </div>
  )
}
