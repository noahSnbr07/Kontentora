import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../assets/images/icon_dark.png'
export default function Navbar(): JSX.Element {

   //structure for the link-array
   interface NavbarLinkProps {
      name: string;
      url: string;
   }

   //all links as an array
   const links: Array<NavbarLinkProps> = [
      { name: "Home", url: "/" },
      { name: "Pricing", url: "/pricing" },
      { name: "About", url: "/about" },
      { name: "Tech", url: "/tech" },
      { name: "Cart", url: "/cart" },
      { name: "Account", url: "/account" },
      { name: "Contact", url: "/contact" },
   ];

   //Link component
   const NavBarLink: React.FunctionComponent<NavbarLinkProps> = ({ name, url }: NavbarLinkProps): JSX.Element => {

      //parse the current location
      const resolvedPath = useResolvedPath(url);
      const isMatch = useMatch({ path: resolvedPath.pathname, end: true });

      //color the current location white
      return (
         <Link className={isMatch ? 'text-white' : 'text-transparent-50'} replace={true} to={url}>
            {name}
         </Link>
      );
   }

   return (
      <nav className='bg-black p-3 text-white h-20 flex flex-row justify-between items-center gap-3'>
         <div className='h-full flex gap-3 items-center'>
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