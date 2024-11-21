import React from 'react'

const BillQuote = () => {
  return (
    <div className='mx-auto p-4'>
      <div className="bg-white p-4 rounded-lg">
        <h3>Add Diagnosis</h3>
        
        <form action="">
          <div className='grid grid-cols-2 my-4 lg:grid-cols-6'>
            <div className='p-2 lg:col-span-3'>Add Service Item
              <select 
                name="id" id="identity"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              >
                <option value="">Select</option>
                <option value="">ID</option>
                <option value="">pASSPORT</option>
              </select>
            </div>
            <div className='p-2'>
              <label htmlFor='name'>Quantity
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2'>
              <label htmlFor='name'>Amount
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
            <div className='p-2 lg:col-span-3'>Add Pharma Item
              <select 
                name="id" id="identity"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              >
                <option value="">Select</option>
                <option value="">ID</option>
                <option value="">pASSPORT</option>
              </select>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
            <div className='p-2 lg:col-span-3'>Add Labaratory Item
              <select 
                name="id" id="identity"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              >
                <option value="">Select</option>
                <option value="">ID</option>
                <option value="">pASSPORT</option>
              </select>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
            <div className='p-2 lg:col-span-3'>Add Imaging Item
              <select 
                name="id" id="identity"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              >
                <option value="">Select</option>
                <option value="">ID</option>
                <option value="">pASSPORT</option>
              </select>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
            <div className='p-2 lg:col-span-3'>Add Ward Item
              <select 
                name="id" id="identity"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              >
                <option value="">Select</option>
                <option value="">ID</option>
                <option value="">pASSPORT</option>
              </select>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
            <div className='p-2 lg:col-span-3'>Add Theatre Item
              <select 
                name="id" id="identity"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              >
                <option value="">Select</option>
                <option value="">ID</option>
                <option value="">pASSPORT</option>
              </select>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
            <div className='p-2 lg:col-span-3'>Add Theatre Consumable Item
              <select 
                name="id" id="identity"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              >
                <option value="">Select</option>
                <option value="">ID</option>
                <option value="">pASSPORT</option>
              </select>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
            <div className='lg:col-span-3 flex items-center'>
              <div className='p-2 w-full'>Add Doctor Charges
                <select 
                  name="id" id="identity"
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                >
                  <option value="">Select</option>
                  <option value="">ID</option>
                  <option value="">pASSPORT</option>
                </select>
              </div>
              <div className='p-2 w-full mt-6'>
                <select 
                  name="id" id="identity"
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                >
                  <option value="">Select</option>
                  <option value="">ID</option>
                  <option value="">pASSPORT</option>
                </select>
              </div>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-6'>
              <label htmlFor='name'>
                <input
                  type='text'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 mt-7'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
            </div>
          </div>
          <div className='p-2 my-4 text-center'>
              <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg hover:bg-[#0E6F1E]'>Generate Quote</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default BillQuote
