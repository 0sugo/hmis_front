import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const DrugExpiryReport = () => {

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


  return (
    <div className='mx-auto p-4'>
      <div className="flex items-center justify-between">
        <h4 className='font-semibold text-[#192252]'>Drug Expirt Report</h4>
        <div className='flex items-center space-x-3'>
          <label htmlFor='name'>
            <select 
              name="" id=""
              required
              className='px-3 py-2 bg-[#DBE0E9] text-[#192252] border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#192252] focus:ring-[#192252] w-full rounded-md focus:ring-1'
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              <option value="">All</option>
              <option value="">5</option>
              <option value="">4</option>
            </select>
          </label>
          <button className='bg-[#192252] text-white px-5 py-2 rounded-lg'>Export Report</button>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg my-4">
        <div className='overflow-x-auto rounded-lg mt-2'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">Drug Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Expired</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Near Expiry(0-90D)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Short Expiry (90-180D)</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Long Expiry (>180D)</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default DrugExpiryReport
