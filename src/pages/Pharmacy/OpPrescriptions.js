import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../assets/images/newPatient.svg'
import { MdDateRange, MdRemoveRedEye } from "react-icons/md";


const OpPrescriptions = () => {

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
      <section className="bg-white p-4 rounded-lg my-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#8D49D4] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#8D49D4]'>34</h5>
              <p>Pending Prescription</p>
            </div>
          </div>
          <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#2E8BBF] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#2E8BBF]'>24</h5>
              <p>Issued Prescription</p>
            </div>
          </div>
        </div>
      </section>

      <div className='flex items-center justify-between'>
        <h3 className='text-xl text-center font-semibold text-[#192252]'>OP PRESCRIPTION</h3>
        <Link to='#' className='bg-[#0E6F1E] text-white font-semibold p-2 rounded-lg text-xl'><MdDateRange /></Link>
      </div>

      <section className='bg-white p-4 my-4 rounded-lg'>
        <div className='overflow-x-auto rounded-lg'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">ID.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Visit Code</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Prescription No</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Sheme</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Prescribed By</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">View</th>
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
                  <td className='py-3 px-6'>
                  <div className='flex space-x-3'>
                    <span className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'><Link to={`/app/viewopprescription/${data.No}`}><MdRemoveRedEye /></Link></span>
                  </div>
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

export default OpPrescriptions
