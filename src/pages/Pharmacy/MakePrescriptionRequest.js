import React from 'react'

const MakePrescriptionRequest = () => {
  return (
    <div>
      <form >
        <div className="flex flex-wrap">
          <div className='p-2 w-full lg:w-1/4'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Route'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/4'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Drug'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/4'>
            <label htmlFor='name'>
              <select 
                name="" id=""
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              >
                <option value="">Formulation Available...</option>
                <option value="">5</option>
                <option value="">4</option>
              </select>
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/4'>
            <label htmlFor='name'>
              <select 
                name="" id=""
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              >
                <option value="">Brand...</option>
                <option value="">5</option>
                <option value="">4</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className='p-2 w-full lg:w-1/3'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Price: KSHS'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/3'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Qty in Stock:'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/3'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Pack Size:'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className='p-2 w-full lg:w-1/6'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Composition'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/6'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Dose'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/6'>
            <label htmlFor='name'>
              <input
                type='text'
                required
                placeholder='Dose Unit'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/6'>
            <label htmlFor='name'>
              <select 
                name="" id=""
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              >
                <option value="">Frequency</option>
                <option value="">5</option>
                <option value="">4</option>
              </select>
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/6'>
            <label htmlFor='name'>
              <select 
                name="" id=""
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              >
                <option value="">Duration</option>
                <option value="">5</option>
                <option value="">4</option>
              </select>
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/6'>
            <label htmlFor='name'>
              <select 
                name="" id=""
                required
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              >
                <option value="">Days</option>
                <option value="">5</option>
                <option value="">4</option>
              </select>
            </label>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className='p-2 w-full lg:w-1/2'>
            <label htmlFor='name'>
              <textarea 
                name="" id=""
                required
                placeholder='Dosage Instruction..'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></textarea>
            </label>
          </div>
          <div className='p-2 w-full lg:w-1/2'>
            <label htmlFor='name'>
              <textarea 
                name="" id=""
                required
                placeholder='Prescription Instruction..'
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              ></textarea>
            </label>
          </div>
        </div>
        <div className='p-2 text-center'>
          <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default MakePrescriptionRequest
