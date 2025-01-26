// import React, { useEffect, useState } from 'react'
// import pic from '../../assets/images/pic.svg'
// import { MdSearch } from 'react-icons/md'
// import { AlertCircle, CheckCircle2, PenTool } from 'lucide-react';
// import api from '../../api/api';
// import axios from 'axios';
// import { useDispatch, useSelector } from 'react-redux';
// import { createVisit } from '../../redux/visit/visitSlice';
// import { deepSearch } from '../../redux/patient/patientSlice';
// import Cookies from 'js-cookie';
// import { useParams } from 'react-router-dom';
// import profPic from '../../assets/images/pic.svg'

// const CreatePersonalVisit = () => {
//   const { id } = useParams();
//   const [sladeVerification, setSladeVerification] = useState('No');
//   const [claimNo, setClaimNo] = useState('');
//   const [claimAmount, setClaimAmount] = useState('');
//   const [specialistClinic, setSpecialistClinic] = useState('');
//   const [visitingType, setVisitingType] = useState('');
//   const [feeType, setFeeType] = useState('');
//   const [department, setdepartment] = useState('');
//   const token = Cookies.get('token');
//   const dispatch = useDispatch();
//   const { patient } = useSelector((state) => state.patient);
//   const [formData, setFormData] = useState({
//     patient_id: '',
//     claim_number: '',
//     department: '',
//     clinic: '',
//     visit_type: '',
//     schemes: [{
//       claim_number: '',
//       available_balance: '',
//       insurer: ''
//     }],
//     payment_types: [{
//       cash: 0,
//       insurance: 0
//     }],
//     signature: ''
//   });

//   // const userData = JSON.parse(localStorage.getItem('token'));
//   // const token = userData?.data?.authorisation?.token;


//   // useEffect(() => {

//   //   dispatch(deepSearch({ search: id, token }));
//   // }, [id]);

//   // if (!patient) {
//   //   return <div>Loading patient details...</div>;
//   // }


//   // const dispatch = useDispatch();
//   // const { isLoading, error } = useSelector((state) => state.visits);

//   const [activeSection, setActiveSection] = useState('Member Verification');

//   const sections = ['Member Verification', 'Booking', 'Claim Documents'];

//   const updateFormData = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Update nested scheme data
//   const updateSchemeData = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       schemes: [{
//         ...prev.schemes[0],
//         [field]: value
//       }]
//     }));
//   };

