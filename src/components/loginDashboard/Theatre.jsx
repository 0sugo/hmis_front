import React from 'react'
import theatre from '../../assets/images/theatre.svg';

const Theatre = () => {
  return (
    <div className='w-2/5 h-full hidden md:block'>
      <img src={theatre} className='h-full w-full object-cover ' />
    </div>
  )
}

export default Theatre
