import React from 'react'

const Button = ({ children, handleClick, classes }) => {
  return (
    <button className={`register text-white py-2 ${classes}`} onClick={handleClick}>{children}</button>
  )
}

export default Button