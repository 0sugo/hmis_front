import React, { useEffect } from "react";
import axios from "../../api/api";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import pic from "../../assets/images/pic.svg";
import { useDispatch } from "react-redux";
import { createVitals } from "../../redux/patient/vitalsSlice";
import { toast } from "sonner";

const NurseTriageInfo = () => {
  const { state } = useLocation();
  const id = state?.id;
  const dispatch = useDispatch();
  const [activeSection, setActiveSection] = useState("patientInformation");
  const [patient, setPatient] = useState(null);
  const [visitId, setVisitId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const navigate = useNavigate();

  const FetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`api/patients/get?id=${id}`);
      setVisitId(response.data[0].visits[0].id);
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

  const [formData, setFormData] = useState({
    systolicBP: "",
    diastolicBP: "",
    capRefillPressure: "",
    respRate: "",
    spo2: "",
    headCircumference: "",
    height: "",
    weight: "",
    waistCircumference: "",
    initialMedication: "",
    bmi: "",
    drug: "",
    foodAllergy: "",
    drugAllergy: "",
    currentComplaints: "",
    pulse: "",
    visitType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      visit_id: visitId,
      systole_bp: formData.systolicBP || null,
      diastole_bp: formData.diastolicBP || null,
      cap_refill_pressure: formData.capRefillPressure || null,
      respiratory_rate: formData.respRate || null,
      spo2_percentage: formData.spo2 || null,
      head_circumference_cm: formData.headCircumference || null,
      height_cm: formData.height || null,
      weight_kg: formData.weight || null,
      waist_circumference_cm: formData.waistCircumference || null,
      initial_medication_at_triage: formData.initialMedication || null,
      bmi: formData.bmi || null,
      food_allergy: formData.foodAllergy || null,
      drug_allergy: formData.drugAllergy || null,
      nursing_remarks: formData.currentComplaints || null,

      // drug: formData.drug || null,
      // visit_type: formData.visitType || null,
      pulse: formData.pulse || null,
    };
    setSubmitLoading(true);
    dispatch(createVitals(payload))
    .unwrap()
    .then(() => {
      toast.success("Vitals submitted successfully!");
      setFormData({
        weight: "",
        height: "",
        temperature: "",
        pulse: "",
        systolic: "",
        diastolic: "",
        respiratoryRate: "",
        bmi:"",
      });
      
      navigate("/app/nurse-opdashboard");
    })
    .catch((err) => {
      const message =
        err?.message || err?.data?.message || "Failed to submit vitals.";
      toast.error(message);
      console.error("Submit Error:", err);
    })
    .finally(() => {
      setSubmitLoading(false);
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      visitType: e.target.value,
    });
  };

  useEffect(() => {
    if (formData.height && formData.weight) {
      const heightInMeters = formData.height / 100;
      const bmi = (formData.weight / (heightInMeters * heightInMeters)).toFixed(
        2
      );
      setFormData((prev) => ({ ...prev, bmi }));
    }
  }, [formData.height, formData.weight]);

  return (
    <div className="mx-auto p-4 ">
      <div className="flex flex-col space-y-4 mb-4">
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
                  <span className="text-[#616161] col-span-2">Britam</span>
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
                  <span className="text-[#616161] col-span-2">
                    Kilifi Country Government
                  </span>
                </p>
                <p className="grid grid-cols-3">
                  <span>Prescription No:</span>
                  <span className="text-[#616161] col-span-2">MHP1-000001</span>
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
                Exclusions: Surgery, Surgery, Surgery
              </span>
              <span className="bg-[rgba(255,244,0,0.64)] rounded-lg px-4 py-2 flex items-center gap-4 text-sm text-[#192252] w-full md:w-auto">
                Available Balance: Kshs 6,500
                <span className="border-l border-[#C9C9C9] h-6 mx-2"></span>
                Visit Limit: Kshs 2,550
              </span>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="mx-auto p-4 bg-white">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-[#192252] mb-6">
            Add Patient (Vital Info)
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Blood Pressure Section */}
            <div>
              <label className="block text-[#413D80] mb-2">S/BP (mmHg)</label>
              <input
                type="number"
                name="systolicBP"
                value={formData.systolicBP}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">D/BP (mmHg)</label>
              <input
                type="number"
                name="diastolicBP"
                value={formData.diastolicBP}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Cap Refill and Resp Rate */}
            <div>
              <label className="block text-[#413D80] mb-2">
                Cap Refill Pressure (seconds)
              </label>
              <input
                type="number"
                name="capRefillPressure"
                value={formData.capRefillPressure}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">
                Resp Rate (Breaths/Min)
              </label>
              <input
                type="number"
                name="respRate"
                value={formData.respRate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SPO2 and Head Circumference */}
            <div>
              <label className="block text-[#413D80] mb-2">SPO2(%)</label>
              <input
                type="number"
                name="spo2"
                value={formData.spo2}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">
                Head Circumferences (cm)
              </label>
              <input
                type="number"
                name="headCircumference"
                value={formData.headCircumference}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Height and Weight */}
            <div>
              <label className="block text-[#413D80] mb-2">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Waist Circumference and Initial Medication */}
            <div>
              <label className="block text-[#413D80] mb-2">
                Waist Circumference
              </label>
              <input
                type="number"
                name="waistCircumference"
                value={formData.waistCircumference}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">
                Initial Medication given at triage
              </label>
              <input
                type="number"
                name="initialMedication"
                value={formData.initialMedication}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* BMI and Drug */}
            <div>
              <label className="block text-[#413D80] mb-2">
                BMI (Auto-genereated)
              </label>
              <input
                type="number"
                name="bmi"
                value={formData.bmi}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">Drug</label>
              <input
                type="text"
                name="drug"
                value={formData.drug}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Food and Drug Allergies */}
            <div>
              <label className="block text-[#413D80] mb-2">Food Allergy</label>
              <input
                type="text"
                name="foodAllergy"
                value={formData.foodAllergy}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">Drug Allergy</label>
              <input
                type="text"
                name="drugAllergy"
                value={formData.drugAllergy}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Current Complaints */}
          <div className="mt-6">
            <label className="block text-[#413D80] mb-2">
              Current Complaints
            </label>
            <input
              type="text"
              name="currentComplaints"
              value={formData.currentComplaints}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Visit Type and Pulse */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label className="block text-[#413D80] mb-2">Visit Type</label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Not-Urgent"
                    checked={formData.visitType === "Not-Urgent"}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-5 w-5"
                  />
                  Not-Urgent
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Urgent"
                    checked={formData.visitType === "Urgent"}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-5 w-5"
                  />
                  Urgent
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Emergency"
                    checked={formData.visitType === "Emergency"}
                    onChange={handleCheckboxChange}
                    className="mr-2 h-5 w-5"
                  />
                  Emergency
                </label>
              </div>
            </div>

            <div>
              <label className="block text-[#413D80] mb-2">Pulse(bpm)</label>
              <input
                type="text"
                name="pulse"
                value={formData.pulse}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-green-700 text-white px-12 py-3 rounded-lg font-medium hover:bg-green-800 transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NurseTriageInfo;
