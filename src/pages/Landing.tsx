import React, { useEffect, useState } from 'react';
import background from '../assets/images/background.png';
import arrow from '../assets/icons/arrow_down.svg';
import Header from '../components/Header.tsx';
import bundlesListed from '../assets/libs/bundlesListed.json';
import techStack from '../assets/libs/techStack.json';
import { motion } from "framer-motion"

import noise from '../assets/images/noise.png';

import bgTwo from '../assets/images/bg2.png';
import bgThree from '../assets/images/bg3.png';
import bgFour from '../assets/images/bg4.png';

import check from '../assets/icons/check.svg';
import barrier from '../assets/icons/barrier.svg';
import code from '../assets/icons/code.svg';
import mail from '../assets/icons/mail.svg';
import social from '../assets/icons/social.svg';
import design from '../assets/icons/design.svg';
import marketing from '../assets/icons/marketing.svg';

import react from '../assets/logos/react.png';
import tailwind from '../assets/logos/tailwind.png';
import typescript from '../assets/logos/typescript.png';
import firebase from '../assets/logos/firebase.png';
import vite from '../assets/logos/vite.png';
import pwa from '../assets/logos/pwa.png';

import contributorsJSON from '../assets/libs/contributors.json';
import { useStringContext } from '../context/StringProvider.tsx';

export default function Landing() {


  const [currentSection, setCurrentSection] = useStringContext();

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

  useEffect(() => {
    window.scrollTo({ top: window.innerHeight * currentSection });
  }, [currentSection])

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

  interface TechProps {
    id: number;
    title: string;
    description: string;
    glowColor: string;
    link: string;
  }

  const techs: Array<TechProps> = [...techStack];
  const Tech: React.FunctionComponent = (): JSX.Element => {

    //css style rules for background
    const style = { backgroundImage: `url(${bgThree})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' };

    const images: string[] = [react, tailwind, typescript, firebase, vite, pwa,];

    const TechnologyWindow = ({ title, description, glowColor, id, link }: TechProps) => {

      const [descriptionShown, setDescriptionShow] = useState<boolean>(false);

      return (
        <div className={`bg-transparent-dark-50 flex backdrop-blur-3xl h-full flex-col justify-between items-center gap-5 p-5 max-w-[300px] rounded-xl`}>
          <p className={`text-3xl text-white text-center'> {title} </p>`}> {title} </p>
          <img
            style={{ filter: `drop-shadow(0 0 25px ${glowColor})` }}
            className={`w-3/4`} alt={`${title} logo`} loading='lazy' draggable={false} src={images[id]} />
          <i className={`text-transparent-50 flex flex-col gap-2 ${!descriptionShown && "hidden"}`}>
            {description} <br /> <a className='text-accent text-center underline' href={link}> More about {title} </a>
          </i>
          <button onClick={() => { setDescriptionShow(prev => !prev) }} className='bg-accent text-white rounded-full px-8 py-2'>
            <b> {"Learn More"} </b>
          </button>
        </div>
      );
    }

    return (
      <section
        style={style}
        className='min-h-screen w-full flex justify-center p-8 gap-20 flex-col items-center'>
        <Header label="Our Trusted Technologies" />
        <div className='gap-8 grid grid-cols-3 grid-rows-2 place-items-center'>
          {techs.map((tech: TechProps, index: number) =>
            <TechnologyWindow
              id={index}
              key={index}
              title={tech.title}
              description={tech.description}
              glowColor={tech.glowColor}
              link={tech.link}
            />)}
        </div>
      </section>
    );
  }

  interface GetInTouchSectionProps {
    image: string;
    name: string;
    role: string;
    instagram: string;
    gmail: string;
  }

  //display our team
  const contributors: GetInTouchSectionProps[] = [...contributorsJSON]

  const GetInTouchSection = (): JSX.Element => {

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
        <i className='text-transparent-50 flex gap-3'>
          <img src={getRoleIcon(icon)} alt="icon" /> <p> {value}  </p>
        </i>
      );
    }

    return (
      <section
        style={{ backgroundImage: `url(${bgFour})`, objectFit: 'cover', backgroundPosition: 'center' }}
        className='h-screen w-full flex flex-col justify-center gap-8 items-center'>
        <Header label='Our Team' />
        <div className='flex gap-8'>
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
        </div>
      </section>
    );
  }

  return (
    <div className='w-full h-[calc(100dvh-5rem)]'>
      <GreetingScreen />
      <AboutPage />
      <PricingPage />
      <Tech />
      <GetInTouchSection />
    </div>
  );
}