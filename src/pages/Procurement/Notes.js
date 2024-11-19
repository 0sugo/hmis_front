import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import newPatient from '../../assets/images/newPatient.svg'
import { MdRemoveRedEye } from "react-icons/md";

const Notes = () => {

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

  const [activeTable, setActiveTable] = useState('receiveNote');

  const handleClick = (tableName) => {
    setActiveTable(tableName);
  };

  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Procurement <span className='text-[#0E6F1E]'>> Notes</span></h4>

      <section className="bg-white p-4 rounded-lg mb-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className='bg-[#DBFFDE] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#0E6F1E]' onClick={() => handleClick('receiveNote')}>
            <div className='bg-[#0E6F1E] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#0E6F1E]'>1623</h5>
              <p>Goods Receive Notes</p>
            </div>
          </div>
          <div className='bg-[#FFF0E2] p-4 rounded-lg flex items-center gap-4 hover:cursor-pointer active:border-2 active:border-[#EF8100]' onClick={() => handleClick('returnNote')}>
            <div className='bg-[#EF8100] p-3 rounded-full'>
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className='font-bold text-[#EF8100]'>3423</h5>
              <p>Goods Return Notes</p>
            </div>
          </div>
        </div>
      </section>


      {activeTable === 'receiveNote' && (
        <section className="bg-white p-4 rounded-lg ">
          <div className="flex items-center justify-between my-2">
            <h4 className='font-semibold text-[#262e5c]'>Goods Receive Note</h4>
            <Link to='/app/generatereceivenote' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg'>Generate New</Link>
          </div>
          <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Vendor Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Delivery Location</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Contact Number</th>
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
                      <Link to={`/app/viewgoodsreceivednote/${data.No}`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
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

      {activeTable === 'returnNote' && (
        <section className="bg-white p-4 rounded-lg ">
          <div className="flex items-center justify-between my-2">
            <h4 className='font-semibold text-[#262e5c]'>Goods Return Note</h4>
            <Link to='/app/geberatereturnnote' className='bg-[#0E6F1E] text-white px-5 py-2 rounded-lg'>Generate New</Link>
          </div>
          <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Vendor Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Delivery Location</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Return Date</th>
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
                      <Link to={`/app/viewgoodsreturnnote/${data.No}`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
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
    </div>
  )
}

export default Notes
