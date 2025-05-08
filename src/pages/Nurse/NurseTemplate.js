import React, { useState } from "react";
import { Link } from 'react-router-dom'
import newPatient from "../../assets/images/newPatient.svg";
import { MdRemoveRedEye, MdEdit } from "react-icons/md";

const NurseTemplate = () => {
      const waitingReviewsData = [
        {
          No: 1,
          date: '12/12/2021',
          patientName: 'Idris Miamoon',
          insurance: 'cash',
          scheme: 'Kilifi',
          createdBy: 'Nemo',
          time: '10:15 AM',
        },
        {
          No: 2,
          date: '12/12/2021',
          patientName: 'Idris Miamoon',
          insurance: 'cash',
          scheme: 'Kilifi',
          createdBy: 'Nemo',
          time: '10:15 AM',
        },
        {
          No: 3,
          date: '12/12/2021',
          patientName: 'Idris Miamoon',
          insurance: 'cash',
          scheme: 'Kilifi',
          createdBy: 'Nemo',
          time: '10:15 AM',
        },
        {
          No: 4,
          date: '12/12/2021',
          patientName: 'Idris Miamoon',
          insurance: 'cash',
          scheme: 'Kilifi',
          createdBy: 'Nemo',
          time: '10:15 AM',
        }
      ];
    
      const [list, setList] = useState(waitingReviewsData);

  return (
    <div className="mx-auto space-y-8 p-4">
      <section className="bg-white p-4 space-y-4 rounded-lg">
        <h2 className="text-[#192252]">Nurses</h2>

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

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#8D49D4] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className="font-bold text-[#8D49D4]">34</h5>
                <p>Triage</p>
              </div>
            </div>
            <div className="bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#2E8BBF] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className="font-bold text-[#2E8BBF]">24</h5>
                <p>Procedures</p>
              </div>
            </div>
            <div className="bg-[#FFE2E5] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#DD3459] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className="font-bold text-[#DD3459]">16</h5>
                <p>Ward Transfer</p>
              </div>
            </div>
            <div className="bg-[#E7F1E9] p-4 rounded-lg flex items-center gap-4">
              <div className="bg-[#0E6F1E] p-3 rounded-full">
                <img src={newPatient} alt="patient" />
              </div>
              <div>
                <h5 className="font-bold text-[#0E6F1E]">16</h5>
                <p>Casualty</p>
              </div>
            </div>
          </div>
      </section>

      <section className="bg-white p-4 space-y-4 rounded-lg">
          <h4>patients waiting for triage</h4>
          <div className='col-span-6 overflow-x-auto rounded-lg mt-4'>
            <table className='w-full table-auto'>
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold">No.</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Patient Name</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Age</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Gender</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Instructing Doctor</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Instruction Category</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Waiting Time</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Instructions</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {list.map((data, index) => (
                  <tr key={index}>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.No}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.date}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.patientName}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.insurance}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.scheme}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.createdBy}</td>
                    <td className="px-6 py-3 text-sm text-[#616161]">{data.createdBy}</td>
                    <td className='py-2 px-6 flex space-x-2'>
                      <Link to={`/app/update/${data.No}`} className='text-[#3E36B0] bg-[#E4EDFE] p-2 rounded-lg text-xl'>
                        <MdEdit />
                      </Link>
                      <Link to={`/app/triage`} className='text-[#0E6F1E] bg-[#DBFFDE] p-2 rounded-lg text-xl'>
                        <MdRemoveRedEye />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </section>
    </div>
  );
};

export default NurseTemplate;
