import React from 'react'
import pic from '../../../assets/images/pic.svg'

const PatientDetails = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold text-[#192252]'>Patient Detail</h4>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 my-4">
        <div>
          <div className="bg-white p-4 rounded-lg mb-4 flex items-center justify-center">
            <div>
              <div className='flex items-center justify-center mb-2'>
                <img src={pic} className="w-16 rounded-full" alt="user" />
              </div>
              <div className='text-center space-y-2'>
                <h5>Isris Mamoon</h5>
                <h5>Patient ID: #DFGDF234</h5>
                <h5>Malindi Kenya</h5>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className='font-semibold text-[#192252] mb-4'>Patient Information</h4>

            <div className='space-y-3'>
              <div className='flex items-center space-x-6'>
                <h5 className='text-[#192252]'>Patient Name:</h5>
                <p className='float-left'>Maimoon</p>
              </div>
              <div className='flex items-center space-x-6'>
                <h5 className='text-[#192252]'>Age:</h5>
                <p className='float-left'>25</p>
              </div>
              <div className='flex items-center space-x-6'>
                <h5 className='text-[#192252]'>Gender:</h5>
                <p className='float-left'>Male</p>
              </div>
              <div className='flex items-center space-x-6'>
                <h5 className='text-[#192252]'>Occupation:</h5>
                <p className='float-left'>Cafdsg</p>
              </div>
              <div className='flex items-center space-x-6'>
                <h5 className='text-[#192252]'>Lab Test Name:</h5>
                <p className='float-left'>Ccxgd</p>
              </div>
          </div>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h4 className='font-semibold text-[#192252]'>Past Prescription</h4>
        </div>
      </section>
    </div>
  )
}

export default PatientDetails
