import React from 'react'

const AddPatient = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className='my-4'>Add Patient</h4>

      <div className="bg-white p-4 rounded-lg">
        <h5 className='mb-3'>Add Patient Detail</h5>
        <hr />

        <div className='py-4'>
          <form action="">
            <div className='w-full lg:w-2/3'>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>First Name <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="text" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter first name'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Last Name <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="text" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter last name'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4'>
                  <label htmlFor="Age" className='whitespace-nowrap'>Age <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-left w-full lg:w-3/6'>
                  <input 
                    type="date" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Date of Birth <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="date" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='dob'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Mobile Number <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="number" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter your mobile number'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Identification Type <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <select 
                    name="id" id="identity"
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                  >
                    <option value="">Select</option>
                    <option value="">ID</option>
                    <option value="">pASSPORT</option>
                  </select>
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>National ID <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <select 
                    name="id" id="identity"
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                  >
                    <option value="">Select</option>
                    <option value="">ID</option>
                    <option value="">pASSPORT</option>
                  </select>
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>ID No. <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="number" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter your ID number'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Upload ID photo <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="File" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Upload Photo'
                  />
                </div>
              </div>
              <div className='mx-0 lg:mx-48 py-4 '>
                <span>Contact Information:</span>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Phone Number 1 <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="number" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter here...'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Phone Number 2 <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="number" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter here...'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Email <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="email" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter here...'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Address <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="text" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Enter here...'
                  />
                </div>
              </div>
              <div className='my-2 flex flex-wrap items-center justify-center space-x-2'>
                <div className='text-right w-full lg:w-1/4 '>
                  <label htmlFor="fname" className='whitespace-nowrap'>Residence <span className='text-red-600'>*</span></label>
                </div>
                <div className='float-right w-full lg:w-3/6'>
                  <input 
                    type="number" 
                    className='px-3 py-3 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    required
                    placeholder='Town'
                  />
                </div>
              </div>
              <div className='flex items-center justify-center mt-6'>
                <button className='px-5 py-2 bg-[#0E6F1E] text-white rounded-lg w-full lg:w-1/2'>Save & Next</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddPatient
