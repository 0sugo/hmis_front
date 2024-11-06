import React from 'react'
import pic from '../../assets/images/pic.svg'

const ViewLabReport = () => {

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Labaratory <span className='text-[#0E6F1E]'>> Report > View</span></h4>
      
      <section className="bg-white p-4 rounded-lg">
        <div className="flex flex-wrap gap-20 mb-4">
          <div>
            <img src={pic} className="w-36 h-36" alt="user" />
            <h5>Isris Mamoon</h5>
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
              <h5 className='font-semibold text-[#192252]'>Lab Test Name:</h5>
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
              <h5 className='font-semibold text-[#192252]'>Prescription No.:</h5>
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

        <hr />

        <div className='p-4 border rounded-md mt-4'>
          <h4>Today Report</h4>
          <p>Result of Report</p>
        </div>
      </section>

    </div>
  )
}

export default ViewLabReport
