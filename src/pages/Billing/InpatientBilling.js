import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../assets/images/newPatient.svg'
import { MdRemoveRedEye } from "react-icons/md";

const InpatientBilling = () => {

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
      <h3 className='font-semibold text-[#192252] my-4'>Inpatient Billing</h3>

      <section className="bg-white p-4 rounded-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#8D49D4] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#8D49D4]'>34</h5>
              <p>Admitted Patients</p>
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
      </section>

      <div className='flex flex-wrap items-center justify-between my-4'>
        <div className='flex flex-wrap items-center gap-4'>
          <h3 className='text-xl text-center font-semibold text-[#192252]'>Bill Listing</h3>
          <div className='flex flex-wrap items-center gap-2 my-2'>
            <Link to='#'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Receive Deposit</span></Link>
            <Link to='#'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Refund Deposit</span></Link>
          </div>
        </div>
        <Link to='#' className='text-[#0E6F1E] font-semibold'>See all</Link>
      </div>

      <div className='grid grid-cols-2 lg:grid-cols-6 gap-2'>
        <Link to='#' className='bg-[#DBE8E4] text-[#0E6F1E] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center'><span>Finalize</span></Link>
        <Link to='#' className='bg-[#DBE8E4] text-[#0E6F1E] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center'><span>Unfinalze</span></Link>
        <Link to='#' className='bg-[#DBE8E4] text-[#0E6F1E] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center'><span>Edit Invoice</span></Link>
        <Link to='#' className='bg-[#DBE8E4] text-[#0E6F1E] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center'><span>Split Payment</span></Link>
        <Link to='#' className='bg-[#DBE8E4] text-[#0E6F1E] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center'><span>Cancel Invoice</span></Link>
        <Link to='#' className='bg-[#DBE8E4] text-[#0E6F1E] hover:bg-[#35a147] px-5 py-2 rounded-lg text-center'><span>Add Discout</span></Link>
      </div>

      <section className='bg-white p-4 my-4 rounded-lg'>
        <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">ID.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Member Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Leave Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">From</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">To</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">No. Of Days</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Approved By</th>
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
                  <td className='py-2 px-6 flex'>
                    <Link to={`/app/viewbill/${data.No}`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
                      <MdRemoveRedEye />
                    </Link>
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

export default InpatientBilling
