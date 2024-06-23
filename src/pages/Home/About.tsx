import { motion } from 'framer-motion';
import Header from '../../components/Header';

export default function About() {
   return (
      <motion.section className='h-full w-full flex justify-center p-8 items-start min-h-screen'>
         <Header label="About Our Buisness" />
      </motion.section>
   );
}