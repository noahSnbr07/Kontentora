import React from 'react';
import background from '../assets/images/background.png';
import arrow from '../assets/icons/arrow_down.svg';
import Header from '../components/Header.tsx';
export default function Landing() {

  //the main index screen
  const GreetingScreen: React.FunctionComponent = (): JSX.Element => {

    //css style rules for background
    const style = { backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' };
    return (
      <section
        style={style}
        className="h-full w-full flex flex-col items-center gap-5 justify-center text-5xl text-white font-bold">
        <p> The Place where <br /> Imagination becomes <br />
          <span className='text-accent'> Reality </span>
        </p>
        <img src={arrow} alt='arrow down' draggable={false} className='cursor-pointer' onClick={() => window.scrollTo({ top: document.body.scrollHeight })} />
      </section>
    );
  }

  const AboutPage: React.FunctionComponent = (): JSX.Element => {
    return (
      <section className='h-full w-full flex justify-center p-8 items-start min-h-screen'>
        <Header label="About Our Buissnes" />
      </section>
    );
  }

  const PricingPage: React.FunctionComponent = (): JSX.Element => {
    return (
      <section className='h-full w-full flex justify-center p-8 items-start min-h-screen'>
        <Header label="What we offer" />
      </section>
    );
  }

  const Tech: React.FunctionComponent = (): JSX.Element => {
    return (
      <section className='h-full w-full flex justify-start p-8 flex-col items-center min-h-screen'>
        <Header label="Our Trusted Technologies" />
      </section>
    )
  }

  const Contact: React.FunctionComponent = (): JSX.Element => {
    return (
      <section className='h-full w-full flex justify-start p-8 flex-col items-center min-h-screen'>
        <Header label="Get in Touch" />
      </section>
    )
  }

  return (
    <div className='w-full h-[calc(100dvh-5rem)]'>
      <GreetingScreen />
      <AboutPage />
      <PricingPage />
      <Tech/>
      <Contact/>
    </div>
  );
}