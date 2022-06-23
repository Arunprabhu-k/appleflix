import React from 'react'
import { logo } from '../../constents/images/brandImages'
const SplashPage = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center bg-black'>
      <div className='w-[160px] sm:w-128'>
        <img src={logo} alt='logo' />
      </div>
    </div>
  )
}

export default SplashPage
