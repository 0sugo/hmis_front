import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";
import newPatient from '../../assets/images/newPatient.svg'
import eye from '../../assets/images/eye.svg'

const FoDashboard = () => {

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
      <section className="bg-white p-4 rounded-lg mb-4">
        <h4><b>Welcome, Nambi</b></h4>

        <div className="flex flex-wrap items-center gap-2 justify-between my-4">
          <div>
            <label htmlFor="searchpatient">
              <input 
                type="search"
                className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                placeholder='Search for patient here...'
              />
            </label>
          </div>
          <div>
            <Link to='/app/addpatient' className='flex items-center space-x-2 text-[#0E6F1E] bg-[#E7F1E9] hover:bg-[#caebd1] px-5 py-3 rounded-md'>
              <span><MdAdd /></span>
              <span>Add New Patient</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#8D49D4] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#8D49D4]'>34</h5>
              <p>New Visit</p>
            </div>
          </div>
          <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#2E8BBF] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#2E8BBF]'>24</h5>
              <p>Visits in-progress</p>
            </div>
          </div>
          <div className='bg-[#FFE2E5] p-4 rounded-lg flex items-center gap-4'>
            <div className='bg-[#DD3459] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#DD3459]'>16</h5>
              <p>Completed Visits</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg mb-4">
        <span>New Visits</span>

        <div className='overflow-x-auto rounded-lg mt-2'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Insurance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Scheme</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Created by</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Time</th>
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
                  <td className="px-6 py-3 text-sm">{data.time}</td>
                  <td className='py-2 px-6'>
                    <Link to={`/app/view`}>
                      <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg mb-4">
        <span>Visits in Progress</span>

        <div className='mt-2'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Appointment Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Insurance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Scheme</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Type of Appointment</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Consult</th>
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
                  <td className="px-6 py-3 text-sm">{data.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white p-4 rounded-lg mb-4">
        <span>Appointments</span>

        <div className='overflow-x-auto rounded-lg mt-2'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Appointment Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Insurance</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Scheme</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Type of Appointment</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Consult</th>
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
                  <td className="px-6 py-3 text-sm">{data.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default FoDashboard
