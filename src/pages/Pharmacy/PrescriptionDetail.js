import React from 'react'

const PrescriptionDetail = () => {

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold text-[#262e5c]'>Prescription Detail</h4>

      <section className="bg-white p-4 rounded-lg my-4">
        <div className="flex flex-wrap gap-20">
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Drug Name:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Route:</h5>
              <p className='float-left'>25</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Days:</h5>
              <p className='float-left'>Male</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Ammend Prescription:</h5>
              <p className='float-left'>Cafdsg</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Date:</h5>
              <p className='float-left'>Ccxgd</p>
            </div>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Dose:</h5>
              <p className='float-left'>Casual</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Frequency:</h5>
              <p className='float-left'>45435</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Qty in Stock:</h5>
              <p className='float-left'>43534</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Prescribed By:</h5>
              <p className='float-left'>Calculators</p>
            </div>
          </div>
        </div>
      </section>

      <section className='flex items-center justify-end space-x-4'>
        <button type='reset' className='bg-[#FFA620] text-white px-8 py-2 rounded-lg hover:bg-[#a07029]'>Issue</button>
        <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#1f7e2f]'>Amend</button>
      </section>
    </div>
  )
}

export default PrescriptionDetail
