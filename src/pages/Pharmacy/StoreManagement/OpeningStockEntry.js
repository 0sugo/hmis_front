import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import eye from '../../../assets/images/eye.svg'
import Swal from 'sweetalert2'

const OpeningStockEntry = () => {

  const waitingReviewsData = [
    {
      No: 1,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    },
    {
      No: 2,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    },
    {
      No: 3,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    },
    {
      No: 4,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    }
  ];

  const [list, setList] = useState(waitingReviewsData);
  

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleClick  = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold text-[#192252]'>Opening Stock Entry</h4>
      
      <section className="bg-white p-4 rounded-lg my-4">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap">
            <div className='p-2 w-full lg:w-1/2'>
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
            <div className='p-2 w-full lg:w-1/2'>
              <label htmlFor='name'>Doc No.
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
              <label htmlFor='name'>Store
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
              <label htmlFor='name'>Medicine Name
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
              <label htmlFor='name'>Cost Price
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
              <label htmlFor='name'>Quantity
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
              <label htmlFor='name'>Expiry Date
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
          <div className='p-2'>
            <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
          </div>
        </form>
      </section>

      <section className="bg-white p-4 rounded-lg mb-4">
        <span>List Of Opening Stock</span>

        <div className='overflow-x-auto rounded-lg mt-2'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Doc No</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Doc Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Store</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Location</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">User</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-sm">{data.No}</td>
                  <td className="px-6 py-3 text-sm">{data.patientName}</td>
                  <td className="px-6 py-3 text-sm">{data.date}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className='py-2 px-6 flex items-center space-x-2'>
                    <Link to={`/app/viewopeningstock/${data.No}`}>
                      <span className='bg-[#FFF2DF] text-[#FFA620] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
                    </Link>
                    <button onClick={handleClick} className='bg-[#FFE5E9] text-[#ED021E] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}

export default OpeningStockEntry