//   // Update payment types
//   const updatePaymentType = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       payment_types: [{
//         ...prev.payment_types[0],
//         [field]: value ? 1 : 0
//       }]
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async () => {
//     try {
//       // Add your API endpoint here
//       const response = await axios.post(
//         'https://maimoon.hospify.co.ke/api/visits/create',
//         formData,
//         {
//           method: 'POST',
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'Content-Type': 'application/json',
//           }
//         }
//       );
//       console.log('Form submitted successfully:', response.data);
//       // Add success handling
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       // Add error handling
//     }
//   };



//   // const handleCreateVisit = () => {
//   //   dispatch(createVisit({ formData, token }));
//   // };

//   // Handle button click (Next/Submit)

//   const handleButtonClick = () => {
//     const currentIndex = sections.indexOf(activeSection);
//     if (activeSection === 'Claim Documents') {
//       handleSubmit();
//     } else if (currentIndex < sections.length - 1) {
//       setActiveSection(sections[currentIndex + 1]);
//     }
//   };


//   const renderSection = () => {
//     switch (activeSection) {
//       case 'Member Verification':
//         return (
//           <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-[#413D80] font-semibold">Member Verification</span>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-[#413D80] mb-2">
//                   Claim Number: <span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   value={formData.claim_number}
//                   onChange={(e) => updateFormData('claim_number', e.target.value)}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
//                 />
//               </div>
//               <div>
//                 <label className="block text-[#413D80] mb-2">
//                   Available Balance: <span className="text-red-600">*</span>
//                 </label>
//                 <input
//                   type="number"
//                   value={formData.schemes[0].available_balance}
//                   onChange={(e) => updateSchemeData('available_balance', e.target.value)}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
//                 />
//               </div>
//             </div>
//           </section>
//         );

//       case 'Booking':
//         return (
//           <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-[#413D80] mb-2">
//                   Department: <span className="text-red-600">*</span>
//                 </label>
//                 <select
//                   value={formData.department}
//                   onChange={(e) => updateFormData('department', e.target.value)}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
//                 >
//                   <option value="">Select Department</option>
//                   <option value="kitchen">Kitchen</option>
//                   <option value="ent">ENT</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-[#413D80] mb-2">
//                   Clinic: <span className="text-red-600">*</span>
//                 </label>
//                 <select
//                   value={formData.clinic}
//                   onChange={(e) => updateFormData('clinic', e.target.value)}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
//                 >
//                   <option value="">Select Clinic</option>
//                   <option value="ENT">ENT</option>
//                   <option value="General">General</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-[#413D80] mb-2">
//                   Visit Type: <span className="text-red-600">*</span>
//                 </label>
//                 <select
//                   value={formData.visit_type}
//                   onChange={(e) => updateFormData('visit_type', e.target.value)}
//                   className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
//                 >
//                   <option value="">Select Visit Type</option>
//                   <option value="in patient">In Patient</option>
//                   <option value="out patient">Out Patient</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-[#413D80] mb-2">Payment Types:</label>
//                 <div className="space-y-2">
//                   <label className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={formData.payment_types[0].cash === 1}
//                       onChange={(e) => updatePaymentType('cash', e.target.checked)}
//                       className="rounded border-slate-300"
//                     />
//                     <span>Cash</span>
//                   </label>
//                   <label className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       checked={formData.payment_types[0].insurance === 1}
//                       onChange={(e) => updatePaymentType('insurance', e.target.checked)}
//                       className="rounded border-slate-300"
//                     />
//                     <span>Insurance</span>
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </section>
//         );

//       case 'Claim Documents':
//         return (
//           <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
//             <div className="space-y-4">
//               <div className="flex items-center justify-between border border-slate-300 rounded-lg p-4">
//                 <div className="flex items-center gap-3">
//                   <PenTool className="h-5 w-5 text-[#413D80]" />
//                   <div>
//                     <h3 className="font-medium text-[#413D80]">Patient Signature</h3>
//                     <p className="text-sm text-slate-500">Enter signature data</p>
//                   </div>
//                 </div>
//                 <input
//                   value={formData.signature}
//                   onChange={(e) => updateFormData('signature', e.target.value)}
//                   className="w-full max-w-md px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
//                   placeholder="Enter signature data"
//                 />
//               </div>
//             </div>
//           </section>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="mx-auto p-4">
//       <h4 className="text-[#192252] font-bold mb-4">New Visit</h4>
//       <div className='grid grid-cols-12 mb-4 w-full bg-white p-8 rounded-[10px]'>
//         <div className='flex flex-col col-span-2 items-center gap-2'>
//           <img src={profPic} />
//           <span className='text-[#192252] font-semibold'>Idris Maimoon</span>
//         </div>

//         <div className='col-span-5 w-full px-4 text-[#413D80]'>
//           <p className=''>Patient Name : <span className='text-[#616161]'>Idriis Maimoon</span></p>
//           <p className=''>Age: <span className='text-[#616161]'>26 Years</span></p>
//           <p className=''>Gender: <span className='text-[#616161]'>Male</span></p>
//           <p className=''>Occupation: <span className='text-[#616161]'>Medical Doctor</span></p>
//           <p className=''>Company: <span className='text-[#616161]'>Britam</span></p>

//         </div>
//         <div className='col-span-5 w-full text-[#413D80]'>
//           <p>Visit code : <span className='text-[#616161]'>MH-0001</span></p>
//           <p>Scheme: <span className='text-[#616161]'>Kifili Country Government</span></p>
//           <p>Prescription No: <span className='text-[#616161]'>MHP1-000001</span></p>
//           <p>Address: <span className='text-[#616161]'>Ndovi Road, Malindi Kenya</span></p>
//           <p>Prescribed by: <span className='text-[#616161]'>Dr. Yunus</span></p>

//         </div>
//       </div>


//       {/* Navigation Indicators */}
//       <div className="w-full grid grid-cols-3 gap-4 mb-6">
//         {sections.map((section) => (
//           <button
//             key={section}
//             onClick={() => setActiveSection(section)}
//             className={`p-2 text-center font-medium rounded-lg transition-all duration-300 ${activeSection === section
//               ? 'bg-[#0E6F1E] text-white'
//               : 'text-[#697696] hover:bg-gray-100'
//               }`}
//           >
//             {section}
//           </button>
//         ))}
//       </div>

//       {/* Render Active Section */}
//       {renderSection()}

//       {/* Navigation Buttons */}
//       <div className="flex justify-between mt-6">
//         <button
//           onClick={() => {
//             const currentIndex = sections.indexOf(activeSection);
//             if (currentIndex > 0) {
//               setActiveSection(sections[currentIndex - 1]);
//             }
//           }}
//           className={`px-4 py-2 rounded-md transition ${sections.indexOf(activeSection) === 0
//             ? 'bg-gray-300 cursor-not-allowed'
//             : 'bg-[#0E6F1E] text-white hover:bg-green-700'
//             }`}
//           disabled={sections.indexOf(activeSection) === 0}
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleButtonClick}
//           className="px-4 py-2 bg-[#0E6F1E] text-white rounded-md hover:bg-green-700 transition"
//         >
//           {activeSection === 'Claim Documents' ? 'Submit' : 'Next'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CreatePersonalVisit;


