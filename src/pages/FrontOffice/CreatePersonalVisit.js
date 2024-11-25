import React, { useState } from 'react'
import pic from '../../assets/images/pic.svg'
import { MdSearch } from 'react-icons/md'
import { AlertCircle, CheckCircle2, PenTool } from 'lucide-react';

const CreatePersonalVisit = () => {
  const [sladeVerification, setSladeVerification] = useState('No');
  const [claimNo, setClaimNo] = useState('');
  const [claimAmount, setClaimAmount] = useState('');
  const [specialistClinic, setSpecialistClinic] = useState('');
  const [visitingType, setVisitingType] = useState('');
  const [feeType, setFeeType] = useState('');
  const [department, setdepartment] = useState('');
  const [activeSection, setActiveSection] = useState('Member Verification');

  // Sections array
  const sections = ['Member Verification', 'Booking', 'Claim Documents'];

  // Handle form submission
  const handleSubmit = () => {
    const formData = {
      memberVerification: {
        sladeVerification,
        claimNo,
        claimAmount
      },
      booking: {
        department,
        specialistClinic,
        visitingType,
        feeType
      }
    };

    console.log('Form Data Submitted:', formData);
  };

  // Handle button click (Next/Submit)
  const handleButtonClick = () => {
    const currentIndex = sections.indexOf(activeSection);

    if (activeSection === 'Claim Documents') {
      handleSubmit(); // Submit form if on last section
    } else if (currentIndex < sections.length - 1) {
      setActiveSection(sections[currentIndex + 1]); // Otherwise move to next section
    }
  };

  // Function to render the active section content
  const renderSection = () => {
    switch (activeSection) {
      case 'Member Verification':
        return (
          <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <span className="text-[#413D80] font-semibold">Member Verification</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
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
                  <option>Dentist</option>
                  <option>Maternity</option>
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
                    <option>General</option>
                    <option>Specialist</option>
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
                  >
                    <option>inpatient</option>
                    <option>outpatient</option>
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
          <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between border border-slate-300 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <PenTool className="h-5 w-5 text-[#413D80]" />
                  <div>
                    <h3 className="font-medium text-[#413D80]">Patient Signature</h3>
                    <p className="text-sm text-slate-500">Capture patient's electronic signature using the signature pad</p>
                  </div>
                </div>

                {signatureStatus === 'pending' && (
                  <button
                    onClick={handleCaptureSignature}
                    className="inline-flex items-center gap-2 bg-[#0E6F1E] text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                  >
                    <PenTool className="h-4 w-4" />
                    Capture Signature
                  </button>
                )}

                {signatureStatus === 'capturing' && (
                  <div className="flex items-center gap-2 text-[#0E6F1E]">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-[#0E6F1E] border-b-transparent" />
                    Capturing...
                  </div>
                )}

                {signatureStatus === 'completed' && (
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg border border-green-200">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Signature Captured</span>
                    </div>
                    <button
                      onClick={handleRetry}
                      className="text-[#0E6F1E] hover:text-green-700 underline text-sm"
                    >
                      Capture Again
                    </button>
                  </div>
                )}
              </div>

              {signatureStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Connection Error</span>
                  </div>
                  <p className="mt-2 text-sm">
                    Unable to detect the signature pad. Please ensure the device is properly connected and try again.
                  </p>
                  <button
                    onClick={handleRetry}
                    className="mt-2 text-red-700 hover:text-red-800 underline text-sm block"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>

            <label htmlFor="SelectTemplate" className="block mb-2 text-[#413D80]">
              Select Template
            </label>
            <select className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]">
              <option>Jubilee</option>
              <option>M-Tiba</option>
              <option>SHIF</option>
            </select>
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

  return (
    <div className="mx-auto p-4">
      <h4 className="text-[#192252] font-bold mb-4">New OP Visit</h4>

      {/* Patient Info Card */}
      <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
        <div className="bg-white p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-2 flex flex-col items-center gap-4">
              <img src={pic} className="w-36 h-36 rounded-full object-cover" alt="Patient" />
              <span className="text-[#192252] font-semibold">Idris Maimoon</span>
            </div>
            <div className="md:col-span-5 text-[#413D80] text-sm">
              {[
                { label: 'Patient Name:', value: 'Idriis Maimoon' },
                { label: 'Age:', value: '26 Years' },
                { label: 'Gender:', value: 'Male' },
                { label: 'Occupation:', value: 'Medical Doctor' },
                { label: 'Company:', value: 'Britam' }
              ].map(({ label, value }) => (
                <p key={label} className="grid grid-cols-3 py-1">
                  <span>{label}</span>
                  <span className="text-[#616161] col-span-2">{value}</span>
                </p>
              ))}
            </div>
            <div className="md:col-span-5 text-[#413D80] text-sm">
              {[
                { label: 'Visit Code:', value: 'MH-0001' },
                { label: 'Scheme:', value: 'Kilifi Country Government' },
                { label: 'Prescription No:', value: 'MHP1-000001' },
                { label: 'Address:', value: 'Ndovi Road, Malindi Kenya' },
                { label: 'Prescribed By:', value: 'Dr. Yunus' }
              ].map(({ label, value }) => (
                <p key={label} className="grid grid-cols-3 py-1">
                  <span>{label}</span>
                  <span className="text-[#616161] col-span-2">{value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Indicators */}
      <div className="w-full grid grid-cols-3 gap-4 mb-6">
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
