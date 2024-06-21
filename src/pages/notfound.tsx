import React from 'react';

const Notfound: React.FunctionComponent = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center text-white font-bold">
      <h1 className="text-5xl">404</h1>
      <p className="text-xl mt-4">Page not found or not made yet</p>
      <p className='text-2-1'>We are sorry please contect Support if you have an problem</p>
    </div>
  );
};

export default Notfound;
