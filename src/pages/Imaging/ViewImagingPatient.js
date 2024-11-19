import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../../assets/images/pic.svg'

const ViewImagingPatient = () => {
  return (
    <div className='mx-auto p-4'>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h4 className='font-semibold my-4'>Imaging <span className='text-[#0E6F1E]'>> Patient > #DOC12312F</span></h4>
        <div className='space-x-2'>
          <Link to='/app/'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Pull Image</span></Link>
          <Link to='/app/'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Upload Report</span></Link>
          <Link to='/app/'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Create Report</span></Link>
        </div>
      </div>

      <section className="bg-white p-4 rounded-lg my-4">
        <div className="flex flex-wrap gap-20">
          <div>
            <img src={pic} className="w-36 h-36" alt="user" />
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Patient Name:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Age:</h5>
              <p className='float-left'>25</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Gender:</h5>
              <p className='float-left'>Male</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Occupation:</h5>
              <p className='float-left'>Cafdsg</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Imaging Type:</h5>
              <p className='float-left'>Ccxgd</p>
            </div>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Visit Code:</h5>
              <p className='float-left'>Casual</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Scheme:</h5>
              <p className='float-left'>45435</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Prescription No:</h5>
              <p className='float-left'>43534</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Address:</h5>
              <p className='float-left'>12/12/23</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Prescribed By:</h5>
              <p className='float-left'>Calculators</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ViewImagingPatient
