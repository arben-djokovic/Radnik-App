import { Wrench } from "lucide-react";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white py-8 md:py-12 px-4 flex flex-col gap-8">
        <div className="flex flex-col gap-3 px-10">
            <Logo size={32} fontsize={'2xl'}/>
            <p className="text-sm text-gray-300 ">Povezujemo ljude sa stručnjacima za sve vrste poslova.</p>
        </div>
        <div className="px-10 grid grid-cols-2 gap-5 md:grid-cols-3 justify-around ">
            <div className="flex flex-col gap-1 w-[120px]">
                <h4 className="text-lg font-bold md:text-xl">Korisnici</h4>
                <ul className="text-sm flex flex-col gap-1 text-gray-400 md:text-md">
                    <li><Link href="/workers">Pronađi radnike</Link></li>
                    <li><Link href="/post-job">Objavi posao</Link></li>
                    <li><Link href="/jobs">Poslovi</Link></li>
                    <li><Link href="/privacy">Sigurnost</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-1 md:ml-[30%]">
                <h4 className="text-lg font-bold md:text-xl">Radnici</h4>
                <ul className="text-sm flex flex-col gap-1 text-gray-400 md:text-md"> 
                    <li><Link href="/edit-profile">Postani radnik</Link></li>
                    <li><Link href="/help">Pomoć</Link></li>
                    <li><Link href="/resources">Resursi</Link></li>
                </ul>
            </div>
            <div className="flex flex-col gap-1 md:ml-[30%]">
                <h4 className="text-lg font-bold md:text-xl">Podrška</h4>
                <ul className="text-sm flex flex-col gap-1 text-gray-400 md:text-md">
                    <li><Link href="/contact">Kontakt</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                    <li><Link href="/terms">Uslovi korišćenja</Link></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
