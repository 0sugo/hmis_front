import React, { useState } from 'react';
import axios from '../../api/api';
import { toast } from 'sonner';
import { Plus, Trash2 } from 'lucide-react';

const AddPatient = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    phonenumber1: '',
    email: '',
    address: '',
    residence: '',
    phonenumber2: '',
    identification_type: '',
    id_no: '',
    id_card_image: null,
    next_of_kin_name: '',
    next_of_kin_contact: '',
    next_of_kin_relationship: '',
    paymentMethods: {
      cash: false,
      insurance: false
    },
    memberType: 'principal',
    insurances: [
      {
        principalMember: '',
        insurer: 'NHIF',
        scheme: '',
        insuranceCard: null,
        principalMemberName: '',
        principalMemberNumber: '',
        memberValidity: ''
      }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === 'checkbox') {
      if (name === 'paymentMethod') {
        setFormData(prev => ({
          ...prev,
          paymentMethods: {
            ...prev.paymentMethods,
            [value]: checked
          }
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else if (type === 'radio' && name === 'memberType') {
      setFormData(prev => ({
        ...prev,
        memberType: value
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'file' ? files[0] : value
      }));
    }
  };

  const handleInsuranceChange = (index, field, value) => {
    console.log('Insurance change:', index, field, value);
    setFormData(prev => {
      const updatedInsurances = [...prev.insurances];
      updatedInsurances[index] = {
        ...updatedInsurances[index],
        [field]: value instanceof FileList ? value[0] : value
      };
      return {
        ...prev,
        insurances: updatedInsurances
      };
    });
  };

  const addInsurance = () => {
    setFormData(prev => ({
      ...prev,
      insurances: [...prev.insurances, {
        principalMember: '',
        insurer: 'NHIF',
        scheme: '',
        insuranceCard: null,
        principalMemberName: '',
        principalMemberNumber: '',
        memberValidity: ''
      }]
    }));
  };

  const removeInsurance = (index) => {
    if (formData.insurances.length === 1) {
      toast.error("You must have at least one insurance record");
      return;
    }
    setFormData(prev => ({
      ...prev,
      insurances: prev.insurances.filter((_, i) => i !== index)
    }));
  };

  const validateStep = (step) => {
    const stepOneRequired = {
      firstname: 'First Name',
      lastname: 'Last Name',
      dob: 'Date of Birth',
      phonenumber1: 'Phone Number',
      identification_type: 'Identification Type',
      id_no: 'ID Number'
    };

    const stepTwoRequired = {
      next_of_kin_name: 'Next of Kin Name',
      next_of_kin_contact: 'Next of Kin Contact',
      next_of_kin_relationship: 'Next of Kin Relationship'
    };

    const fieldsToCheck = step === 1 ? stepOneRequired : stepTwoRequired;
    const missingFields = [];

    Object.entries(fieldsToCheck).forEach(([key, label]) => {
      if (!formData[key] || formData[key].trim() === '') {
        missingFields.push(label);
      }
    });

    if (missingFields.length > 0) {
      toast.error(`Please fill in: ${missingFields.join(', ')}`);
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(1)) {
      setCurrentStep(2);
    }
  };

  const handlePrevious = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(2)) return;

    setLoading(true);

    try {
      const submitData = new FormData();

      // Handle regular form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== 'insurances' && key !== 'paymentMethods') {
          if (value instanceof File) {
            submitData.append(key, value);
          } else if (typeof value === 'object') {
            submitData.append(key, JSON.stringify(value));
          } else if (value !== undefined && value !== null) {
            submitData.append(key, value.toString());
          }
        }
      });

      // Handle insurances array
      submitData.append('insurances', JSON.stringify(formData.insurances));
      formData.insurances.forEach((insurance, index) => {
        if (insurance.insuranceCard instanceof File) {
          submitData.append(`insuranceCard_${index}`, insurance.insuranceCard);
        }
      });

      await axios.post('/api/patients/create', submitData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Patient registered successfully!');
      setFormData({
        firstname: '',
        lastname: '',
        dob: '',
        phonenumber1: '',
        email: '',
        address: '',
        residence: '',
        phonenumber2: '',
        identification_type: '',
        id_no: '',
        id_card_image: null,
        next_of_kin_name: '',
        next_of_kin_contact: '',
        next_of_kin_relationship: '',
        paymentMethods: {
          cash: false,
          insurance: false
        },
        memberType: 'principal',
        insurances: [{
          principalMember: '',
          insurer: 'NHIF',
          scheme: '',
          insuranceCard: null,
          principalMemberName: '',
          principalMemberNumber: '',
          memberValidity: ''
        }]
      });
      setCurrentStep(1);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Patient Registration - Step {currentStep} of 2
          </h2>

          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
            <div
              className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 2) * 100}%` }}
            ></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 ? (
              <PatientDetails
                formData={formData}
                handleInputChange={handleInputChange}
              />
            ) : (
              <EmergencyInformation
                formData={formData}
                handleInputChange={handleInputChange}
                handleInsuranceChange={handleInsuranceChange}
                addInsurance={addInsurance}
                removeInsurance={removeInsurance}
              />
            )}

            <div className="flex justify-between items-center pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Previous
                </button>
              )}

              <button
                type={currentStep === 2 ? 'submit' : 'button'}
                onClick={currentStep === 1 ? handleNext : undefined}
                className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {loading ? 'Processing...' : currentStep === 2 ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const PatientDetails = ({ formData, handleInputChange }) => {
  const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent';
  const labelStyles = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelStyles}>
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter first name"
          />
        </div>

        <div>
          <label className={labelStyles}>
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter last name"
          />
        </div>

        <div>
          <label className={labelStyles}>
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            className={inputStyles}
          />
        </div>

        <div>
          <label className={labelStyles}>
            Identification Type <span className="text-red-500">*</span>
          </label>
          <select
            name="identification_type"
            value={formData.identification_type}
            onChange={handleInputChange}
            className={inputStyles}
          >
            <option value="">Select type</option>
            <option value="ID">ID</option>
            <option value="Passport">Passport</option>
          </select>
        </div>

        <div>
          <label className={labelStyles}>
            Identification Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="id_no"
            value={formData.id_no}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter ID number"
          />
        </div>

        <div>
          <label className={labelStyles}>
            ID photo <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            name="idPhoto"
            className={inputStyles}
            required
            onChange={handleInputChange}
          />
        </div>
      </div>


      <h6 className='text-lg font-semibold mb-4'>Contact Information</h6>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelStyles}>Phone Number 1
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phonenumber1"
            value={formData.phonenumber1}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className={labelStyles}>Phone Number 2
            <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phonenumber2"
            value={formData.phonenumber2}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label className={labelStyles}>Email
            <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label className={labelStyles}>Address
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter address"
          />
        </div>

        <div>
          <label className={labelStyles}>Residence
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="residence"
            value={formData.residence}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter residence"
          />

        </div>

      </div>
    </>
  );
};

const EmergencyInformation = ({ formData, handleInputChange, handleInsuranceChange, addInsurance, removeInsurance }) => {
  const inputStyles = 'w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent';
  const labelStyles = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelStyles}>
            Next of Kin Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="next_of_kin_name"
            value={formData.next_of_kin_name}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter next of kin name"
          />
        </div>

        <div>
          <label className={labelStyles}>
            Next of Kin Contact <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="next_of_kin_contact"
            value={formData.next_of_kin_contact}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter next of kin contact"
          />
        </div>

        <div>
          <label className={labelStyles}>
            Relationship <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="next_of_kin_relationship"
            value={formData.next_of_kin_relationship}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="e.g. Father"
          />
        </div>

        <div>
          <label className={labelStyles}>Payer Details</label>
          <div className="space-x-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethods.cash}
                onChange={handleInputChange}
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="ml-2">Cash</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="paymentMethod"
                value="insurance"
                checked={formData.paymentMethods.insurance}
                onChange={handleInputChange}
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="ml-2">Insurance</span>
            </label>
          </div>
        </div>
      </div>

      {formData.paymentMethods.insurance && (
        <>
          <div className="mt-6">
            <label className={labelStyles}>Member Type</label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="memberType"
                  value="principal"
                  checked={formData.memberType === 'principal'}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-green-600"
                />
                <span className="ml-2">Principal Member</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="memberType"
                  value="dependent"
                  checked={formData.memberType === 'dependent'}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-green-600"
                />
                <span className="ml-2">Dependent</span>
              </label>
            </div>
          </div>

          {formData.insurances.map((insurance, index) => (
            <div key={index} className="mt-6 p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h6 className="text-lg font-semibold">
                  Insurance Details {index + 1}
                </h6>
                <button
                  type="button"
                  onClick={() => removeInsurance(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelStyles}>
                    Insurer <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={insurance.insurer}
                    onChange={(e) => handleInsuranceChange(index, 'insurer', e.target.value)}
                    className={inputStyles}
                  >
                    <option value="NHIF">NHIF</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={labelStyles}>
                    Scheme <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={insurance.scheme}
                    onChange={(e) => handleInsuranceChange(index, 'scheme', e.target.value)}
                    className={inputStyles}
                    placeholder="Enter scheme"
                  />
                </div>

                {formData.memberType === 'dependent' && (
                  <>
                    <div>
                      <label className={labelStyles}>
                        Principal Member Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={insurance.principalMemberName}
                        onChange={(e) => handleInsuranceChange(index, 'principalMemberName', e.target.value)}
                        className={inputStyles}
                        placeholder="Enter principal member name"
                      />
                    </div>
                    <div>
                      <label className={labelStyles}>
                        Principal Member Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={insurance.principalMemberNumber}
                        onChange={(e) => handleInsuranceChange(index, 'principalMemberNumber', e.target.value)}
                        className={inputStyles}
                        placeholder="Enter principal member number"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className={labelStyles}>
                    Member Validity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={insurance.memberValidity}
                    onChange={(e) => handleInsuranceChange(index, 'memberValidity', e.target.value)}
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label className={labelStyles}>
                    Insurance Card Scan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={(e) => handleInsuranceChange(index, 'insuranceCard', e.target.files)}
                    className={inputStyles}
                    accept="image/*,.pdf"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addInsurance}
            className="mt-4 flex items-center px-4 py-2 text-green-600 hover:text-green-800 border border-green-600 rounded-lg hover:bg-green-50"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Another Insurance
          </button>
        </>
      )}
    </>
  );
};

export default AddPatient;