import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import PatientNavigation from './PatientNavigation'
import eye from '../../assets/images/eye.svg'
import { useNavigate } from 'react-router-dom'

const Diagnostics = () => {
  const navigate = useNavigate();

  const tableData = [
    {
      date: '01-01-2023',
      test: 'urinalysis',
      department: 'Laboratory',
      expectingTime: '12',
      status: 'Pending',
      reason: 'Reason here...',
    },
    {
      date: '01-01-2023',
      test: 'urinalysis',
      department: 'Laboratory',
      expectingTime: '12',
      status: 'Pending',
      reason: 'Reason here...',
    },
    {
      date: '01-01-2023',
      test: 'urinalysis',
      department: 'Laboratory',
      expectingTime: '12',
      status: 'Pending',
      reason: 'Reason here...',
    },
    {
      date: '01-01-2023',
      test: 'urinalysis',
      department: 'Laboratory',
      expectingTime: '0',
      status: 'ready',
      reason: 'Reason here...',
    }
  ]
  const tableData1 = [
    {
      dateAndTime: '01-2-2023',
      test: 'Diabetes',
    },
    {
      dateAndTime: '01-2-2023',
      test: 'Diabetes',
    },
    {
      dateAndTime: '01-2-2023',
      test: 'Diabetes',
    }]
  const handleNavigate = () => {
    navigate('/individualpatient/laboratory/biochemistry', { replace: true });
  }

  return (
    <div className="max-w-7xl overflow-scroll px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <p className="text-[#192252] font-medium text-lg sm:text-xl flex items-center gap-2 mb-2 sm:mb-0">
          Ajay Sharma
          <span className="flex items-center text-customGreen text-sm">
            <IoIosArrowForward />Diagnostics
          </span>
        </p>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-x-auto p-4 mb-4">
        <span className="text-[#100C53] font-semibold block mb-2">Ordered Tests</span>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr>
                <th className="bg-[#BED0FF] rounded-l-xl py-3 px-2 text-[10px] sm:text-xs text-[#413D80] text-left">Date</th>
                <th className="bg-[#BED0FF] py-3 px-2 text-[10px] sm:text-xs text-[#413D80] text-left">Test</th>
                <th className="bg-[#BED0FF] py-3 px-2 text-[10px] sm:text-xs text-[#413D80] text-left">Department</th>
                <th className="bg-[#BED0FF] py-3 px-2 text-[10px] sm:text-xs text-[#413D80] text-left">Expecting Time</th>
                <th className="bg-[#BED0FF] py-3 px-2 text-[10px] sm:text-xs text-[#413D80] text-left">Status</th>
                <th className="bg-[#BED0FF] rounded-r-xl py-3 px-2 text-[10px] sm:text-xs text-[#413D80] text-left">Reason</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td className="py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs text-[#616161]">{data.date}</td>
                  <td className="py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs text-[#616161]">{data.test}</td>
                  <td className="py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs text-[#616161]">{data.department}</td>
                  <td className="py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs text-[#616161]">{data.expectingTime}</td>
                  <td className={`py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs ${data.status === 'Pending' ? 'text-[#FFA620]' : 'text-customGreen'}`}>
                    <span className={`rounded-md cursor-pointer px-2 py-1 sm:px-4 sm:py-2 ${data.status === 'Pending' ? 'bg-[#FFEFD8]' : 'bg-[#DBFFD8]'}`}>
                      {data.status}
                    </span>
                  </td>
                  <td className="py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs text-[#616161]">{data.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 my-4">
        {['laboratory', 'imaging', 'cardiac', 'others'].map((item) => (
          <span key={item} className="uppercase bg-[#D9D9D9] flex justify-center items-center py-2 sm:py-3 border border-[#F1F5F9] text-[#192252] rounded-md font-medium cursor-pointer text-xs sm:text-sm">
            {item}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 my-4">
        {['haematology', 'biochemistry', 'serology', 'immunology', 'pathology', 'Microbiology'].map((item) => (
          <span
            key={item}
            className="uppercase bg-white flex justify-center items-center py-2 border border-[#F1F5F9] text-[#192252] rounded-md font-medium cursor-pointer text-xs sm:text-sm"
            onClick={item === 'biochemistry' ? handleNavigate : undefined}
          >
            {item}
          </span>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-2 my-4">
        {['Current Results', 'Past Results'].map((title, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-x-auto p-4">
            <div className="flex justify-between items-center mb-2 px-4">
              <span className="text-[#100C53] font-semibold">{title}</span>
              <span className="text-[#100C53] font-medium text-sm cursor-pointer">See all</span>
            </div>
            <div className="">
              <table className="w-full min-w-[480px] max-w-[480px] overflow-x-scroll">
                <thead>
                  <tr>
                    <th className="bg-[#BED0FF] rounded-l-xl py-3 px-1 text-[10px] sm:text-xs text-[#413D80] text-center">Date</th>
                    <th className="bg-[#BED0FF] py-3 px-1 text-[10px] sm:text-xs text-[#413D80] text-center">Test </th>
                    <th className="bg-[#BED0FF] rounded-r-xl py-1 px-2 text-[10px] sm:text-xs text-[#413D80] text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData1.map((data, index) => (
                    <tr key={index}>
                      <td className="py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs text-[#616161] text-center">{data.dateAndTime}</td>
                      <td className="py-4 px-2 border-b border-gray-200 text-[10px] sm:text-xs text-[#616161] text-center">{data.test}</td>
                      <td className="py-4 px-2 border-b border-gray-200 text-[#616161] text-sm text-center">
                        <div className="flex justify-center">
                          <span className="bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8">
                            <img src={eye} alt="eye" className="w-4 h-4" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diagnostics;
