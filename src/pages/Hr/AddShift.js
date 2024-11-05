import React from 'react';
import { toast } from 'sonner';

const AddShift = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className='mx-auto p-4'>
      <h3 className='text-xl text-center font-semibold text-[#192252] mb-4'>Add Shift</h3>
      <form onSubmit={handleSubmit}>
        <div className='p-2'>
          <label htmlFor='name'>Shift Name <span className='text-red-600'>*</span>
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
        <div className="flex flex-wrap">
          <div className='p-2 w-full lg:w-1/2'>
            <label htmlFor='name'>Start Time <span className='text-red-600'>*</span>
              <input
                type='time'
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/2'>
            <label htmlFor='name'>End Time <span className='text-red-600'>*</span>
              <input
                type='time'
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className='p-2 w-full lg:w-1/2'>
          <label htmlFor='name'>Break Time (In Minutes)
            <input
              type='text'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='p-2'>
          <label htmlFor='name'>Repeat Every <span className='text-red-600'>*</span>
            <select 
              name="" id=""
              required
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              <option value="">5</option>
              <option value="">4</option>
            </select>
          </label>
        </div>
        <div className='p-2'>
          <label htmlFor="week">Week(s) <span className='text-red-600'>*</span></label>
          <div className='flex flex-wrap gap-3 items-center my-2'>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>M</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>T</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>W</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>T</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>F</h5>
            <h5 className='border border-[#0E6F1E] text-[#0E6F1E] px-4 py-2 rounded-md'>S</h5>
            <h5 className='border border-[#0E6F1E] text-[#0E6F1E] px-4 py-2 rounded-md'>S</h5>
          </div>
        </div>
        <div className='p-2'>
          <label htmlFor='name'>Ends On <span className='text-red-600'>*</span>
            <input
              type='date'
              required
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='p-2'>
          <label htmlFor='name'>Add Note
            <textarea 
              name="" id=""
              required
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className='py-3'>
          <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-1 w-full hover:bg-[#0E6F1E]'>Add Shift</button>
        </div>
      </form>
    </div>
  );
};

export default AddShift;
