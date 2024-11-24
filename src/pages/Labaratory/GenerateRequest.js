import React from 'react'

const GenerateRequest = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Labaratory <span className='text-[#0E6F1E]'>> Generate Request</span></h4>
      <div className="bg-white p-4 rounded-lg">
        <h4 className='font-semibold text-[#192252] text-center my-4'>Generate Self Request</h4>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>
                <input
                  type='text'
                  required
                  placeholder='Patient Name'
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>
                <select 
                  name="" id=""
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  // value={name}
                  // onChange={(e) => setName(e.target.value)}
                >
                  <option value="">Under doctor</option>
                  <option value="">1</option>
                </select>
              </label>
            </div>
          </div>
          <div className='p-2'>
            <label htmlFor='name'>
              <textarea 
                name="" id=""
                required
                placeholder='Lab test names'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className='p-2 text-center'>
            <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GenerateRequest
