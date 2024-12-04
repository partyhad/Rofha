import React from 'react';
import Logo from '@/assets/brand/logo.jpg';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

function Navbar() {
  return (
    <nav className='pl-primary pr-primary h-24'>
      <div className='flex justify-between items-center'>
        <Link href='/'>
          <Image src={Logo} alt="The Father's House" className='h-[90px] w-auto' />
        </Link>
        <div className='hidden lg:block'>
          <NavLinks />
        </div>
        <div className='lg:hidden block'>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
