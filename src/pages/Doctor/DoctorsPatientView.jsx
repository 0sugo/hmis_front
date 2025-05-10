import React, { useEffect, useState } from "react";
import Vitals from "./Vitals";
import PastHistory from "./PastHistory";
import ChronicDiseases from "./ChronicDiseases";
import PatientNavigationBar from "./PatientNavigationBar";
import Consultation from "./Consultation";
import Diagnostics from "./Diagnostics";
import Results from "./Results";
import Prescription from "./Prescription";
import OrderTests from "./OrderTest";
import Services from "./Services";
import Nursingorder from "./Nursingorder";
import Medication from "./Medication";
import FollowUps from "./FollowUps";
import ClaimForm from "./ClaimForm";
import Documents from "./Documents";
import AdmissionRequest from "./AdmissionRequest";
import PatientsInfo from "./PatientsInfo";
import PatientList from "./PatientList";
import pic from "../../assets/images/pic.svg";
import { useLocation } from "react-router-dom";
import axios from "../../api/api";

const DoctorsPatientView = () => {
  const location = useLocation();
  const { id } = location.state;
  const [activeSection, setActiveSection] = useState("patientInformation");
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`api/patients/get?id=${id}`);
      setPatient(response.data[0]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const ageCalculator = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    FetchData();
  }, []);

  const renderActiveSection = () => {
    switch (activeSection) {
      case "consultation":
        return <Consultation />;
      case "patientInformation":
        return <PatientsInfo patient={patient} />;
      case "vitals":
        return <Vitals patient={patient} />;
      case "pastHistory":
        return <PastHistory />;
      case "chronicDiseases":
        return <ChronicDiseases />;
      case "diagnostics":
        return <Diagnostics />;
      case "viewResults":
        return <Results />;
      case "prescription":
        return <Medication />;
      case "orderTests":
        return <OrderTests />;
      case "services":
        return <Services />;
      case "nursingOrders":
        return <Nursingorder />;
      case "medication":
        return <Medication />;
      case "followUps":
        return <FollowUps />;
      case "claimForm":
        return <ClaimForm />;
      case "documents":
        return <Documents />;
      default:
        return <Consultation />;
    }
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col space-y-4">
        {/* Patient info card */}
        {!loading && patient ? (
          <div className="bg-white p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-2 flex flex-col items-center gap-4">
                <img src={pic} className="w-36 h-36" alt="Patient" />
                <span className="text-[#192252]">
                  {patient.patient_firstname
                    ? `${patient.patient_firstname} ${patient.patient_lastname}`
                    : "No name available"}
                </span>
              </div>
              <div className="md:col-span-5 text-[#413D80] text-sm">
                <p className="grid grid-cols-3">
                  <span>Patient Name:</span>
                  <span className="text-[#616161] col-span-2">
                    {patient.patient_firstname
                      ? `${patient.patient_firstname} ${patient.patient_lastname}`
                      : "No name available"}
                  </span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Age:</span>
                  <span className="text-[#616161] col-span-2">
                    {patient.dob
                      ? ageCalculator(patient.dob)
                      : "Age not available"}
                  </span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Gender:</span>
                  <span className="text-[#616161] col-span-2">
                    {patient.gender || "No gender available"}
                  </span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Occupation:</span>
                  <span className="text-[#616161] col-span-2">
                    {patient.occupation || "No occupation available"}
                  </span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Scheme company:</span>
                  <span className="text-[#616161] col-span-2">******</span>
                </p>
              </div>
              <div className="md:col-span-5 text-[#413D80] text-sm">
                <p className="grid grid-cols-3">
                  <span>Visit Code:</span>
                  <span className="text-[#616161] col-span-2">
                    {patient.patient_code || "No visit code available"}
                  </span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Scheme-type:</span>
                  <span className="text-[#616161] col-span-2">******</span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Prescription No:</span>
                  <span className="text-[#616161] col-span-2">******</span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Address:</span>
                  <span className="text-[#616161] col-span-2">
                    {patient.address || "No Address available"}
                  </span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Prescribed By:</span>
                  <span className="text-[#616161] col-span-2">Dr.Yunus</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col mt-4 md:flex-row justify-between md:justify-end gap-4 items-center w-full">
              <span className="bg-[rgba(255,244,0,0.64)] rounded-lg px-4 py-2 text-[#192252] text-sm w-full md:w-auto">
                Exclusions: ******
              </span>
              <span className="bg-[rgba(255,244,0,0.64)] rounded-lg px-4 py-2 flex items-center gap-4 text-sm text-[#192252] w-full md:w-auto">
                Available Balance: Kshs ******
                <span className="border-l border-[#C9C9C9] h-6 mx-2"></span>
                Visit Limit: Kshs ******
              </span>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}

        <PatientNavigationBar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
        />

        {renderActiveSection()}
      </div>
    </div>
  );
};

export default DoctorsPatientView;
