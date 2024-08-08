import React from 'react';
import BrandLogo from './header_component/BrandLogo';
import Navigation from './header_component/Navigation';
import UserActions from './header_component/UserAction';

const Header = () => {
  return (
    <div className='fixed z-20 w-full bg-[#F0EADC]'>
      <div>
        <header className="bg-none text-[#2F2F2F] py-8 pl-10 pr-6 flex justify-between items-center">
          <BrandLogo />
          <div className="flex items-center gap-20">
            <Navigation />
            <UserActions />
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
