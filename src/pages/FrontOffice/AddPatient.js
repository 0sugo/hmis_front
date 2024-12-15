import React, { useState } from 'react';
import axios from '../../api/api'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

const AddPatient = () => {
  
  const [currentStep, setCurrentStep] = useState(1);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [dob, setDob] = useState('');
  const [phonenumber1, setPhonenumber1] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [residence, setResidence] = useState('');
  const [phonenumber2, setPhonenumber2] = useState('');
  const [identification_type, setIdentification_type] = useState('');
  const [id_no, setId_no] = useState('');
  const [next_of_kin_name, setNext_of_kin_name] = useState('');
  const [next_of_kin_contact, setNext_of_kin_contact] = useState('');
  const [next_of_kin_relationship, setNext_of_kin_relationship] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/patients/create', { 
        firstname, lastname, dob, phonenumber1, phonenumber2, email, address, residence, identification_type, id_no,
        next_of_kin_contact, next_of_kin_name, next_of_kin_relationship
      });
      toast.success('Patient Added');
      navigate('/app/listpatients')
    } catch (error) {
      toast.error('Failed to add patient');
      console.error(error);
    }
  };

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h4 className="text-2xl font-semibold mb-6 ">Add Patient</h4>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h5 className="text-xl font-medium mb-4 text-center">STEP {currentStep}.</h5>
        <hr className="mb-6" />

        <form onSubmit={handleSubmit} className="space-y-4">
          {currentStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </div>
          
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </div>
          
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="date"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
          
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
          
                  <div>
                    <label htmlFor="residence" className="block text-sm font-medium text-gray-700 mb-1">
                      Residence <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="residence"
                      name="residence"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={residence}
                      onChange={(e) => setResidence(e.target.value)}
                    />
                  </div>
                </div>
          
                <div className="space-y-4">
                  <div>
                    <label htmlFor="phoneNumber1" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number 1 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber1"
                      name="phoneNumber1"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={phonenumber1}
                      onChange={(e) => setPhonenumber1(e.target.value)}
                    />
                  </div>
          
                  <div>
                    <label htmlFor="phoneNumber2" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number 2 <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber2"
                      name="phoneNumber2"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={phonenumber2}
                      onChange={(e) => setPhonenumber2(e.target.value)}
                    />
                  </div>
          
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
          
                  <div>
                    <label htmlFor="identificationType" className="block text-sm font-medium text-gray-700 mb-1">
                      Identification Type <span className="text-red-600">*</span>
                    </label>
                    <select
                      id="identificationType"
                      name="identificationType"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={identification_type}
                      onChange={(e) => setIdentification_type(e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="ID">ID</option>
                      <option value="Passport">Passport</option>
                    </select>
                  </div>
          
                  <div>
                    <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      National ID <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="idNumber"
                      name="idNumber"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      required
                      value={id_no}
                      onChange={(e) => setId_no(e.target.value)}
                    />
                  </div>
                </div>
              </div>

          )}
          {currentStep === 2 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="nextOfKinName" className="block text-sm font-medium text-gray-700 mb-1">
                    Next of Kin Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="nextOfKinName"
                    name="nextOfKinName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                    value={next_of_kin_name}
                    onChange={(e) => setNext_of_kin_name(e.target.value)}
                  />
                </div>
        
                <div>
                  <label htmlFor="nextOfKinMobile" className="block text-sm font-medium text-gray-700 mb-1">
                    Next of Kin Mobile <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="nextOfKinMobile"
                    name="nextOfKinMobile"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                    value={next_of_kin_contact}
                    onChange={(e) => setNext_of_kin_contact(e.target.value)}
                  />
                </div>
              </div>
        
              <div className="space-y-4">
                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
                    Relationship <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="relationship"
                    name="relationship"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    required
                    value={next_of_kin_relationship}
                    onChange={(e) => setNext_of_kin_relationship(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center items-center space-x-4 mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="px-6 py-2 bg-[#0E6F1E] text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Previous
              </button>
            )}

            {currentStep < 2 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-[#0E6F1E] text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Save & Next
              </button>
            ) : (
              <button
                type="submit"
                className="px-6 py-2 bg-[#0E6F1E] text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatient;
