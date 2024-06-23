import { useStringContext } from '../context/StringProvider.tsx';
import About from './Home/About.tsx';
import Contact from './Home/Contact.tsx';
import TechStack from './Home/TechStack.tsx';
import Pricing from './Home/Pricing.tsx';
import Index from './Home/Index.tsx';
import { useEffect } from 'react';

export default function Landing() {

  const [currentSection,] = useStringContext();

  useEffect(() => { window.scrollTo({ top: window.innerHeight * currentSection }); }, [currentSection])

  return (
    <div className='w-full h-[calc(100dvh-5rem)]'>
      <Index />
      <About />
      <Pricing />
      <TechStack />
      <Contact />
    </div>
  );
}