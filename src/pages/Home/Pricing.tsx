import { motion } from 'framer-motion';

import { bg2, check, barrier, noise } from '../../config/images';

import bundlesListed from '../../assets/libs/bundlesListed.json';
import Header from '../../components/Header';

export default function Pricing() {

   interface BundleProps {
      title: string;
      userAuth: boolean;
      isPWA: boolean;
      hasLanguageToggle: boolean;
      isHosted: boolean;
      hasBackend: boolean;
      highSEO: boolean;
      isResponsive: boolean;
      hasContactForm: boolean;
      color: string;
   }


   const bundles: Array<BundleProps> = [...bundlesListed];

   const Bundle = ({ title, userAuth, isPWA, isHosted, hasLanguageToggle, hasBackend, highSEO, isResponsive, hasContactForm, }: BundleProps): JSX.Element => {

      interface BundlePropContainerProps {
         isActive: boolean;
         label: string;
      }

      const BundlePropContainer = ({ isActive, label }: BundlePropContainerProps) => (
         <div className='flex items-center gap-5'>
            <img src={isActive ? check : barrier} draggable={false} loading='lazy' />
            <p className='text-white'> {label} </p>
         </div>
      );

      return (
         <motion.div animate={{ scale: 1 }}
            style={{ backgroundImage: `url(${noise})`, backgroundSize: 'stretch', }}
            className='bg-transparent-dark-50 backdrop-blur-3xl flex flex-col items-center min-h-full gap-8 p-5 rounded-xl'>
            <p className='bg-transparent-10 rounded-xl w-full p-3 text-center text-white text-2xl'> {title} </p>
            <div className='flex flex-col gap-3'>
               <BundlePropContainer label={"User Authentication"} isActive={userAuth} />
               <BundlePropContainer label={"Is A Progressive Web App"} isActive={isPWA} />
               <BundlePropContainer label={"We do the hosting"} isActive={isHosted} />
               <BundlePropContainer label={"Has a Language Toggle Feature"} isActive={hasLanguageToggle} />
               <BundlePropContainer label={"Has Backend integrated"} isActive={hasBackend} />
               <BundlePropContainer label={"Has a High SEO Rank"} isActive={highSEO} />
               <BundlePropContainer label={"Has a Responsive Design"} isActive={isResponsive} />
               <BundlePropContainer label={"Has A Contact Form"} isActive={hasContactForm} />
            </div>
            <motion.button whileHover={{ scale: 1.1 }} className='bg-accent px-6 py-2 text-white rounded-full'> {"Select"} </motion.button>
         </motion.div>
      );
   }

   return (
      <section
         style={{ background: `url(${bg2})`, backgroundSize: 'cover' }}
         className='min-h-screen w-full flex justify-center p-8 gap-20 flex-col items-center'>
         <Header label="What we offer" />
         <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
               opacity: 1, scale: 1,
               transition: {
                  type: "spring", stiffness: 40,
                  duration: 0.5,
               }
            }}
            viewport={{
               once: true,
            }}
            className='flex justify-center flex-wrap w-full gap-5'>
            {bundles.map((bundle: BundleProps, index: number) => (
               <Bundle
                  key={index}
                  title={bundle.title}
                  userAuth={bundle.userAuth}
                  isPWA={bundle.isPWA}
                  hasLanguageToggle={bundle.hasLanguageToggle}
                  isHosted={bundle.isHosted}
                  hasBackend={bundle.hasBackend}
                  highSEO={bundle.highSEO}
                  isResponsive={bundle.isResponsive}
                  hasContactForm={bundle.hasContactForm}
                  color={bundle.color}
               />
            ))}
         </motion.div>
      </section>
   );
}