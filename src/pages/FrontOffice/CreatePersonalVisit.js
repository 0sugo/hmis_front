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
import api from '../../api/api';
import { fetchServices } from '../../redux/service/serviceSlice';

const CreatePersonalVisit = () => {
  const { id } = useParams();
  // const { bookings, error, isLoading } = useSelector((state) => state.bookingss);
  const [sladeVerification, setSladeVerification] = useState('No');
  const [currentInsuarances, setCurrentInsuarances] = useState([]);
  const [claimNo, setClaimNo] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [specialistClinic, setSpecialistClinic] = useState('');
  const [visitingType, setVisitingType] = useState('');
  const [department, setdepartment] = useState('');
  const [service, setservice] = useState('');
  const [activeSection, setActiveSection] = useState('Member Verification');
  const dispatch = useDispatch();
  const token = Cookies.get('token');
  const { patient } = useSelector((state) => state.patient);
  const { departments } = useSelector((state) => state.departments);
  const { clinics } = useSelector((state) => state.clinics);
  const { visitTypes } = useSelector((state) => state.visitTypes);
  const { visits } = useSelector((state) => state.visits);
  const { services } = useSelector((state) => state.services);
  const sections = ['Member Verification', 'Booking', 'Claim Documents'];
  const $svg = useRef(null);
  const [priceList, setPriceList] = useState(null);
  const [showButton, setShowButton] = useState(true);
  const [signatureData, setSignatureData] = useState('');
  const [checkedItems, setCheckedItems] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleDraw = () => {
    if ($svg.current) {
      const signature = $svg.current.getData();
      setSignatureData(signature);
      console.log(signature);
    }
  };

  const handleFeeTypeChange = (type) => {
    setFeeType(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  useEffect(() => {
    const interval = setInterval(handleDraw, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    dispatch(getIndividualPatient({ search: id, token }));
    dispatch(fetchDepartments());
    dispatch(fetchClinics());
    // dispatch(fetchVisitTypes());
    dispatch(fetchServices());
  }, [id, dispatch, token]);

  // const handleSubmit = () => {
  //   console.log(checkedItems);
  //   const formData = {
  //     patient_id: id,
  //     department: "",
  //     clinic: "",
  //     visit_type: "",
  //     schemes: [
  //       {
  //         claim_number: "",
  //         available_balance: "",
  //         insurer: "",
  //       },
  //     ],
  //     payment_types: [
  //       {
  //         cash: "",
  //         insurance: ""
  //       },
  //     ],
  //     signature: signatureData,
  //     bill_items: [
  //       {
  //         service: "",
  //         department: "",
  //         consultation_category: "",
  //         clinic: "",
  //         payment_type: "",
  //         scheme: "",
  //         scheme_type: "",
  //         consultation_type: "",
  //         visit_type: "",
  //         doctor: "",
  //         lab_test_type: "",
  //         image_test_type: "",
  //         drug: "",
  //         brand: "",
  //         branch: "",
  //         building: "",
  //         wing: "",
  //         ward: "",
  //         office: "",
  //         discount: "",
  //         current_time: "",
  //         duration: "",
  //         description: "",
  //       },
  //     ],
  //   };

  //   console.log('Form Data Submitted:', formData);
  //   dispatch(createVisit({ formData, token }));
  //   alert('Visit created successfully');
  // };
  const handleSubmit = () => {
    console.log(checkedItems);
    const formData = {
      patient_id: id,
      department: department,
      clinic: specialistClinic,
      visit_type: visitingType,
      schemes: currentInsuarances,
      payment_types: [
        {
          cash: feeType.cash ? 1 : 0,
          insurance: feeType.insurance ? 1 : 0
        }
      ],
      signature: signatureData,
      bar_code: "bar_code", // Assuming you want to include this field
      service_price_details: checkedItems.map(item => ({
        id: item,
        discount: 0.0, // Assuming no discount by default
        description: "No description",
        quantity: 1.0
      }))
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
      if (activeSection === 'Booking') {
        // Only proceed if at least one item is checked
        if (checkedItems.length > 0) {
          setActiveSection(sections[currentIndex + 1]);
        } else {
          // Optionally, you can show a toast message or some other user feedback here
          toast.error('Please select at least one service.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        setActiveSection(sections[currentIndex + 1]);
      }
    }
  }

  const getPriceList = async () => {
    const formData = {
      service: service,
      department: department,
      consultation_category: null,
      clinic: specialistClinic,
      payment_types: [
        {
          cash: feeType.cash ? 1 : 0,
          insurance: feeType.insurance ? 1 : 0,
        }
      ],
      branch: null,
      building: null,
      wing: null,
      ward: null,
      office: null,
      duration: null,
      // visit_type: visitingType
    };

    try {
      const response = await api.post('/api/visits/selectPrices', formData);
      setPriceList(response.data);
      setShowTable(true);
      console.log('Pricelist:', response.data);
    } catch (error) {
      console.error('Error fetching pricelist:', error);
      setShowTable(false);
    }
  };

  const handleCheckboxChange = (itemId, isChecked) => {
    setCheckedItems(prev => {
      if (isChecked) {
        return [...prev, itemId];
      } else {
        return prev.filter(id => id !== itemId);
      }
    });
  };

  const [feeType, setFeeType] = useState({
    cash: false,
    insurance: false
  });

  // add insuarances
  const addInsurance = () => {
    const allInsurers = currentInsuarances.map(ins => ins.insurer);
    const availableInsurers = patient[0].insurance_details
      .map(ins => ins.schemes.map(scheme => scheme.name))
      .flat()
      .filter(insurer => !allInsurers.includes(insurer));

    if (availableInsurers.length > 0) {
      setCurrentInsuarances(prev => [...prev, { claim_number: '', available_balance: '', insurer: availableInsurers[0] }]);
    } else {
      // Handle no more unique insurers to add, perhaps show a message or disable the add button
      toast.info('No more unique insurers to add.');
    }
  };

  const removeInsurance = (index) => {
    setCurrentInsuarances(prev => prev.filter((_, i) => i !== index));
  };

  const updateInsuranceField = (index, field, value) => {
    setCurrentInsuarances(prev => prev.map((ins, i) =>
      i === index ? { ...ins, [field]: value } : ins
    ));
  };

  // populate the current insurances from the patient data
  useEffect(() => {
    if (patient && patient.length > 0 && patient[0].insurance_details) {
      const schemes = patient[0].insurance_details
        .map(ins => ins.schemes.map(scheme => scheme.name))
        .flat();
      setCurrentInsuarances(schemes.map(scheme => ({
        claim_number: '',
        available_balance: '',
        insurer: scheme
      })));
    }
  }, [patient]);

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

            <div>
              <button
                onClick={addInsurance}
                className="mb-2 bg-[#0E6F1E] text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                disabled={currentInsuarances.length >= (patient[0]?.insurance_details?.length ?? 0)}
              >
                Add Insurance
              </button>
              {currentInsuarances.map((insurance, index) => (
                <div key={index} className="mb-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <label className="block mb-2 text-[#413D80]">Insurer:</label>
                      <select
                        value={insurance.insurer}
                        onChange={(e) => updateInsuranceField(index, 'insurer', e.target.value)}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                      >
                        {patient[0]?.insurance_details?.map(ins => ins.schemes.map(scheme => (
                          <option key={scheme.name} value={scheme.name}>{scheme.name}</option>
                        ))).flat()}
                      </select>
                    </div>
                    {['claim_number', 'available_balance'].map(field => (
                      <div key={field}>
                        <label className="block mb-2 capitalize text-[#413D80]">{field.replace('_', ' ')}:</label>
                        <input
                          type="text"
                          value={insurance[field]}
                          onChange={(e) => updateInsuranceField(index, field, e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => removeInsurance(index)}
                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* 
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
            </div> */}
          </section>
        );
      case 'Booking':
        return (
          <section className="bg-white p-4 rounded-lg mb-4 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className='col-span-2'>
              <div>
                <label htmlFor='service' className='block mb-4 text-[#413D80]'>
                  Select service<span className='text-red-600'>*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setservice(e.target.value)}
                  className='w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]'
                >
                  <option selected value='Please select a service'></option>
                  {services && services.length > 0 ? (
                    services.map((serv, index) => (
                      <option key={index} value={serv.name}>
                        {serv.name}
                      </option>
                    ))
                  ) : (
                    <>

                      <option>Loading...</option>
                    </>
                  )}
                </select>

                <label htmlFor="department" className="block mb-4 text-[#413D80]">
                  Select department<span className="text-red-600">*</span>
                </label>
                <select
                  value={department}
                  onChange={(e) => setdepartment(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                >
                  <option selected value="Please select a department"></option>
                  {departments && departments.length > 0 ? (
                    departments.map((dept, index) => (
                      <option key={index} value={dept.name}>
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

              {/* <h4 className="mt-4 mb-2 font-semibold text-[#413D80]">For Outpatient</h4> */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="specialistClinic" className="block mt-4 text-[#413D80]">
                    Select specialist clinic<span className="text-red-600">*</span>
                  </label>
                  <select
                    value={specialistClinic}
                    onChange={(e) => setSpecialistClinic(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                  >
                    <option selected value="Please select a Clinic"></option>

                    {clinics && clinics.length > 0 ? (
                      clinics.map((clin, index) => (
                        <option key={index} value={clin.name}>
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
                  <label htmlFor="visitingType" className="block mt-4 text-[#413D80]">
                    Visiting type<span className="text-red-600">*</span>
                  </label>
                  <select
                    value={visitingType}
                    onChange={(e) => setVisitingType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
                  >
                    <option value="Please select a visit Type"></option>
                    {visitTypes && visitTypes.length > 0 ? (
                      visitTypes.map((viz, index) => (
                        <option key={index} value={viz.id}>
                          {viz.name}
                        </option>
                      ))
                    ) : (
                      <>
                        <option value="Please select a visit Type"></option>

                        <option>Inpatient</option>
                        <option>Outpatient</option>
                        <option>FollowUps</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="feeType" className="block text-[#413D80]">
                  Fee type<span className="text-red-600">*</span>
                </label>
                <div className="flex items-center gap-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={feeType.cash}
                      onChange={() => handleFeeTypeChange('cash')}
                      className="rounded border-slate-300"
                    />
                    <span className="ml-2">Cash</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={feeType.insurance}
                      onChange={() => handleFeeTypeChange('insurance')}
                      className="rounded border-slate-300"
                    />
                    <span className="ml-2">Insurance</span>
                  </label>
                </div>
              </div>
            </div>

            <div className='col-span-2 flex flex-col items-center justify-center border rounded-lg'>
              <button className='bg-[#0E6F1E] text-white px-4 py-2 rounded-lg mb-4' onClick={getPriceList}>Get Pricelist</button>
              {showTable && priceList && (
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">Select</th>
                      <th scope="col" className="px-6 py-3">Service</th>
                      <th scope="col" className="px-6 py-3">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(priceList) ?
                      priceList.map((item, index) => (
                        <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              checked={checkedItems.includes(item.id)}
                              onChange={(e) => handleCheckboxChange(item.id, e.target.checked)}
                            />
                          </td>
                          <td className="px-6 py-4">{item.scheme == null ? 'cash' : item.scheme}</td>
                          <td className="px-6 py-4">{item.price}</td>
                        </tr>
                      )) :
                      Object.entries(priceList).map(([key, value], index) => (
                        <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4">
                            <input
                              type="checkbox"
                              checked={checkedItems.includes(key)}
                              onChange={(e) => handleCheckboxChange(key, e.target.checked)}
                            />
                          </td>
                          <td className="px-6 py-4">{key}</td>
                          <td className="px-6 py-4">{value.price || value}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              )}
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
                onClick={() => $svg.current.clear()}
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

  const [signatureStatus, setSignatureStatus] = useState('pending');
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
                    { label: 'Visit Code:', value: `${patient[0].patient_code}` },
                    { label: 'Scheme:', value: 'Not Provided' },
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
          className={`px-4 py-2 rounded-md transition ${activeSection === 'Booking' && checkedItems.length === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#0E6F1E] text-white hover:bg-green-700'}`}
          disabled={activeSection === 'Booking' && checkedItems.length === 0}
        >
          {activeSection === 'Claim Documents' ? 'Book Visit' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default CreatePersonalVisit;