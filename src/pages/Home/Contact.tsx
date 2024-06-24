import contributorsJSON from '../../assets/libs/contributors.json';

import { motion } from 'framer-motion';

import Header from '../../components/Header';

import { code, mail, social, design, marketing, bg4, } from '../../config/images';

interface GetInTouchSectionProps {
   image: string;
   name: string;
   role: string;
   instagram: string;
   gmail: string;
}

//display our team
const contributors: GetInTouchSectionProps[] = [...contributorsJSON]

export default function Contact(): JSX.Element {

   const getRoleIcon = (role: string): string => {
      let icon: string;
      switch (role.toLowerCase()) {
         case "developer": icon = code; break;
         case "designer": icon = design; break;
         case "marketing": icon = marketing; break;

         case "social": icon = social; break;
         case "mail": icon = mail; break;

         default: icon = "N/A"; break;
      }
      return icon;
   }

   interface ContributorSinglePropertyProps {
      icon: string;
      value: String;
   }

   const ContributorSingleProperty = ({ icon, value }: ContributorSinglePropertyProps) => {
      return (
         <motion.i whileHover={{ scale: 1.05 }} className='text-transparent-50 flex gap-3'>
            <img src={getRoleIcon(icon)} alt="icon" /> <p> {value}  </p>
         </motion.i>
      );
   }

   return (
      <motion.section
         style={{ backgroundImage: `url(${bg4})`, objectFit: 'cover', backgroundPosition: 'center' }}
         className='min-h-screen w-full flex justify-center p-8 gap-20 flex-col items-center'>
         <Header label='Our Team' />
         <motion.div
            initial={{
               x: '100%',
            }}
            whileInView={{
               x: 0,
               duration: 9,
               delay: 5,
               transition: {
                  type: "spring", stiffness: 50,
               }
            }}
            viewport={{
               once: true,
            }}
            className='flex gap-8 flex-col sm:flex-row'>
            {contributors?.map((contributor: GetInTouchSectionProps, index: number) => (
               <div
                  key={index}
                  className='bg-transparent-d-50 rounded-xl backdrop-blur-3xl flex flex-col justify-start gap-5 items-center p-5 text-white'>
                  <img
                     src={contributor.image}
                     alt={`${contributor.name} image`}
                     loading='lazy'
                     draggable={false}
                     className='max-h-60 rounded-full' />

                  <b className='text-3xl'> {contributor.name} </b>

                  <div className='flex flex-col items-center gap-2'>
                     <ContributorSingleProperty icon={"social"} value={contributor.instagram} />
                     <ContributorSingleProperty icon={"mail"} value={contributor.gmail} />
                     <ContributorSingleProperty icon={contributor.role} value={contributor.role} />
                  </div>
               </div>
            ))}
         </motion.div>
      </motion.section>
   );
}