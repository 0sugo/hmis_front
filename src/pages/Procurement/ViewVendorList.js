import React from 'react'
import pic from '../../assets/images/pic.svg'

const ViewVendorList = () => {

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Procurement <span className='text-[#0E6F1E]'>> Vendor List</span></h4>
      
      <section className="bg-white p-4 rounded-lg">
        <div className="flex flex-wrap gap-20 mb-4">
          <div>
            <img src={pic} className="w-36 h-36" alt="user" />
            <h5>Isris Mamoon</h5>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Vendor Name:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Age:</h5>
              <p className='float-left'>25</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Email Address:</h5>
              <p className='float-left'>Male</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Category:</h5>
              <p className='float-left'>Cafdsg</p>
            </div>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Visit ID:</h5>
              <p className='float-left'>Casual</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Contact No:</h5>
              <p className='float-left'>45435</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Credit Card Limit:</h5>
              <p className='float-left'>43534</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Address:</h5>
              <p className='float-left'>12/12/23</p>
            </div>
          </div>
        </div>

        <hr />

        <div className='mt-4'>
          <h4 className='font-semibold text-[#192252]'>Bank Details</h4>

          <div className='p-4 mt-2'>
            <div className="flex flex-wrap gap-20">
              <div className='space-y-3'>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Bank Account Number:</h5>
                  <p className='float-left'>Maimoon</p>
                </div>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>IFSC Code:</h5>
                  <p className='float-left'>25</p>
                </div>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Branch Name:</h5>
                  <p className='float-left'>Male</p>
                </div>
              </div>
              <div className='space-y-3'>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Bank Name:</h5>
                  <p className='float-left'>Casual</p>
                </div>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>City:</h5>
                  <p className='float-left'>45435</p>
                </div>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Account Type:</h5>
                  <p className='float-left'>43534</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ViewVendorList
