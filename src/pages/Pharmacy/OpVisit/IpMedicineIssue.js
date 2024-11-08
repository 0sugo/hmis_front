import React from 'react'

const IpMedicineIssue = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='mx-auto p-4'>
      <h4 className='my-4 text-[#192252]'>ip Medicine Issue</h4>
      <div className="bg-white p-4 rounded-lg">
        <h4 className='text-[#0E6F1E] my-4'>IP Medicine Issue List</h4>

        <form onSubmit={handleSubmit}>
          <div className='p-2'>
            <label htmlFor='name'>Location
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
          <div className='p-2'>
            <label htmlFor='name'>Patient Name
              <input
                type='text'
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2'>
            <label htmlFor='name'>Patient Code
              <input
                type='text'
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2'>
            <label htmlFor='name'>Visit Code
              <input
                type='text'
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Date From
                <input
                  type='date'
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Date To
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

          <div className='p-2 flex items-center justify-center space-x-4'>
            <button type='reset' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Reset</button>
            <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default IpMedicineIssue
