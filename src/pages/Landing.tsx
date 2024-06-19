import React from 'react';
import background from '../assets/images/background.png';
import arrow from '../assets/icons/arrow_down.svg';
import Header from '../components/Header.tsx';
import bundlesListed from '../assets/libs/bundlesListed.json';

import noise from '../assets/images/noise.png';
import bgTwo from '../assets/images/bg2.png';
import check from '../assets/icons/check.svg';
import barrier from '../assets/icons/barrier.svg';
export default function Landing() {

  //the main index screen
  const GreetingScreen: React.FunctionComponent = (): JSX.Element => {

    const scrollToNextPage = () => window.scrollTo({ top: window.innerHeight });


    //css style rules for background
    const style = { backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' };
    return (
      <section
        style={style}
        className="h-full w-full flex flex-col items-center gap-5 justify-center text-5xl text-white font-bold">
        <p> The Place where <br /> Imagination becomes <br />
          <span className='text-accent'> Reality </span>
        </p>
        <img src={arrow} alt='arrow down' draggable={false} className='cursor-pointer' onClick={() => void scrollToNextPage()} />
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

  //section to display current bundles
  const PricingPage: React.FunctionComponent = (): JSX.Element => {

    const Bundle = ({ title, userAuth, isPWA, isHosted, hasLanguageToggle, hasBackend, highSEO, isResponsive, hasContactForm, }: BundleProps): JSX.Element => {

      interface BundlePropContainerProps {
        isActive: boolean;
        label: string;
      }

      //containes icon and label, is dispalyed as a single property uf bundle
      const BundlePropContainer = ({ isActive, label }: BundlePropContainerProps) => (
        <div className='flex items-center gap-5'>
          <img src={isActive ? check : barrier} draggable={false} loading='lazy' />
          <p className='text-white'> {label} </p>
        </div>
      );

      return (
        <div
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
          <button className='bg-accent px-6 py-2 text-white rounded-full'> {"Select"} </button>
        </div>
      );
    }


    return (
      <section
        style={{ background: `url(${bgTwo})`, backgroundSize: 'cover', }}
        className='h-full w-full flex flex-col justify-center p-8 items-start min-h-screen gap-20'>
        <Header label="What we offer" />
        <div className='flex justify-center flex-wrap w-full gap-5'>
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
        </div>
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
      <Tech />
      <Contact />
    </div>
  );
}