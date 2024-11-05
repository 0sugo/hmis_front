import React from 'react'

const UpdatePersonalInformation = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className="text-[#192252] font-semibold text-center">Personal Information</h4>

      <div className='my-4'>
        <form >
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Passport Number
                <input
                  type='text'
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Passport Expiry Date
                <input
                  type='date'
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Tel
                <input
                  type='Number'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Nationality
                <input
                  type='text'
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Religion
                <input
                  type='number'
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <label htmlFor='name'>Marital status
              <select 
                name="" id=""
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              >
                <option value="">Select...</option>
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </label>
          </div>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Employment of Spouce
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>No. of Children
                <input
                  type='text'
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className='p-2 text-center'>
            <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdatePersonalInformation
