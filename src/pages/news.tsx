import React from 'react';
import "../assets/libs/news.json";

const Newspage: React.FunctionComponent = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white font-bold">
      <h1 className="text-6xl">News</h1>
      <h2 className='text-2-1'>Find whats New</h2>
    </div>
  );
};

export default Newspage;
 