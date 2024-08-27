import React from 'react';
import BrandLogo from './header_component/BrandLogo';
import Navigation from './header_component/Navigation';
import UserActions from './header_component/UserAction';
import SearchBar from './header_component/SearchBar';

const Header = () => {


  return (
    <div className='fixed z-20 w-full bg-[#F0EADC]'>
      <div>
        <header className="bg-none text-[#2F2F2F] py-4 px-4 md:py- md:pl-10 md:pr-6 flex justify-between items-center">
        <div className='flex gap-2'>
        <div className='lg:hidden my-auto align-middle  pt-2 border-black h-auto'>
          <Navigation />
          </div>
          <BrandLogo />
        </div>
          <div className="flex items-center gap-4 md:gap-20">
          <div className='hidden lg:block'>
          <Navigation />
          </div>
            <UserActions />
          </div>
        </header>
        <div className='px-5 pb-3 sm:hidden'>
        <SearchBar/>
        </div>
      </div>
    </div>
  );
};

export default Header;
