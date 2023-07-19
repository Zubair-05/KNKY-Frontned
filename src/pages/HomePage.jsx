import React from 'react'
import Posts from '../components/Posts'
import List from '../components/List'
import Match from '../components/Match'
import UnlimitedAccount from '../components/UnlimitedAccount'
import { atom, useRecoilState } from 'recoil'
import { activeFilter } from '../components/atoms'

const HomePage = () => {
  return (
    <>
      <List />
      <div className='flex w-full bg-[#EBEBEC] justify-between'>
        <div className='w-full md:w-2/3'>
          <Posts />
        </div>
        <div className='hidden md:flex  flex-col w-1/3 space-y-6 '>
          <Match/>
          <UnlimitedAccount/>
          <div className='flex flex-col space-x-1'>
     
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>

    </>
  )
}

export default HomePage