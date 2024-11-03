import React from 'react'
import { useNavigate } from 'react-router-dom';

const PatientNavigation = () => {
  const navigate = useNavigate();
  const patientStory = [
    { name: 'Consultation', path: '/individualpatient/consultation' },
    { name: 'Vitals', path: '/individualpatient/vitals' },
    { name: 'Relevant History', path: '/individualpatient/relevant-history' },
    { name: 'Chronic Disease', path: '/individualpatient/view-relevant-history/chronic-disease' },
    { name: 'Diagnostics', path: '/individualpatient/diagnostics' },
    { name: 'Order Tests', path: '/individualpatient/order-tests' },
    { name: 'Medication', path: '/individualpatient/medication' },
    { name: 'Appointments', path: '/appointments' },
  ];
  const handleRedirect = (path) => {
    navigate(path);
  }

  return (
    <div className='flex justify-evenly text-sm rounded-[11px] items-center my-4 p-4 bg-[#DAE8E3]'>
      {patientStory.map((value, index) => (
        <span key={index} className='text-[#697696] cursor-pointer' onClick={() => handleRedirect(value.path)}>{value.name}</span>
      ))}
    </div>
  )
}

export default PatientNavigation
