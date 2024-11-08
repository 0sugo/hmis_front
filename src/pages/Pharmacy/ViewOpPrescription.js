import React, { useState } from 'react'
import { MdOutlineAdd } from "react-icons/md";
import MakePrescriptionRequest from './MakePrescriptionRequest'

const ViewIpPrescription = () => {

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

  // Modal to add prescription Request
  const openModal = () => {
    const dialog = document.getElementById('my_modal');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  return (
    <div className='mx-auto p-4'>
      <div className="flex flex-wrap items-center justify-between gap-2 my-4">
        <h4 className='font-semibold'>Make a Prescription Request Here</h4>
        <button onClick={() => openModal()} className='bg-[#DBE0E9] text-[#192252] px-5 py-2 rounded-lg flex items-center space-x-3'><MdOutlineAdd /> Prescription Request</button>
        {/* add prescription request */}
        <dialog id="my_modal" className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {/* add prescription request */}
            <section>
              <h4 className='font-semibold text-[#192252] text-center'>Make a Prescription Request Here</h4>
              <MakePrescriptionRequest/>
            </section>
          </div>
        </dialog>
      </div>
      
      <section className="bg-white p-4 rounded-lg">
        <div className='space-y-2'>
          <h4 className='font-semibold text-[#262e5c'>Next Expiry Drugs</h4>
          <p className='text-[#0E6F1E] font-semibold'>Drug Information:</p>
        </div>
        <div className="flex flex-wrap gap-20">
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Patient Name:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Age:</h5>
              <p className='float-left'>25</p>
            </div>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Visit Code:</h5>
              <p className='float-left'>Casual</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Scheme:</h5>
              <p className='float-left'>45435</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white p-4 rounded-lg my-4'>
        <h4 className='font-semibold my-4'>View Prescription Detail</h4>
        <div className='overflow-x-auto rounded-lg'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Drug</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Brand</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Dose</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Freq</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Duration</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Instruction</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-sm">{data.No}</td>
                  <td className="px-6 py-3 text-sm">{data.date}</td>
                  <td className="px-6 py-3 text-sm">{data.patientName}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 flex items-center space-x-2">
                    <button type='reset' className='bg-[#FFA620] text-white px-6 py-1 rounded-lg hover:bg-[#a07029]'>Issue</button>
                    <button type='submit' className='bg-[#0E6F1E] text-white px-6 py-1 rounded-lg hover:bg-[#1f7e2f]'>Amend</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
        <div className="bg-white p-4 rounded-lg">
          <h4>View Past Prescription Detail</h4>
          <div className='overflow-x-auto rounded-lg mt-2'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Drug</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Brand</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Dose</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Freq</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Instruction</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3 text-sm">{data.date}</td>
                    <td className="px-6 py-3 text-sm">{data.patientName}</td>
                    <td className="px-6 py-3 text-sm">{data.insurance}</td>
                    <td className="px-6 py-3 text-sm">{data.insurance}</td>
                    <td className="px-6 py-3 text-sm">{data.insurance}</td>
                    <td className="px-6 py-3 text-sm"> - </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <h4>Calculate Drug Dosage</h4>

          <div className='mt-2'>
            <form action="">
              <div className='p-2'>
                <label htmlFor='name'>
                  <input
                    type='text'
                    required
                    placeholder='Drug Name'
                    className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
              <div className="flex flex-wrap">
                <div className='p-2 w-full lg:w-1/3'>
                  <label htmlFor='name'>
                    <input
                      type='text'
                      required
                      placeholder='Age:'
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
                      placeholder='Weight:'
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
                      placeholder='Rule:'
                      className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                      // value={name}
                      // onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className='p-2'>
                <button type='submit' className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>Calculate</button>
              </div>
            </form>
          </div>

          <div className='mt-2'>
            <p className='text-[#0E6F1E] font-semibold'>Drug Information:</p>
            <div className="flex flex-wrap gap-20">
              <div className='space-y-2'>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Max Daliy Dosage:</h5>
                  <p className='float-left'>Maimoon</p>
                </div>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Min Daily Dosage:</h5>
                  <p className='float-left'>25</p>
                </div>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Drug Composition:</h5>
                  <p className='float-left'>25</p>
                </div>
                <div className='flex items-center space-x-6'>
                  <h5 className='font-semibold text-[#192252]'>Frequency:</h5>
                  <p className='float-left'>25</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default ViewIpPrescription
