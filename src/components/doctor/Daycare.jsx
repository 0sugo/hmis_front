import React from 'react'
import DashboardIP from '../doctor/DashboardIP'



const Daycare = () => {
  return (
    <div className='relative overflow-y-auto scrollbar-none h-dvh'>
      <TopNavbar />
      <Sidebar />
      <div className='absolute top-20 left-56 w-[83%] min-h-screen p-4 '>

        <DashboardIP />
      </div>

    </div>
  )
}

export default Daycare
