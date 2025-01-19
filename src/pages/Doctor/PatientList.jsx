import React, { useState } from 'react'
import eye from '../../assets/images/eye.svg'
import download from '../../assets/images/download.svg';
import search from '../../assets/images/search.svg'
import { LuPlus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import axios from '../../api/api'

const PatientList = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const tableData = [];

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/patients');
      console.log(response.data)
      tableData = response.data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-auto p-4">
      <h2 className='text-[#192252] font-medium py-4 text-xl'>Patient List</h2>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 space-y-4 sm:space-y-0'>
        <div className="w-full sm:w-auto relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 text-sm w-full rounded-lg pt-2 pb-2 pl-12 pr-3"
              placeholder="Search for patient"
            />
          </div>
        </div>

        <div className='flex flex-wrap gap-4'>
          <button className='flex rounded-lg gap-2 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
            <img src={download} className='h-5 w-5' alt="Download" />
            <span className="hidden sm:inline">Download Report</span>
          </button>
          <button className='flex rounded-lg gap-1 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
            <GoPlus />
            <span className="hidden sm:inline">Add Patient Report</span>
          </button>
        </div>
      </div>
      <div className="max-h-full overflow-x-auto overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300 p-4 bg-white">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="sticky top-0 bg-[#F3F7FF] rounded-tl-xl px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-left">Patient Name</th>
              <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Patient ID</th>
              <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Weight</th>
              <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Blood Pressure</th>
              <th className="sticky top-0 bg-[#F3F7FF] px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Blood Glucose</th>
              <th className="sticky top-0 bg-[#F3F7FF] rounded-tr-xl px-5 py-3 border-b-2 border-gray-200 text-sm text-[#413D80] font-semibold text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(tableData)} */}
            {tableData.map((data, index) => (
              <tr key={index}>
                <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm">{data.patient_firstname}</td>
                <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.patient_code}</td>
                <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.age}</td>
                <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.visitType}</td>
                <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">{data.waitTime}</td>
                <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">
                  <div className='flex justify-center gap-2'>
                    <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8'>
                      <img src={eye} alt='eye' />
                    </span>
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

export default PatientList
