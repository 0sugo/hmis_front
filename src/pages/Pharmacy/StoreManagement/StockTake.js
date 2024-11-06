import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdEdit } from "react-icons/md";

const StockTake = () => {

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

  // Modal to add physical stock
  const openModal = () => {
    const dialog = document.getElementById('my_modal');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <div className='mx-auto p-4'>
      <div className="flex items-center justify-between">
        <h4 className='font-semibold text-[#192252]'>Stock Take</h4>
        <span className='p-2 bg-[#DBE0E9] text-[#192252] rounded-lg'>Your Current Physical Stock : 234  <button onClick={() => openModal()} className='bg-[#192252] text-white px-5 py-2 rounded-lg'><MdEdit /></button></span>
        {/* new pysical stock */}
        <dialog id="my_modal" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {/* new pysical stock */}
            <section>
              <h4 className='font-semibold text-[#192252] text-center'>New Physical Stock</h4>
              <form onSubmit={handleSubmit}>
                <div className='my-4'>
                  <label htmlFor='name'>
                    <input
                      type='text'
                      required
                      placeholder='Write here...'
                      className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className='p-2 text-center'>
                  <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Add</button>
                </div>
              </form>
            </section>
          </div>
        </dialog>
      </div>
      
      <div className="bg-white p-4 rounded-lg my-4">
        <div className='overflow-x-auto rounded-lg mt-2'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">Item Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Batch No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">System Stock</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Pysical Stock</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Variance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Cost/Item</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Cost/Stock</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Cost/Variance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Availability</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className="px-6 py-3 text-sm">{data.date}</td>
                  <td className="px-6 py-3 text-sm">{data.patientName}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default StockTake
