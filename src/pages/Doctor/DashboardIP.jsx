import React from 'react'
import newPatient from '../../assets/images/newPatient.svg'
import search from '../../assets/images/search.svg'
import patientWait from '../../assets/images/patientWait.svg'
import sleep from '../../assets/images/sleep.svg'
import dayCase from '../../assets/images/dayCase.svg'
import pen from '../../assets/images/pen.svg'
import eye from '../../assets/images/eye.svg'
import { useNavigate } from 'react-router-dom'

const DashboardIP = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/app/PatientInfo', { replace: true });

  }

  const tableData = [
    {
      IpNo: 'mmh12',
      patientName: 'James Kingori',
      age: '12',
      gender: 'male',
      doctorInCharge: 'Dr.Kamau',
      diagnosis: 'Malaria',
      doa: '12-2-2024',
      category: 'Medical',
      ward: 'St.Michael',
      bedNo: '4',
      approvalStatus: 'Approved',
      time: '10 min'
    },
    {
      IpNo: 'mmh92',
      patientName: 'Peter Milke',
      age: '23',
      gender: 'male',
      doctorInCharge: 'Dr.Stpeth',
      diagnosis: 'AIDS',
      doa: '25-9-2024',
      category: 'Medical',
      ward: 'St.Gabriel',
      bedNo: '7',
      approvalStatus: 'Not Approved',
      time: '50 min'
    },
  ]

  return (
    <div className='flex flex-col'>
      {/* Summary */}
      <div className='flex justify-between items-center w-full'>
        <div className='flex flex-col p-2 min-h-fit'>
          <span className='text-black text-sm min-h-fit'>Good Morning</span>
          <span className='text-customGreen font-semibold text-xl min-h-fit'>Dr.Alamini</span>
        </div>
        <div>

          <div className="lg:block hidden relative max-w-xs">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-12 pr-3"
                placeholder="Search for patient by name,mobile number"
              />
            </div>
          </div>
        </div>

      </div>
      {/** Recents Summary */}
      <div className='grid grid-cols-8'>
        <div className='col-span-2 flex flex-col gap-y-4'>
          <div className='flex flex-col '>
            <div className='flex justify-center items-center bg-[#F3E8FF] rounded-lg w-[90%] h-[110px] gap-2'>
              <span className='bg-[#8D49D4] p-4 rounded-full'>
                <img src={newPatient} className=' w-5 h-5' />
              </span>
              <p className='flex flex-col items-start text-[#8D49D4] font-semibold text-lg'>34<span className='text-[#5E5E5E] text-xs w-[115px] h-fit overflow-hidden'>New Patients</span></p>
            </div>
          </div>

          <div className='flex flex-col '>
            <div className='flex justify-center items-center bg-[#DEF3FF] rounded-lg w-[90%] h-[110px] gap-2'>
              <span className='bg-[#2E8BBF] p-4 rounded-full'>
                <img src={patientWait} className=' w-5 h-5' />
              </span>
              <p className='flex flex-col items-start text-[#2E8BBF] font-semibold text-lg'>24<span className='text-[#5E5E5E] text-xs w-[115px] h-fit overflow-hidden '>Patients waiting for Results</span></p>
            </div>
          </div>

          <div className='flex flex-col '>
            <div className='flex justify-center items-center bg-[#FFE2E5] rounded-lg w-[90%] h-[110px] gap-2'>
              <span className='bg-[#DD3459] p-4 rounded-full'>
                <img src={sleep} className=' w-5 h-5' />
              </span>
              <p className='flex flex-col items-start text-[#DD3459] font-semibold text-lg'>16<span className='text-[#5E5E5E] text-xs w-[115px] h-fit overflow-hidden '>Patients waiting for Review</span></p>
            </div>
          </div>

          <div className='flex flex-col '>
            <div className='flex justify-center items-center bg-[#DCF4E0] rounded-lg w-[90%] h-[110px] gap-2'>
              <span className='bg-[#058843] p-4 rounded-full'>
                <img src={dayCase} className=' w-5 h-5' />
              </span>
              <p className='flex flex-col items-start text-[#058843] font-semibold text-lg'>16<span className='text-[#5E5E5E] text-xs w-[115px] h-fit overflow-hidden '>DayCase / Observation</span></p>
            </div>
          </div>
        </div>

        <div className='col-span-6 bg-[#F7F4FF] shadow-md rounded-lg overflow-x-auto py-6 px-2'>
          <div className="max-h-[400px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300">
            <table className="w-full leading-normal overflow-x-auto">
              <thead>
                <tr>
                  <th className="sticky top-0 bg-[#BED0FF] rounded-l-xl py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">IP No.</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Patient Name</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Age</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Gender</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Doctor Incharge</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Diagnosis</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">D.O.A</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Category</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Ward</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Bed No.</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Approval status</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Time</th>
                  <th className="sticky top-0 bg-[#BED0FF] rounded-r-xl px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index}>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161]">{data.IpNo}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.patientName}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.age}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.gender}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.doctorInCharge}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.diagnosis}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.doa}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.category}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.ward}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.bedNo}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.approvalStatus}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.time}</td>
                    <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">
                      <div className='flex justify-center gap-2'>
                        <span className='bg-[#E4EDFE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={pen} alt='pen' /></span>
                        <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer' onClick={handleNavigate}><img src={eye} alt='eye' /></span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  )
}

export default DashboardIP
