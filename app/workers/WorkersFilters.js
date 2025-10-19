'use client'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon, Search } from "lucide-react";
import React from "react";
import clsx from 'clsx'
import CitySelect from "../components/CitySelect";
import SelectCategoryFilter from "../components/SelectCategoryFilter";

const sortBy = [
  {id: 1, name: "Najbolje ocjenjeni"},
  {id: 2, name: "Najvise recenzija"},
]


export default function WorkersFilters() {
  const [selectedCategory, setSelectedCategory] = React.useState({id: 1, name: "Sve kategorije"});
  const [selectedCity, setSelectedCity] = React.useState(null);
  const [selectedSort, setSelectedSort] = React.useState(sortBy[0]);


  return (
    <div className="grid gap-2 grid-cols-1 items-center p-4 px-6 w-full max-w-5xl border border-gray-300 rounded-md md:grid-cols-4 md:gap-[3%]">
      <div className="relative">
        <Search className="absolute top-2 left-2 text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Pretrazi poslove..."
          className="border pl-8 border-gray-300 p-1 w-full rounded-md"
        />
      </div>
      <SelectCategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <div>
        <CitySelect selectedCity={selectedCity} setSelectedCity={setSelectedCity} />
      </div>
      <div> 
        <Listbox value={selectedSort} onChange={setSelectedSort}>
        <ListboxButton
          className={clsx(
            'relative block rounded-md py-1.5 pr-8 pl-3 text-left text-sm/6 text-black border border-gray-300',
          )}
        >
          {selectedSort.name}
          <ChevronDownIcon
            className="group pointer-events-none absolute top-2.5 right-2.5 size-4 fill-whit/60"
            aria-hidden="true"
          />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            ' rounded-md border border-gray-300 bg-white/5 p-1 [--anchor-gap:--spacing(1)] focus:outline-none',
            'transition duration-100 ease-in data-leave:data-closed:opacity-0'
          )}
        >
          {sortBy.map((sort) => (
            <ListboxOption
              key={sort.name}
              value={sort}
              className="group flex items-center gap-2 rounded-lg px-3 py-1.5 select-none bg-white hover:bg-gray-100 cursor-pointer">
              <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-black">{sort.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      </div>
    </div>
  );
}
