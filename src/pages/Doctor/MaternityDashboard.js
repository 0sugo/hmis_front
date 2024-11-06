import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../assets/images/newPatient.svg'
import { MdRemoveRedEye, MdEdit } from "react-icons/md";

const MaternityDashboard = () => {

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
      <div className="flex flex-wrap items-center gap-2 justify-between my-4">
        <div>
          <h6>Good Morning</h6>
          <h3><b>Dr. Alamini</b></h3>
        </div>
        <div>
          <label htmlFor="searchpatient">
            <input 
              type="search"
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              placeholder='Search here...'
            />
          </label>
        </div>
      </div>

      <section className="bg-white p-4 rounded-lg">
        <div className="grid grid-cols-8 gap-4">
          <div className="space-y-4 col-span-2">
            <div className='bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#8D49D4] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className='font-bold text-[#8D49D4]'>34</h5>
                <p>Unfinalized Invoices</p>
              </div>
            </div>
            <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#2E8BBF] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className='font-bold text-[#2E8BBF]'>24</h5>
                <p>Finalized Invoice</p>
              </div>
            </div>
            <div className='bg-[#FFE2E5] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#DD3459] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className='font-bold text-[#DD3459]'>16</h5>
                <p>Unreceipted Cash Bills</p>
              </div>
            </div>
            <div className='bg-[#E7F1E9] p-4 rounded-lg flex items-center gap-4'>
              <div className='bg-[#0E6F1E] p-3 rounded-full'>
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className='font-bold text-[#0E6F1E]'>16</h5>
                <p>Receipted Cash Bills</p>
              </div>
            </div>
          </div>

          <div className='col-span-6 overflow-x-auto rounded-lg'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Visit Code</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Invoice No</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Patient Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Insurance</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Scheme</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Invoice Amt.</th>
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
                    <td className="px-6 py-3 text-sm">{data.scheme}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                    <td className='py-2 px-6 flex space-x-2'>
                      <Link to={`/app/update/${data.No}`} className='text-[#3E36B0] bg-[#E4EDFE] p-2 rounded-lg text-xl'>
                        <MdEdit />
                      </Link>
                      <Link to={`/app/view/${data.No}`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
                        <MdRemoveRedEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MaternityDashboard