import React, { useEffect, useRef, useState } from 'react'
import pic from '../../assets/images/pic.svg'
import { MdSearch } from 'react-icons/md'
import { AlertCircle, CheckCircle2, PenTool } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getIndividualPatient } from '../../redux/patient/patientSlice';
import { fetchDepartments } from '../../redux/department/departmentSlice';
import { fetchClinics } from '../../redux/clinic/clinicSlice';
import { fetchVisitTypes } from '../../redux/visit/visitTypesSlice';
import { createVisit } from '../../redux/visit/visitSlice';
import Signature from '@uiw/react-signature';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreatePersonalVisit = () => {
  const { id } = useParams();
  const [sladeVerification, setSladeVerification] = useState('No');
  const [claimNo, setClaimNo] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [specialistClinic, setSpecialistClinic] = useState('');
  const [visitingType, setVisitingType] = useState('');
  const [feeType, setFeeType] = useState('');
  const [department, setdepartment] = useState('');
  const [activeSection, setActiveSection] = useState('Member Verification');
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const { patient } = useSelector((state) => state.patient);
  const { departments } = useSelector((state) => state.departments);
  const { clinics } = useSelector((state) => state.clinics);
  const { visitTypes } = useSelector((state) => state.visitTypes);
  const { visits } = useSelector((state) => state.visits);
  const sections = ['Member Verification', 'Booking', 'Claim Documents'];
  const $svg = useRef(null);
  const [signatureData, setSignatureData] = useState('');

  const handleDraw = () => {
    if ($svg.current) {
      const signature = $svg.current.getData();
      setSignatureData(signature);
      console.log(signature);
    }
  };

  useEffect(() => {
    const interval = setInterval(handleDraw, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(getIndividualPatient({ search: id, token }));
    dispatch(fetchDepartments());
    dispatch(fetchClinics());
    dispatch(fetchVisitTypes());
  }, [id, dispatch, token]);

  const handleSubmit = () => {
    const formData = {
      patient_id: id,
      department: "kitchen",
      clinic: "ENT",
      visit_type: "in patient",
      schemes: [
        {
          claim_number: 2313,
          available_balance: 245,
          insurer: "",
        },
      ],
      payment_types: [
        {
          cash: 1,
          insurance: ""
        },
      ],
      signature: signatureData,
      bill_items: [
        {
          service: "Test",
          department: "kitchen",
          consultation_category: null,
          clinic: "ENT",
          payment_type: feeType,
          scheme: null,
          scheme_type: null,
          consultation_type: null,
          visit_type: "in patient",
          doctor: null,
          lab_test_type: null,
          image_test_type: null,
          drug: null,
          brand: null,
          branch: null,
          building: null,
          wing: null,
          ward: null,
          office: null,
          discount: null,
          current_time: null,
          duration: null,
          description: null,
        },
      ],
    };

    console.log('Form Data Submitted:', formData);
    dispatch(createVisit({ formData, token }));
    alert('Visit created successfully');
  };


  const handleButtonClick = () => {
    const currentIndex = sections.indexOf(activeSection);

    if (activeSection === 'Claim Documents') {
      handleSubmit();
    } else if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]);
    }
  };


  const renderSection = () => {
    switch (activeSection) {
      case 'Member Verification':
        return (
          <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#413D80] font-semibold">Member Verification</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex-grow">
                <input
                  type="search"
                  className="px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1"
                  placeholder="Search for patient here..."
                />
              </div>
              <button className="bg-[#0E6F1E] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition">
                <MdSearch />
                Search on DB
              </button>
            </div>

            <div className="mb-4">
              <label className="block text-[#413D80] mb-2">Have you verified on Slade?</label>
              <select
                value={sladeVerification}
                onChange={(e) => setSladeVerification(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#413D80] mb-2">
                  Enter Claim No: <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Claim number"
                  value={claimNo}
                  onChange={(e) => setClaimNo(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                />
              </div>
              <div>
                <label className="block text-[#413D80] mb-2">
                  Enter Amount: <span className="text-red-600">*</span>
                </label>
                <input
                  placeholder="Enter amount"
                  value={claimAmount}
                  onChange={(e) => setClaimAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                />
              </div>
            </div>
          </section>
        );
      case 'Booking':
        return (
          <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
            <div>
              <div>
                <label htmlFor="department" className="block mb-4 text-[#413D80]">
                  Select department<span className="text-red-600">*</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setdepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                >
                  {departments && departments.length > 0 ? (
                    departments.map((dept, index) => (
                      <option key={index} value={dept.id}>
                        {dept.name}
                      </option>
                    ))
                  ) : (
                    <>
                      <option>Loading...</option>
                    </>
                  )}
                </select>

              </div>

              <h4 className="mt-4 mb-2 font-semibold text-[#413D80]">For Outpatient</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="specialistClinic" className="block mb-4 text-[#413D80]">
                    For Specialist clinic<span className="text-red-600">*</span>
                  </label>
                  <select
                    value={specialistClinic}
                    onChange={(e) => setSpecialistClinic(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                  >
                    {clinics && clinics.length > 0 ? (
                      clinics.map((clin, index) => (
                        <option key={index} value={clin.id}>
                          {clin.name}
                        </option>
                      ))
                    ) : (
                      <>
                        <option>Loading...</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label htmlFor="visitingType" className="block mb-4 text-[#413D80]">
                    Visiting type<span className="text-red-600">*</span>
                  </label>
                  <select
                    value={visitingType}
                    onChange={(e) => setVisitingType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                  >{visitTypes && visitTypes.length > 0 ? (
                    visitTypes.map((viz, index) => (
                      <option key={index} value={viz.id}>
                        {viz.name}
                      </option>
                    ))
                  ) : (
                    <>
                      <option>Inpatient</option>
                      <option>Outpatient</option>
                      <option>FollowUps</option>
                    </>
                  )}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="feeType" className="block mb-4 text-[#413D80]">
                  Fee type<span className="text-red-600">*</span>
                </label>
                <select
                  value={feeType}
                  onChange={(e) => setFeeType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                >
                  <option>Insurance</option>
                  <option>Cash</option>
                </select>
              </div>
            </div>
          </section>
        );
      case 'Claim Documents':
        return (
          // <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          //   <div className="space-y-4">
          //     <div className="flex items-center justify-between border border-slate-300 rounded-lg p-4">
          //       <div className="flex items-center gap-3">
          //         <PenTool className="h-5 w-5 text-[#413D80]" />
          //         <div>
          //           <h3 className="font-medium text-[#413D80]">Patient Signature</h3>
          //           <p className="text-sm text-slate-500">Capture patient's electronic signature using the signature pad</p>
          //         </div>
          //       </div>

          //       {signatureStatus === 'pending' && (
          //         <button
          //           onClick={handleCaptureSignature}
          //           className="inline-flex items-center gap-2 bg-[#0E6F1E] text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          //         >
          //           <PenTool className="h-4 w-4" />
          //           Capture Signature
          //         </button>
          //       )}

          //       {signatureStatus === 'capturing' && (
          //         <div className="flex items-center gap-2 text-[#0E6F1E]">
          //           <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#0E6F1E] border-b-transparent" />
          //           Capturing...
          //         </div>
          //       )}

          //       {signatureStatus === 'completed' && (
          //         <div className="flex items-center gap-4">
          //           <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-200">
          //             <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          //             </svg>
          //             <span>Signature Captured</span>
          //           </div>
          //           <button
          //             onClick={handleRetry}
          //             className="text-[#0E6F1E] hover:text-green-700 underline text-sm"
          //           >
          //             Capture Again
          //           </button>
          //         </div>
          //       )}
          //     </div>

          //     {signatureStatus === 'error' && (
          //       <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          //         <div className="flex items-center gap-2">
          //           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          //           </svg>
          //           <span className="font-medium">Connection Error</span>
          //         </div>
          //         <p className="mt-2 text-sm">
          //           Unable to detect the signature pad. Please ensure the device is properly connected and try again.
          //         </p>
          //         <button
          //           onClick={handleRetry}
          //           className="mt-2 text-red-700 hover:text-red-800 underline text-sm block"
          //         >
          //           Try Again
          //         </button>
          //       </div>
          //     )}
          //   </div>

          //   <label htmlFor="SelectTemplate" className="block mb-2 text-[#413D80]">
          //     Select Template
          //   </label>
          //   <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]">
          //     <option>Jubilee</option>
          //     <option>M-Tiba</option>
          //     <option>SHIF</option>
          //   </select>
          // </section>

          <section className="space-y-4 p-4">
            <div className="signature-container border-2 border-gray-300 rounded-md">
              <Signature
                ref={$svg}
                width="1000"
                height="200"
                lineColor="#000000"
                onEnd={handleDraw}
              />
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => $svg.current.clear()} // Clear the signature
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Clear
              </button>
            </div>

            {/* Dropdown for selecting options */}
            <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]">
              <option>Jubilee</option>
              <option>M-Tiba</option>
              <option>SHIF</option>
            </select>

            {/* Display the captured signature as a string */}
            {signatureData && (
              <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded-md">
                <h3 className="font-semibold">Signature Data (Base64 or SVG):</h3>
                <pre>{signatureData}</pre>
              </div>
            )}
          </section>
        );
      default:
        return null;
    }
  };

  const [signatureStatus, setSignatureStatus] = useState('pending'); // 'pending' | 'capturing' | 'completed' | 'error'
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);

  const handleCaptureSignature = () => {
    if (!isDeviceConnected) {
      setSignatureStatus('error');
      return;
    }
    setSignatureStatus('capturing');
    // Here you would integrate with your signature pad device
    // For demonstration, we'll simulate a successful capture after 2 seconds
    setTimeout(() => {
      setSignatureStatus('completed');
    }, 2000);
  };

  const handleRetry = () => {
    setSignatureStatus('pending');
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const difference = Date.now() - birthDate.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };


  return (
    <div className="mx-auto p-4">
      <h4 className="text-[#192252] font-bold mb-4">New OP Visit</h4>

      {/* Patient Info Card */}
      <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
        <div className="bg-white p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Conditional rendering based on if patient data is available */}
            {patient && patient.length > 0 ? (
              <>
                <div className="md:col-span-2 flex flex-col items-center gap-4">
                  <img
                    src={pic}
                    className="w-36 h-36 rounded-full object-cover"
                    alt="Patient"
                  />
                  <span className="text-[#192252] font-semibold">
                    {`${patient[0].patient_firstname} ${patient[0].patient_lastname}`}
                  </span>
                </div>
                <div className="md:col-span-5 text-[#413D80] text-sm">
                  {[
                    { label: 'Patient Name:', value: `${patient[0].patient_firstname} ${patient[0].patient_lastname}` },
                    { label: 'Age:', value: calculateAge(patient[0].dob) + ' Years' },
                    { label: 'Gender:', value: patient[0].gender },
                    { label: 'Occupation:', value: patient[0].occupation || null },
                  ].map(({ label, value }) => (
                    <p key={label} className="grid grid-cols-3 gap-2 py-1">
                      <span>{label}</span>
                      <span className="text-[#616161] col-span-2">{value}</span>
                    </p>
                  ))}
                </div>
                <div className="md:col-span-5 text-[#413D80] text-sm">
                  {[
                    { label: 'Visit Code:', value: `${patient[0].patient_code}` }, // Visit code data is missing
                    { label: 'Scheme:', value: 'Not Provided' }, // Scheme data is missing
                    { label: 'Address:', value: patient[0].address },
                  ].map(({ label, value }) => (
                    <p key={label} className="grid grid-cols-3 gap-2 py-1">
                      <span>{label}</span>
                      <span className="text-[#616161] col-span-2">{value}</span>
                    </p>
                  ))}
                </div>
              </>
            ) : (
              // Show loading state or message until patient data is available
              <div className="text-center text-gray-500">
                Loading patient data...
              </div>
            )}
          </div>
        </div>
      </section>



      {/* Navigation Indicators */}
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`p-2 text-center font-medium rounded-lg transition-all duration-300 ${activeSection === section
              ? 'bg-[#0E6F1E] text-white'
              : 'text-[#697696] hover:bg-gray-100'
              }`}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Render Active Section */}
      {renderSection()}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => {
            const currentIndex = sections.indexOf(activeSection);
            if (currentIndex > 0) {
              setActiveSection(sections[currentIndex - 1]);
            }
          }}
          className={`px-4 py-2 rounded-md transition ${sections.indexOf(activeSection) === 0
            ? 'bg-gray-300 cursor-not-allowed'
            : 'bg-[#0E6F1E] text-white hover:bg-green-700'
            }`}
          disabled={sections.indexOf(activeSection) === 0}
        >
          Previous
        </button>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-[#0E6F1E] text-white rounded-md hover:bg-green-700 transition"
        >
          {activeSection === 'Claim Documents' ? 'Book Visit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default CreatePersonalVisit;