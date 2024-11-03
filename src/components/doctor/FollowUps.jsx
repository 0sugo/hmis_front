import React from 'react'


import PatientNavigationBar from '../navbar/PatientNavigationBar'
import { IoIosArrowForward } from 'react-icons/io'
import calender from '../../assets/images/calender.svg'
import list from '../../assets/images/list.svg'
import { DatePicker, Space } from 'antd';
import pic from '../../assets/images/pic.svg'

const FollowUps = () => {
  const { RangePicker } = DatePicker;
  const tableData = [
    {
      name: 'Ajay Sharma',
      patientId: 'P0001',
      date: 'Monday, 12th July 2021 on 10:00 AM',
      problem: 'Blood sugar management',
    },
    {
      name: 'ClintonJay',
      patientId: 'P0002',
      date: 'Monday, 12th July 2021 on 10:00 AM',
      problem: 'Blood sugar management',
    },
    {
      name: 'Ajay Sharma',
      patientId: 'P0001',
      date: 'Monday, 12th July 2021 on 10:00 AM',
      problem: 'Blood sugar management',
    },
    {
      name: 'ClintonJay',
      patientId: 'P0002',
      date: 'Monday, 12th July 2021 on 10:00 AM',
      problem: 'Blood sugar management',
    }];

  return (
    <div className='p-4 md:p-6 lg:p-8'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
        <p className='text-[#192252] font-medium text-lg sm:text-xl flex items-center gap-2 mb-2 sm:mb-0'>
          Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Follow Ups</span>
        </p>
      </div>

      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
        <span className='text-[#192252] font-medium mb-2 sm:mb-0'>Follow Ups</span>
        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-end w-full sm:w-auto'>
          <Space direction="vertical" size={2} className='p-2 w-full sm:w-auto'>
            <RangePicker className='w-full' />
          </Space>
          <div className='flex bg-[#DAE8E3] rounded-lg justify-between w-full sm:w-auto'>
            <img src={calender} alt='calender' className='py-2 px-4' />
            <img src={list} alt='calender' className='bg-customGreen p-2' />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tableData.map((item, index) => (
          <div key={index} className='bg-white p-4 text-sm rounded-xl'>
            <div className='flex gap-2 items-center'>
              <img src={pic} className='w-11 h-11 rounded-full' alt={item.name} />
              <p className='flex flex-col'>
                <span className='font-medium'>{item.name}</span>
                <span className='text-[#697696] text-xs'>Patient Id: {item.patientId}</span>
              </p>
            </div>
            <p className='font-medium text-[#192252] pt-2'>Appointment Detail</p>
            <p className='flex flex-col text-[#697696] text-xs'>
              Date: <span className='font-medium text-[#192252]'>{item.date}</span>
            </p>
            <p className='flex flex-col text-[#697696] text-xs'>
              Problem: <span className='font-medium text-[#192252]'>{item.problem}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FollowUps
