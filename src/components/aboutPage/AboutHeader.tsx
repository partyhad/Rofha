import React from 'react';

const AboutHeader = () => {
  return (
    <header className='about-header-bg px-primary h-[205px] md:h-[305px] lg:h-[405px] flex flex-col items-center justify-center text-center gap-3 text-white'>
      <h1 className='font-secondary font-bold text-2xl md:text-[32px] lg:text-[40px]'>
        About The Rock of Faith Healing Assembly International
      </h1>
      <p className='font-normal text-lg md:text-xl lg:text-2xl'>
      Mission Statement:
      The Rock of Faith Healing Assembly International exists to spread the Gospel, heal the hurting, and empower believers to become effective disciples of Jesus Christ, impacting our community and the world.
      </p>
    </header>
  );
};

export default AboutHeader;
