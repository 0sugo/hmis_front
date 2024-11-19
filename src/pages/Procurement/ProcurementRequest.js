import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../assets/images/newPatient.svg'
import { MdRemoveRedEye } from "react-icons/md";

const ProcurementRequest = () => {

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

  const [activeTable, setActiveTable] = useState('requestItem');

  const handleClick = (tableName) => {
    setActiveTable(tableName);
  };

  return (
    <div className='mx-auto p-4'>
      <section className="bg-white p-4 rounded-lg mb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#2E8BBF]' onClick={() => handleClick('requestItem')}>
            <div className='bg-[#2E8BBF] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#2E8BBF]'>24</h5>
              <p>Request Item</p>
            </div>
          </div>
          <div className='bg-[#DBFFDE] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#0E6F1E]' onClick={() => handleClick('pendingOrderRequest')}>
            <div className='bg-[#0E6F1E] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#0E6F1E]'>1623</h5>
              <p>Pending Order Request</p>
            </div>
          </div>
          <div className='bg-[#FFF0E2] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#EF8100]' onClick={() => handleClick('generateNewRequest')}>
            <div className='bg-[#EF8100] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#EF8100]'>3423</h5>
              <p>Generate New Request</p>
            </div>
          </div>
        </div>
      </section>


      {activeTable === 'requestItem' && (
        <section className="bg-white p-4 rounded-lg ">
          <h4 className='font-semibold text-[#262e5c] my-2'>Request Items</h4>
          <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Order Item</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3 text-sm">{data.No}</td>
                    <td className="px-6 py-3 text-sm">{data.date}</td>
                    <td className="px-6 py-3 text-sm">{data.time}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className='py-2 px-6 flex space-x-2'>
                      <Link to={`/app/viewprocurementrequests/${data.No}`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
                        <MdRemoveRedEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTable === 'pendingOrderRequest' && (
        <section className="bg-white p-4 rounded-lg ">
          <h4 className='font-semibold text-[#262e5c] my-2'>Pending Order Request</h4>
          <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Order Item</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Date & Time</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3 text-sm">{data.No}</td>
                    <td className="px-6 py-3 text-sm">{data.date}</td>
                    <td className="px-6 py-3 text-sm">{data.time}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className='py-2 px-6 flex space-x-2'>
                      <Link to={`/app/viewpendingorderrequests/${data.No}`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
                        <MdRemoveRedEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTable === 'generateNewRequest' && (
        <section className="bg-white p-4 rounded-lg ">
          <h4 className='font-semibold text-[#262e5c] text-center my-2'>Generate Request</h4>
          <form>
            <div className="flex flex-wrap">
              <div className='p-2 w-full lg:w-1/2'>
                <label htmlFor='name'>
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
                <label htmlFor='name'>
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
                <label htmlFor='name'>
                  <select 
                    name="" id=""
                    required
                    className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  >
                    <option value="">Choose Equipment...</option>
                    <option value="">5</option>
                    <option value="">4</option>
                  </select>
                </label>
              </div>
              <div className='p-2 w-full lg:w-1/2'>
                <label htmlFor='name'>
                  <input
                    type='number'
                    required
                    placeholder='Quantity'
                    className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className='p-2'>
              <label htmlFor='name'>
                <textarea 
                  name="" id=""
                  required
                  placeholder='Description..'
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
        </section>
      )}

    </div>
  )
}

export default ProcurementRequest
