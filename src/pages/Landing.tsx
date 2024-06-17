import React from 'react';
import background from '../assets/images/background.png';
import arrow from '../assets/icons/arrow_down.svg';

// ArrowDownIcon-Komponente
const ArrowDownIcon: React.FunctionComponent<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <img
      src={arrow}
      alt='arrow down'
      draggable={false}
      className='cursor-pointer'
      onClick={onClick}
    />
  );
};

// GreetingScreen-Komponente
const GreetingScreen: React.FunctionComponent<{ scrollToBottom: () => void }> = ({ scrollToBottom }) => {
  const style = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  };

  return (
    <section
      style={style}
      className="h-full w-full flex flex-col items-center gap-5 justify-center text-5xl text-white font-bold"
    >
      <p className='line-h-10'>
        The Place where <br /> Imagination becomes <br />
        <span className='text-accent'>Reality</span>
      </p>
      <ArrowDownIcon onClick={scrollToBottom} />
    </section>
  );
};

// AboutPage-Komponente
const AboutPage: React.FunctionComponent = (): JSX.Element => {
  return (
    <section className='h-full w-full flex justify-between items-center'>
      <p className='h-full w-full flex flex-col items-center gap-5 justify-center text-5xl text-white font-bold'>
        What we Offer
      </p>
    </section>
  );
};

// Hauptkomponente Landing
const Landing: React.FunctionComponent = (): JSX.Element => {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className='bg-debug-3 w-full h-[calc(100dvh-5rem)]'>
      <GreetingScreen scrollToBottom={scrollToBottom} />
      <AboutPage />
    </div>
  );
}

export default Landing;
