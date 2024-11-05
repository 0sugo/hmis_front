import React from 'react'

const UpdateEducationInformation = () => {

  const handSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='mx-auto p-4'>
      <h4 className="text-[#192252] font-semibold text-center">Experience Informations</h4>

      <div className='my-4'>
        <form onSubmit={handSubmit}>
          <div className='border border-slate-200 rounded-lg mb-4'>
            <span className='text-[#0E6F1E] ml-2'>Experience Informations</span>
            <div className="flex flex-wrap">
              <div className='p-2 w-full lg:w-1/2'>
                <label htmlFor='name'>Hospital Name
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
                <label htmlFor='name'>Location
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
                <label htmlFor='name'>Designation
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
                <label htmlFor='name'>Period From
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
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Period To
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
          <div className='p-2 text-center'>
            <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#1d8f30]'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateEducationInformation
