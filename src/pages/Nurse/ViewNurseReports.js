import React from "react";
import pic from "../../assets/images/pic.svg";

const ViewNurseReports = () => {
  const reports = [
    {
      date: "Today, 25 Jan 2022",
      content:
        "Dummy Text More Definitions of Patient Information Patient Information means the health information in your medical or other healthcare records. It also includes information in your records that can identify you. For example, it can include your name, address, phone number, birthdate, and medical record number. Dummy Text",
    },
    {
      date: "24 Jan 2022",
      content:
        "Dummy Text More Definitions of Patient Information Patient Information means the health information in your medical or other healthcare records. It also includes information in your records that can identify you. For example, it can include your name, address, phone number, birthdate, and medical record number. Dummy Text",
    },
    {
      date: "23 Jan 2022",
      content:
        "Dummy Text More Definitions of Patient Information Patient Information means the health information in your medical or other healthcare records. It also includes information in your records that can identify you. For example, it can include your name, address, phone number, birthdate, and medical record number. Dummy Text",
    },
  ];

  return (
    <div className="mx-auto p-4">
      <h4 className="font-semibold my-4">
        Nurse <span className="text-[#0E6F1E]">{'>'} Report {'>'} View</span>
      </h4>

      <section className="bg-white p-4 rounded-lg">
        <div className="flex flex-wrap gap-20 mb-4">
          <div>
            <img src={pic} className="w-36 h-36" alt="user" />
            <h5>Idris Mamoon</h5>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Patient Name:</h5>
              <p className="float-left">Maimoon</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Age:</h5>
              <p className="float-left">25</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Gender:</h5>
              <p className="float-left">Male</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Occupation:</h5>
              <p className="float-left">Cafdsg</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Company:</h5>
              <p className="float-left">Ccxgd</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Diagnosis:</h5>
              <p className="float-left">Ccxgd</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Mo in Charge:</h5>
              <p className="float-left">Ccxgd</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">IP No:</h5>
              <p className="float-left">Casual</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Scheme:</h5>
              <p className="float-left">45435</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Address:</h5>
              <p className="float-left">43534</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">
                Date of Admission:
              </h5>
              <p className="float-left">12/12/23</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Procedure Type:</h5>
              <p className="float-left">Calculators</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">Nurse in charge:</h5>
              <p className="float-left">Calculators</p>
            </div>
            <div className="flex items-center space-x-6">
              <h5 className="font-semibold text-[#192252]">
                Consultant in charge:
              </h5>
              <p className="float-left">Calculators</p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-4 bg-white rounded-lg mt-4">
        <h4>Report Information</h4>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-[#192252] mb-6">
            Report Information
          </h2>
          <div className="relative border-l-2 border-gray-200 ml-4">
            {reports.map((report, idx) => (
              <div key={idx} className="mb-10 ml-6 relative">
                <span className="absolute -left-4 top-1 w-4 h-4 bg-white border-4 border-green-500 rounded-full"></span>
                <h3
                  className={`text-base font-semibold text-[#192252] ${
                    idx === 0 ? "text-lg" : ""
                  }`}
                >
                  {report.date}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{report.content}</p>
                {idx === 0 && <hr className="mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViewNurseReports;
