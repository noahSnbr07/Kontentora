import React from 'react';

// Define the props interface
interface HeaderProps {
   label: string;
}

// Define the Header component with props
const Header: React.FC<HeaderProps> = ({ label, }: HeaderProps) => {
   return (
      <h2 className='text-5xl text-white w-full text-center'>{label}</h2>
   );
};

export default Header;