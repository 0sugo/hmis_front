import React from 'react'


import PatientNavigationBar from '../navbar/PatientNavigationBar'
import { IoIosArrowForward } from 'react-icons/io'
import pic from '../../assets/images/pic.svg'

const Prescription = () => {
  const timelineData = [
    {
      date: 'May, 2024',
      title: 'Diabetes Control Appointment',
      description: 'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead.',
      Treatment: 'Check-up',
      Duration: 3,
      prescription: 'prescription-result.pdf'
    },
    {
      date: 'May, 2023',
      title: 'Diabetes Control Appointment',
      description:
        'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead',
      Treatment: 'Check-up',
      Duration: 3,
      prescription: 'prescription-result.pdf'
    },
    {
      date: 'May, 2022',
      title: 'Diabetes Control Appointment',
      description:
        'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead',
      Treatment: 'Check-up',
      Duration: 3,
      prescription: 'prescription-result.pdf'
    },
    {
      date: 'May, 2021',
      title: 'Diabetes Control Appointment',
      description:
        'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead',
      Treatment: 'Check-up',
      Duration: 3,
      prescription: 'prescription-result.pdf'
    },
  ];
  return (
    // <div className='relative overflow-y-auto scrollbar-none h-dvh'>
    //   <TopNavbar />
    //   <Sidebar />
      // <div className='absolute top-20 left-56 w-[83%] min-h-screen h-fit bg-[#F1F5F9] px-8 py-4'>
      <div>

              <div className='flex justify-between items-center'>
          <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Prescription</span></p>
        </div>

         <div className='bg-white p-2 mt-4 rounded-lg '>
          <div className='grid grid-cols-12  p-4 text-sm'>
            <div className='col-span-2 flex flex-col items-center gap-4'>
              <img src={pic} className=' size-36' />
              <span className='text-[#192252]'>Idrishhh Maimoon</span>
            </div>
            <div className=' col-span-4 text-[#413D80]  gap-2 flex flex-col'>
              <p className='grid grid-cols-3 '>Patientygvhbr Name:<span className='text-[#616161] col-span-2'>Idriis Maimoon</span></p>
              <p className='grid grid-cols-3 '>Age:<span className='text-[#616161] col-span-2'>26 Years</span></p>
              <p className='grid grid-cols-3'>Gender:<span className='text-[#616161] col-span-2'>Male</span></p>
              <p className='grid grid-cols-3'>Occupation:<span className='text-[#616161] col-span-2'>Medical Doctor</span></p>
              <p className='grid grid-cols-3'>Company:<span className='text-[#616161] col-span-2'>Britam</span></p>

            </div>
            <div className='col-span-4 text-[#413D80] text-s gap-2 flex flex-col'>
              <p className='grid grid-cols-3'>Visit Code:<span className='text-[#616161] col-span-2'>MH-0001</span></p>
              <p className='grid grid-cols-3'>Scheme:<span className='text-[#616161] col-span-2'>Kilifi Country Government</span></p>
              <p className='grid grid-cols-3'>Prescription No:<span className='text-[#616161] col-span-2'>MHP1-000001</span></p>
              <p className='grid grid-cols-3'>Address:<span className='text-[#616161] col-span-2'>Ndovi Road,Malindi Kenya</span></p>
              <p className='grid grid-cols-3'>Prescribed By:<span className='text-[#616161] col-span-2'>Dr.Yunus</span></p>

            </div>

          </div>
          <div className='flex justify-end gap-4 '>

            <span className='bg-[rgba(255,244,0,0.64)] h-[40px] rounded-lg px-4 flex items-center justify-center text-[#192252]'>Exclusions</span>
            <p className='bg-[rgba(255,244,0,0.64)] h-[40px] rounded-lg px-4 items-center justify-center flex gap-4 text-sm text-[#192252]'>Available Balance: Kshs 6,500<span className='border border-[#C9C9C9] h-[28px]'></span><span>Visit Limit : Kshs</span></p>
          </div>
        </div>

        <PatientNavigationBar />
        <div className='col-span-8  bg-white rounded-l-xl  h- scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300'>
          <h3 className='text-[#192252] font-medium pl-10 pt-4 text-base'>Prescription List</h3>

          {timelineData.map((item, index) => (
            <div key={index} className="relative px-2 sm:pl-32 md:pl-96 py-6">
              <div className="flex flex-col sm:flex-row items-start mb-1  before:absolute before:left-2 sm:before:left-0 before:h-[80%] before:px-px before:bg-slate-300 sm:before:ml-[2.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-customGreen after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[2.5rem] after:-translate-x-1/2 after:translate-y-1">
                <div className="text-sm font-medium text-[#000000] pl-12">{item.date}</div>
              </div>
              <div className="flex items-center bg-[#FAFAFA] mx-[4%]">
                <div className="px-4 py-2 ">
                  <div className="text-sm font-medium text-[#192252]">{item.title}</div>
                  <div className="text-customGrey text-xs font-medium">{item.description}</div>
                  <hr className='w-full my-4 mx-auto' />
                  <div className=' '>
                    <div className="flex justify-between items-center">
                      <p className="text-xs flex flex-col font-medium text-[#697696]">Treatment: <span className='text-[#192252] font-medium'>{item.Treatment}</span></p>
                      <p className="text-xs flex flex-col  font-medium text-[#697696]">Doctor In charge: <span className='text-[#192252] font-medium'>{item.Duration}</span> </p>
                      <p className="text-xs flex flex-col  font-medium text-[#697696]">Date & Time : <span className="text-[#1B91FF] font-medium"> {item.prescription}</span></p>
                    </div>
                  </div>
                </div>
                <span className='bg-customGreen rounded-lg text-white py-2 px-4 text-xs'>Download prescription</span>
              </div>

            </div>
          ))}

        </div>
      </div >

  )
}

export default Prescription
