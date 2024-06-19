import { Link, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';
import logo from '../assets/images/icon_dark.png';
import { useState } from 'react';
import searchOptionsConfig from '../assets/libs/searchOptions.json';

export default function Navbar(): JSX.Element {
  // Search bar input variables
  const [inputValue, setInputValue] = useState<string>('');
  const [searchBarFocused, setSearchBarFocused] = useState<boolean>(false);

  // Struktur für das Link-Array
  interface NavbarLinkProps {
    name: string;
    url: string;
  }

  const navigate = useNavigate();

  // Alle Links als ein Array
  const links: Array<NavbarLinkProps> = [
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
    { name: "About", url: "/about" },
    {name: "News", url:"/help"},
    { name: "Cart", url: "/cart" },
    { name: "Tech", url: "/tech" },
    { name: "Account", url: "/account" },
    { name: "Help", url: "/help" },
    { name: "Contact", url: "/contact" },
  ];

  // Link-Komponente
  const NavBarLink: React.FunctionComponent<NavbarLinkProps> = ({ name, url }: NavbarLinkProps) => {
    // Parse the current location
    const resolvedPath = useResolvedPath(url);
    const isMatch = useMatch({ path: resolvedPath.pathname, end: true });

    // Color the current location white and add animation class if needed
    return (
      <Link
        className={`${isMatch ? 'text-white' : 'text-transparent-50'} hover:scale-110 transition-all`}
        replace={true}
        to={url}>
        {name}
      </Link>
    );
  };

  // Search option props interface
  interface SearchOptionProps {
    keywords: string[];
    location: string;
    label: string;
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
  const gotoPage = (url: string) => {
    setSearchBarFocused(false);
    navigate(url);
  };

  //box, die ergebnisse anzeigt
  const SearchOptionsDisplayBox = () => {
    const filteredOptions = searchOptions.filter((option) => {
      const keywords = inputValue.toLowerCase().split(" ");
      return keywords.some((keyword) => option.keywords.some((keyword2) => keyword2.includes(keyword)));
    });

    return (
      <>
        <div
          style={{ transform: 'translate(-50%, -50%)', overflow: 'scroll' }}
          className='absolute bg-dimming backdrop-blur-3xl top-[50%] translate-x-1/2 translate-y-1/2 left-[50%] w-1/2 h-1/2 flex flex-col rounded-xl p-3'>
          <button className='p-3' onClick={() => void setSearchBarFocused(false)}>{"> Close This Panel <"}</button>
          {filteredOptions.map((option) =>
            <div
              onClick={() => void gotoPage(option.location)}
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
      <div className='justify-end flex gap-8'>
        {links.map((link: NavbarLinkProps, index: number) =>
          <NavBarLink name={link.name} url={link.url} key={index} />
        )}
      </div>
      {searchBarFocused && <SearchOptionsDisplayBox />}
    </nav>
  );
}