import React, { useState } from 'react'
import logo from '../../assets/images/Logo.svg';

const ReceiptDetails = () => {

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
        <h4 className='font-semibold my-4'>Receipt <span className='text-[#0E6F1E]'>> Receipt Detail</span></h4>
        <button className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Refund</button>
      </div>

      <section className="bg-white p-4 rounded-lg my-4">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" />
          <div className='text-[#0E6F1E] font-semibold'>
            <h5>Invoice Number</h5>
            <span>#32423324</span>
          </div>
        </div>
        <hr />

        <div className="grid grid-cols-1 gap4 my-4 lg:grid-cols-2">
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Patient Name:</h5>
              <p className='float-left'>Maimoon</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Patient Age:</h5>
              <p className='float-left'>25</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Patient Gender:</h5>
              <p className='float-left'>Male</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Reg Number:</h5>
              <p className='float-left'>Cafdsg</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Visit Code:</h5>
              <p className='float-left'>Ccxgd</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Visit Date:</h5>
              <p className='float-left'>12/12/12</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Insurance:</h5>
              <p className='float-left'>Casual</p>
            </div>
          </div>
          <div className='space-y-3'>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Sheme:</h5>
              <p className='float-left'>Casual</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Member No:</h5>
              <p className='float-left'>45435</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Invoice No:</h5>
              <p className='float-left'>43534</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Invoice Date:</h5>
              <p className='float-left'>12/12/23</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Diagnosis:</h5>
              <p className='float-left'>Calculators</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Doctor:</h5>
              <p className='float-left'>Casual</p>
            </div>
          </div>
        </div>

        <div className='overflow-x-auto rounded-lg'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Detail</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Quality</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Unit Cost</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Discout</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Total</th>
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
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section  className='my-4'>
        <div className='space-y-2 text-right'>
          <h5><span className='font-semibold text-[#192252]'>Sub-Total Amount: </span>$342342</h5>
          <h5><span className='font-semibold text-[#192252]'>Discount: </span>$342</h5>
          <h5><span className='font-semibold text-[#192252]'>Total: </span>$342</h5>
        </div>
      </section>

     
      <section className='my-4'>
        <hr />
        <div className='flex items-center float-right space-x-4 mt-4'>
          <button className='bg-[#DBFFDE] text-[#0E6F1E] hover:bg-[#35a147] font-semibold px-5 py-2 rounded-lg'>Download</button>
          <button className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Print</button>
        </div>
      </section>
    </div>
  )
}

export default ReceiptDetails
