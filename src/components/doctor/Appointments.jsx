import React, { useState } from 'react'


import { IoIosArrowForward } from 'react-icons/io'
import PatientNavigationBar from '../navbar/PatientNavigationBar'
import eye from '../../assets/images/eye.svg'
import { useNavigate } from 'react-router-dom'
import calender from '../../assets/images/calender.svg'
import list from '../../assets/images/list.svg'
import { DatePicker, Space } from 'antd';
import pic from '../../assets/images/pic.svg'
import { GoPlus } from 'react-icons/go'
import AppointmentsModal from './modals/AppointmentsModal';

const Appointments = () => {
  const { RangePicker } = DatePicker;
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleCloseModal = () => setShowModal(false);

  const handleAddNewClick = (type) => {
    setModalType(type);
    setShowModal(true);
  };
  const navigate = useNavigate();
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

    <div className=''>
      <div className='flex justify-between items-center'>
        <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Follow Ups</span></p>
        <span className="text-sm flex items-center bg-[#DAE8E3] text-customGreen py-2 px-4 rounded-lg cursor-pointer" onClick={() => handleAddNewClick('Appointments')}><GoPlus />Add Appointments </span>
      </div>

      <PatientNavigationBar />
      <div className='flex justify-between items-center'>

        <span className='text-[#192252] font-medium'>Follow Ups</span>
        <div className='flex gap-4 items-center justify-end '>
          <Space direction="vertical" size={2} className=' p-2 w-[50%] overflow-hidden'>
            <RangePicker className='overflow-hidden' />
          </Space>
          <div className='flex bg-[#DAE8E3] rounded-lg  justify-between'>
            <img src={calender} alt='calender' className='py-2 px-4' />
            <img src={list} alt='calender' className='bg-customGreen p-2' />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-4 p-4'>
        {tableData.map((item, index) => (
          <div key={index} className='bg-white p-4 text-sm rounded-xl'>
            <div className='flex gap-2'>
              <img src={pic} className='size-11 rounded-full' />
              <p className='flex flex-col '>{item.name}<span className='text-[#697696]'>Patient Id :{item.patientId}</span></p>
            </div>
            <p className='font-medium text-[#192252] pt-2'>Appointment Detail</p>
            <p className='flex flex-col text-[#697696]'>Date : <span className='font-medium text-[#192252]'>{item.date}</span></p>
            <p className='flex flex-col text-[#697696]'>Problem : <span className='font-medium text-[#192252]'>{item.problem}</span></p>
          </div>
        ))}

      </div>
      {modalType === 'Appointments' && <AppointmentsModal show={showModal} handleClose={handleCloseModal} />}
    </div>

  )
}

export default Appointments
