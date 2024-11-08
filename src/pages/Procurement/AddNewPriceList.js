import React from 'react'
import { Link } from 'react-router-dom'


const AddNewPriceList = () => {

  return (
    <div className='mx-auto p-4'>
      <div className='flex items-center justify-between'>
        <h4 className='font-semibold my-4'>Procurement <span className='text-[#0E6F1E]'>>Add new Price List</span></h4>
        <Link to='/app/allproducts' className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Add New Price List</Link>
      </div>

      <section className='bg-white p-4 my-4 rounded-lg'>
        
      </section>
    </div>
  )
}

export default AddNewPriceList
