import React, { useEffect } from "react";
import newPatient from "../../assets/images/newPatient.svg";
import patientWait from "../../assets/images/patientWait.svg";
import sleep from "../../assets/images/sleep.svg";
import dayCaseImg from "../../assets/images/dayCase.svg";
import eye from "../../assets/images/eye.svg";
import { useNavigate } from "react-router-dom";
import axios from "../../api/api";
import { SummaryCard } from "../Doctor/Dashboard";

const WardTransfer = () => {
  
  return (
    <div className="mx-auto p-4 ">
      {/* summary */}
      <div className="bg-white p-4 rounded-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-6 md:mb-2">
          <div className="flex flex-col mb-4 md:mb-0">
            <span className="text-black text-sm">Good Morning</span>
            <span className="text-customGreen font-semibold text-xl">
              Nurse.Alamini
            </span>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="search"
                className="w-full md:w-64 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 rounded-lg py-2 pl-10 pr-3 text-sm"
                placeholder="Search for patient..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex gap-2 ">
            <SummaryCard
              icon={newPatient}
              bgColor="bg-[#F3E8FF]"
              iconBgColor="bg-[#8D49D4]"
              number={11}
              description="Patients waiting for triage"
            />
            <SummaryCard
              icon={patientWait}
              bgColor="bg-[#DEF3FF]"
              iconBgColor="bg-[#2E8BBF]"
              number={24}
              description="Patients waiting for procedures"
            />
            <SummaryCard
              icon={sleep}
              bgColor="bg-[#FFE2E5]"
              iconBgColor="bg-[#DD3459]"
              number={16}
              description="Admiassions/Transfer Lists"
            />
            <SummaryCard
              icon={dayCaseImg}
              bgColor="bg-[#DCF4E0]"
              iconBgColor="bg-[#058843]"
              number={16}
              description="Patients in Casualty"
            />
          </div>
        </div>

        <div className="my-4">
          <span className="text-[#413D80] font-medium text-lg mb-4 md:mb-2 block">
            Patient List
          </span>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Date
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Visit code
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Age
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Gender
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Scheme
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Diagnosis
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Bed Alloted
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Wait time
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Admitted by
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Approval status
                  </th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">
                    Action
                  </th>
                </tr>
              </thead>
              {/* <tbody>
                {patientlist.length > 0 ? (
                  patientlist.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3 text-sm">{`${data.patient_firstname} ${data.patient_lastname}`}</td>
                      <td className="px-6 py-3 text-sm">{data.patient_code}</td>
                      <td className="px-6 py-3 text-sm">{data.age} kg</td>
                      <td className="px-6 py-3 text-sm">120/80</td>
                      <td className="px-6 py-3 text-sm">
                        <button
                          
                          className="bg-[#DBFFDE] p-2 rounded-lg"
                        >Transfer ward

                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-3 text-sm text-center">
                      No patients found
                    </td>
                  </tr>
                )}
              </tbody> */}
            </table>
          </div>

          {/* Pagination Controls */}
          {/* <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!prevPageUrl}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              &laquo; Previous
            </button>

            <div className="flex space-x-2">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    } rounded-lg`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!nextPageUrl}
              className="px-4 py-2 bg-gray-200 rounded-lg"
            >
              Next &raquo;
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WardTransfer;
