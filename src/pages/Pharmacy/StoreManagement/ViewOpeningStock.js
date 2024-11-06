import React from 'react'

const ViewOpeningStock = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold text-[#192252]'>View Opening Stock Entry</h4>

      <div className="bg-white p-4 rounded-lg my-4">
        <div className="flex flex-wrap gap-20 mb-4">
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Item Name:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Cost Price:</h5>
              <p className='float-left'>25</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Sale Price:</h5>
              <p className='float-left'>12</p>
            </div>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Expiry Date:</h5>
              <p className='float-left'>Casual</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Uploadd Quantity:</h5>
              <p className='float-left'>45435</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Cost of Upload Quantity:</h5>
              <p className='float-left'>43534</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewOpeningStock
