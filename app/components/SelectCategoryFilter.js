import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from 'lucide-react'

const categories = [
  { id: 1, name: 'Sve kategorije' },
  { id: 2, name: 'Elektricar' },
  { id: 3, name: 'Vodoinstalater' },
  { id: 4, name: 'Opsti radovi' },
]


export default function SelectCategoryFilter({ selectedCategory, setSelectedCategory }) {
  useEffect(() => {
    setSelectedCategory(categories[0])
  }, [])
  return (
          <div> 
        <Listbox value={selectedCategory} onChange={setSelectedCategory}>
        <ListboxButton
          className={clsx(
            'relative block rounded-md py-1.5 pr-8 pl-3 text-left text-sm/6 text-black border border-gray-300',
          )}
        >
          {selectedCategory?.name}
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
          {categories.map((category) => (
            <ListboxOption
              key={category.name}
              value={category}
              className="group flex items-center gap-2 rounded-lg px-3 py-1.5 select-none bg-white hover:bg-gray-100 cursor-pointer">
              <CheckIcon className="invisible size-4 fill-white group-data-selected:visible" />
              <div className="text-sm/6 text-black">{category.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
      </div>
  )
}
