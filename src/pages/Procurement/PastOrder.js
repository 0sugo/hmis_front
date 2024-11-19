import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdRemoveRedEye } from "react-icons/md";

const PastOrder = () => {

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
      <h4 className='font-semibold my-4'>Procurement <span className='text-[#0E6F1E]'>> Past Order</span></h4>

      <section className='bg-white p-4 my-4 rounded-lg'>
        <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Date & Time</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Total Items</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Vendor Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">LabName</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Approved</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.patientName}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className='py-2 px-6 flex space-x-2'>
                      <Link to={`/app/viewpastorder/${data.No}`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
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

export default PastOrder
