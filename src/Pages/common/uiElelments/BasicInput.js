import classNames from 'classnames'
import React from 'react'
const fixedInputClass =
  'rounded-md appearance-none relative block w-full my-4 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
const BasicInput = (props) => {
  const { placeholder, type, className } = props
  const inputStyle = classNames({
    ...className,
  })
  return (
    <div>
      <input placeholder={placeholder} type={type} className={inputStyle} />
    </div>
  )
}

export default BasicInput
