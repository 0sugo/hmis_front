import React, { useState } from 'react';

const EmergencyVisit = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    patientState: '',
    underCareOf: '',
    phoneNumber: '',
    department: '',
    consultingDoctor: ''
  });

  const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E6F1E] focus:border-transparent';
  const labelStyles = 'block text-sm font-medium text-gray-700 mb-1';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Emergency Visit Registration</h2>

      <div className='bg-white px-4 py-6'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='space-y-4'>
            <h6 className='text-lg font-semibold mb-4'>Patient Details</h6>

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
              <label htmlFor="patientState" className={labelStyles}>
                Patient State <span className='text-red-600'>*</span>
              </label>
              <div className="flex space-x-4">
                {['Conscious', 'Unconscious', 'Critical'].map((state) => (
                  <label key={state} className="inline-flex items-center">
                    <input
                      type="radio"
                      name="patientState"
                      value={state.toLowerCase()}
                      checked={formData.patientState === state.toLowerCase()}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-[#0E6F1E] border-gray-300 focus:ring-[#0E6F1E]"
                    />
                    <span className="ml-2 text-gray-700">{state}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-4'>
            <h6 className='text-lg font-semibold mb-4'>Department & Doctor</h6>

            <div>
              <label htmlFor="department" className={labelStyles}>
                Select Department <span className='text-red-600'>*</span>
              </label>
              <select
                id="department"
                name="department"
                className={inputStyles}
                required
                onChange={handleInputChange}
              >
                <option value="">Select Department</option>
                <option value="emergency">Emergency</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
              </select>
            </div>

            <div>
              <label htmlFor="consultingDoctor" className={labelStyles}>
                Select Consulting Doctor <span className='text-red-600'>*</span>
              </label>
              <select
                id="consultingDoctor"
                name="consultingDoctor"
                className={inputStyles}
                required
                onChange={handleInputChange}
              >
                <option value="">Select Doctor</option>
                <option value="dr-smith">Dr. Smith</option>
                <option value="dr-johnson">Dr. Johnson</option>
                <option value="dr-williams">Dr. Williams</option>
              </select>
            </div>
            <p className='text-red-600 text-xs mt-1'>
              Note: For Outpatient, please select the appropriate doctor
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-6'>
          <div className='space-y-4'>
            <h6 className='text-lg font-semibold mb-4'>Contact Information</h6>

            <div>
              <label htmlFor="phoneNumber" className={labelStyles}>
                Phone Number <span className='text-red-600'>*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className={inputStyles}
                required
                placeholder='Enter phone number'
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='space-y-4'>
            <h6 className='text-lg font-semibold mb-4'>Payer Details</h6>

            <div>
              <label htmlFor="underCareOf" className={labelStyles}>
                Under Care Of <span className='text-red-600'>*</span>
              </label>
              <input
                type="text"
                id="underCareOf"
                name="underCareOf"
                className={inputStyles}
                required
                placeholder='Enter guardian/care provider name'
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className='mt-6 flex justify-center'>
          <button type="submit" className=" bg-[#0E6F1E] text-white py-2 px-5  rounded-md hover:bg-green-700 transition duration-300"> Submit Emergency Visit</button>
        </div>
      </div>
    </div>
  );
};

export default EmergencyVisit;
