import React, { useEffect, useState } from "react";
import PatientNavigationBar from "./PatientNavigationBar";
import { IoIosArrowForward } from "react-icons/io";
import eye from "../../assets/images/eye.svg";
import NurseInstruction from "./modals/NurseInstruction";
import pic from "../../assets/images/pic.svg";
import { toast } from "sonner";
import axios from "../../api/api";

const Nursingorder = ({ patient }) => {
  const [expandedRows, setExpandedRows] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [report, setReport] = useState("");
  const [visit, setVisit] = useState("");
  const [nurseReports, setNurseReports] = useState([]);

  // Fetch nurse reports on component mount or when visit changes
  useEffect(() => {
    const fetchNurseReports = async () => {
      if (!visit) return; // Skip fetch if visit is not set
      try {
        const response = await axios.get(
          "https://maimoon.hospify.co.ke/api/nurse/nurseReports/get",
          { visit_id: visit },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setNurseReports(response.data.data || []);
      } catch (error) {
        console.error("Error fetching nurse reports:", error);
        toast.error("Failed to fetch nurse reports.");
      }
    };

    fetchNurseReports();
  }, [visit]);

  // Set visit ID from patient data
  useEffect(() => {
    setVisit(patient?.visits?.[0]?.id || "71"); // Default to "71" if no visit ID
  }, [patient]);

  const handleCloseModal = () => setShowModal(false);

  const handleAddNewClick = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const toggleRow = (index) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataToSubmit = {
      visit_id: visit,
      report: report || "NO REPORT",
    };

    try {
      const response = await axios.post(
        "/api/nurse/nurseReports/create",
        dataToSubmit,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Instruction added successfully!", {
          style: { background: "#10B981", color: "#FFF" },
        });
        setReport("");
        // Refresh nurse reports after submission
        const fetchResponse = await axios.get(
          "https://maimoon.hospify.co.ke/api/nurse/nurseReports/get",
          { visit_id: visit },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setNurseReports(fetchResponse.data.data || []);
      } else {
        toast.error("Failed to submit instruction.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("An error occurred while submitting.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold text-[#192252] tracking-tight">
            {patient.patient_firstname} {patient.patient_lastname}
          </h1>
          <span className="flex items-center text-customGreen text-sm font-medium">
            <IoIosArrowForward className="flex-shrink-0" />
            Nurse Instructions
          </span>
        </div>
      </div>

      {/* Form Section */}
      <div className="card bg-white shadow-lg rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-[#192252] mb-4">
          Add New Nurse Instruction
        </h2>
        <form onSubmit={handleSubmit}>
          <label className="text-[#192252] text-sm font-medium block mb-2">
            Enter Nurse Instruction:
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
            <textarea
              placeholder="Enter nurse instruction"
              rows="4"
              className="block w-full sm:col-span-10 textarea textarea-bordered bg-white border-[#DEDEDE] rounded-lg p-3 text-[#192252] focus:ring-2 focus:ring-customGreen focus:border-transparent transition duration-200"
              value={report}
              onChange={(e) => setReport(e.target.value)}
            />
            <button
              type="submit"
              className="btn্র

              w-full sm:w-auto px-6 py-3 btn btn-primary bg-customGreen text-white sm:col-span-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Add Instruction
            </button>
          </div>
        </form>
      </div>

      {/* Table Section */}
      <div className="card bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-lg font-semibold text-[#192252] mb-4">
          Nursing Instructions
        </h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th className="text-[#192252] font-semibold text-sm">Instruction</th>
                <th className="text-[#192252] font-semibold text-sm">Created By</th>
                <th className="text-[#192252] font-semibold text-sm">Created At</th>
              </tr>
            </thead>
            <tbody>
              {nurseReports.length > 0 ? (
                nurseReports.map((report) => (
                  <tr
                    key={report.id}
                    className="hover:bg-gray-50 transition duration-150"
                  >
                    <td className="text-[#192252]">{report.report}</td>
                    <td className="text-[#192252]">
                      {report.created_by?.email || "N/A"}
                    </td>
                    <td className="text-[#192252]">
                      {report.created_at
                        ? new Date(report.created_at).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })
                        : "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-gray-500 py-6">
                    No nursing instructions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Nursingorder;