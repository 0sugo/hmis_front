import React, { useState } from 'react'
import pic from '../../assets/images/pic.svg'
import { Link } from 'react-router-dom'
import eye from '../../assets/images/eye.svg'

const ViewApproval = () => {

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
      <h4 className='font-semibold my-4'>Approval Desk <span className='text-[#0E6F1E]'>> Send Approval</span></h4>
      
      <section className="bg-white p-4 rounded-lg">
        <div className="flex flex-wrap gap-20">
          <div>
            <img src={pic} className="w-36 h-36" alt="user" />
            <h5>Isris Mamoon</h5>
          </div>
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
        <div className='bg-[#e2e7ff] text-[#262e5c] divide-x-2 space-x-4 py-2 px-5 rounded-lg float-right'>
          <span>INV NO: SDF-234234</span>
          <span>INV AMOUNT: $2344</span>
        </div>
      </section>

      <section className='my-8'>
        <div className="flex flex-wrap gap-8">
          <div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252] mb-4'>Approval Staus:</h5>
              <p className='float-left'>12/12/12</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Claim Status:</h5>
              <p className='float-left'>Casual</p>
            </div>
          </div>
          <div>
            <div className='flex items-center space-x-6 mb-4'>
              <h5 className='font-semibold text-[#192252]'>Claim Type:</h5>
              <p className='float-left'>12/12/12</p>
            </div>
            <div className='flex items-center space-x-6'>
              <h5 className='font-semibold text-[#192252]'>Department:</h5>
              <p className='float-left'>Casual</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white p-4 rounded-lg'>
        <h4 className='font-semibold my-4'>ICD 10 Diagnosis</h4>
        <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Document</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Availability Status</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Amount</th>
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
                  <td className="px-6 py-3 text-sm">
                    <Link to={`/app/invoicedetails/${data.No}`}>
                      <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className='my-4'>
        <div className='flex items-center float-right space-x-4 mt-4'>
          <button className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Push To Slade</button>
          <button className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg'>Send Approval</button>
        </div>
      </section>
    </div>
  )
}

export default ViewApproval
