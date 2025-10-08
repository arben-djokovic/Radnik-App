import { Lock, Mail, MapIcon, Phone, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import CitySelect from "../components/CitySelect";

export default function Form({ setIsChooseType, setIsForm, type, setIsCategory, finishRegistration, setName, setEmail, setPassword, setPhone, setCity, name, email, password, phone, city }) {
  const nameErrorRef = React.useRef(null);
  const emailErrorRef = React.useRef(null);
  const passwordErrorRef = React.useRef(null);
  const phoneErrorRef = React.useRef(null);
  const cityErrorRef = React.useRef(null);

  const checkFields = () => {
    let isValid = true
    if(!name || name.length < 2 || name.length > 20) {
      nameErrorRef.current.classList.remove('hidden');
      isValid = false;
    }else{
      nameErrorRef.current.classList.add('hidden');
    }

    if(!email || !email.includes('@')) {
      emailErrorRef.current.classList.remove('hidden');
      isValid = false;
    }else{
      emailErrorRef.current.classList.add('hidden');
    }

    if(!password || password.length < 6 || password.length > 20) {
      passwordErrorRef.current.classList.remove('hidden');
      isValid = false;
    }else{
      passwordErrorRef.current.classList.add('hidden');
    }

    if(!phone || phone.length < 8) {
      phoneErrorRef.current.classList.remove('hidden');
      isValid = false;
    }else{
      phoneErrorRef.current.classList.add('hidden');
    }

    if(!city) {
      cityErrorRef.current.classList.remove('hidden');
      isValid = false;
    }else{
      cityErrorRef.current.classList.add('hidden');
    }

    if(!isValid) return false
    if(isValid) return true
  }

  const next = () => {
    if(!checkFields()) return
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
          <div>
            <p>Ime i prezime * <span ref={nameErrorRef} className="hidden text-xs ml-auto text-red-500">mora imati izmedju 2 i 20 karaktera</span></p>
          </div>
          <div className="relative">
            <User className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Marko Markovic"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Email: * <span ref={emailErrorRef} className="hidden text-xs ml-auto text-red-500">Unesite pravilan email</span></p>
          <div className="relative">
            <Mail className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="vas@email.com"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Lozinka * <span ref={passwordErrorRef} className="hidden text-xs ml-auto text-red-500">mora imati izmedju 6 i 20 karaktera</span></p>
          <div className="relative">
            <Lock className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value.replace(/\s+/g, ''))}
              type="password"
              placeholder="********"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Telefon * <span ref={phoneErrorRef} className="hidden text-xs ml-auto text-red-500">Unesite pravilan broj telefona</span></p>
          <div className="relative">
            <Phone className="absolute top-2 left-2 text-gray-400" size={16} />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              placeholder="+382 69 123 456"
              className="border pl-8 border-gray-300 p-1 w-full rounded-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <p>Grad * <span ref={cityErrorRef} className="hidden text-xs ml-auto text-red-500">Unesite vas grad</span></p>
          <CitySelect selectedCity={city} setSelectedCity={setCity} />
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
