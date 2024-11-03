import React from 'react'
;
;
import { GoPlus } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import PatientNavigation from '../navbar/PatientNavigation';
import PatientNavigationBar from '../navbar/PatientNavigationBar';

const FamilyHistorySpecifics = () => {
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

    <div className=''>
      <div className="flex justify-between items-center">
        <p className="text-[#192252] font-medium text-xl flex items-center gap-2">
          Ajay Sharma
          <span className="flex items-center text-[#192252] text-sm">
            <IoIosArrowForward />
            Relevant History
          </span>
          <span className="flex items-center text-customGreen text-sm">
            <IoIosArrowForward />
            Family History
          </span>
        </p>
        <span
          className="text-sm flex items-center bg-customGreen text-white py-2 px-4 rounded-lg cursor-pointer"
          onClick={() => handleAddNewClick('Family History')}
        >
          <GoPlus />
          Add New
        </span>
      </div>


      <div className='grid grid-cols-12 gap-4 '>
        <div className='col-span-4'>
          <div className='flex flex-col gap-2 h-'>
            <div className='bg-white rounded-xl h-1/2 flex flex-col items-center text-xs gap-2 py-8'>
              <img src='https://via.placeholder.com/70' alt='patient' className='h-[70px] w-[70px] object-cover rounded-full' />
              <span className='text-[#192252] font-medium'>Ajay Sharma</span>
              <span className='text-[#697696] font-medium '>Relation : Brother</span>
              <span className='text-[#697696] font-medium'>Phone No. : +254 712 345 678</span>
              <span className='text-[#697696] font-medium'>Email : ajaysharma12@gmail.com</span>
              <span className='text-[#697696] font-medium'>Ndovu Road, Malindi Kenya 36598</span>
            </div>

            <div className='bg-white h-1/2 py-2 px-4 rounded-xl text-customGrey text-xs'>
              <h3 className='text-[#192252] pt-2 font-medium text-base'>Patient Information</h3>
              <div className='flex flex-col gap-1'>
                <p className='flex justify-between font-medium'>Weight:<span className='text-[#192252] font-medium'>160 lb</span></p>
                <p className='flex justify-between font-medium'>Blood Pressure:<span className='text-[#192252] font-medium'>124/79 mm</span></p>
                <p className='flex justify-between font-medium'>Blood Glucose:<span className='text-[#192252] font-medium'>2017 mg/dl</span></p>
                <p className='flex justify-between font-medium'>Height:<span className='text-[#192252] font-medium'>1.78 m</span></p>
                <p className='flex justify-between font-medium'>Blood Type:<span className='text-[#192252] font-medium'>0+ positive</span></p>
                <p className='flex justify-between font-medium'>Disease:<span className='text-[#192252] font-medium'>Diabetes</span></p>
                <p className='flex justify-between font-medium'>Allergies:<span className='text-[#192252] font-medium'>Peanut</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-8  bg-white rounded-l-xl  h- scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300'>
          <h3 className='text-[#192252] font-medium pl-10 pt-4 text-base'>Past Appointment Notes</h3>

          {timelineData.map((item, index) => (
            <div key={index} className="relative px-2 sm:pl-32 md:pl-96 py-6">
              <div className="flex flex-col sm:flex-row items-start mb-1  before:absolute before:left-2 sm:before:left-0 before:h-[80%] before:px-px before:bg-slate-300 sm:before:ml-[2.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-customGreen after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[2.5rem] after:-translate-x-1/2 after:translate-y-1">
                <div className="text-sm font-medium text-[#000000] pl-12">{item.date}</div>
              </div>
              <div className="px-12 py-2 ">
                <div className="text-sm font-medium text-[#192252]">{item.title}</div>
                <div className="text-customGrey text-xs font-medium">{item.description}</div>
                <hr className='w-full my-4 mx-auto' />
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs flex flex-col font-medium text-[#697696]">Treatment: <span className='text-[#192252] font-medium'>{item.Treatment}</span></p>
                    <p className="text-xs flex flex-col  font-medium text-[#697696]">Duration: <span className='text-[#192252] font-medium'>{item.Duration} months</span> </p>
                    <p className="text-xs flex flex-col  font-medium text-[#697696]">Prescription : <span className="text-[#1B91FF] font-medium"> {item.prescription}</span></p>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  )
}

export default FamilyHistorySpecifics
