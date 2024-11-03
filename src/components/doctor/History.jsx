import React from 'react'


import PatientNavigation from '../navbar/PatientNavigation'
import eye from '../../assets/images/eye.svg'
import { IoIosArrowForward } from 'react-icons/io'
import PatientNavigationBar from '../navbar/PatientNavigationBar'

const History = () => {
  const tableData = [
    {
      visitCode: 'MM0001',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0002',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0003',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'V0004',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0005',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0006',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0007',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0008',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0009',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0010',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
  ];
  return (

      <div className=''>
      <div className='flex justify-between items-center'>
      <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Relevant History </span></p>

        </div>

        <div className="max-h-full overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300 p-4 bg-white">
          <table className="min-w-full leading-normal">
            <thead >
              <tr >
                <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Visit ID</th>
                <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Patient ID</th>
                <th className="sticky top-0 bg-[#F3F7FF] rounded-tl-xl px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-left">Patient Name</th>
                <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Doctor Incharge</th>
                <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Disease</th>
                <th className="sticky top-0 bg-[#F3F7FF] rounded-tr-xl px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index} >
                  <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm">{data.patientName}</td>
                  <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.visitCode}</td>
                  <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.age}</td>
                  <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.visitType}</td>
                  <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.waitTime}</td>
                  <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">
                    <div className='flex justify-center gap-2'>
                      <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8'><img src={eye} alt='eye' /></span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default History
