import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../assets/images/newPatient.svg'
import eye from '../../assets/images/eye.svg'

const Samples = () => {

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
        <h3><b>Welcome, Nambi</b></h3>
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

      <section className="bg-white p-4 rounded-lg mb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#2E8BBF] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#2E8BBF]'>24</h5>
              <p>Pending Samples</p>
            </div>
          </div>
          <div className='bg-[#DBFFDE] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#0E6F1E] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#0E6F1E]'>1623</h5>
              <p>Collected Samples</p>
            </div>
          </div>
          <div className='bg-[#FFF0E2] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#EF8100] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#EF8100]'>3423</h5>
              <p>Rejected Samples</p>
            </div>
          </div>
          <div className='bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#8D49D4] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#8D49D4]'>34</h5>
              <p>Disordered Samples</p>
            </div>
          </div>
        </div>
      </section>

      <div className='flex flex-wrap items-center gap-4 my-8'>
        <Link to='#'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Create Pool Samples</span></Link>
        <Link to='#'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Transfer Samples</span></Link>
        <Link to='#'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Create Sample Aliquot</span></Link>
        <Link to='#'><span className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Store Sample</span></Link>
      </div>

      <section className="bg-white p-4 rounded-lg ">
        <div className='overflow-x-auto rounded-lg'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Age</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Requesting Doctor</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Clinical Information</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Place of request</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Category</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Ward</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Bed No</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Payment Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Time</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-sm">{data.No}</td>
                  <td className="px-6 py-3 text-sm">{data.date}</td>
                  <td className="px-6 py-3 text-sm">{data.date}</td>
                  <td className="px-6 py-3 text-sm">{data.patientName}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className='py-2 px-6'>
                    <Link to={`/app/view/${data.No}`}>
                      <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
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

export default Samples
