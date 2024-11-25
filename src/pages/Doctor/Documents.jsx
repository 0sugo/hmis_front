import React from 'react'
import PatientNavigationBar from './PatientNavigationBar'
import { IoIosArrowForward } from 'react-icons/io'
import PatientDoc from '../../assets/images/PatientDoc.svg'
import downloadIcon from '../../assets/images/downloadIcon.svg'
import pic from '../../assets/images/pic.svg'

const Documents = () => {
  const tableData = [
    {
      name: 'Aadhar Card ID',
    },
    {
      name: 'Aadhar Card ID',
    },
    {
      name: 'Aadhar Card ID',
    },
    {
      name: 'Aadhar Card ID',
    },
  ];
  return (

    <div className=''>
      <div className='flex justify-between items-center'>
        <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Documents</span></p>
      </div>
      <div className='flex flex-col gap-2'>
        {tableData.map((item, index) => (
          <div className='bg-white flex justify-between p-4 rounded-lg items-center'>
            <div className='flex gap-2 items-center '>
              <img src={PatientDoc} alt="card" />
              <span className='w-fit'>{item.name}</span>
            </div>

            <div className='flex gap-2 items-center'>
              <img src={downloadIcon} alt="download card" />
              <span className='text-[#332AB8] cursor-pointer'>{item.name}.img</span>
            </div>

          </div>

        ))}
      </div>

    </div>
  )
}

export default Documents
