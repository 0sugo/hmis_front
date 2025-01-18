import React, { useState } from 'react'
import axios from '../../api/api'
import { useEffect } from 'react';

const AddPatient = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // step1
    firstname: '',
    lastname: '',
    dob: '',
    address: '',
    residence: '',
    phonenumber1: '',
    phonenumber2: '',
    // step2
    emergencyContactName: '',
    emergencyContactPhone: '',
    allergies: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const getScheme = async () => {
    try {
      const response = await axios.get('/scheme');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getScheme();
  } ,[]);

  return (
    <div className='container mx-auto px-4 py-6'>
      <h4 className='text-2xl font-semibold mb-6 '>Add Patient</h4>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h5 className='text-xl font-medium mb-4 text-center'>STEP {currentStep}.</h5>
        <hr className='mb-6' />

        <form onSubmit={handleSubmit} className='space-y-4'>
          {currentStep === 1 && <PatientDetails handleInputChange={handleInputChange} />}
          {currentStep === 2 && <EmergencyInformation handleInputChange={handleInputChange} />}

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
  )
}

const PatientDetails = ({ handleInputChange }) => {
  const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E6F1E] focus:border-transparent';
  const labelStyles = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='space-y-4'>
        <div>
          <label htmlFor="firstName" className={labelStyles}>
            First Name <span className='text-red-600'>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={inputStyles}
            required
            placeholder='Enter first name'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="lastName" className={labelStyles}>
            Last Name <span className='text-red-600'>*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={inputStyles}
            required
            placeholder='Enter last name'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="age" className={labelStyles}>
            Age <span className='text-red-600'>*</span>
          </label>
          <input
            type="number"
            id="age"
            name="age"
            className={inputStyles}
            required
            placeholder='Enter age'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" className={labelStyles}>
            Date of Birth <span className='text-red-600'>*</span>
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            className={inputStyles}
            required
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='space-y-4'>
        <div>
          <label htmlFor="mobileNumber" className={labelStyles}>
            Mobile Number <span className='text-red-600'>*</span>
          </label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            className={inputStyles}
            required
            placeholder='Enter mobile number'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="identificationType" className={labelStyles}>
            Identification Type <span className='text-red-600'>*</span>
          </label>
          <select
            id="identificationType"
            name="identificationType"
            className={inputStyles}
            required
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="ID">ID</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        <div>
          <label htmlFor="nationalId" className={labelStyles}>
            National ID <span className='text-red-600'>*</span>
          </label>
          <select
            id="nationalId"
            name="nationalId"
            className={inputStyles}
            required
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="ID">ID</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        <div>
          <label htmlFor="idNumber" className={labelStyles}>
            ID No. <span className='text-red-600'>*</span>
          </label>
          <input
            type="text"
            id="idNumber"
            name="idNumber"
            className={inputStyles}
            required
            placeholder='Enter ID number'
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='md:col-span-2'>
        <div>
          <label htmlFor="idPhoto" className={labelStyles}>
            Upload ID Photo <span className='text-red-600'>*</span>
          </label>
          <input
            type="file"
            id="idPhoto"
            name="idPhoto"
            className={inputStyles}
            required
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='md:col-span-2'>
        <h6 className='text-lg font-semibold mb-4'>Contact Information</h6>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor="phoneNumber1" className={labelStyles}>
              Phone Number 1 <span className='text-red-600'>*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber1"
              name="phoneNumber1"
              className={inputStyles}
              required
              placeholder='Enter phone number'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="phoneNumber2" className={labelStyles}>
              Phone Number 2 <span className='text-red-600'>*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber2"
              name="phoneNumber2"
              className={inputStyles}
              required
              placeholder='Enter phone number'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="email" className={labelStyles}>
              Email <span className='text-red-600'>*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={inputStyles}
              required
              placeholder='Enter email'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="address" className={labelStyles}>
              Address <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className={inputStyles}
              required
              placeholder='Enter address'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="residence" className={labelStyles}>
              Residence <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="residence"
              name="residence"
              className={inputStyles}
              required
              placeholder='Enter town'
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const EmergencyInformation = ({ handleInputChange }) => {
  const [paymentMethods, setPaymentMethods] = useState({
    cash: false,
    insurance: false
  });
  const [principalMember, setPrincipalMember] = useState('');

  const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E6F1E] focus:border-transparent';
  const labelStyles = 'block text-sm font-medium text-gray-700 mb-1';

  const handlePaymentMethodChange = (method) => {
    const updatedMethods = {
      ...paymentMethods,
      [method]: !paymentMethods[method]
    };
    setPaymentMethods(updatedMethods);
    handleInputChange({
      target: {
        name: 'paymentMethods',
        value: updatedMethods
      }
    });
  };

  const handlePrincipalMemberChange = (value) => {
    setPrincipalMember(value);
    handleInputChange({
      target: {
        name: 'principalMember',
        value: value
      }
    });
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      <div className='space-y-4'>
        <div>
          <label htmlFor="nextOfKinName" className={labelStyles}>
            Next of Kin Name <span className='text-red-600'>*</span>
          </label>
          <input
            type="text"
            id="nextOfKinName"
            name="nextOfKinName"
            className={inputStyles}
            required
            placeholder='Enter next of kin name'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="nextOfKinMobile" className={labelStyles}>
            Mobile Number <span className='text-red-600'>*</span>
          </label>
          <input
            type="tel"
            id="nextOfKinMobile"
            name="nextOfKinMobile"
            className={inputStyles}
            required
            placeholder='Enter next of kin mobile number'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="relationship" className={labelStyles}>
            Relationship <span className='text-red-600'>*</span>
          </label>
          <input
            type="text"
            id="relationship"
            name="relationship"
            className={inputStyles}
            required
            placeholder='e.g. father'
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className='space-y-4'>
        <div>
          <label className={labelStyles}>
            Payer Details <span className='text-red-600'>*</span>
          </label>
          <div className='flex space-x-4'>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="paymentMethod"
                value="cash"
                checked={paymentMethods.cash}
                onChange={() => handlePaymentMethodChange('cash')}
                className="h-4 w-4 text-[#0E6F1E] border-gray-300 rounded focus:ring-[#0E6F1E]"
              />
              <span className="ml-2 text-gray-700">Cash</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="paymentMethod"
                value="insurance"
                checked={paymentMethods.insurance}
                onChange={() => handlePaymentMethodChange('insurance')}
                className="h-4 w-4 text-[#0E6F1E] border-gray-300 rounded focus:ring-[#0E6F1E]"
              />
              <span className="ml-2 text-gray-700">Insurance</span>
            </label>
          </div>
          <p className='text-red-600 text-xs mt-1'>
            Note: A payer can be both cash & Insurance. A patient can have multiple insurances.
          </p>
        </div>

        <div>
          <label className={labelStyles}>
            Principal Member <span className='text-red-600'>*</span>
          </label>
          <div className='flex space-x-4'>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="principalMember"
                required
                value="Principal Member"
                checked={principalMember === 'Principal Member'}
                onChange={() => handlePrincipalMemberChange('Principal Member')}
                className="h-4 w-4 text-[#0E6F1E] border-gray-300 focus:ring-[#0E6F1E]"
              />
              <span className="ml-2 text-gray-700">Principal Member</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="principalMember"
                value="Dependent"
                required
                checked={principalMember === 'Dependent'}
                onChange={() => handlePrincipalMemberChange('Dependent')}
                className="h-4 w-4 text-[#0E6F1E] border-gray-300 focus:ring-[#0E6F1E]"
              />
              <span className="ml-2 text-gray-700">Dependent</span>
            </label>
          </div>
          <p className='text-red-600 text-xs mt-1'>
            Note: if dependent, then fill in the principal member's details.
          </p>
        </div>
      </div>

      <div className='md:col-span-2'>
        <h6 className='text-lg font-semibold mb-4'>Primary Insurance Details</h6>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label htmlFor="insurer" className={labelStyles}>
              Insurer <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="insurer"
              name="insurer"
              className={inputStyles}
              required
              placeholder='Enter your Insurer'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="scheme" className={labelStyles}>
              Scheme <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="scheme"
              name="scheme"
              className={inputStyles}
              required
              placeholder='Enter your scheme'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="scanInsuaranceCard" className={labelStyles}>
              Scan Insuarance Card <span className='text-red-600'>*</span>
            </label>
            <input
              type="file"
              id="idPhoto"
              name="idPhoto"
              className={inputStyles}
              required
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="principalMemberName" className={labelStyles}>
              Principal Member Name <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="principalMemberName"
              name="principalMemberName"
              className={inputStyles}
              required
              placeholder='Enter principal member name'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="principalMemberNumber" className={labelStyles}>
              Principal Member Number <span className='text-red-600'>*</span>
            </label>
            <input
              type="text"
              id="principalMemberNumber"
              name="principalMemberNumber"
              className={inputStyles}
              required
              placeholder='Enter principal member number'
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="memberValidity" className={labelStyles}>
              Member Validity <span className='text-red-600'>*</span>
            </label>
            <input
              type="date"
              id="memberValidity"
              name="memberValidity"
              className={inputStyles}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};



export default AddPatient
