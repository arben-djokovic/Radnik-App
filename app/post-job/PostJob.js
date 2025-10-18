"use client";
import React from "react";
import CategorySelect from "../components/CategorySelect";
import CitySelect from "../components/CitySelect";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function PostJob() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [city, setCity] = React.useState(null);
  const [selectedUrgency, setSelectedUrgency] = React.useState(null);

  const urgencyErrorRef = React.useRef(null);
  const categoryErrorRef = React.useRef(null);
  const cityErrorRef = React.useRef(null);
  const titleErrorRef = React.useRef(null);
  const descriptionErrorRef = React.useRef(null);

  const handlePostJob = () => {
    if(title.length < 5 || title.length > 50){
      titleErrorRef.current.classList.remove('hidden');
    }else{
      titleErrorRef.current.classList.add('hidden');
    }
    if(!selectedCategory){
      categoryErrorRef.current.classList.remove('hidden');
    }else{
      categoryErrorRef.current.classList.add('hidden');
    }
    if(description.length < 20 || description.length > 500){
      descriptionErrorRef.current.classList.remove('hidden');
    }else{
      descriptionErrorRef.current.classList.add('hidden');
    }
    if(!city){
      cityErrorRef.current.classList.remove('hidden');
    }else{
      cityErrorRef.current.classList.add('hidden');
    }
    if(!selectedUrgency){
      urgencyErrorRef.current.classList.remove('hidden');
    }else{
      urgencyErrorRef.current.classList.add('hidden');
    }
  };
  return (<>
    <div className="bg-bg-blue min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)] flex flex-col items-center gap-6 p-5 py-10">
      <div className="w-full max-w-2xl flex flex-col gap-1">
        <h1 className="text-3xl font-bold md:text-4xl">Objavi posao</h1>
        <p className="text-xs md:text-sm">
          Opišite posao koji treba da se uradi i dobijte ponude od stručnjaka
        </p>
      </div>

      <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-2 w-full max-w-2xl">
        <h2 className="text-lg font-bold">Osnovne informacije</h2>
        <p className="text-xs">Opišite ukratko šta vam treba</p>
        <div className="flex flex-col gap-2 my-4">
          <div className="flex flex-col gap-1">
            <div>
              <p>
                Naslov posla *{" "}
                <span
                  ref={titleErrorRef}
                  className="hidden text-xs ml-auto text-red-500"
                >
                  mora imati izmedju 5 i 50 karaktera
                </span>
              </p>
            </div>
            <div>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="npr. Popravka slavine u kuhinji"
                className="border border-gray-300 p-1 w-full rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p>
                Kategorija *{" "}
                <span
                  ref={categoryErrorRef}
                  className="hidden text-xs ml-auto text-red-500"
                >
                  Morate izabrati jednu kategoriju
                </span>
              </p>
            </div>
            <CategorySelect
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
          <div className="flex flex-col gap-1">
            <div>
              <p>
                Detaljan opis posla *{" "}
                <span
                  ref={descriptionErrorRef}
                  className="hidden text-xs ml-auto text-red-500"
                >
                  mora imati izmedju 20 i 500 karaktera
                </span>
              </p>
            </div>
            <div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Opišite detaljan opis posla, sta vam treba, kad, dje..."
                className="border border-gray-300 p-1 text-sm w-full rounded-md"
              />
              <p className="text-xs">
                Što detaljniji opis, to bolje ponude ćete dobit
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-2 w-full max-w-2xl">
        <h2 className="text-lg font-bold">Lokacija i vrijeme</h2>
        <p className="text-xs">Gde i kada treba da se uradi posao</p>
        <div className="flex flex-col gap-2 my-4">
          <div className="flex flex-col gap-1">
            <p>
              Grad *{" "}
              <span
                ref={cityErrorRef}
                className="hidden text-xs ml-auto text-red-500"
              >
                Unesite vas grad
              </span>
            </p>
            <CitySelect selectedCity={city} setSelectedCity={setCity} />
          </div>
        </div>
        <div className="flex flex-col gap-2 my-4">
            <p>Hitnost posla * <span
                ref={urgencyErrorRef}
                className="hidden text-xs ml-auto text-red-500"
              >
                Morate izabrati jednu hitnost
              </span></p>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                <div onClick={() => setSelectedUrgency('hitno')} className={`flex gap-2 p-2 border border-gray-300 items-center rounded-md cursor-pointer ${selectedUrgency === 'hitno' ? 'ring-2 ring-blue-400 bg-blue-100 hover:bg-blue-100' : "hover:bg-gray-100"}`}>
                    <Clock size={20} className="text-red-400" />
                    <p>Hitno (danas)</p>
                </div>
                <div onClick={() => setSelectedUrgency('brzo')} className={`flex gap-2 p-2 border border-gray-300 items-center rounded-md cursor-pointer ${selectedUrgency === 'brzo' ? 'ring-2 ring-blue-400 bg-blue-100 hover:bg-blue-100' : "hover:bg-gray-100"}`}>
                    <Clock size={20} className="text-orange-400" />
                    <p>Brzo (1-3 dana)</p>
                </div>
                <div onClick={() => setSelectedUrgency('normalno')} className={`flex gap-2 p-2 border border-gray-300 items-center rounded-md cursor-pointer ${selectedUrgency === 'normalno' ? 'ring-2 ring-blue-400 bg-blue-100 hover:bg-blue-100' : "hover:bg-gray-100"}`}>
                    <Clock size={20} className="text-green-400" />
                    <p>Normalno (1-2 nedelje)</p>
                </div>
                <div onClick={() => setSelectedUrgency('fleksibilno')} className={`flex gap-2 p-2 border border-gray-300 items-center rounded-md cursor-pointer ${selectedUrgency === 'fleksibilno' ? 'ring-2 ring-blue-400 bg-blue-100 hover:bg-blue-100' : "hover:bg-gray-100"}`}>
                    <Clock size={20} className="text-blue-400" />
                    <p>Fleksibilno (kad stignete)</p>
                </div>
            </div>
        </div>
      </div>

      <div className="flex gap-3 w-full max-w-2xl">
        <button
          onClick={handlePostJob}
          className="w-full bg-black text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-800"
        >
          Objavi posao
        </button>
        <Link href="/" className="bg-white text-black py-2 px-10 rounded-md cursor-pointer hover:bg-gray-100 border border-gray-300">Otkazi</Link>
      </div>
    </div>
  </>);
}
