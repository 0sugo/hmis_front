import React from 'react'
import Theatre from '../components/loginDashboard/Theatre'
import Options from '../components/loginDashboard/Options'

const LoginDashboard = () => {
  return (
    <div className='flex md:flex-row justify-center gap-8 md:gap-0 flex-col h-screen w-full'>
      {/* <Theatre className='flex-1 h-full' /> */}
      <Options className='flex-1 h-full' />
    </div>
  )
}

export default LoginDashboard
