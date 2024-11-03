import React, { useState } from 'react'
import PatientNavigationBar from '../navbar/PatientNavigationBar'
import { IoIosArrowForward } from 'react-icons/io'


import eye from '../../assets/images/eye.svg'
import NurseInstruction from './modals/NurseInstruction'
import pic from '../../assets/images/pic.svg'

const Nursingorder = () => {
  const [expandedRows, setExpandedRows] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleCloseModal = () => setShowModal(false);

  const handleAddNewClick = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const toggleRow = (index) => {
    setExpandedRows(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const tableData = [
    {
      NurseId: 'N0001',
      NurseName: 'Nurse 1',
      ShiftTime: 'Morning',
      Instruction: 'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead..Read More',
      status: 'Ready'
    },
    {
      NurseId: 'N0002',
      NurseName: 'Nurse 2',
      ShiftTime: 'Morning',
      Instruction: 'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead..Read More',
      status: 'Collect sample'
    },
    {
      NurseId: 'N0003',
      NurseName: 'Nurse 3',
      ShiftTime: 'Morning',
      Instruction: 'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead..Read More',
      status: 'Ready'
    },
    {
      NurseId: 'N0004',
      NurseName: 'Nurse 4',
      ShiftTime: 'Morning',
      Instruction: 'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead..Read More',
      status: 'Collect sample'
    },
    {
      NurseId: 'N0005',
      NurseName: 'Nurse 5',
      ShiftTime: 'Morning',
      Instruction: 'Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead..Read More',
      status: 'Ready'
    },
  ]
  return (

    // <div className=''>
    //   <div className='flex justify-between items-center'>
    //     <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Nursing Orders</span></p>
    //   </div>


    //   <div className='bg-white p-4 my-4'>
    //     <span className='text-[#100C53] font-medium'>Nursing Orders</span>
    //     <div className='col-span-6 shadow-md rounded-lg overflow-x-auto py-6 px-2'>
    //       <div className="max-h-[400px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300 ">
    //         <table className="min-w-full leading-normal">
    //           <thead>
    //             <tr>
    //               <th className="sticky top-0 bg-[#BED0FF] px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Nurse Id</th>
    //               <th className="sticky top-0 bg-[#BED0FF] px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Nurse Name</th>
    //               <th className="sticky top-0 bg-[#BED0FF] px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Shift Time</th>
    //               <th className="sticky top-0 bg-[#BED0FF] px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Instruction</th>
    //               <th className="sticky top-0 bg-[#BED0FF] px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Action</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             {tableData.map((data, index) => (
    //               <tr key={index}>
    //                 <td className="px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.NurseId}</td>
    //                 <td className="px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.NurseName}</td>
    //                 <td className="px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.ShiftTime}</td>
    //                 <td className="px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">
    //                   <div style={{ maxWidth: expandedRows[index] ? 'none' : '150px' }} className={expandedRows[index] ? '' : 'truncated'}>
    //                     {data.Instruction}
    //                   </div>
    //                   <span className="show-more" onClick={() => toggleRow(index)}>
    //                     {expandedRows[index] ? 'Show Less' : 'Show More'}
    //                   </span>
    //                 </td>
    //                 <td className="px-4 py-4 border-b border-gray-200 text-[#616161] text-sm text-center">
    //                   <div className='flex justify-center items-center gap-2'>
    //                     <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8'><img src={eye} alt='eye' /></span>
    //                     <span className='bg-customGreen py-2 px-4 flex justify-center items-center cursor-pointer rounded-lg text-white' onClick={() => handleAddNewClick('nurseInstruction')}>Add Instruction</span>
    //                   </div>
    //                 </td>
    //               </tr>
    //             ))}
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>


    //   </div>
    //   {modalType === 'nurseInstruction' && <NurseInstruction show={showModal} handleClose={handleCloseModal} />}
    // </div>
    <div className="max-w-7xl sm:mx- px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <p className="text-[#192252] font-medium text-lg sm:text-xl flex flex-wrap items-center gap-2 mb-2 sm:mb-0">
          Ajay Sharma

          <span className="flex items-center text-customGreen text-sm">
            <IoIosArrowForward className="flex-shrink-0" />
            Nurse Instructions
          </span>
        </p>

      </div>

      <form className="mt-4">
        <label className="text-[#192252] text-xs font-semibold block mb-2">
          Enter Nurse Instruction Here:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
          <textarea placeholder='Enter nurse Instruction' rows="" className="block w-full sm:col-span-10 border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none"/>
          <button type="submit" className="w-full sm:w-auto px-4 py-2 sm:col-span-2 rounded-lg bg-customGreen text-white sm:mt-0">Add </button>
        </div>
      </form>
    </div>
  )
}

export default Nursingorder
