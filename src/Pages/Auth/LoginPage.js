import React from 'react'
import { motion } from 'framer-motion'
import { loginPageVarient } from '../../animation/authAnimation'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { formSchemas } from '../../components/forms/formScheme'
import BasicInput from '../common/uiElelments/BasicInput'
const LoginPage = () => {
  const { register, onHandleSubmit, error } = useForm({
    resolver: yupResolver(formSchemas),
  })
  return (
    <motion.div
      variants={loginPageVarient}
      initial='closed'
      animate='opened'
      className='w-full h-full bg-white absolute top-0 flex justify-center items-center'
    >
      <form
        onSubmit={onHandleSubmit}
        className='w-1/3 h-2/3 flex flex-col justify-center'
      >
        <div>
          <BasicInput placeholder='userNmae' className='bg-black' />
          <BasicInput placeholder='password' />
        </div>
      </form>
    </motion.div>
  )
}

export default LoginPage
