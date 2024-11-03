// import React, { useState } from 'react'
// 
// 
// import PatientNavigation from '../navbar/PatientNavigation'
// import { GoPlus } from 'react-icons/go'
// import { IoIosArrowForward } from 'react-icons/io'
// import PastVisitModal from './modals/PastVisitModal'
// import PastSurgeriesModal from './modals/PastSurgeriesModal'
// import PastObstetricModal from './modals/PastObstetricModal'
// import PastAdmissionModal from './modals/PastAdmissionModal'
// import FamilyHistoryModal from './modals/FamilyHistoryModal'
// import SubstanceAbuseHistory from './modals/SubstanceAbuseHistory'
// import VaccinationHistory from './modals/VaccinationHistory'
// import { useNavigate } from 'react-router-dom'
// import PatientNavigationBar from '../navbar/PatientNavigationBar'
// import pic from '../../assets/images/pic.svg'

// const PastHistory = () => {
//   const relevantHistoryDetails = ['Past Visits', 'Past Admissions', 'Past Surgeries/Procedures', 'Past Obstetric History', 'Family History', 'Substances Abuse History', 'Vaccination History'];
//   const navigate = useNavigate();

//   const [showModal, setShowModal] = useState(false);
//   const [modalType, setModalType] = useState(null);

//   const handleCloseModal = () => setShowModal(false);
//   const handleAddNewClick = (type) => {
//     setModalType(type);
//     setShowModal(true);
//   };
//   const handleViewHistory = () => {
//     navigate('/individualpatient/view-relevant-history')
//   }

//   return (

//     <div className=''>
//       <div className='flex justify-between items-center'>
//         <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Relevant Past History</span></p>
//       </div>

//       <div className='flex flex-col gap-2'>
//         {relevantHistoryDetails.map((value, index) => (
//           <div key={value} className='flex justify-between border-b border-[#DAE8E3] p-4'>
//             <p className='text-[#192252]'>{value}</p>
//             <div className='flex items-center justify-center gap-4 text-white'>
//               <span className='bg-customGreen py-2 px-4 rounded-lg' onClick={handleViewHistory}>View visits</span>
//               <span className='flex items-center bg-customGreen py-2 px-4 rounded-lg cursor-pointer' onClick={() => handleAddNewClick(value)}><GoPlus />Add New</span></div>
//           </div>
//         ))
//         }
//         <div />
//         <div />
//       </div>
//       {modalType === 'Past Visits' && <PastVisitModal show={showModal} handleClose={handleCloseModal} />}
//       {modalType === 'Past Admissions' && <PastAdmissionModal show={showModal} handleClose={handleCloseModal} />}
//       {modalType === 'Past Surgeries/Procedures' && <PastSurgeriesModal show={showModal} handleClose={handleCloseModal} />}
//       {modalType === 'Past Obstetric History' && <PastObstetricModal show={showModal} handleClose={handleCloseModal} />}
//       {modalType === 'Family History' && <FamilyHistoryModal show={showModal} handleClose={handleCloseModal} />}
//       {modalType === 'Substances Abuse History' && <SubstanceAbuseHistory show={showModal} handleClose={handleCloseModal} />}
//       {modalType === 'Vaccination History' && <VaccinationHistory show={showModal} handleClose={handleCloseModal} />}
//     </div>
//   )
// }

// export default PastHistory
import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { IoIosArrowForward } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import PastVisitModal from './modals/PastVisitModal';
import PastSurgeriesModal from './modals/PastSurgeriesModal';
import PastObstetricModal from './modals/PastObstetricModal';
import PastAdmissionModal from './modals/PastAdmissionModal';
import FamilyHistoryModal from './modals/FamilyHistoryModal';
import SubstanceAbuseHistory from './modals/SubstanceAbuseHistory';
import VaccinationHistory from './modals/VaccinationHistory';

const PastHistory = () => {
  const relevantHistoryDetails = [
    'Past Visits',
    'Past Admissions',
    'Past Surgeries/Procedures',
    'Past Obstetric History',
    'Family History',
    'Substances Abuse History',
    'Vaccination History'
  ];
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const handleCloseModal = () => setShowModal(false);
  const handleAddNewClick = (type) => {
    setModalType(type);
    setShowModal(true);
  };
  const handleViewHistory = () => {
    navigate('/individualpatient/view-relevant-history');
  };

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center space-x-2 text-sm">
        <span className="font-semibold">Ajay Sharma</span>
        <IoIosArrowForward className="text-gray-400" />
        <span className="text-customGreen">Past History</span>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center bg-gray-50 border-b">
          <div className="font-medium text-gray-700">Relevant History Details</div>
          <div className="md:col-span-2 flex justify-end space-x-2">
            <button className="bg-customGreen text-white px-4 py-2 rounded-md text-sm">View details</button>
            <button className="bg-customGreen text-white px-4 py-2 rounded-md text-sm flex items-center">
              <GoPlus className="mr-1" /> Add New
            </button>
          </div>
        </div> */}
        {relevantHistoryDetails.map((value, index) => (
          <div key={value} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center border-b last:border-b-0">
            <div className="text-gray-700">{value}</div>
            <div className="md:col-span-2 flex justify-end space-x-2">
              <button
                className="bg-customGreen text-white px-4 py-2 rounded-md text-sm" onClick={handleViewHistory}>View visits </button>
              <button
                className="bg-customGreen text-white px-4 py-2 rounded-md text-sm flex items-center"
                onClick={() => handleAddNewClick(value)}
              >
                <GoPlus className="mr-1" /> Add New
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalType === 'Past Visits' && (
        <PastVisitModal show={showModal} handleClose={handleCloseModal} />
      )}
      {modalType === 'Past Admissions' && (
        <PastAdmissionModal show={showModal} handleClose={handleCloseModal} />
      )}
      {modalType === 'Past Surgeries/Procedures' && (
        <PastSurgeriesModal show={showModal} handleClose={handleCloseModal} />
      )}
      {modalType === 'Past Obstetric History' && (
        <PastObstetricModal show={showModal} handleClose={handleCloseModal} />
      )}
      {modalType === 'Family History' && (
        <FamilyHistoryModal show={showModal} handleClose={handleCloseModal} />
      )}
      {modalType === 'Substances Abuse History' && (
        <SubstanceAbuseHistory show={showModal} handleClose={handleCloseModal} />
      )}
      {modalType === 'Vaccination History' && (
        <VaccinationHistory show={showModal} handleClose={handleCloseModal} />
      )}
    </div>
  );
};

export default PastHistory;
