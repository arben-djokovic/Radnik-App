import api from '@/app/api/api';
import { Droplets, Hammer, Paintbrush, Settings, Wrench, Zap } from 'lucide-react'
import React, { useEffect } from 'react'
import { categoryIcons } from '@/app/config/categoryIcons.config';

export default function Category({ isEdit, setIsCategory, selectedCategories, setSelectedCategories , setIsForm, finishRegistration, about, setAbout }) {
    const errorRef = React.useRef(null);
    const [categories, setCategories] = React.useState([]);

    
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
    const changeCategories = (categoryId) => {
        if(selectedCategories.includes(categoryId)) {
            setSelectedCategories(prev => prev.filter(cat => cat !== categoryId))
        } else {
            setSelectedCategories([...selectedCategories, categoryId])
        }
    }

    const handleFinishRegistration = () => {
        if(!checkFields()) return
        finishRegistration();
    }

    useEffect(() => {
        const getCategories = async () => {
            try{
                const response = await api.get('/categories');
                const data = await response.data;
                if (!data || data.success === false) return console.log(data);
                setCategories(data.categories);
                console.log(categories)
            }catch(err){
                console.log(err)
            }
        }
        getCategories();
    }, [])
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Izaberite kategorije</h2>
      <p className="text-xs md:text-sm">
        Označite sve oblasti u kojima radite (možete izabrati više)
      </p>
      <p ref={errorRef} className="hidden text-sm text-red-500">
        Morate izabrati barem jednu kategoriju
      </p>
      <div className="flex flex-col gap-3 mt-4">
        {categories.map(category => {
            const Icon = categoryIcons[category.slug];
            return(
                <div key={category._id} onClick={() => changeCategories(category._id)} className={`flex items-center gap-3 border border-gray-300 p-3 rounded-md cursor-pointer text-xl hover:bg-gray-100 ${selectedCategories.includes(category._id) ? "ring-2 ring-blue-400" : ""}`}>
                    <div className="p-3 bg-blue-100 rounded-full">
                        {Icon && <Icon size={18} className="text-blue-600" />}
                    </div>
                    <span className="text-[17px]">{category.name}</span>
                </div>
            )
        })} 
        <div>
          <p>O vama (opciono)</p>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            maxLength={200}
            placeholder="Napišite nešto o sebi..."
            className="w-full border border-gray-300 rounded-md p-2 mt-1 min-h-[50px] resize-none"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-row gap-1 mt-2">
        <button
          onClick={() => {
            setIsForm(true);
            setIsCategory(false);
          }}
          className="w-full bg-white text-black py-1 rounded-md border border-gray-400 cursor-pointer mt-2 hover:bg-gray-50"
        >
          Nazad
        </button>
        <button
          onClick={handleFinishRegistration}
          className="w-full bg-black text-white py-1 rounded-md cursor-pointer mt-2 hover:bg-gray-800"
        >
          {isEdit ? "Izmijeni" : "Zavrsi registraciju"}
        </button>
      </div>
    </div>
  );
}
