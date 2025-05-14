import React, { useEffect, useState } from "react";
import axios from "../../api/api";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { createPatient } from "../../redux/patient/patientSlice";
import Cookies from "js-cookie";
import { fetchSchemes } from "../../redux/scheme/schemeSlice";
import { useNavigate } from "react-router-dom";

const AddPatient = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const token = Cookies.get("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { schemes, isLoading: schemesLoading, error: schemesError, } = useSelector((state) => state.schemes);
  const { isLoading: patientsLoading, error: patientsError } = useSelector((state) => state.patient);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("patientFormData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstname: "",
          lastname: "",
          phonenumber1: "",
          gender:"",
          phonenumber2: "",
          email: "",
          dob: "",
          identification_type: "",
          id_no: "",
          address: "",
          residence: "",
          insuarance_membership: "principal",
          id_card_image: null,
          next_of_kin_name: "",
          next_of_kin_contact: "",
          next_of_kin_relationship: "",
          payment_methods: {
            cash: false,
            insurance: false,
          },
          insurance_details: [
            {
              insurer: "",
              scheme_type: "",
              principal_member_name: "",
              principal_member_number: "",
              insurance_card_image: null,
              insurer_contact: "",
              member_validity: "",
            },
          ],
        };
  });

  useEffect(() => {
    localStorage.setItem("patientFormData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    dispatch(fetchSchemes());
  }, [dispatch]);

  // Separate state for storing files
  const [files, setFiles] = useState({
    id_card_image: null,
    insurance_card_images: [],
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      if (name === "payment_methods") {
        setFormData((prev) => ({
          ...prev,
          payment_methods: {
            ...prev.payment_methods,
            [value]: e.target.checked,
          },
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [name]: e.target.checked,
        }));
      }
    } else if (type === "radio") {
      // Update formData for the radio button value
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleInsuranceChange = (index, field, value) => {
    // console.log(index, field, value);
    setFormData((prev) => {
      const updatedInsuranceDetails = [...prev.insurance_details];
      const currentInsurance = updatedInsuranceDetails[index] || {};

      updatedInsuranceDetails[index] = {
        ...currentInsurance,
        [field]: value,
      };

      return {
        ...prev,
        insurance_details: updatedInsuranceDetails,
      };
    });
  };

  const handleFileChange =
    (type, index = null) =>
    (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (file.size > 2048 * 1024) {
        toast.error("File must be less than 2MB");
        return;
      }

      if (type === "id_card") {
        setFiles((prev) => ({
          ...prev,
          id_card_image: file,
        }));
        setFormData((prev) => ({
          ...prev,
          id_card_image: file,
        }));
      } else if (type === "insurance_card" && index !== null) {
        setFiles((prev) => ({
          ...prev,
          insurance_card_images: [
            ...prev.insurance_card_images.slice(0, index),
            file,
            ...prev.insurance_card_images.slice(index + 1),
          ],
        }));
        handleInsuranceChange(index, "insurance_card_image", file);
      }
    };

  const addInsurance = () => {
    setFormData((prev) => ({
      ...prev,
      insurance_details: [
        ...prev.insurance_details,
        {
          insurer: "",
          scheme_type: "",
          principal_member_name: "",
          principal_member_number: "",
          insurance_card_image: null,
          insurer_contact: "",
          member_validity: "",
        },
      ],
    }));
    setFiles((prev) => ({
      ...prev,
      insurance_card_images: [...prev.insurance_card_images, null],
    }));
  };

  const removeInsurance = (index) => {
    if (formData.insurance_details.length === 1) {
      toast.error("You must have at least one insurance record");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      insurance_details: prev.insurance_details.filter((_, i) => i !== index),
    }));
    setFiles((prev) => ({
      ...prev,
      insurance_card_images: prev.insurance_card_images.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const validateStep = (step) => {
    const stepOneRequired = {
      firstname: "First Name",
      lastname: "Last Name",
      dob: "Date of Birth",
      phonenumber1: "Phone Number",
      identification_type: "Identification Type",
    };

    const stepTwoRequired = {
      next_of_kin_name: "Next of Kin Name",
      next_of_kin_contact: "Next of Kin Contact",
      next_of_kin_relationship: "Next of Kin Relationship",
    };

    const fieldsToCheck = step === 1 ? stepOneRequired : stepTwoRequired;
    const missingFields = [];

    Object.entries(fieldsToCheck).forEach(([key, label]) => {
      if (key === "id_card_image") {
        if (!formData[key]) {
          missingFields.push(label);
        }
      } else if (!formData[key] || formData[key].trim() === "") {
        missingFields.push(label);
      }
    });

    if (missingFields.length > 0) {
      toast.error(`Please fill in: ${missingFields.join(", ")}`);
      return false;
    }
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
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
      const formDataToSubmit = new FormData();

      const dataObject = {
        firstname: formData.firstname || null,
        gender: "male",
        lastname: formData.lastname || null,
        phonenumber1: formData.phonenumber1 || null,
        phonenumber2: formData.phonenumber2 || null,
        email: formData.email || null,
        dob: formData.dob || null,
        identification_type: formData.identification_type || null,
        id_no: formData.id_no || null,
        address: formData.address || null,
        residence: formData.residence || null,
        insurance_membership: formData.insuarance_membership || null,
        next_of_kin_name: formData.next_of_kin_name || null,
        next_of_kin_contact: formData.next_of_kin_contact || null,
        next_of_kin_relationship: formData.next_of_kin_relationship || null,
        insurance_details: formData.insurance_details.map((insurance) => ({
          insurer: insurance.insurer || null,
          scheme_type: insurance.scheme_type || null,
          insurer_contact: insurance.insurer_contact || null,
          principal_member_name: insurance.principal_member_name || null,
          principal_member_number: insurance.principal_member_number || null,
          member_validity: insurance.member_validity || null,
        })),
        payment_methods: [
          {
            cash: formData.payment_methods.cash ? 1 : 0,
            insurance: formData.payment_methods.insurance ? 1 : 0,
          },
        ],
      };

      // Append the main data object
      formDataToSubmit.append("data", JSON.stringify(dataObject));

      // Append files separately
      if (formData.id_card_image instanceof File) {
        formDataToSubmit.append("id_card_image", formData.id_card_image);
      }

      formData.insurance_details.forEach((insurance) => {
        if (insurance.insurance_card_image instanceof File) {
          formDataToSubmit.append(
            "insurance_card_image",
            insurance.insurance_card_image
          );
        }
      });

      const response = await axios.post(
        "/api/patients/create",
        formDataToSubmit,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Patient registered successfully");
        navigate("/app/fo-dashboard")
        setFormData({
          firstname: "",
          lastname: "",
          phonenumber1: "",
          phonenumber2: "",
          email: "",
          dob: "",
          identification_type: "",
          id_no: "",
          address: "",
          residence: "",
          id_card_image: "",
          next_of_kin_name: "",
          next_of_kin_contact: "",
          next_of_kin_relationship: "",
          payment_methods: { cash: false, insurance: false },
          insuarance_membership: "",
          insurance_details: [
            {
              insurer: "",
              scheme_type: "",
              principal_member_name: "",
              principal_member_number: "",
              insurance_card_image: "",
              insurer_contact: "",
              member_validity: "",
            },
          ],
        });
        setCurrentStep(1);
      }
    } catch (error) {
      // console.error('Submission error:', error);
      const serverErrors = error.response?.data?.errors;

      if (serverErrors) {
        const displayedMessages = new Set();
        Object.entries(serverErrors).forEach(([field, messages]) => {
          messages.forEach((message) => {
            const errorMessage = `${field}: ${message}`;
            if (!displayedMessages.has(errorMessage)) {
              displayedMessages.add(errorMessage);
              toast.error(errorMessage, { duration: 5000 });
            }
          });
        });
      } else {
        toast.error(
          error.response?.data?.message || "Failed to register patient",
          {
            duration: 5000,
          }
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleIdCardUpload = (file) => {
    if (file && file.size > 2048 * 1024) {
      toast.error("ID card image must be less than 2MB");
      return;
    }
    setFiles((prev) => ({
      ...prev,
      id_card_image: file,
    }));
    setFormData((prev) => ({
      ...prev,
      id_card_image: file,
    }));
  };

  const handleInsuranceCardUpload = (index, file) => {
    if (file && file.size > 2048 * 1024) {
      toast.error("Insurance card image must be less than 2MB");
      return;
    }

    setFiles((prev) => ({
      ...prev,
      insurance_card_images: prev.insurance_card_images.map((img, i) =>
        i === index ? file : img
      ),
    }));

    setFormData((prev) => {
      const updatedInsuranceDetails = [...prev.insurance_details];
      updatedInsuranceDetails[index] = {
        ...updatedInsuranceDetails[index],
        insurance_card_image: file,
      };
      return { ...prev, insurance_details: updatedInsuranceDetails };
    });
  };

  const handlepatient = (e) => {
    if (!validateStep(2)) return;

    e.preventDefault();
    dispatch(createPatient({ formData, token }));
    {
      patientsError
        ? toast.error("Patient NOT created")
        : toast.success("Patient created successfully");
    }
    localStorage.removeItem("patientFormData");
    setFormData({
      firstname: "",
      lastname: "",
      phonenumber1: "",
      gender:"",
      phonenumber2: "",
      email: "",
      dob: "",
      identification_type: "",
      id_no: "",
      address: "",
      residence: "",
      insuarance_membership: "principal",
      id_card_image: null,
      next_of_kin_name: "",
      next_of_kin_contact: "",
      next_of_kin_relationship: "",
      payment_methods: {
        cash: false,
        insurance: false,
      },
      insurance_details: [
        {
          insurer: "",
          scheme_type: "",
          principal_member_name: "",
          principal_member_number: "",
          insurance_card_image: null,
          insurer_contact: "",
          member_validity: "",
        },
      ],
    });
    setCurrentStep(1);
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

          <form onSubmit={handlepatient} className="space-y-6">
            {currentStep === 1 ? (
              <PatientDetails
                formData={formData}
                handleInputChange={handleInputChange}
                handleFileChange={handleFileChange}
                files={files}
              />
            ) : (
              <EmergencyInformation
                formData={formData}
                handleInputChange={handleInputChange}
                handleInsuranceChange={handleInsuranceChange}
                addInsurance={addInsurance}
                removeInsurance={removeInsurance}
                files={files}
                schemes={schemes}
                isLoading={schemesLoading}
                error={schemesError}
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
                type={currentStep === 2 ? "submit" : "button"}
                onClick={currentStep === 1 ? handleNext : undefined}
                className="ml-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                disabled={loading}
              >
                {patientsLoading || loading
                  ? "Processing..."
                  : currentStep === 2
                  ? "Submit"
                  : "Next"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


const PatientDetails = ({ formData, setFormData, handleInputChange }) => {
  const inputStyles =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-1";

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
            Gender <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Female
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleInputChange}
                className="mr-2"
              />
              Other
            </label>
          </div>
        </div>

        <div>
          <label className={labelStyles}>
            Occupation <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter Occupation"
          />
        </div>

        <div>
          <label className={labelStyles}>
          marital status <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="marital_status"
            value={formData.marital_status}
            onChange={handleInputChange}
            className={inputStyles}
            placeholder="Enter Occupation"
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
            type="number"
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
            name="id_card_image"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                // Check file size (2048KB = 2MB)
                if (file.size > 2048 * 1024) {
                  toast.error("ID card image must be less than 2MB");
                  e.target.value = ""; // Reset input
                  return;
                }
                setFormData((prev) => ({
                  ...prev,
                  id_card_image: file,
                }));
              }
            }}
            className={inputStyles}
            accept="image/*"
          />
        </div>
      </div>

      <h6 className="text-lg font-semibold mb-4">Contact Information</h6>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelStyles}>
            Phone Number 1<span className="text-red-500">*</span>
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
          <label className={labelStyles}>
            Phone Number 2<span className="text-red-500">*</span>
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
          <label className={labelStyles}>
            Email
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
          <label className={labelStyles}>
            Address
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
          <label className={labelStyles}>
            Residence
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


const EmergencyInformation = ({
  formData,
  handleInputChange,
  handleInsuranceChange,
  addInsurance,
  removeInsurance,
  isLoading,
  error,
  schemes,
}) => {
  const inputStyles =
    "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent";
  const labelStyles = "block text-sm font-medium text-gray-700 mb-1";

  const getSchemesForInsurer = (insurerName) => {
    const insurer = schemes.find((s) => s.name === insurerName);
    return insurer ? insurer.schemeTypes : [];
  };

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
                name="payment_methods"
                value="cash"
                checked={formData.payment_methods.cash}
                onChange={handleInputChange}
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="ml-2">Cash</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="payment_methods"
                value="insurance"
                checked={formData.payment_methods.insurance}
                onChange={handleInputChange}
                className="form-checkbox h-4 w-4 text-green-600"
              />
              <span className="ml-2">Insurance</span>
            </label>
          </div>
        </div>
      </div>

      {formData.payment_methods.insurance && (
        <>
          <div className="mt-6">
            <label className={labelStyles}>Member Type</label>
            <div className="space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="insuarance_membership"
                  value="principal"
                  checked={formData.insuarance_membership === "principal"}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-green-600"
                />
                <span className="ml-2">Principal Member</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="insuarance_membership"
                  value="dependent"
                  checked={formData.insuarance_membership === "dependent"}
                  onChange={handleInputChange}
                  className="form-radio h-4 w-4 text-green-600"
                />
                <span className="ml-2">Dependent</span>
              </label>
            </div>
          </div>

          {formData.insurance_details.map((insurance, index) => (
            <div
              key={index}
              className="mt-6 p-4 border border-gray-200 rounded-lg"
            >
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
                    onChange={(e) =>
                      handleInsuranceChange(index, "insurer", e.target.value)
                    }
                    className={inputStyles}
                    disabled={isLoading}
                  >
                    <option value="">Select an Insurer</option>
                    {isLoading ? (
                      <option value="">Loading...</option>
                    ) : error ? (
                      <option value="">Error loading insurers</option>
                    ) : schemes && schemes.length > 0 ? (
                      schemes.map((insurer) => (
                        <option key={insurer.id} value={insurer.name}>
                          {insurer.name}
                        </option>
                      ))
                    ) : (
                      <option value="">No insurers available</option>
                    )}
                  </select>
                  {error && <div className="text-red-500">{error}</div>}
                </div>

                <div>
                  <label className={labelStyles}>
                    Scheme <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={insurance.scheme_type}
                    onChange={(e) =>
                      handleInsuranceChange(
                        index,
                        "scheme_type",
                        e.target.value
                      )
                    }
                    className={inputStyles}
                    disabled={isLoading || !insurance.insurer}
                  >
                    <option value="">Select a Scheme</option>
                    {isLoading ? (
                      <option value="">Loading...</option>
                    ) : error ? (
                      <option value="">Error loading schemes</option>
                    ) : insurance.insurer &&
                      schemes.some((s) => s.name === insurance.insurer) ? (
                      getSchemesForInsurer(insurance.insurer).map((scheme) => (
                        <option key={scheme.id} value={scheme.name}>
                          {scheme.name}
                        </option>
                      ))
                    ) : (
                      <option value="">
                        Select insurer first or no schemes available
                      </option>
                    )}
                  </select>
                  {error && <div className="text-red-500">{error}</div>}
                </div>

                <div>
                  <label className={labelStyles}>
                    Principal Member Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={insurance.principal_member_name}
                    onChange={(e) =>
                      handleInsuranceChange(
                        index,
                        "principal_member_name",
                        e.target.value
                      )
                    }
                    className={inputStyles}
                    placeholder="Enter principal member name"
                  />
                </div>
                <div>
                  <label className={labelStyles}>
                    Principal Member Number{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={insurance.principal_member_number}
                    onChange={(e) =>
                      handleInsuranceChange(
                        index,
                        "principal_member_number",
                        e.target.value
                      )
                    }
                    className={inputStyles}
                    placeholder="Enter principal member number"
                  />
                </div>

                <div>
                  <label className={labelStyles}>
                    Member Validity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={insurance.member_validity}
                    onChange={(e) =>
                      handleInsuranceChange(
                        index,
                        "member_validity",
                        e.target.value
                      )
                    }
                    className={inputStyles}
                  />
                </div>

                <div>
                  <label className={labelStyles}>
                    Insurance Card Scan <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    onChange={(e) =>
                      handleInsuranceChange(
                        index,
                        "insurance_card_image",
                        e.target.files[0]
                      )
                    }
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
