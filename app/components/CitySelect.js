"use client";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function CitySelect({ selectedCity, setSelectedCity }) {
  const cities = ["Podgorica", "Nikšić", "Bar", "Budva", "Herceg Novi", "Cetinje", "Tuzi", "Pljevlja", "Bijelo Polje", "Berane", "Tivat", "Ulcinj", "Rožaje", "Kotor", "Zeta", "Danilovgrad", "Mojkovac", "Plav", "Kolašin", "Žabljak", "Plužine", "Andrijevica", "Šavnik"];

  return (
    <div className="w-full">
      <Listbox value={selectedCity} onChange={setSelectedCity}>
        <div className="relative mt-1">
          <ListboxButton className="relative w-full cursor-pointer rounded-md border border-gray-300 bg-white py-1 pl-3 pr-10 text-left focus:outline-none focus:ring-2 focus:ring-blue-500">
            <span className="block truncate">{selectedCity ? selectedCity : "Izaberite grad"}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute mt-1 max-h-60 w-auto min-w-full overflow-auto rounded-md border border-gray-200 bg-white py-1 text-base shadow-lg focus:outline-none z-10">
            {cities.map((city, index) => (
              <ListboxOption
                key={index}
                value={city}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active ? "bg-blue-100 text-blue-900" : "text-gray-900"
                  }`
                }
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                      {city}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-blue-600">
                        <Check className="h-5 w-5" />
                      </span>
                    ) : null}
                  </>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
