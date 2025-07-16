import React, { useState, useEffect } from "react";
import BarChart from "../../components/Graphs/BarChart";
import DoughnutChart from "../../components/Graphs/DoughnutChart";
import axios from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import {
  resetConsultationState,
  submitConsultation,
} from "../../redux/Consultation/consultationSlice";
import { toast } from "sonner";

const Consultation = ({ patient }) => {
  const [visitId, setVisitId] = useState("");
    useEffect(() => {
    setVisitId(patient?.visits?.[0]?.id);
    getphysicalExamination();
    getConsultation();
    getchiefComplaints();
    getDiagnosis();
  }, []);


  const barChartLabels = [
    "Headache",
    "Chest pains",
    "Fever",
    "Abdominal pains",
    "Diarrhoea",
    "Migraine",
    "Acid Reflux",
  ];
  const barChartData = [12, 6, 7, 10, 1, 2, 5];
  const doughnutChartLabels = [
    "Headache",
    "Chest pains",
    "Fever",
    "Abdominal pains",
    "Diarrhoea",
    "Migraine",
    "Acid Reflux",
  ];
  const doughnutChartData = [12, 6, 7, 10, 1, 2, 5];

  const [chiefComplaints, setChiefComplaints] = useState([]);
  const [AllChiefComplaints, setAllChiefComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState("");
  const [customComplaint, setCustomComplaint] = useState("");
  const [consultation, setConsultation] = useState([]);
  const [diagnosis, setDiagnosis] = useState([]);
  const [physicalExamination, setPhysicalExamination] = useState([]);
  const [diagnosesList, setDiagnosesList] = useState([]);
  const [selectedDiagnosis, setSelectedDiagnosis] = useState("");
  const [customDiagnosis, setCustomDiagnosis] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [admissionForm, setAdmissionForm] = useState({
    chief_complains: "",
    present_illness_history: "",
    // pastIllness: "",
    past_medical_history: "",
    expected_length_of_stay: "",
    reason_for_admission: "",
  });
  const dispatch = useDispatch();
  const { loading, error, success } = useSelector(
    (state) => state.consultation
  );

  const handleAddComplaint = () => {
    const complaintToAdd =
      selectedComplaint === "custom"
        ? customComplaint.trim()
        : selectedComplaint;

    if (complaintToAdd) {
      if (chiefComplaints.includes(complaintToAdd)) {
        toast.error("This complaint is already added.");
        return;
      }
      setChiefComplaints((prevComplaints) => [
        ...prevComplaints,
        complaintToAdd,
      ]);
      if (selectedComplaint === "custom") {
        setCustomComplaint("");
      }
      setSelectedComplaint("");
    }
  };

  const handleRemoveComplaint = (index) => {
    setChiefComplaints((prevComplaints) =>
      prevComplaints.filter((_, i) => i !== index)
    );
  };

  const handleAddDiagnosis = () => {
    const diagnosisToAdd =
      selectedDiagnosis === "custom"
        ? customDiagnosis.trim()
        : selectedDiagnosis;

    if (diagnosisToAdd) {
      if (diagnosesList.includes(diagnosisToAdd)) {
        toast.error("This diagnosis is already added.");
        return;
      }
      setDiagnosesList((prevDiagnoses) => [...prevDiagnoses, diagnosisToAdd]);
      if (selectedDiagnosis === "custom") {
        setCustomDiagnosis("");
      }
      setSelectedDiagnosis("");
    }
  };

  const handleRemoveDiagnosis = (index) => {
    setDiagnosesList((prevDiagnoses) =>
      prevDiagnoses.filter((_, i) => i !== index)
    );
  };

  const getConsultation = async () => {
    try {
      const response = await axios.get("/api/consultationTypes");
      setConsultation(response.data);
    } catch (error) {
      toast.error("Failed to fetch consultation types.");
      console.log(error);
    }
  };

  const getDiagnosis = async () => {
    try {
      const response = await axios.get("/api/diagnosis");
      setDiagnosis(response.data);
    } catch (error) {
      toast.error("Failed to fetch diagnoses.");
      console.log(error);
    }
  };

  const getphysicalExamination = async () => {
    try {
      const response = await axios.get("/api/physicalExaminationTypes");
      setPhysicalExamination(response.data);
    } catch (error) {
      toast.error("Failed to fetch physical examination types.");
      console.log(error);
    }
  };

  const getchiefComplaints = async () => {
    try {
      const response = await axios.get("/api/symptoms");
      setAllChiefComplaints(response.data);
    } catch (error) {
      toast.error("Failed to fetch chief complaints.");
      console.error("Error fetching chief complaints:", error);
    }
  };


  useEffect(() => {
    if (success) {
      toast.success("Consultation submitted successfully!");
      setChiefComplaints([]);
      setDiagnosesList([]);
      setSelectedComplaint("");
      setCustomComplaint("");
      setSelectedDiagnosis("");
      setCustomDiagnosis("");
      dispatch(resetConsultationState());
    }
    if (error) {
      const errorMessage =
        typeof error === "string"
          ? error
          : error.message || "Failed to submit consultation.";
      toast.error(errorMessage);
      dispatch(resetConsultationState());
    }
  }, [success, error, dispatch]);

  useEffect(() => {
    if (visitId) {
        setAdmissionForm((prev) => ({
            ...prev,
            visit_id: visitId,
        }));
    }
}, [visitId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    if (!visitId) {
      toast.error("No visit ID found. Please ensure a patient visit exists.");
      return;
    }
    if (diagnosesList.length === 0) {
      toast.error("Please add at least one diagnosis.");
      return;
    }
    if (chiefComplaints.length === 0) {
      toast.error("Please add at least one chief complaint.");
      return;
    }

    const physicalFields = [
      "generalExam",
      "cns",
      "cvs",
      "respiratory",
      "abdominal",
      "genitourinary",
      "masculoskeletal",
      "ent",
    ];

    const physical_examinations = physicalFields
      .map((field) => {
        const value = formData.get(field);
        if (value) {
          return { [field]: value };
        }
        return null;
      })
      .filter(Boolean);

    const data = {
      visit_id: visitId,
      clinical_history: formData.get("clinicalHistory") || "",
      chief_complains: chiefComplaints,
      physical_examinations,
      diagnosis: diagnosesList,
    };
    console.log(data);

    dispatch(submitConsultation(data));
  };

  const handleAdmissionFormChange = (e) => {
    const { name, value } = e.target;
    setAdmissionForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdmissionSubmit = async (e) => {
    e.preventDefault();

    console.log(admissionForm);
    try {
      await axios.post("/api/admissions/create", {
        ...admissionForm,
      });
      toast.success("Admission request submitted successfully!");
      setIsModalOpen(false);
      setAdmissionForm({
        chief_complains: "",
        present_illness_history: "",
        pastIllness: "",
        past_medical_history: "",
        expected_length_of_stay: "",
        reason_for_admission: "",
      });
    } catch (error) {
       if (error.response && error.response.data.errors) {
            const visitIdErrors = error.response.data.errors.visit_id;
            if (visitIdErrors && visitIdErrors.length > 0) {
                // Get the first error message for visit_id
                const errorMessage = visitIdErrors[0];
                toast.error(errorMessage); // Display the error message
            } else {
                toast.error("Failed to submit admission request.");
            }
        } else {
            toast.error("Failed to submit admission request.");
        }
        console.error("Error submitting admission:", error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <p className="text-[#192252] font-medium text-xl mb-4 sm:mb-0">
          {patient?.patient_firstname} {patient?.patient_lastname}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-error btn-sm text-white"
          >
            Admission/Daycare Request
          </button>
          <button className="btn btn-primary btn-sm text-white">
            Appointments
          </button>
          <button className="btn btn-primary btn-sm text-white">
            Book Surgery
          </button>
          <button className="btn btn-outline btn-success btn-sm">
            Report Incident
          </button>
          <button className="btn btn-outline btn-success btn-sm">
            Sick Leave
          </button>
        </div>
      </div>

      {/* DaisyUI Modal */}
      <input
        type="checkbox"
        id="admission-modal"
        className="modal-toggle"
        checked={isModalOpen}
        onChange={() => setIsModalOpen(!isModalOpen)}
      />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-3xl max-h-[90vh] overflow-y-auto">
          <h3 className="font-bold text-lg text-[#192252] mb-4">
            Admission/Daycare Request
          </h3>
          <form onSubmit={handleAdmissionSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="chief_complains"
                  className="block text-sm font-medium text-[#192252] mb-1"
                >
                  Chief Complaints
                </label>
                <textarea
                  id="chief_complains"
                  name="chief_complains"
                  value={admissionForm.chief_complains}
                  onChange={handleAdmissionFormChange}
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Enter chief complaints..."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="present_illness_history"
                  className="block text-sm font-medium text-[#192252] mb-1"
                >
                  History of Presenting Illness
                </label>
                <textarea
                  id="present_illness_history"
                  name="present_illness_history"
                  value={admissionForm.present_illness_history}
                  onChange={handleAdmissionFormChange}
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Enter history of presenting illness..."
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="pastIllness"
                  className="block text-sm font-medium text-[#192252] mb-1"
                >
                  Past Illness
                </label>
                <textarea
                  id="pastIllness"
                  name="pastIllness"
                  // value={admissionForm.pastIllness}
                  // onChange={handleAdmissionFormChange}
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Enter past illness..."
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="past_medical_history"
                  className="block text-sm font-medium text-[#192252] mb-1"
                >
                  Past Medical History
                </label>
                <textarea
                  id="past_medical_history"
                  name="past_medical_history"
                  value={admissionForm.past_medical_history}
                  onChange={handleAdmissionFormChange}
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Enter past medical history..."
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expected_length_of_stay"
                  className="block text-sm font-medium text-[#192252] mb-1"
                >
                  Expected Length of Stay
                </label>
                <input
                  type="text"
                  id="expected_length_of_stay"
                  name="expected_length_of_stay"
                  value={admissionForm.expected_length_of_stay}
                  onChange={handleAdmissionFormChange}
                  className="input input-bordered w-full"
                  placeholder="e.g., 3 days"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="reason_for_admission"
                  className="block text-sm font-medium text-[#192252] mb-1"
                >
                  Reason for Admission
                </label>
                <textarea
                  id="reason_for_admission"
                  name="reason_for_admission"
                  value={admissionForm.reason_for_admission}
                  onChange={handleAdmissionFormChange}
                  className="textarea textarea-bordered w-full h-24"
                  placeholder="Enter reason for admission..."
                  required
                />
              </div>
            </div>
            <div className="modal-action">
              <label
                htmlFor="admission-modal"
                className="btn btn-outline btn-sm"
              >
                Cancel
              </label>
              <button type="submit" className="btn btn-success btn-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="bg-white p-4 my-4 rounded-lg">
        <form className="w-full text-xs" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label
                    className="block text-[#192252] text-sm font-medium mb-2"
                    htmlFor="consultationType"
                  >
                    Select Consultation Template
                  </label>
                  <select
                    id="consultationType"
                    name="consultationType"
                    className="select select-bordered w-full"
                  >
                    <option value="">Select a type</option>
                    {consultation.map((consult) => (
                      <option key={consult.id} value={consult.name}>
                        {consult.description}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4 flex flex-col sm:flex-row items-end gap-2">
                  <div className="w-full">
                    <label
                      className="block text-[#192252] text-sm md:text-nowrap font-medium mb-2"
                      htmlFor="chiefComplaints"
                    >
                      Chief Complaints
                    </label>
                    <select
                      id="chiefComplaints"
                      className="select select-bordered w-full"
                      value={selectedComplaint}
                      onChange={(e) => setSelectedComplaint(e.target.value)}
                    >
                      <option value="">Select a complaint</option>
                      {AllChiefComplaints.map((complaint) => (
                        <option key={complaint.id} value={complaint.name}>
                          {complaint.name}
                        </option>
                      ))}
                      <option value="custom">Custom Complaint</option>
                    </select>
                  </div>
                  {selectedComplaint === "custom" && (
                    <input
                      type="text"
                      className="input input-bordered w-full mt-2"
                      placeholder="Enter custom complaint"
                      value={customComplaint}
                      onChange={(e) => setCustomComplaint(e.target.value)}
                    />
                  )}
                  <button
                    type="button"
                    className="btn btn-outline btn-success btn-sm mt-2 sm:mt-0"
                    onClick={handleAddComplaint}
                    disabled={
                      !selectedComplaint ||
                      (selectedComplaint === "custom" &&
                        !customComplaint.trim())
                    }
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="clinicalHistory"
                >
                  Enter Brief Clinical History Here
                </label>
                <textarea
                  id="clinicalHistory"
                  name="clinicalHistory"
                  rows="4"
                  className="textarea textarea-bordered w-full"
                  placeholder="Enter clinical history..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-medium mb-2"
                  htmlFor="examinationTemplate"
                >
                  Select Examination Template
                </label>
                <select
                  id="examinationTemplate"
                  name="examinationTemplate"
                  className="select select-bordered w-full"
                >
                  <option value="">Select a template</option>
                  {physicalExamination.map((physical) => (
                    <option key={physical.id} value={physical.name}>
                      {physical.description}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Chief Complaints
              </label>
              <div className="card bordered p-3 h-full min-h-[200px] overflow-y-auto">
                {chiefComplaints.map((complaint, index) => (
                  <div
                    key={index}
                    className="mb-1 p-1 bg-base-200 rounded flex justify-between items-center"
                  >
                    <span>{complaint}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveComplaint(index)}
                      className="btn btn-error btn-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-[#192252] font-medium text-sm mb-4 mt-6">
            Enter Physical Examination :-CNS,CVS,RESP,GUT,GIT,MMS,ENT
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "General exam", id: "generalExam" },
              { label: "Central Nervous System", id: "cns" },
              { label: "CVS", id: "cvs" },
              { label: "Respiratory System", id: "respiratory" },
              { label: "Abdominal", id: "abdominal" },
              { label: "Genitourinary System", id: "genitourinary" },
              { label: "Masculoskeletal", id: "musculoskeletal" },
              { label: "Ear Nose and throat examination", id: "ent" },
            ].map((field) => (
              <div key={field.id} className="mb-4">
                <label
                  className="block text-[#000000] text-sm mb-2"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <input
                  id={field.id}
                  name={field.id}
                  className="input input-bordered w-full"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <div className="mb-2 w-full sm:w-[calc(100%-8rem)]">
              <div className="flex flex-col sm:flex-row items-end gap-2">
                <div className="w-full">
                  <label
                    className="block text-[#192252] text-sm font-medium mb-2"
                    htmlFor="diagnoses"
                  >
                    Select Diagnosis
                  </label>
                  <select
                    id="diagnoses"
                    className="select select-bordered w-full"
                    value={selectedDiagnosis}
                    onChange={(e) => setSelectedDiagnosis(e.target.value)}
                  >
                    <option value="">Select a diagnosis</option>
                    {diagnosis.map((diagnose) => (
                      <option key={diagnose.id} value={diagnose.name}>
                        {diagnose.description}
                      </option>
                    ))}
                    <option value="custom">Custom Diagnosis</option>
                  </select>
                </div>
                {selectedDiagnosis === "custom" && (
                  <input
                    type="text"
                    className="input input-bordered w-full mt-2"
                    placeholder="Enter custom diagnosis"
                    value={customDiagnosis}
                    onChange={(e) => setCustomDiagnosis(e.target.value)}
                  />
                )}
                <button
                  type="button"
                  className="btn btn-outline btn-success btn-sm mt-2 sm:mt-0"
                  onClick={handleAddDiagnosis}
                  disabled={
                    !selectedDiagnosis ||
                    (selectedDiagnosis === "custom" && !customDiagnosis.trim())
                  }
                >
                  Add
                </button>
              </div>
              <label className="block text-gray-700 text-sm font-medium mb-2 mt-4">
                Selected Diagnoses
              </label>
              <div className="card bordered p-3 h-full min-h-[100px] overflow-y-auto">
                {diagnosesList.map((diagnosis, index) => (
                  <div
                    key={index}
                    className="mb-1 p-1 bg-base-200 rounded flex justify-between items-center"
                  >
                    <span>{diagnosis}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveDiagnosis(index)}
                      className="btn btn-error btn-xs"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success mt-4 w-full sm:w-auto"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
          <div className="card bg-base-100 shadow p-4">
            <span className="lg:text-nowrap text-[#000000] font-medium block mb-4">
              Past Chief Complaints
            </span>
            <DoughnutChart
              labels={doughnutChartLabels}
              data={doughnutChartData}
            />
          </div>

          <div className="lg:col-span-3 card bg-base-100 shadow p-4">
            <span className="text-[#000000] font-medium block mb-4">
              Past Chief Complaints
            </span>
            <BarChart data={barChartData} labels={barChartLabels} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;

// Trying to fetch data for consultation from below

// import React, { useState, useEffect } from "react";
// import BarChart from "../../components/Graphs/BarChart";
// import DoughnutChart from "../../components/Graphs/DoughnutChart";
// import axios from "../../api/api";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   resetConsultationState,
//   submitConsultation,
// } from "../../redux/Consultation/consultationSlice";
// import { toast } from "sonner";

// const Consultation = ({ patient }) => {
//   const barChartLabels = [
//     "Headache",
//     "Chest pains",
//     "Fever",
//     "Abdonimal pains",
//     "Diarrhoea",
//     "Migraine",
//     "Acid Reflux",
//   ];
//   const barChartData = [12, 6, 7, 10, 1, 2, 5];
//   const doughnutChartLabels = [
//     "Headache",
//     "Chest pains",
//     "Fever",
//     "Abdonimal pains",
//     "Diarrhoea",
//     "Migraine",
//     "Acid Reflux",
//   ];
//   const doughnutChartData = [12, 6, 7, 10, 1, 2, 5];

//   const [chiefComplaints, setChiefComplaints] = useState([]);
//   const [AllChiefComplaints, setAllChiefComplaints] = useState([]);
//   const [selectedComplaint, setSelectedComplaint] = useState("");
//   const [customComplaint, setCustomComplaint] = useState("");
//   const [consultation, setConsultation] = useState([]);
//   const [diagnosis, setDiagnosis] = useState([]);
//   const [physicalExamination, setPhysicalExamination] = useState([]);
//   const [diagnosesList, setDiagnosesList] = useState([]);
//   const [selectedDiagnosis, setSelectedDiagnosis] = useState("");
//   const [customDiagnosis, setCustomDiagnosis] = useState("");
//   const [clinicalHistory, setClinicalHistory] = useState(""); // New state for clinical history
//   const [physicalExaminations, setPhysicalExaminations] = useState({}); // New state for physical examinations
//   const dispatch = useDispatch();
//   const { loading, error, success } = useSelector(
//     (state) => state.consultation
//   );
//   const [visitId, setVisitId] = useState("");

//   const handleAddComplaint = () => {
//     const complaintToAdd =
//       selectedComplaint === "custom"
//         ? customComplaint.trim()
//         : selectedComplaint;

//     if (complaintToAdd) {
//       if (chiefComplaints.includes(complaintToAdd)) {
//         toast.error("This complaint is already added.");
//         return;
//       }
//       setChiefComplaints((prevComplaints) => [
//         ...prevComplaints,
//         complaintToAdd,
//       ]);
//       if (selectedComplaint === "custom") {
//         setCustomComplaint("");
//       }
//       setSelectedComplaint("");
//     }
//   };

//   const handleRemoveComplaint = (index) => {
//     setChiefComplaints((prevComplaints) =>
//       prevComplaints.filter((_, i) => i !== index)
//     );
//   };

//   const handleAddDiagnosis = () => {
//     const diagnosisToAdd =
//       selectedDiagnosis === "custom"
//         ? customDiagnosis.trim()
//         : selectedDiagnosis;

//     if (diagnosisToAdd) {
//       if (diagnosesList.includes(diagnosisToAdd)) {
//         toast.error("This diagnosis is already added.");
//         return;
//       }
//       setDiagnosesList((prevDiagnoses) => [...prevDiagnoses, diagnosisToAdd]);
//       if (selectedDiagnosis === "custom") {
//         setCustomDiagnosis("");
//       }
//       setSelectedDiagnosis("");
//     }
//   };

//   const handleRemoveDiagnosis = (index) => {
//     setDiagnosesList((prevDiagnoses) =>
//       prevDiagnoses.filter((_, i) => i !== index)
//     );
//   };

//   const getConsultation = async () => {
//     try {
//       const response = await axios.get("/api/consultationTypes");
//       setConsultation(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch consultation types.");
//       console.log(error);
//     }
//   };

//   const getDiagnosis = async () => {
//     try {
//       const response = await axios.get("/api/diagnosis");
//       setDiagnosis(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch diagnoses.");
//       console.log(error);
//     }
//   };

//   const getphysicalExamination = async () => {
//     try {
//       const response = await axios.get("/api/physicalExaminationTypes");
//       setPhysicalExamination(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch physical examination types.");
//       console.log(error);
//     }
//   };

//   const getchiefComplaints = async () => {
//     try {
//       const response = await axios.get("/api/symptoms");
//       setAllChiefComplaints(response.data);
//     } catch (error) {
//       toast.error("Failed to fetch chief complaints.");
//       console.error("Error fetching chief complaints:", error);
//     }
//   };

//   const fetchConsultationData = async () => {
//     if (!visitId) return;

//     try {
//       const response = await axios.get(
//         "https://maimoon.hospify.co.ke/api/doctor/consultations/get",
//         { visit_id: visitId }
//       );
//       const data = response.data;

//       if (data && data.length > 0) {
//         const consultationData = data[0];
//         // Auto-fill form fields
//         setChiefComplaints(consultationData.symptoms.map((s) => s.name));
//         setDiagnosesList(consultationData.diagnosis.map((d) => d.name));
//         setClinicalHistory(consultationData.clinical_history || "");
//         // Map physical examinations to state (assuming they are key-value pairs)
//         const physicalExams = consultationData.physical_examinations.reduce(
//           (acc, exam) => {
//             const key = Object.keys(exam)[0];
//             acc[key] = exam[key];
//             return acc;
//           },
//           {}
//         );
//         setPhysicalExaminations(physicalExams);
//         toast.success("Consultation fetched successfully!");
//       } else {
//         toast.info("This is a new consultation.");
//       }
//     } catch (error) {
//       toast.error("Failed to fetch consultation data.");
//       console.error("Error fetching consultation data:", error);
//     }
//   };

//   useEffect(() => {
//     if (patient && patient.visits && patient.visits.length > 0) {
//       setVisitId(patient.visits[0].id);
//     }
//     getphysicalExamination();
//     getConsultation();
//     getchiefComplaints();
//     getDiagnosis();
//   }, [patient]);

//   // Fetch consultation data when visitId changes
//   useEffect(() => {
//     if (visitId) {
//       fetchConsultationData();
//     }
//     console.log(visitId);
//   }, [visitId]);

//   useEffect(() => {
//     if (success) {
//       toast.success("Consultation submitted successfully!");
//       setChiefComplaints([]);
//       setDiagnosesList([]);
//       setSelectedComplaint("");
//       setCustomComplaint("");
//       setSelectedDiagnosis("");
//       setCustomDiagnosis("");
//       setClinicalHistory("");
//       setPhysicalExaminations({});
//       dispatch(resetConsultationState());
//     }
//     if (error) {
//       const errorMessage =
//         typeof error === "string"
//           ? error
//           : error.message || "Failed to submit consultation.";
//       toast.error(errorMessage);
//       dispatch(resetConsultationState());
//     }
//   }, [success, error, dispatch]);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);

//     // Validate inputs
//     if (!visitId) {
//       toast.error("No visit ID found. Please ensure a patient visit exists.");
//       return;
//     }
//     if (diagnosesList.length === 0) {
//       toast.error("Please add at least one diagnosis.");
//       return;
//     }
//     if (chiefComplaints.length === 0) {
//       toast.error("Please add at least one chief complaint.");
//       return;
//     }

//     // Collect physical examination fields
//     const physicalFields = [
//       { id: "generalExam", label: "generalExam" },
//       { id: "cns", label: "cns" },
//       { id: "cvs", label: "cvs" },
//       { id: "respiratory", label: "respiratory" },
//       { id: "abdominal", label: "abdominal" },
//       { id: "genitourinary", label: "genitourinary" },
//       { id: "masculoskeletal", label: "masculoskeletal" },
//       { id: "ent", label: "ent" },
//     ];

//     const physical_examinations = physicalFields
//       .map(({ id, label }) => {
//         const value = formData.get(id);
//         if (value) {
//           return { [label]: value };
//         }
//         return null;
//       })
//       .filter(Boolean);

//     const data = {
//       visit_id: visitId,
//       clinical_history: formData.get("clinicalHistory") || "",
//       chief_complains: chiefComplaints,
//       physical_examinations,
//       diagnosis: diagnosesList,
//     };

//     dispatch(submitConsultation(data));
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//         <p className="text-[#192252] font-medium text-xl mb-4 sm:mb-0">
//           {patient?.patient_firstname} {patient?.patient_lastname}
//         </p>
//         <div className="flex flex-wrap gap-2">
//           <button className="rounded-lg text-white bg-[#EC1C1C] font-medium px-3 py-2 text-xs">
//             Admission/Daycare Request
//           </button>
//           <button className="rounded-lg text-white bg-[#6690CE] font-medium px-3 py-2 text-xs">
//             Appointments
//           </button>
//           <button className="rounded-lg text-white bg-[#6690CE] font-medium px-3 py-2 text-xs">
//             Book Surgery
//           </button>
//           <button className="rounded-lg text-customGreen bg-[#DAE8E3] font-medium px-3 py-2 text-xs">
//             Report Incident
//           </button>
//           <button className="rounded-lg text-customGreen bg-[#DAE8E3] font-medium px-3 py-2 text-xs">
//             Sick Leave
//           </button>
//         </div>
//       </div>

//       <div className="bg-white p-4 my-4 rounded-lg">
//         <form className="w-full text-xs" onSubmit={handleSubmit}>
//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
//             <div className="lg:col-span-3">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div className="mb-4">
//                   <label
//                     className="block text-[#192252] text-sm font-medium mb-2"
//                     htmlFor="consultationType"
//                   >
//                     Select Consultation Template
//                   </label>
//                   <select
//                     id="consultationType"
//                     name="consultationType"
//                     className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 leading-tight focus:outline-none"
//                   >
//                     <option value="">Select a type</option>
//                     {consultation.map((consult) => (
//                       <option key={consult.id} value={consult.name}>
//                         {consult.description}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="mb-4 flex flex-col sm:flex-row items-end gap-2">
//                   <div className="w-full">
//                     <label
//                       className="block text-[#192252] text-sm md:text-nowrap font-medium mb-2"
//                       htmlFor="chiefComplaints"
//                     >
//                       Chief Complaints
//                     </label>
//                     <select
//                       id="chiefComplaints"
//                       className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none"
//                       value={selectedComplaint}
//                       onChange={(e) => setSelectedComplaint(e.target.value)}
//                     >
//                       <option value="">Select a complaint</option>
//                       {AllChiefComplaints.map((complaint) => (
//                         <option key={complaint.id} value={complaint.name}>
//                           {complaint.name}
//                         </option>
//                       ))}
//                       <option value="custom">Custom Complaint</option>
//                     </select>
//                   </div>
//                   {selectedComplaint === "custom" && (
//                     <input
//                       type="text"
//                       className="mt-2 block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none"
//                       placeholder="Enter custom complaint"
//                       value={customComplaint}
//                       onChange={(e) => setCustomComplaint(e.target.value)}
//                     />
//                   )}
//                   <button
//                     type="button"
//                     className="bg-[#DAE8E3] text-customGreen rounded-md px-4 py-2 mt-2 sm:mt-0"
//                     onClick={handleAddComplaint}
//                     disabled={
//                       !selectedComplaint ||
//                       (selectedComplaint === "custom" &&
//                         !customComplaint.trim())
//                     }
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="clinicalHistory"
//                 >
//                   Enter Brief Clinical History Here
//                 </label>
//                 <textarea
//                   id="clinicalHistory"
//                   name="clinicalHistory"
//                   rows="4"
//                   className="block w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
//                   placeholder="Enter clinical history..."
//                   value={clinicalHistory}
//                   onChange={(e) => setClinicalHistory(e.target.value)}
//                 ></textarea>
//               </div>

//               <div className="mb-4">
//                 <label
//                   className="block text-gray-700 text-sm font-medium mb-2"
//                   htmlFor="examinationTemplate"
//                 >
//                   Select Examination Template
//                 </label>
//                 <select
//                   id="examinationTemplate"
//                   name="examinationTemplate"
//                   className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 leading-tight focus:outline-none"
//                 >
//                   <option value="">Select a template</option>
//                   {physicalExamination.map((physical) => (
//                     <option key={physical.id} value={physical.name}>
//                       {physical.description}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="lg:col-span-1">
//               <label className="block text-gray-700 text-sm font-medium mb-2">
//                 Chief Complaints
//               </label>
//               <div className="block w-full h-full min-h-[200px] border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight overflow-y-auto">
//                 {chiefComplaints.map((complaint, index) => (
//                   <div
//                     key={index}
//                     className="mb-1 p-1 bg-gray-100 rounded flex justify-between items-center"
//                   >
//                     <span>{complaint}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveComplaint(index)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="text-[#192252] font-medium text-sm mb-4 mt-6">
//             Enter Physical Examination :-CNS,CVS,RESP,GUT,GIT,MMS,ENT
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {[
//               { label: "General exam", id: "generalExam" },
//               { label: "Central Nervous System", id: "cns" },
//               { label: "CVS", id: "cvs" },
//               { label: "Respiratory System", id: "respiratory" },
//               { label: "Abdominal", id: "abdominal" },
//               { label: "Genitourinary System", id: "genitourinary" },
//               { label: "Masculoskeletal", id: "masculoskeletal" },
//               { label: "Ear Nose and throat examination", id: "ent" },
//             ].map((field) => (
//               <div key={field.id} className="mb-4">
//                 <label
//                   className="block text-[#000000] text-sm mb-2"
//                   htmlFor={field.id}
//                 >
//                   {field.label}
//                 </label>
//                 <input
//                   id={field.id}
//                   name={field.id}
//                   className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-3 px-3 text-[#AEAEAE] leading-tight focus:outline-none"
//                   value={physicalExaminations[field.id] || ""}
//                   onChange={(e) =>
//                     setPhysicalExaminations((prev) => ({
//                       ...prev,
//                       [field.id]: e.target.value,
//                     }))
//                   }
//                 />
//               </div>
//             ))}
//           </div>

//           <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
//             {" "}
//             <div className="mb-2 w-full sm:w-[calc(100%-8rem)]">
//               <div className="flex flex-col sm:flex-row items-end gap-2">
//                 <div className="w-full">
//                   <label
//                     className="block text-[#192252] text-sm font-medium mb-2"
//                     htmlFor="diagnoses"
//                   >
//                     Select Diagnosis
//                   </label>
//                   <select
//                     id="diagnoses"
//                     className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none"
//                     value={selectedDiagnosis}
//                     onChange={(e) => setSelectedDiagnosis(e.target.value)}
//                   >
//                     <option value="">Select a diagnosis</option>
//                     {diagnosis.map((diagnose) => (
//                       <option key={diagnose.id} value={diagnose.name}>
//                         {diagnose.description}
//                       </option>
//                     ))}
//                     <option value="custom">Custom Diagnosis</option>
//                   </select>
//                 </div>
//                 {selectedDiagnosis === "custom" && (
//                   <input
//                     type="text"
//                     className="mt-2 block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none"
//                     placeholder="Enter custom diagnosis"
//                     value={customDiagnosis}
//                     onChange={(e) => setCustomDiagnosis(e.target.value)}
//                   />
//                 )}
//                 <button
//                   type="button"
//                   className="bg-[#DAE8E3] text-customGreen rounded-md px-4 py-2 mt-2 sm:mt-0"
//                   onClick={handleAddDiagnosis}
//                   disabled={
//                     !selectedDiagnosis ||
//                     (selectedDiagnosis === "custom" && !customDiagnosis.trim())
//                   }
//                 >
//                   Add
//                 </button>
//               </div>
//               <label className="block text-gray-700 text-sm font-medium mb-2 mt-4">
//                 Selected Diagnoses
//               </label>
//               <div className="block w-full h-full min-h-[100px] border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight overflow-y-auto">
//                 {diagnosesList.map((diagnosis, index) => (
//                   <div
//                     key={index}
//                     className="mb-1 p-1 bg-gray-100 rounded flex justify-between items-center"
//                   >
//                     <span>{diagnosis}</span>
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveDiagnosis(index)}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <button
//               type="submit"
//               className="bg-customGreen mt-4 text-white rounded-md py-3 px-4 sm:p-4 w-full sm:w-auto"
//               disabled={loading}
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8">
//           <div className="bg-[#FFFFFF] p-4 shadow rounded-lg">
//             <span className="lg:text-nowrap text-[#000000] font-medium block mb-4">
//               Past Chief Complaints
//             </span>
//             <DoughnutChart
//               labels={doughnutChartLabels}
//               data={doughnutChartData}
//             />
//           </div>

//           <div className="lg:col-span-3 bg-[#FFFFFF] p-4 shadow rounded-lg">
//             <span className="text-[#000000] font-medium block mb-4">
//               Past Chief Complaints
//             </span>
//             <BarChart data={barChartData} labels={barChartLabels} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Consultation;
