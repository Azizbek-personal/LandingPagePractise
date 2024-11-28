import React from 'react'

const Button = ({text, className}) => {
  return (
    <div>
        <button 
        className={`py-[15px] px-[30px] bg-red-600 text-white border border-red-600 rounded-md hover:bg-transparent hover:text-red-600 ${className} duration-300`}>
            {text}
        </button>
    </div>
  )
}

export default Button;