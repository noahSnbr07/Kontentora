import { bg1, arrow } from "../../config/images";
import { motion } from 'framer-motion';

export default function Index() {

   const scrollToNextPage = () => window.scrollTo({ top: window.innerHeight });

   //css style rules for background
   const style = { backgroundImage: `url(${bg1})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' };
   return (
      <section
         style={style}
         className="h-full w-full flex flex-col items-center gap-5 justify-center text-5xl text-white font-bold">
         <p className="text-center"> The Place where <br /> Imagination becomes <br />
            <span className='text-accent'> Reality </span>
         </p>
         <motion.img whileHover={{ scale: 1.5 }} src={arrow} alt='arrow down' draggable={false} className='cursor-pointer' onClick={() => void scrollToNextPage()} />
      </section>
   );
}