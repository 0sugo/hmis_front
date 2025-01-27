import React, { useState } from 'react'
import Vitals from './Vitals';
import PastHistory from './PastHistory';
import ChronicDiseases from './ChronicDiseases';
import PatientNavigationBar from './PatientNavigationBar';
import Consultation from './Consultation';
import Diagnostics from './Diagnostics';
import Results from './Results';
import Prescription from './Prescription';
import OrderTests from './OrderTest';
import Services from './Services';
import Nursingorder from './Nursingorder';
import Medication from './Medication';
import FollowUps from './FollowUps';
import ClaimForm from './ClaimForm';
import Documents from './Documents';
import AdmissionRequest from './AdmissionRequest';
import PatientsInfo from './PatientsInfo';
import PatientList from './PatientList';
import pic from '../../assets/images/pic.svg'

const DoctorsPatientView = () => {

  const [activeSection, setActiveSection] = useState('patientInformation');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'consultation':
        return <Consultation />;
      case 'patientInformation':
        return <PatientsInfo />;
      case 'vitals':
        return <Vitals />;
      case 'pastHistory':
        return <PastHistory />;
      case 'chronicDiseases':
        return <ChronicDiseases />;
      case 'diagnostics':
        return <Diagnostics />;
      case 'viewResults':
        return <Results />;
      case 'prescription':
        return <Medication />;
      case 'orderTests':
        return <OrderTests />;
      case 'services':
        return <Services />;
      case 'nursingOrders':
        return <Nursingorder />;
      case 'medication':
        return <Medication />;
      case 'followUps':
        return <FollowUps />;
      case 'claimForm':
        return <ClaimForm />;
      case 'documents':
        return <Documents />;
      default:
        return <Consultation />;
    }
  };


  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {/* Patient header */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <span className="text-[#192252] font-medium text-xl">Ajay Sharma</span>
          <button className="flex items-center justify-center gap-1 px-4 py-2 bg-[#DAE8E3] text-customGreen rounded-lg text-xs font-medium">
            <GoPlus />
            Add Notes
          </button>
        </div> */}

        {/* Patient info card */}
        <div className="bg-white p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2 flex flex-col items-center gap-4">
              <img src={pic} className="w-36 h-36" alt="Patient" />
              <span className="text-[#192252]">Idris Maimoon</span>
            </div>
            <div className="md:col-span-5 text-[#413D80] text-sm">
              <p className="grid grid-cols-3"><span>Patient Name:</span><span className="text-[#616161] col-span-2">Idriis Maimoon</span></p>
              <p className="grid grid-cols-3"><span>Age:</span><span className="text-[#616161] col-span-2">26 Years</span></p>
              <p className="grid grid-cols-3"><span>Gender:</span><span className="text-[#616161] col-span-2">Male</span></p>
              <p className="grid grid-cols-3"><span>Occupation:</span><span className="text-[#616161] col-span-2">Medical Doctor</span></p>
              <p className="grid grid-cols-3"><span>Company:</span><span className="text-[#616161] col-span-2">Britam</span></p>
            </div>
            <div className="md:col-span-5 text-[#413D80] text-sm">
              <p className="grid grid-cols-3"><span>Visit Code:</span><span className="text-[#616161] col-span-2">MH-0001</span></p>
              <p className="grid grid-cols-3"><span>Scheme:</span><span className="text-[#616161] col-span-2">Kilifi Country Government</span></p>
              <p className="grid grid-cols-3"><span>Prescription No:</span><span className="text-[#616161] col-span-2">MHP1-000001</span></p>
              <p className="grid grid-cols-3"><span>Address:</span><span className="text-[#616161] col-span-2">Ndovi Road,Malindi Kenya</span></p>
              <p className="grid grid-cols-3"><span>Prescribed By:</span><span className="text-[#616161] col-span-2">Dr.Yunus</span></p>
            </div>
          </div>

          {/* Exclusions and balance info */}
          <div className="flex flex-col mt-4 md:flex-row justify-between md:justify-end gap-4 items-center w-full">
            <span className="bg-[rgba(255,244,0,0.64)] rounded-lg px-4 py-2 text-[#192252] text-sm w-full md:w-auto">
              Exclusions : Surgery,Surgery,Surgery,Surgery
            </span>
            <span className="bg-[rgba(255,244,0,0.64)] rounded-lg px-4 py-2 flex items-center gap-4 text-sm text-[#192252] w-full md:w-auto">
              Available Balance: Kshs 6,500
              <span className="border-l border-[#C9C9C9] h-6 mx-2"></span>
              Visit Limit : Kshs 2,550
            </span>
          </div>
        </div>
        <PatientNavigationBar activeSection={activeSection} onSectionChange={setActiveSection} />

        {renderActiveSection()}
      </div>
    </div>
  )
}

export default DoctorsPatientView
