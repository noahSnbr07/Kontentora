import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../assets/images/icon_dark.png';
import './Navbar.css'; // Importiere deine CSS-Datei

export default function Navbar(): JSX.Element {

  // Struktur für das Link-Array
  interface NavbarLinkProps {
    name: string;
    url: string;
  }

  // Alle Links als ein Array
  const links: Array<NavbarLinkProps> = [
    { name: "Home", url: "/" },
    { name: "Pricing", url: "/pricing" },
    { name: "About", url: "/about" },
    { name: "Cart", url: "/cart" },
    { name: "Tech", url: "/tech" },
    { name: "Account", url: "/account" },
    { name: "Contact", url: "/contact" },
  ];

  // Link-Komponente
  const NavBarLink: React.FunctionComponent<NavbarLinkProps> = ({ name, url }: NavbarLinkProps): JSX.Element => {

    // Zustand für die Animation
    const [isHovered, setIsHovered] = useState(false);

    // Parse the current location
    const resolvedPath = useResolvedPath(url);
    const isMatch = useMatch({ path: resolvedPath.pathname, end: true });

    // Event Handler für Hover und Leave
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Color the current location white and add animation class if needed
    return (
      <Link
        className={`${isMatch ? 'text-white' : 'text-transparent-50'} ${isHovered ? 'pop-animation' : ''}`}
        replace={true}
        to={url}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {name}
      </Link>
    );
  }

  return (
    <nav className='bg-black p-3 text-white h-20 flex flex-row justify-between items-center gap-3'>
      <div className='h-full flex gap-4 items-center'>
        <img src={logo} alt='kontentora icon' draggable={false} className='h-full' />
        <input
          type='text'
          maxLength={50}
          className='bg-transparent-10 p-3 h-10 rounded-full w-full'
        />
      </div>
      <div className='justify-end flex gap-8'>
        {/* Map all links */}
        {links.map((link: NavbarLinkProps, index: number) =>
          <NavBarLink name={link.name} url={link.url} key={index} />)}
      </div>
    </nav>
  );
}
