import React from 'react';
import Posts from '../components/Posts';
import List from '../components/List';
import Match from '../components/Match';
import Footer from '../components/Footer';
import UnlimitedAccount from '../components/UnlimitedAccount';
import Chat from '../components/Chat';
import { atom, useRecoilState } from 'recoil';
import { activeFilter } from '../components/atoms';

const HomePage = () => {
  return (
    <>
      <List />
      <div className='flex w-full bg-[#EBEBEC] p-3 min-h-screen'>
        <div className='w-full md:w-2/3 pr-4'>
          {/* Add padding-right for gap */}
          <Posts />
        </div>
        <div className='hidden w-full md:w-1/3 flex-col space-y-6 md:flex'>
          {/* Hide on smaller screens */}
          <div className='w-full'>
            <Match />
          </div>
          <div className='w-full'>
            <UnlimitedAccount />
          </div>
          <div className='w-full'>
            <Chat />
          </div>
          <div className='w-full'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
