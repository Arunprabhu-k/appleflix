import React from 'react'
import { useDispatch } from 'react-redux'
import { logo } from '../../constents/images/brandImages'
import { SHOW_LOGIN_DRAWER } from '../../state/actionTypes'

const BasicHeader = () => {
  const [showLogin, setShowLogin] = React.useState(false)
  const dispatch = useDispatch()
  return (
    <div className='w-full h-[100px] bg-transaprent_black flex justify-between items-center absolute px-5 z-50'>
      <div className='flex flex-row  items-end'>
        <img src={logo} alt='logo' className='w-12' />
        <h1 className='text-white text-lg font-semibold'>
          <span className='text-white pl-1'> watch</span>
        </h1>
      </div>
      <div>
        <div className='bg-primary w-20 p-2 flex justify-center rounded-md'>
          <button
            className='outline-none bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white'
            onClick={() => {
              dispatch({ type: SHOW_LOGIN_DRAWER })
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default BasicHeader
