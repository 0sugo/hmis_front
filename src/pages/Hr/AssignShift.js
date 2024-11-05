import React from 'react'

const AssignShift = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Shift Management <span className='text-[#0E6F1E]'>> Assign Shift</span></h4>

      <div className="bg-white p-4 rounded-lg">
        <h5 className='font-semibold text-[#192252] mb-4'>Assign Shift</h5>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Department <span className='text-red-600'>*</span>
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
              <label htmlFor='name'>Member Name <span className='text-red-600'>*</span>
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
          </div>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Date <span className='text-red-600'>*</span>
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
              <label htmlFor='name'>Shifts <span className='text-red-600'>*</span>
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
          </div>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Start Date <span className='text-red-600'>*</span>
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
              <label htmlFor='name'>End Date <span className='text-red-600'>*</span>
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
            <label htmlFor='name'>Break Time (In Minutes) <span className='text-red-600'>*</span>
              <input
                type='text'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2'>
            <label htmlFor="">Accept Extra Hours
              <input type="radio" />
            </label>
          </div>
          <div className='p-2'>
            <label htmlFor="">Repeat Every 5 Days
              <input type="radio" />
            </label>
          </div>
          <div className='p-2'>
            <label htmlFor="">Publish
              <input type="radio" />
            </label>
          </div>
          <div className='p-2 text-right'>
            <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AssignShift
