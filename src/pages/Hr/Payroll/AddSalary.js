import React from 'react'

const AddSalary = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Payroll <span className='text-[#0E6F1E]'>> Add Salary</span></h4>

      <div className="bg-white p-4 rounded-lg">
        <h4 className='font-semibold text-[#192252] text-center my-4'>Add Staff Salary</h4>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Select Staff Member
                <select 
                  name="" id=""
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                >
                  <option value="">Select...</option>
                  <option value="">5</option>
                  <option value="">4</option>
                </select>
              </label>
            </div>
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Net Salary
                <input
                  type='number'
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
              <label htmlFor='name'>Basic
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
              <label htmlFor='name'>TDS
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
              <label htmlFor='name'>DA(40%)
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
              <label htmlFor='name'>ESI
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
              <label htmlFor='name'>HRA(15%)
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
              <label htmlFor='name'>PF
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
              <label htmlFor='name'>Coveyance
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
              <label htmlFor='name'>Leave
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
              <label htmlFor='name'>Allowance
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
              <label htmlFor='name'>Prof. Tax
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
              <label htmlFor='name'>Medical Allowance
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
              <label htmlFor='name'>Labour welfare
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
              <label htmlFor='name'>Other
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
              <label htmlFor='name'>Other
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

export default AddSalary
