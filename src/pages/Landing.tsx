import background from '../assets/images/background.png';
import arrow from '../assets/icons/arrow_down.svg';
export default function Landing() {

   //the main index screen
   const GreetingScreen: React.FunctionComponent = (): JSX.Element => {
      //css style rules for background
      const style = { backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' };
      return (
         <section
            style={style}
            className="h-full w-full flex flex-col items-center gap-5 justify-center text-5xl text-white font-bold">
            <p className='line-h-10'> The Place where <br /> Imagination becomes <br />
               <span className='text-accent'> Reality </span>
            </p>
            <img src={arrow} alt='arrow down' draggable={false} className='cursor-pointer' />
         </section>
      );
   }

   const AboutPage: React.FunctionComponent = (): JSX.Element => {
      return (
         <section className='h-full w-full flex justify-between items-center'>

         </section>
      )
   }

   return (
      <div className='bg-debug-3 w-full h-[calc(100dvh-5rem)]'>
         <GreetingScreen />
         <AboutPage />
      </div>
   );
}