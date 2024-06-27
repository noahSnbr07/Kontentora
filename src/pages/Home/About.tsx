import { motion } from 'framer-motion';
import { icon, icon_dark } from '../../config/images';
import { useState } from 'react';

import { radio_checked, radio_unchecked, bg5 } from '../../config/images';

export default function About() {

   const [images] = useState<Array<string>>([icon_dark, icon]);
   const [imageIndex, setImageIndex] = useState<number>(0);

   function iterateImages(index: number): void {
      setImageIndex(index);
   }

   function scrollToContact(): void { window.scrollTo({ top: window.innerHeight * 4 }); }

   return (
      <motion.section
         style={{ backgroundImage: `url(${bg5})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
         className='h-screen w-full flex justify-center p-8 gap-20 flex-col items-center text-white'>
         <motion.div
            className="w-full flex flex-col gap-8 justify-between sm:flex-row"
            initial={{
               x: '100%',
            }}
            whileInView={{
               x: 0,
               duration: 9,
               delay: 9,
               transition: {
                  type: "spring", stiffness: 50,
               }
            }}
            viewport={{
               once: true,
            }}>

            <article className='flex flex-col gap-3 items-center'>
               <h2 className='text-5xl text-center'> {"About Kontentora"} </h2>
               <br />
               <div className='text-3xl'>
                  <p> We focus on delivering </p>
                  <p> High-Performant, Accessible, Customizable Products </p>
                  <p> including Web Sites, Applications and Services </p>
               </div>
               <br />
               <button onClick={() => void scrollToContact()} className='bg-accent px-5 py-2 rounded-full w-fit text-2xl'>
                  {"Contact Us"}
               </button>
            </article>

            <div className='w-full flex justify-center flex-col items-center'>
               <img
                  className=' max-w-60'
                  src={images[imageIndex]}
                  alt={`image of`}
                  draggable={false}
                  loading='lazy' />
               <div className='flex gap-5 justify-center items-center p-5'>
                  {
                     images.map((image: string, index: number) => {
                        return (
                           <button key={image} onClick={() => void iterateImages(index)} className='rounded-full'>
                              <img src={index === imageIndex ? radio_checked : radio_unchecked} />
                           </button>
                        )
                     })
                  }
               </div>
            </div>
         </motion.div>
      </motion.section >
   );
}