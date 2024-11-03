import React from 'react'


import PatientNavigationBar from '../navbar/PatientNavigationBar'
import { IoIosArrowForward } from 'react-icons/io'

const BioChemistry = () => {
  return (

      <div className=''>
        <div className='flex justify-between items-center'>
          <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Laboratory</span><span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Bio Chemistry</span></p>
        </div>

        <div className='bg-white'>
          <div className='text-[#413D80] grid grid-cols-2'>
            <p>Patient Name : <span className='text-[#616161]'>Augmentin</span></p>
            <p>Diagnosis : <span className='text-[#616161]'>250mg</span></p>
            <p>Test Name : <span className='text-[#616161]'>Morning,Evening</span></p>
            <p>Date : <span className='text-[#616161]'>01-01-2023</span></p>
          </div>

        </div>
      </div>
  )
}

export default BioChemistry
