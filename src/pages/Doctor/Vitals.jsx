import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import LineChart from "../../components/Graphs/LineChart";

const Vitals = ({ patient }) => {


  const visit = patient?.visits?.[0];
  const allVitals = visit?.vitals || [];

  const currentVitals = allVitals[0];
  const pastVitals = allVitals.slice(0, 9);
  const [bpData, setBpData] = useState([]);
  const [spo2Data, setSpo2Data] = useState([]);
  

  useEffect(()=>{
      if (!pastVitals || pastVitals.length === 0) return;
    const bps = pastVitals.map((v) => `${v.systole_bp}/${v.diastole_bp}`);
    const spo2 = pastVitals.map((v) => Number(v.spo2_percentage))
    
    setBpData(bps);
    setSpo2Data(spo2);
  },[])

  const lineChartLabels = ["visit 1", "visit 2", "visit 3", "visit 4", "visit 5", "visit 6", "visit 7", "visit 8"];
  const lineChartData = [
    {
      label: "Blood Pressure",
      data: pastVitals.map((v) => Number(v.systole_bp)),
      borderColor: "#7CCCBE",
      backgroundColor: "#ffffff",
      fill: false,
    },
  ];

  const lineChartData2 = [
    {
      label: "SPO2",
      data: [90, 83, 93.5, 84, 91, 94, 96, 95, 96],
      borderColor: "#7CCCBE",
      backgroundColor: "#ffffff",
      fill: false,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <p className="text-[#192252] font-medium text-xl flex items-center gap-2 mb-2 sm:mb-0">
          {patient?.patient_firstname} {patient?.patient_lastname}{" "}
          <span className="flex items-center text-customGreen text-sm">
            <IoIosArrowForward />
            vitals{" "}
          </span>
        </p>
        <button className="flex rounded-lg text-customGreen items-center justify-center bg-[#DAE8E3] font-medium gap-1 px-4 py-2 text-xs cursor-pointer">
          <GoPlus /> Add Notes
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {["Current Vitals", "Past Visit Vitals", "Past Visit Vitals"].map(
          (title, index) => {
            const vital = pastVitals[index];
            if (!vital) return null;
            return (
              <div key={index}>
                <span className="text-[#192252] text-sm font-medium">
                  {title}
                </span>
                <div className="bg-white p-4 rounded-xl text-sm my-2">
                  <CurrentVitalsList vitals={vital} />
                </div>
              </div>
            );
          }
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="w-full lg:w-4/12 max-w-full lg:max-w-[376px]">
          <span className="text-[#192252] text-sm font-medium">Past BPs levels</span>
          <div className="bg-white p-4 rounded-xl text-sm my-2 min-h-[210px]">
            <div className="flex flex-col gap-2">
              {bpData.map((bp, index) => (
                <p
                  key={index}
                  className="flex justify-between font-normal text-customBlue"
                >
                  BP #{index + 1}:{" "}
                  <span className="text-[#14E31C] font-normal">
                    {bp} mmHg
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 pb-12 pt-4">
          <LineChart labels={lineChartLabels} lineChartData={lineChartData} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="w-full lg:w-4/12 max-w-full lg:max-w-[376px]">
          <span className="text-[#192252] text-sm font-medium">Past SPO2 values (%)</span>
          <div className="bg-white p-4 rounded-xl text-sm my-2 min-h-[210px]">
            <div className="flex flex-col gap-2">
              {spo2Data.map((spo2, index) => (
                <p
                  key={index}
                  className="flex justify-between font-normal text-customBlue"
                >
                  SPO2 #{index + 1}:{" "}
                  <span className="text-[#14E31C] font-normal">
                    {spo2}%
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 pb-12 pt-4">
          <LineChart labels={lineChartLabels} lineChartData={lineChartData2} />
        </div>
      </div>
    </div>
  );
};

const CurrentVitalsList = ({ vitals }) => (
  <div className="flex flex-col gap-2">
    <p className="flex justify-between font-normal text-customBlue">
      Weight:{" "}
      <span className="text-[#FF1010] font-normal">
        {vitals?.weight_kg ?? "N/A"} Kgs
      </span>
    </p>
    <p className="flex justify-between font-normal text-customBlue">
      Blood Pressure:{" "}
      <span className="text-[#14E31C] font-normal">
        {vitals?.systole_bp}/{vitals?.diastole_bp ?? "N/A"} mmHg
      </span>
    </p>
    <p className="flex justify-between font-normal text-customBlue">
      Height:{" "}
      <span className="text-[#14E31C] font-normal">
        {vitals?.height_cm ?? "N/A"} cm
      </span>
    </p>
    <p className="flex justify-between font-normal text-customBlue">
      SPO2:{" "}
      <span className="text-[#14E31C] font-normal">
        {vitals?.spo2_percentage ?? "N/A"}%
      </span>
    </p>
    <p className="flex justify-between font-normal text-customBlue">
      Allergies:{" "}
      <span className="text-[#FF1010] font-normal">
        {[vitals?.food_allergy, vitals?.drug_allergy]
          .filter(Boolean)
          .join(", ") || "N/A"}
      </span>
    </p>
    <p className="flex justify-between font-normal text-customBlue">
      Nursing Remarks:{" "}
      <span className="text-[#192252] font-normal">
        {vitals?.nursing_remarks || "N/A"}
      </span>
    </p>
  </div>
);

export default Vitals;
