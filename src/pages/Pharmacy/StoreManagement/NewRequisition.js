import React from 'react'

const NewRequisition = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold text-[#192252]'>New Requisition</h4>
      
      <div className="bg-white p-4 rounded-lg my-4">
        <h4 className='font-semibold text-[#192252]'>Internal Stock Request</h4>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Type
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
              <label htmlFor='name'>Doc No.
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
              <label htmlFor='name'>From Store
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
              <label htmlFor='name'>To Store
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
              <label htmlFor='name'>Date
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
              <label htmlFor='name'>Item Name
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
              <label htmlFor='name'>From Store Avl. Qty
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
              <label htmlFor='name'>To Store Avl. Qty
                <input
                  type='test'
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
              <label htmlFor='name'>Request Qty
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
              <label htmlFor='name'>Username
                <input
                  type='test'
                  required
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
          </div>
          <div className='p-2'>
            <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewRequisition
