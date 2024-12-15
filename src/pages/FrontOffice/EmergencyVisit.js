import React, { useState } from 'react';
import axios from '../../api/api'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const EmergencyVisit = () => {

  const [patient_name, setPatient_name] = useState('')
  const [patient_type, setPatient_type] = useState('')
  const [age, setAge] = useState('')
  const [contact_info, setContact_info] = useState('')
  const [clinic, setClinic] = useState('')
  const [doctor, seDoctor] = useState('')
  const [gender, setGender] = useState('')
  const [payment_type, setPayment_type] = useState('')
  const navigate = useNavigate()


  const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E6F1E] focus:border-transparent';
  const labelStyles = 'block text-sm font-medium text-gray-700 mb-1';

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/emergencyVisits/create', { 
        patient_name, payment_type, age, patient_type, contact_info, clinic, doctor, gender
       })
      toast.success('Emergency Visit Added')
      navigate('/app/listemergencyvisit')
    } catch (error) {
      toast.error('Failed to add emergency visit')
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Emergency Visit Registration</h2>

      <div className='bg-white px-4 py-6'>
        <form onSubmit={handleSubmit}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='space-y-4'>
              <div>
                <label htmlFor="firstName" className={labelStyles}>
                  Patient Name <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={inputStyles}
                  required
                  placeholder='Enter first name'
                  value={patient_name}
                  onChange={(e) => setPatient_name(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="lastName" className={labelStyles}>
                  Patient Type <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={inputStyles}
                  required
                  placeholder='Patient Type'
                  value={patient_type}
                  onChange={(e) => setPatient_type(e.target.value)}
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
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
            </div>

            <div className='space-y-4'>
              <div>
                <label htmlFor="age" className={labelStyles}>
                  Clinic <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="clinic"
                  name="clinic"
                  className={inputStyles}
                  required
                  placeholder='Clinic'
                  value={clinic}
                  onChange={(e) => setClinic(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="age" className={labelStyles}>
                  Doctor <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  className={inputStyles}
                  required
                  placeholder='Doctor'
                  value={doctor}
                  onChange={(e) => seDoctor(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="gender" className={labelStyles}>
                  Gender <span className='text-red-600'>*</span>
                </label>
                <select
                  id="gender"
                  name="gender"
                  className={inputStyles}
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
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
                  value={contact_info}
                  onChange={(e) => setContact_info(e.target.value)}
                />
              </div>
            </div>

            <div className='space-y-4'>
              <h6 className='text-lg font-semibold mb-4'>Payer Details</h6>

              <div>
                <label htmlFor="underCareOf" className={labelStyles}>
                  Payment Type <span className='text-red-600'>*</span>
                </label>
                <input
                  type="text"
                  id="payment_type"
                  name="Payment Type"
                  className={inputStyles}
                  required
                  placeholder='Payment Type'
                  value={payment_type}
                  onChange={(e) => setPayment_type(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className='mt-6 flex justify-center'>
            <button type="submit" className=" bg-[#0E6F1E] text-white py-2 px-5  rounded-md hover:bg-green-700 transition duration-300"> Submit Emergency Visit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmergencyVisit;
