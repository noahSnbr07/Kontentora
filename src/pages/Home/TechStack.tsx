import techStack from '../../assets/libs/techStack.json';

import { vite, react, firebase, typescript, pwa, tailwind, bg3, close, add } from '../../config/images.ts';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import Header from '../../components/Header';

export default function TechStack() {

   interface TechProps {
      id: number;
      title: string;
      description: string;
      glowColor: string;
      link: string;
   }

   const techs: Array<TechProps> = [...techStack];

   //css style rules for background
   const style = { backgroundImage: `url(${bg3})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' };

   const images: string[] = [react, tailwind, typescript, firebase, vite, pwa,];

   const TechnologyWindow = ({ title, description, glowColor, id, link }: TechProps) => {

      const [descriptionShown, setDescriptionShow] = useState<boolean>(false);

      return (
         <div className={`bg-transparent-dark-50 flex backdrop-blur-3xl h-full flex-col justify-between items-center gap-5 p-5 max-w-[300px] rounded-xl`}>
            <p className={`text-3xl text-white text-center'> {title} </p>`}> {title} </p>
            <img
               style={{ filter: `drop-shadow(0 0 25px ${glowColor})` }}
               className={`w-3/4`} alt={`${title} logo`} loading='lazy' draggable={false} src={images[id]} />

            <AnimatePresence>
               {descriptionShown && (
                  <motion.i
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className={`text-transparent-50 flex flex-col gap-2`}>
                     {description}
                     <a className='text-accent text-center underline' href={link}> More about {title} </a>
                  </motion.i>
               )}
            </AnimatePresence>

            <motion.button
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               onClick={() => { setDescriptionShow(prev => !prev) }}
               className={`bg-accent ${descriptionShown && 'opacity-50'} text-white rounded-full px-5 py-2 flex gap-3`}>
               <img src={descriptionShown ? close : add} /> {descriptionShown ? 'Close' : 'Learn'}
            </motion.button>
         </div>
      );
   }

   return (
      <section
         style={style}
         className='min-h-screen w-full flex justify-center p-8 gap-20 flex-col items-center'>
         <Header label="Our Trusted Technologies" />
         <motion.div initial={{
            x: '-100%',
         }}
            whileInView={{
               x: 20,
               duration: 4,
               transition: {
                  type: "spring", stiffness: 40,
               }
            }}
            viewport={{
               once: true,
            }}

            className='gap-8 grid grid-cols-1 grid-rows-6 sm:grid-cols-3 sm:grid-rows-2 place-items-center'>
            {techs.map((tech: TechProps, index: number) =>
               <TechnologyWindow
                  id={index}
                  key={index}
                  title={tech.title}
                  description={tech.description}
                  glowColor={tech.glowColor}
                  link={tech.link}
               />)}
         </motion.div>
      </section>
   );
}