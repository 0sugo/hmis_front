import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { getRelativePosition } from "chart.js";
import Chart from "chart.js";
import LineChart from "../../components/Graphs/LineChart";
import pic from "../../assets/images/pic.svg";

import { useParams } from "react-router-dom";

const PatientsInfo = ({ patient }) => {
  const { patientId } = useParams();
  const [activeSection, setActiveSection] = useState("vitals");

  const timelineData = [
    {
      date: "May, 2024",
      title: "Diabetes Control Appointment",
      description:
        "Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead.",
      Treatment: "Check-up",
      Duration: 3,
      prescription: "prescription-result.pdf",
    },
    {
      date: "May, 2023",
      title: "Diabetes Control Appointment",
      description:
        "Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead",
      Treatment: "Check-up",
      Duration: 3,
      prescription: "prescription-result.pdf",
    },
    {
      date: "May, 2022",
      title: "Diabetes Control Appointment",
      description:
        "Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead",
      Treatment: "Check-up",
      Duration: 3,
      prescription: "prescription-result.pdf",
    },
    {
      date: "May, 2021",
      title: "Diabetes Control Appointment",
      description:
        "Blood sugar management is especially important for people with diabetes, as chronically high blood sugar levels can lead",
      Treatment: "Check-up",
      Duration: 3,
      prescription: "prescription-result.pdf",
    },
  ];

  const lineChartLabels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
  ];
  const lineChartData = [
    {
      label: "Dataset one",
      data: [0, 3, 3.5, 4, 1, 4, 3, 5, 6],
      borderColor: "#B4E6EB",
      backgroundColor: "#ffffff",
      fill: false,
    },
    {
      label: "Dataset 2",
      data: [0, 4, 3, 3.5, 4, 1.5, 2.3, 3, 4],
      borderColor: "#3F4E8B",
      backgroundColor: "#ffffff",
      fill: false,
    },
    {
      label: "Dataset 3",
      data: [0, 2, 6, 1.5, 2.4, 5.5, 1.3, 2, 4],
      borderColor: "#7CCCBE",
      backgroundColor: "#ffffff",
      fill: false,
    },
  ];

  return (
    <div>
      <div className="flex flex-col space-y-4">
        {/* Patient header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <span className="text-[#192252] font-medium text-xl">
            {patient?.patient_firstname} {patient?.patient_lastname}
          </span>
          <button className="flex items-center justify-center gap-1 px-4 py-2 bg-[#DAE8E3] text-customGreen rounded-lg text-xs font-medium">
            <GoPlus />
            Add Notes
          </button>
        </div>

        {/* Main content area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left column */}
          <div className="lg:col-span-4 space-y-4">
            {/* Patient summary card */}
            <div className="bg-white rounded-xl p-6 flex flex-col items-center text-xs gap-2">
              <img
                src={pic}
                alt="patient"
                className="h-[70px] w-[70px] object-cover rounded-full"
              />
              <span className="text-[#192252] font-medium">
                {patient?.patient_firstname}
              </span>
              <span className="text-[#697696] font-medium">{`Patient ID: ${patient?.patient_code}`}</span>
              <span className="text-[#697696] font-medium">
                {patient?.residence}
                {","}
                {patient?.address}
              </span>
              <div className="flex gap-6">
                <p className="flex flex-col items-center text-customGreen text-xl font-semibold">
                  ****
                  <span className="text-customGrey font-medium text-xs">
                    Appointments
                  </span>
                </p>
                <span className="border border-[#D8E5FF]"></span>
                <p className="flex flex-col items-center text-customGreen text-xl font-semibold">
                  {patient?.visits?.length || 0}
                  <span className="text-customGrey font-medium text-xs">
                    Completed
                  </span>
                </p>
              </div>
              <button className="bg-customGreen px-4 py-2 w-full flex justify-center rounded-md text-white mt-2">
                Edit Patient Details
              </button>
            </div>

            {/* Patient information card */}
            <div className="bg-white rounded-xl p-6 text-sm">
              <h3 className="text-[#192252] font-medium text-base mb-2">
                Patient Information
              </h3>
              <div className="space-y-1">
                <p className="flex justify-between font-medium">
                  Weight:
                  <span className="text-[#192252]">
                    {patient?.visits?.[0]?.vitals?.[0]?.weight_kg ?? "N/A"} Kgs
                  </span>
                </p>
                <p className="flex justify-between font-medium">
                diastole Blood Pressure:
                  <span className="text-[#192252]">
                    {patient?.visits?.[0]?.vitals?.[0]?.diastole_bp ?? "N/A"} mmHg
                  </span>
                </p>
                <p className="flex justify-between font-medium">
                systole Blood Pressure:
                  <span className="text-[#192252]">
                    {patient?.visits?.[0]?.vitals?.[0]?.systole_bp ?? "N/A"} mmHg
                  </span>
                </p>
                <p className="flex justify-between font-medium">
                  Height:
                  <span className="text-[#192252]">
                    {patient?.visits?.[0]?.vitals?.[0]?.height_cm?? "N/A"} cm
                  </span>
                </p>
                <p className="flex justify-between font-medium">
                spo2 percentage:
                  <span className="text-[#192252]">
                    {patient?.visits?.[0]?.vitals?.[0]?.spo2_percentage ?? "N/A"} %
                  </span>
                </p>
                <p className="flex justify-between font-medium">
                  Bmi:
                  <span className="text-[#192252]">
                    {patient?.visits?.[0]?.vitals?.[0]?.bmi ?? "N/A"} kg/m2
                  </span>
                </p>
                <p className="flex justify-between font-medium">
                  Allergies:
                  <span className="text-[#192252]">
                    {(patient?.visits?.[0]?.vitals?.[0]?.food_allergy || "") +
                      (patient?.visits?.[0]?.vitals?.[0]?.food_allergy &&
                      patient?.visits?.[0]?.vitals?.[0]?.drug_allergy
                        ? ", "
                        : "") +
                      (patient?.visits?.[0]?.vitals?.[0]?.drug_allergy || "") ||
                      "N/A"}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Past Appointment Notes */}
          <div className="lg:col-span-8 bg-white rounded-xl overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300 max-h-[calc(100vh-93px)]">
            <h3 className="text-[#192252] font-medium p-4 text-base sticky top-0 bg-white z-10">
              Past Appointment Notes
            </h3>
            <div className="space-y-4 p-4">
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-6 pb-4 border-l-2 border-slate-300"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-customGreen rounded-full -translate-x-1/2"></div>
                  <div className="mb-1">
                    <div className="text-sm font-medium text-[#000000]">
                      {item.date}
                    </div>
                  </div>
                  <div className="bg-[#FAFAFA] p-4 rounded">
                    <div className="text-sm font-medium text-[#192252]">
                      {item.title}
                    </div>
                    <div className="text-customGrey text-xs font-medium">
                      {item.description}
                    </div>
                    <hr className="my-4" />
                    <div className="md:flex md:justify-between md:items-center text-xs">
                      <p className="flex flex-col font-medium text-[#697696]">
                        Treatment:{" "}
                        <span className="text-[#192252]">{item.Treatment}</span>
                      </p>
                      <p className="flex flex-col font-medium text-[#697696]">
                        Duration:{" "}
                        <span className="text-[#192252]">
                          {item.Duration} months
                        </span>
                      </p>
                      <p className="flex flex-col font-medium text-[#697696]">
                        Prescription:{" "}
                        <span className="text-[#1B91FF]">
                          {item.prescription}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <span className="text-[#192252] font-medium">Past BPS</span>
            <div className="bg-white rounded-2xl p-4">
              <LineChart
                labels={lineChartLabels}
                lineChartData={lineChartData}
              />
            </div>
          </div>
          <div>
            <span className="text-[#192252] font-medium">Past SPO2(%)</span>
            <div className="bg-white rounded-2xl p-4">
              <LineChart
                labels={lineChartLabels}
                lineChartData={lineChartData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsInfo;
