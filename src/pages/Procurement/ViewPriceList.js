import React from 'react'

const ViewPriceList = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Procurement <span className='text-[#0E6F1E]'>> Price List</span></h4>

      <div className="bg-white p-4 my-4">
        <h5 className='font-semibold text-[#192252]'>Order Information</h5>

        <div className='flex items-center justify-around my-4'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Order Number:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Vendor Name:</h5>
              <p className='float-left'>25</p>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Date and Time:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Last Name:</h5>
              <p className='float-left'>25</p>
            </div>
          </div>
        </div>

        <br />
        <hr />
        <br />


        <div className="flex gap-4">
          <h5>Description:</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae hic ullam sunt at! 
            Sapiente officiis natus quia fuga quis, ipsum, sit, animi voluptate quaerat quasi doloribus 
            Sapiente officiis natus quia fuga quis, ipsum, sit, animi voluptate quaerat quasi doloribus 
            Sapiente officiis natus quia fuga quis, ipsum, sit, animi voluptate quaerat quasi doloribus 
            assumenda! Necessitatibus, doloremque?
          </p>
        </div>

        <br />
        <hr />

        <h5 className='font-semibold text-[#192252]'>Address & Contact Information</h5>

        <div className='flex items-center justify-between my-4'>
          <div className='space-y-4'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Address:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Hospital Name:</h5>
              <p className='float-left'>25</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Address:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
          </div>
          <div className='space-y-4'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Contact NUmber:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Labaratory Name:</h5>
              <p className='float-left'>25</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Landmark Name:</h5>
              <p className='float-left'>25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPriceList
