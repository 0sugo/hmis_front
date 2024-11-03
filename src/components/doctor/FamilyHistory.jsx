// import React from 'react'
// 
// 
// import PatientNavigation from '../navbar/PatientNavigation'
// import { IoIosArrowForward } from 'react-icons/io'
// import profPic from '../../assets/images/profPic.svg'
// import { GoPlus } from 'react-icons/go'
// import FamilyHistoryModal from './modals/FamilyHistoryModal'
// import { useState } from 'react'

// const FamilyHistory = () => {
//   const familyData = [
//     {
//       name: 'Jane Doe',
//       relation: 'Mother',
//       phone: '07894567890'
//     },
//     {
//       name: 'Jane Doe',
//       relation: 'Sister',
//       phone: '07894567890'
//     },
//     {
//       name: 'John Doe',
//       relation: 'Father',
//       phone: '07894567890'
//     },
//     {
//       name: 'Jane Doe',
//       relation: 'Brother',
//       phone: '07894567890'
//     },
//     {
//       name: 'Jane Doe',
//       relation: 'Brother',
//       phone: '07894567890'
//     },
//   ]
//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState(null);

//   const handleCloseModal = () => setShowModal(false);

//   const handleAddNewClick = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };

//   return (
//     <div className='relative overflow-y-auto scrollbar-none h-dvh'>
//       <TopNavbar />
//       <Sidebar />
//       <div className='absolute top-20 left-56 w-[83%] min-h-screen h-fit bg-[#F1F5F9] px-8 py-4'>
//         <div className='flex justify-between items-center'>
//           <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-[#192252] text-sm'><IoIosArrowForward />Relevant History </span><span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Family History </span></p>
//           <span className='flex items-center bg-customGreen text-white py-2 px-4 rounded-lg cursor-pointer'onClick={() => handleAddNewClick(value)}><GoPlus />Add New</span>
//         </div>

//         <PatientNavigation />
//         <div className='grid grid-cols-4 gap-4'>
//           {familyData.map((data, index) => (
//             <div key={index} {...data} className='bg-white p-4 flex flex-col gap-3 rounded-lg'>
//               <div>
//               <img src={profPic} alt='family-history' />
//               <span className='font-semibold text-[#192252] text-lg my-4'>{data.name}</span>
//               </div>
//               <div className='flex flex-col gap-2'>
//                 <span className='text-[#697696] font-medium flex justify-between'>Relation:<span className='font-semibold'>Mother</span></span>
//                 <span className='text-[#697696] font-medium flex justify-between'>Phone No.<span className='font-semibold'>07894567890</span></span>
//               </div>
//               <div className='flex flex-col gap-2'>
//                 <span className='border-2 bg-customGreen text-white px-4 py-2 rounded-lg flex justify-center'>Edit</span>
//                 <span className='border-2 border-customGreen text-customGreen px-4 py-2 rounded-lg flex justify-center'>Delete</span>
//               </div>

//             </div>
//           ))}
//         </div>
//       </div>
//       {modalType === 'Family History' && <FamilyHistoryModal show={showModal} handleClose={handleCloseModal} />}
//     </div>
//   )
// }

// export default FamilyHistory

import React, { useState } from 'react';
;
;
import PatientNavigation from '../navbar/PatientNavigation';
import { IoIosArrowForward } from 'react-icons/io';
import profPic from '../../assets/images/profPic.svg';
import { GoPlus } from 'react-icons/go';
import FamilyHistoryModal from './modals/FamilyHistoryModal';
import PatientNavigationBar from '../navbar/PatientNavigationBar';

const FamilyHistory = () => {
  const familyData = [
    {
      name: 'Jane Doe',
      relation: 'Mother',
      phone: '07894567890',
    },
    {
      name: 'Jane Doe',
      relation: 'Sister',
      phone: '07894567890',
    },
    {
      name: 'John Doe',
      relation: 'Father',
      phone: '07894567890',
    },
    {
      name: 'Jane Doe',
      relation: 'Brother',
      phone: '07894567890',
    },
    {
      name: 'Jane Doe',
      relation: 'Brother',
      phone: '07894567890',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleCloseModal = () => setShowModal(false);

  const handleAddNewClick = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  return (
    <div className="">
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

      <PatientNavigationBar />
      <div className="grid grid-cols-4 gap-4 text-xs">
        {familyData.map((data, index) => (
          <div key={index} {...data} className="bg-white p-4 flex flex-col gap-3 rounded-lg">
            <div>
              <img src={profPic} alt="family-history" />
              <span className="font-semibold text-[#192252] text-sm my-4">
                {data.name}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[#697696] font-medium flex justify-between">
                Relation:
                <span className="font-semibold">{data.relation}</span>
              </span>
              <span className="text-[#697696] font-medium flex justify-between">
                Phone No.
                <span className="font-semibold">{data.phone}</span>
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="border-2 bg-customGreen text-white px-4 py-2 rounded-lg flex justify-center">
                Edit
              </span>
              <span className="border-2 border-customGreen text-customGreen px-4 py-2 rounded-lg flex justify-center">
                Delete
              </span>
            </div>
          </div>
        ))}
      </div>
      {modalType === 'Family History' && (
        <FamilyHistoryModal show={showModal} handleClose={handleCloseModal} />
      )}
    </div>

  );
};

export default FamilyHistory;
