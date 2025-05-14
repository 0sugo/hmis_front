import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/images/pic.svg";
import eye from "../../assets/images/eye.svg";
import downloadIcon from "../../assets/images/download.svg";

const ViewApproval = () => {
  const waitingReviewsData = [
    {
      date: "12/12/2021",
      document: "Medical Report",
      availabilityStatus: "Available",
      documentUrl: "https://example.com/documents/medical-report-1.pdf",
    },
    {
      date: "12/12/2021",
      document: "Lab Results",
      availabilityStatus: "Available",
      documentUrl: "https://example.com/documents/lab-results-2.pdf",
    },
    {
      date: "12/12/2021",
      document: "Prescription",
      availabilityStatus: "Pending",
      documentUrl: "https://example.com/documents/prescription-3.pdf",
    },
    {
      date: "12/12/2021",
      document: "Invoice",
      availabilityStatus: "Available",
      documentUrl: "https://example.com/documents/invoice-4.pdf",
    },
  ];

  const [list, setList] = useState(waitingReviewsData);
  const [isDiagnosisOpen, setIsDiagnosisOpen] = useState(true);
  const [isDocumentsOpen, setIsDocumentsOpen] = useState(true);
  const [formData, setFormData] = useState({
    insurerApprovalStatus: "",
    approvalAmount: "",
    approvedBy: "",
    upload1: null,
    facilityApprovalStatus: "",
    rejectedReason: "",
    rejectedBy: "",
    upload2: null,
    remarks: "",
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleDownload = (url, documentName) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = documentName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mx-auto p-4 max-w-screen-xl">
      <h4 className="font-semibold my-4">
        Approval Desk <span className="text-[#0E6F1E]"> Send Approval</span>
      </h4>

      <section className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-wrap gap-8">
          <div className="flex flex-col items-center">
            <img src={pic} className="w-32 h-32" alt="user" />
            <h5 className="mt-2 font-medium">Isris Mamoon</h5>
          </div>
          <div className="space-y-2 flex-1 min-w-[200px]">
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">
                Patient Name:
              </h5>
              <p>Maimoon</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">
                Patient Age:
              </h5>
              <p>25</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">
                Patient Gender:
              </h5>
              <p>Male</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Reg Number:</h5>
              <p>Cafdsg</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Visit Code:</h5>
              <p>Ccxgd</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Visit Date:</h5>
              <p>12/12/12</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Insurance:</h5>
              <p>Casual</p>
            </div>
          </div>
          <div className="space-y-2 flex-1 min-w-[200px]">
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Scheme:</h5>
              <p>Casual</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Member No:</h5>
              <p>45435</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Invoice No:</h5>
              <p>43534</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">
                Invoice Date:
              </h5>
              <p>12/12/23</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Diagnosis:</h5>
              <p>Calculators</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Doctor:</h5>
              <p>Casual</p>
            </div>
          </div>
        </div>
        <div className="bg-[#e2e7ff] text-[#262e5c] flex flex-wrap gap-4 py-2 px-5 rounded-lg mt-4 justify-end">
          <span>INV NO: SDF-234234</span>
          <span>INV AMOUNT: $2344</span>
        </div>
      </section>

      <section className="my-8">
        <div className="flex flex-wrap gap-8">
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">
                Approval Status:
              </h5>
              <p>12/12/12</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">
                Claim Status:
              </h5>
              <p>Casual</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Claim Type:</h5>
              <p>12/12/12</p>
            </div>
            <div className="flex items-center space-x-4">
              <h5 className="font-semibold text-[#192252] w-28">Department:</h5>
              <p>Casual</p>
            </div>
          </div>
        </div>
      </section>

      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item border border-base-200 bg-white rounded-lg">
          <input
            type="checkbox"
            checked={isDiagnosisOpen}
            onChange={() => setIsDiagnosisOpen(!isDiagnosisOpen)}
            className="peer"
          />
          <div className="collapse-title text-lg font-semibold">
            ICD 10 Diagnosis
          </div>
          <div className="collapse-content">
            <div className="overflow-x-auto">
              <table className="w-full table-auto min-w-[600px]">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Document
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Availability Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((data, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {data.date}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {data.document}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        {data.availabilityStatus}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700">
                        <div className="flex space-x-2">
                          <Link to={`/app/invoicedetails/${index + 1}`}>
                            <span className="bg-[#DBFFDE] flex justify-center items-center rounded-md w-8 h-8 cursor-pointer hover:bg-[#C8E6CC]">
                              <img src={eye} alt="eye" />
                            </span>
                          </Link>
                          <span
                            onClick={() =>
                              handleDownload(
                                data.documentUrl,
                                `${data.document}.pdf`
                              )
                            }
                            className="bg-[#DBFFDE] flex justify-center items-center rounded-md w-8 h-8 cursor-pointer hover:bg-[#C8E6CC]"
                          >
                            <img src={downloadIcon} alt="download" />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="collapse collapse-arrow join-item border border-base-200 bg-white rounded-lg mt-4">
          <input
            type="checkbox"
            checked={isDocumentsOpen}
            onChange={() => setIsDocumentsOpen(!isDocumentsOpen)}
            className="peer"
          />
          <div className="collapse-title text-lg font-semibold">Documents</div>
          <div className="collapse-content">
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Facility Approval Status
                  </label>
                  <select
                    name="facilityApprovalStatus"
                    value={formData.facilityApprovalStatus}
                    onChange={handleInputChange}
                    className="select select-bordered w-full mt-1"
                  >
                    <option value="">Select Status</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>

              {formData.facilityApprovalStatus === "Approved" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Insurer Approval Status
                      </label>
                      <select
                        name="insurerApprovalStatus"
                        value={formData.insurerApprovalStatus}
                        onChange={handleInputChange}
                        className="select select-bordered w-full mt-1"
                      >
                        <option value="">Select Status</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Approval Amount
                      </label>
                      <input
                        type="number"
                        name="approvalAmount"
                        value={formData.approvalAmount}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mt-1"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Approved By
                      </label>
                      <input
                        type="text"
                        name="approvedBy"
                        value={formData.approvedBy}
                        onChange={handleInputChange}
                        className="input input-bordered w-full mt-1"
                        placeholder="Enter name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Upload Document
                      </label>
                      <input
                        type="file"
                        name="upload1"
                        onChange={handleInputChange}
                        className="file-input file-input-bordered w-full mt-1"
                      />
                    </div>
                  </div>
                </>
              )}

              {formData.facilityApprovalStatus === "Rejected" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Rejected Reason
                    </label>
                    <input
                      type="text"
                      name="rejectedReason"
                      value={formData.rejectedReason}
                      onChange={handleInputChange}
                      className="input input-bordered w-full mt-1"
                      placeholder="Enter reason"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Rejected By
                    </label>
                    <input
                      type="text"
                      name="rejectedBy"
                      value={formData.rejectedBy}
                      onChange={handleInputChange}
                      className="input input-bordered w-full mt-1"
                      placeholder="Enter name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Upload Document
                    </label>
                    <input
                      type="file"
                      name="upload2"
                      onChange={handleInputChange}
                      className="file-input file-input-bordered w-full mt-1"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Remarks
                </label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered w-full mt-1"
                  placeholder="Enter remarks"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary bg-[#0E6F1E] hover:bg-[#35a147] text-[#DBFFDE] border-none"
                >
                  Submit Documents
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <section className="my-4">
        <div className="flex flex-wrap gap-4 justify-end">
          <button className="btn btn-primary bg-[#0E6F1E] hover:bg-[#35a147] text-[#DBFFDE] border-none">
            Push To Slade
          </button>
          <button className="btn btn-primary bg-[#0E6F1E] hover:bg-[#35a147] text-[#DBFFDE] border-none">
            Send Approval
          </button>
        </div>
      </section>
    </div>
  );
};

export default ViewApproval;
