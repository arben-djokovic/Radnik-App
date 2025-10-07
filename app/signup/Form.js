import { Lock, Mail, MapIcon, Phone, User } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Form({ setIsChooseType, setIsForm, type, setIsCategory, finishRegistration }) {

  const next = () => {
    if (type === 'worker') {
      setIsForm(false);
      setIsCategory(true);
    } else {
      finishRegistration();
    }
  }
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl font-bold">Napravite nalog</h2>
      <p className="text-xs md:text-sm">
        Izaberite kako želite da koristite RadnikApp
      </p>
      <div className="flex flex-col gap-2 my-4">
        <div className="flex flex-col gap-1">
          <p>Ime i prezime</p>
          <div className="relative">
            <User className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Marko Markovic"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Email:</p>
          <div className="relative">
            <Mail className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="vas@email.com"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Lozinka</p>
          <div className="relative">
            <Lock className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="********"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Telefon</p>
          <div className="relative">
            <Phone className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="password"
              placeholder="+382 69 123 456"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Grad</p>
          <div className="relative">
            <MapIcon className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="password"
              placeholder="Podgorica"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-row gap-1 mt-2">
            <button onClick={() => {setIsChooseType(true); setIsForm(false)}} className="w-full bg-white text-black py-1 rounded-md border border-gray-400 cursor-pointer mt-2 hover:bg-gray-50">
                Nazad
            </button>
            <button onClick={next} className="w-full bg-black text-white py-1 rounded-md cursor-pointer mt-2 hover:bg-gray-800">
                Nastavi
            </button>
        </div>
      </div>
    </div>
  );
}
