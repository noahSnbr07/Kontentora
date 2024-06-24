import logo from '../assets/images/icon_dark.png';
import { useState } from 'react';
import searchOptionsConfig from '../assets/libs/searchOptions.json';
import { AnimatePresence, motion } from "framer-motion";

import { useStringContext } from '../context/StringProvider';

export default function Navbar(): JSX.Element {
  // Search bar input variables
  const [inputValue, setInputValue] = useState<string>('');
  const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false);

  // Struktur für das Link-Array
  interface NavbarLinkProps {
    name: string;
    index: number;
  }

  const [, setCurrentSection] = useStringContext();

  // Alle Links als ein Array
  const links: Array<NavbarLinkProps> = [
    { name: "Home", index: 0 },
    { name: "About", index: 1 },
    { name: "Pricing", index: 2 },
    { name: "Tech", index: 3 },
    { name: "Contact", index: 8 },
  ];

  // Link-Komponente
  const NavBarLink: React.FunctionComponent<NavbarLinkProps> = ({ name, index }: NavbarLinkProps) => {
    // Parse the current location
    // const resolvedPath = useResolvedPath(index.toString());
    // const isMatch = useMatch({ path: resolvedPath.pathname, end: true });

    const updateCurrentSection = (index: number) => {
      setCurrentSection(index);
    }

    // Color the current location white and add animation class if needed
    return (
      <motion.button
        onClick={() => { updateCurrentSection(index) }}
        className={`hover:scale-110 transition-all`}>
        {name}
      </motion.button>
    );
  };

  // Search option props interface
  interface SearchOptionProps {
    keywords: string[];
    location: string;
    label: string;
    index: number;
  }

  function DropDownMenu() {

    const [isOpen, setOpen] = useState<boolean>(false);

    return (
      <div className='block xl:hidden absolute top-1/2 -translate-y-1/2 flex-col gap-5'>
        <button onClick={() => void setOpen(prev => !prev)} className='px-5 py-2 border-2 border-white rounded-full'> {"Sections"} </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="absolute top-full w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >

              {links.map((link: NavbarLinkProps, index: number) =>
                <li className='odd:bg-transparent-10 text-center p-3'>
                  <NavBarLink name={link.name} index={link.index} key={index} />
                </li>
              )}
              <li className='odd:bg-transparent-10 text-center p-3'>
                <button onClick={() => { setOpen(false) }}> {"Close"} </button>
              </li>

            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    )
  }

  //alle optionen, die per Suchleiste gefunden werden können
  const searchOptions: Array<SearchOptionProps> = [...searchOptionsConfig];

  //funktion um input wert zu updaten
  const updatedSearchOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newString = e.target.value;
    setInputValue(newString);
    setInputValue((prevString: string) => prevString.toLowerCase());
  };

  //funktion um zu einer andere seite zu navigieren
  const gotoPage = (index: number) => {
    setSearchBarFocused(false);
    console.log("optionIndex: " + index)
    setCurrentSection(index);
  };

  //box, die ergebnisse anzeigt
  const SearchOptionsDisplayBox = (): JSX.Element => {
    const filteredOptions = searchOptions.filter((option): boolean => {
      const keywords = inputValue.toLowerCase().split(" ");
      return keywords.some((keyword) => option.keywords.some((keyword2) => keyword2.includes(keyword)));
    });

    return (
      <>
        <div
          style={{ transform: 'translate(-50%, -50%)', overflow: 'scroll' }}
          className='absolute bg-dimming backdrop-blur-3xl top-[50%] translate-x-1/2 translate-y-1/2 left-[50%] w-1/2 h-1/2 flex flex-col rounded-xl p-3'>
          <button className='p-3' onClick={() => void setSearchBarFocused(false)}>{"> Close This Panel <"}</button>
          {filteredOptions.map((option: SearchOptionProps) =>
            <div
              onClick={() => void gotoPage(option.index)}
              className='w-full p-3 border-b-2 border-transparent-10 even:bg-transparent-10'>
              {option.label}
            </div>
          )}
        </div>
      </>
    );
  };

  return (
    <nav className='bg-black p-3 text-white h-20 flex flex-row justify-between items-center gap-3'>
      <div className='h-full flex gap-4 items-center flex-1'>
        <img src={logo} alt='Kontentora icon' draggable={false} className='h-full' />
        <input
          onFocus={() => void setSearchBarFocused(true)}
          onChange={(e) => { updatedSearchOptions(e) }}
          type='text'
          maxLength={50}
          className={`bg-transparent-10 p-3 h-10 rounded-full relative ${searchBarFocused ? 'w-full' : 'w-1/4'}`}
        />
      </div>
      <div className='justify-end flex gap-8 relative'>
        {links.map((link: NavbarLinkProps, index: number) =>
          <div className='hidden xl:block'>
            <NavBarLink name={link.name} index={link.index} key={index} />
          </div>
        )}

        <DropDownMenu />
      </div>
      {searchBarFocused && <SearchOptionsDisplayBox />}
    </nav>
  );
}