import React from 'react';

const Header = () => {
  return (
    <header className='event-header-bg px-primary h-[205px] md:h-[305px] lg:h-[405px] flex flex-col items-center justify-center text-center gap-3 text-white'>
      <h1 className='font-secondary font-bold text-2xl md:text-[32px] lg:text-[40px]'>
        Our Events
      </h1>
      <p className='font-normal text-lg md:text-xl lg:text-2xl'>
        Our mandate is to  be a prophetic voice in our generation, empowering believers to hear, obey, and proclaim the word of the Lord, and to demonstrate the power and love of God in our community and beyond.
      </p>
    </header>
  );
};

export default Header;
