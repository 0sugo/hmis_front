import React from 'react'

const ProcedeToClaim = () => {
  return (
    <div>
      <div className="text-center space-y-3 mb-8">
        <h4><b>Claim Submission</b></h4>
        <span><b>Is Claim Has Been Submitted?</b></span>
        <div className="flex items-center justify-center gap-2">
          <button className='px-5 py-1 rounded-lg text-white bg-red-600'>No</button>
          <button className='px-5 py-1 rounded-lg text-white bg-green-600'>Yes</button>
        </div>
      </div>

      <form action="">
        <div className='p-2'>
          <label htmlFor='name'>Upload Sceenshot
            <input
              type='file'
              required
              placeholder='Enter Here'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='p-2'>
          <label htmlFor='name'>Enter Claim Number
            <input
              type='text'
              required
              placeholder='Enter Here'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='p-2'>
          <label htmlFor='name'>Remarks *
            <input
              type='file'
              required
              placeholder='Enter Here'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='py-3 '>
          <button type='submit' className='bg-[#0E6F1E] text-white rounded-lg px-5 py-1 w-full hover:bg-[#0E6F1E]'>Submit Claim</button>
        </div>
      </form>
    </div>
  )
}

export default ProcedeToClaim
