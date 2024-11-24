import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../assets/images/newPatient.svg'
import pic from '../../assets/images/pic.svg'

const LabRequests = () => {

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

  const [activeTable, setActiveTable] = useState('newrequest');

  const handleClick = (tableName) => {
    setActiveTable(tableName);
  };

  return (
    <div className='mx-auto p-4'>
      <section className="bg-white p-4 rounded-lg mb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#2E8BBF]' onClick={() => handleClick('newrequest')}>
            <div className='bg-[#2E8BBF] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#2E8BBF]'>24</h5>
              <p>New Requests</p>
            </div>
          </div>
          <div className='bg-[#DBFFDE] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#0E6F1E]' onClick={() => handleClick('approverequest')}>
            <div className='bg-[#0E6F1E] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#0E6F1E]'>1623</h5>
              <p>Approve Request</p>
            </div>
          </div>
          <div className='bg-[#FFF0E2] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#EF8100]' onClick={() => handleClick('selfrequest')}>
            <div className='bg-[#EF8100] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#EF8100]'>3423</h5>
              <p>Self Request</p>
            </div>
          </div>
        </div>
      </section>


      {activeTable === 'newrequest' && (
        <section className="bg-white p-4 rounded-lg ">
          <h4 className='font-semibold text-[#262e5c] my-2'>New Request</h4>
        </section>
      )}

      {activeTable === 'approverequest' && (
        <section className="bg-white p-4 rounded-lg ">
          <h4 className='font-semibold text-[#262e5c] my-2'>Approve Request</h4>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className='border border-slate-200 rounded-lg p-4'>
              <div className="flex space-x-4 mb-4">
                <img className='h-14 w-14 rounded-full' src={pic} alt="" />
                <div>
                  <h3>Vijay Sharma</h3>
                  <h5>Patient Name</h5>
                </div>
              </div>
              <div className='space-y-2 my-2'>
                <div className='flex items-center justify-between'>
                  <h5>Lab Test:</h5>
                  <h6>Blood glucose test</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Patient ID:</h5>
                  <h6>2122JRFDS</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Under Doctor</h5>
                  <h6>Dr. Park</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Req. From</h5>
                  <h6>Theater</h6>
                </div>
              </div>
              <div className='my-4 grid gap-4'>
                <button className='bg-[#0E6F1E] text-white px-8 py-2 w-full rounded-lg'>Move to Test</button>
                <Link to='/app/labapprovedrequests' className='bg-white text-[#0E6F1E] border border-[#0E6F1E] px-8 py-2 text-center rounded-lg hover:bg-[#0E6F1E] hover:text-white'>View</Link> 
              </div>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <div className="flex space-x-4 mb-4">
                <img className='h-14 w-14 rounded-full' src={pic} alt="" />
                <div>
                  <h3>Vijay Sharma</h3>
                  <h5>Patient Name</h5>
                </div>
              </div>
              <div className='space-y-2 my-2'>
                <div className='flex items-center justify-between'>
                  <h5>Lab Test:</h5>
                  <h6>Blood glucose test</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Patient ID:</h5>
                  <h6>2122JRFDS</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Under Doctor</h5>
                  <h6>Dr. Park</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Req. From</h5>
                  <h6>Theater</h6>
                </div>
              </div>
              <div className='my-4 grid gap-4'>
                <button className='bg-[#0E6F1E] text-white px-8 py-2 w-full rounded-lg'>Move to Test</button>
                <Link to='/app/labapprovedrequests' className='bg-white text-[#0E6F1E] border border-[#0E6F1E] px-8 py-2 text-center rounded-lg hover:bg-[#0E6F1E] hover:text-white'>View</Link> 
              </div>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <div className="flex space-x-4 mb-4">
                <img className='h-14 w-14 rounded-full' src={pic} alt="" />
                <div>
                  <h3>Vijay Sharma</h3>
                  <h5>Patient Name</h5>
                </div>
              </div>
              <div className='space-y-2 my-2'>
                <div className='flex items-center justify-between'>
                  <h5>Lab Test:</h5>
                  <h6>Blood glucose test</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Patient ID:</h5>
                  <h6>2122JRFDS</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Under Doctor</h5>
                  <h6>Dr. Park</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Req. From</h5>
                  <h6>Theater</h6>
                </div>
              </div>
              <div className='my-4 grid gap-4'>
                <button className='bg-[#0E6F1E] text-white px-8 py-2 w-full rounded-lg'>Move to Test</button>
                <Link to='/app/labapprovedrequests' className='bg-white text-[#0E6F1E] border border-[#0E6F1E] px-8 py-2 text-center rounded-lg hover:bg-[#0E6F1E] hover:text-white'>View</Link> 
              </div>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <div className="flex space-x-4 mb-4">
                <img className='h-14 w-14 rounded-full' src={pic} alt="" />
                <div>
                  <h3>Vijay Sharma</h3>
                  <h5>Patient Name</h5>
                </div>
              </div>
              <div className='space-y-2 my-2'>
                <div className='flex items-center justify-between'>
                  <h5>Lab Test:</h5>
                  <h6>Blood glucose test</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Patient ID:</h5>
                  <h6>2122JRFDS</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Under Doctor</h5>
                  <h6>Dr. Park</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Req. From</h5>
                  <h6>Theater</h6>
                </div>
              </div>
              <div className='my-4 grid gap-4'>
                <button className='bg-[#0E6F1E] text-white px-8 py-2 w-full rounded-lg'>Move to Test</button>
                <Link to='/app/labapprovedrequests' className='bg-white text-[#0E6F1E] border border-[#0E6F1E] px-8 py-2 text-center rounded-lg hover:bg-[#0E6F1E] hover:text-white'>View</Link> 
              </div>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <div className="flex space-x-4 mb-4">
                <img className='h-14 w-14 rounded-full' src={pic} alt="" />
                <div>
                  <h3>Vijay Sharma</h3>
                  <h5>Patient Name</h5>
                </div>
              </div>
              <div className='space-y-2 my-2'>
                <div className='flex items-center justify-between'>
                  <h5>Lab Test:</h5>
                  <h6>Blood glucose test</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Patient ID:</h5>
                  <h6>2122JRFDS</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Under Doctor</h5>
                  <h6>Dr. Park</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Req. From</h5>
                  <h6>Theater</h6>
                </div>
              </div>
              <div className='my-4 grid gap-4'>
                <button className='bg-[#0E6F1E] text-white px-8 py-2 w-full rounded-lg'>Move to Test</button>
                <Link to='/app/labapprovedrequests' className='bg-white text-[#0E6F1E] border border-[#0E6F1E] px-8 py-2 text-center rounded-lg hover:bg-[#0E6F1E] hover:text-white'>View</Link> 
              </div>
            </div>
            <div className='border border-slate-200 rounded-lg p-4'>
              <div className="flex space-x-4 mb-4">
                <img className='h-14 w-14 rounded-full' src={pic} alt="" />
                <div>
                  <h3>Vijay Sharma</h3>
                  <h5>Patient Name</h5>
                </div>
              </div>
              <div className='space-y-2 my-2'>
                <div className='flex items-center justify-between'>
                  <h5>Lab Test:</h5>
                  <h6>Blood glucose test</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Patient ID:</h5>
                  <h6>2122JRFDS</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Under Doctor</h5>
                  <h6>Dr. Park</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Req. From</h5>
                  <h6>Theater</h6>
                </div>
              </div>
              <div className='my-4 grid gap-4'>
                <button className='bg-[#0E6F1E] text-white px-8 py-2 w-full rounded-lg'>Move to Test</button>
                <Link to='/app/labapprovedrequests' className='bg-white text-[#0E6F1E] border border-[#0E6F1E] px-8 py-2 text-center rounded-lg hover:bg-[#0E6F1E] hover:text-white'>View</Link> 
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTable === 'selfrequest' && (
        <section className="bg-white p-4 rounded-lg ">
          <div className="flex items-center justify-between">
            <h4 className='font-semibold text-[#262e5c] my-2'>Self Request</h4>
            <Link to="/app/generaterequest" className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg'>Generate Request</Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 mt-4">
            <div className='border border-slate-200 rounded-lg p-4'>
              <div className="flex space-x-4 mb-4">
                <img className='h-14 w-14 rounded-full' src={pic} alt="" />
                <div>
                  <h3>Vijay Sharma</h3>
                  <h5>Patient Name</h5>
                </div>
              </div>
              <div className='space-y-2 my-2'>
                <div className='flex items-center justify-between'>
                  <h5>Lab Test:</h5>
                  <h6>Blood glucose test</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Patient ID:</h5>
                  <h6>2122JRFDS</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Under Doctor</h5>
                  <h6>Dr. Park</h6>
                </div>
                <div className='flex items-center justify-between'>
                  <h5>Req. From</h5>
                  <h6>Theater</h6>
                </div>
              </div>
              <div className='my-4 grid gap-4'>
                <button className='bg-[#0E6F1E] text-white px-8 py-2 w-full rounded-lg'>Move to Test</button>
                <Link to='/app/labapprovedrequests' className='bg-white text-[#0E6F1E] border border-[#0E6F1E] px-8 py-2 text-center rounded-lg hover:bg-[#0E6F1E] hover:text-white'>View</Link> 
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  )
}

export default LabRequests
