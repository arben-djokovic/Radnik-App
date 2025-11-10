import { Clock, Droplets, Hammer, Paintbrush, Settings, Shield, Star, Users, Wrench, Zap } from "lucide-react";
import Link from "next/link";

//fetch songs

export default async function Home() {
    
return (<main>
    <section className="bg-bg-blue flex flex-col items-center justify-center text-center p-16 min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-56px)]">
       <div className="flex flex-col items-center justify-center gap-5 max-w-[700px]">
          <h1 className="text-4xl font-bold md:text-5xl max-w-[500px]">Pronađi <span className="text-blue-400">stručnjaka</span> za svaki posao</h1>
          <h4 className="text-md md:text-lg">Povezujemo vas sa proverenim radnicima u vašoj blizini. Brzo, sigurno i pouzdano rešavanje svih vaših potreba.</h4>    
          <div className="flex flex-col gap-5 md:flex-row">
            <Link href="/workers" className="flex gap-2 justify-center items-center py-2 px-5 w-[70vw] bg-black text-white border border-black cursor-pointer hover:bg-gray-800 rounded-md md:w-[300px]">
              <Users />
              <p>Trazim radnika</p>
            </Link>
            <Link href="/post-job" className="flex gap-2 justify-center items-center py-2 px-5 w-[70vw] bg-white text-black border border-gray-300 cursor-pointer hover:bg-gray-100 rounded-md md:w-[300px]">
              <Wrench />
              <p>Objavi posao</p>
            </Link>
          </div>

          <div className="flex flex-col gap-5 md:flex-row md:gap-10 mt-10">
            <div className="flex gap-2 justify-center items-center">
              <Star className="text-yellow-400" />
              <span>4.8/5 prosječna ocjena</span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Users />
              <span>10,000+ korisnika</span>
            </div>
            <div className="flex gap-2 justify-center items-center">
              <Shield />
              <span>Sigurnost i pouzdanost</span>
            </div>
          </div>
       </div>
    </section>

    <section className="p-16 flex flex-col gap-14 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold lg:text-4xl">Kako funkcionise?</h2>
      <div className="flex flex-col gap-10 md:flex-row md:gap-5">
        <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center justify-center bg-blue-100 text-blue-600 rounded-full px-6 py-3.5 text-2xl font-bold md:text-3xl"><span className="mt-[-0.2rem]">1</span></div>
          <h4 className="text-xl font-bold">Opisite problem</h4>
          <p className="text-sm">Ukucajte šta vam treba i izaberite odgovarajuću kategoriju. Detaljno opišite posao koji treba da se uradi.</p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center justify-center bg-green-100 text-green-600 rounded-full px-6 py-3.5 text-2xl font-bold md:text-3xl"><span className="mt-[-0.2rem]">2</span></div>
          <h4 className="text-xl font-bold">Radnici se javljaju</h4>
          <p className="text-sm">Stručnjaci iz te oblasti će vam se javiti sa ponudama. Pogledajte njihove ocene i prethodna iskustva.</p>
        </div>

        <div className="bg-white p-10 rounded-lg shadow-md flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center justify-center bg-purple-100 text-purple-600 rounded-full px-6 py-3.5 text-2xl font-bold md:text-3xl"><span className="mt-[-0.2rem]">3</span></div>
          <h4 className="text-xl font-bold">Izaberite radnika</h4>
          <p className="text-sm">Uporedite ponude, izaberite radnika i dogovorite detalje. Nakon završetka posla, ostavite ocenu.</p>
        </div>
      </div>
    </section>

    <section className="py-16 px-5 flex flex-col gap-14 bg-bg-blue text-center">
      <h2 className="text-3xl font-bold lg:text-4xl">Popularne kategorije</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:flex lg:flex-row lg:justify-center lg:gap-10">
        <Link href="/workers?category=vodoinstalateri" className="bg-white rounded-xl flex flex-col gap-3 items-center justify-center py-10 px-5 border border-gray-300 hover:shadow-md cursor-pointer transition">
          <Droplets className="text-blue-600 block lg:hidden" size={35}  />
          <Droplets className="text-blue-600 hidden lg:block" size={50}  />
          <h4 className="text-sm font-bold">Vodoinstalateri</h4>
          <p className="text-[0.8rem] bg-gray-100 px-2 text-nowrap rounded-md text-black">245+ radnika</p>
        </Link>
        <Link href="/workers?category=elektricari" className="bg-white rounded-xl flex flex-col gap-3 items-center justify-center py-10 px-5 border border-gray-300 hover:shadow-md cursor-pointer transition">
          <Zap className="text-blue-600 block lg:hidden" size={35}  />
          <Zap className="text-blue-600 hidden lg:block" size={50}  />
          <h4 className="text-sm font-bold">Elektricari</h4>
          <p className="text-[0.8rem] bg-gray-100 px-2 text-nowrap rounded-md text-black">189+ radnika</p>
        </Link>
        <Link href="/workers?category=moleri" className="bg-white rounded-xl flex flex-col gap-3 items-center justify-center py-10 px-5 border border-gray-300 hover:shadow-md cursor-pointer transition">
          <Paintbrush className="text-blue-600 block lg:hidden" size={35}  />
          <Paintbrush className="text-blue-600 hidden lg:block" size={50}  />
          <h4 className="text-sm font-bold">Moleri</h4>
          <p className="text-[0.8rem] bg-gray-100 px-2 text-nowrap rounded-md text-black">156+ radnika</p>
        </Link>
        <Link href="/workers?category=stolarija" className="bg-white rounded-xl flex flex-col gap-3 items-center justify-center py-10 px-5 border border-gray-300 hover:shadow-md cursor-pointer transition">
          <Hammer className="text-blue-600 block lg:hidden" size={35}  />
          <Hammer className="text-blue-600 hidden lg:block" size={50}  />
          <h4 className="text-sm font-bold">Stolarija</h4>
          <p className="text-[0.8rem] bg-gray-100 px-2 text-nowrap rounded-md text-black">134+ radnika</p>
        </Link>
        <Link href="/workers?category=klimatizacija" className="bg-white rounded-xl flex flex-col gap-3 items-center justify-center py-10 px-5 border border-gray-300 hover:shadow-md cursor-pointer transition">
          <Settings className="text-blue-600 block lg:hidden" size={35}  />
          <Settings className="text-blue-600 hidden lg:block" size={50}  />
          <h4 className="text-sm font-bold">Klimatizacija</h4>
          <p className="text-[0.8rem] bg-gray-100 px-2 text-nowrap rounded-md text-black">98+ radnika</p>
        </Link>
        <Link href="/workers?category=opsti_radovi" className="bg-white rounded-xl flex flex-col gap-3 items-center justify-center py-10 px-5 border border-gray-300 hover:shadow-md cursor-pointer transition">
          <Wrench className="text-blue-600 block lg:hidden" size={35}  />
          <Wrench className="text-blue-600 hidden lg:block" size={50}  />
          <h4 className="text-sm font-bold">Opsti radovi</h4>
          <p className="text-[0.8rem] bg-gray-100 px-2 text-nowrap rounded-md text-black">312+ radnika</p>
        </Link>

      </div>
    </section>

    <section className="py-16 px-5 flex flex-col gap-14 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold lg:text-4xl">Zašto izabrati RadnikApp?</h2>
      <div className="flex flex-col md:flex-row justify-around items-center gap-16">
        <div className="flex flex-col gap-3 items-center justify-center">
          <Shield size={50} className="block md:hidden" />
          <Shield size={70} className="hidden md:block" />
          <h4 className="text-xl font-bold">Provereni radnici</h4>
          <p className="text-sm">Svi radnici prolaze kroz proces verifikacije. Proveravamo njihove kvalifikacije i reference.</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Star size={50} className="block md:hidden" />
          <Star size={70} className="hidden md:block" />
          <h4 className="text-xl font-bold">Sistem ocenjivanja</h4>
          <p className="text-sm">Transparentne ocene i komentari od prethodnih klijenata vam pomažu da donesete pravu odluku.</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
          <Clock size={50} className="block md:hidden" />
          <Clock size={70} className="hidden md:block" />
          <h4 className="text-xl font-bold">Brza povezanost</h4>
          <p className="text-sm">Dobijte ponude u roku od nekoliko sati. Radnici u vašoj blizini će vam se javiti brzo.</p>
        </div>
      </div>
    </section>

    <section className="py-16 px-5 bg-gray-100 text-center flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Brzi pristup</h1>
      <div className="flex flex-col gap-5 items-stretch justify-around md:flex-row">
        <Link href={'/workers'} className="flex flex-col gap-2 items-center md:max-w-[300px] p-10 bg-white rounded-md border border-gray-300 md:w-[100%] hover:bg-gray-50">
          <Users size={50} className="block" color="blue" />
          <h2 className="text-lg font-bold">Pogledaj radnike</h2>
          <p className="text-sm">Pronadji strucnjake za sve vaše potrebe</p>
        </Link>
        <Link href={'/post-job'} className="flex flex-col gap-2 items-center md:max-w-[300px] p-10 bg-white rounded-md border border-gray-300 md:w-[100%] hover:bg-gray-50">
          <Wrench size={50} className="block" color="green" />
          <h2 className="text-lg font-bold">Objavi posao</h2>
          <p className="text-sm">Opisite posao i dobijte ponude od strucnjaka</p>
        </Link>
        <Link href={'/jobs'} className="flex flex-col gap-2 items-center md:max-w-[300px] p-10 bg-white rounded-md border border-gray-300 md:w-[100%] hover:bg-gray-50">
          <Star size={50} className="block" color="gold" />
          <h2 className="text-lg font-bold">Dostupni poslovi</h2>
          <p className="text-sm">Pogledajte poslove i prijavite se za one koji vas zanimaju</p>
        </Link>
      </div>
    </section>
  </main>
  );
}
