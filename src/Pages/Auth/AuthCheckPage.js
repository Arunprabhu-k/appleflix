import React from 'react'
import { banner3 } from '../../constents/images/brandImages'
import { motion } from 'framer-motion'
import {
  authCheckVarients,
  bannerTextVarient,
} from '../../animation/authAnimation'
import { useSelector } from 'react-redux'
import LoginPage from './LoginPage'
const AuthCheckPage = () => {
  const showLogin = useSelector((state) => state.authReducer.showLogin)
  return (
    <div className='relative w-full h-screen rounded-full overflow-hidden '>
      <img src={banner3} alt='Avatar' className='object-cover w-full h-full' />
      <div className='w-full h-full bg-black absolute top-0 opacity-50' />
      <motion.div
        variants={authCheckVarients}
        initial='closed'
        animate='opened'
        className='w-88 h-full absolute top-80 flex flex-col ml-20 p-5'
      >
        <h1 className='text-white text-5xl leading-snug'>
          All the Greatest{' '}
          <motion.span
            variants={bannerTextVarient}
            initial='closed'
            animate='opened'
          >
            movies
          </motion.span>{' '}
          <br /> in one place
        </h1>
        <button className='bg-blue p-2 mt-9 text-white rounded-md text-center hover:bg-gradient-to-bl'>
          Subscribe Now
        </button>
      </motion.div>
      {showLogin && <LoginPage />}
    </div>
  )
}

export default AuthCheckPage
