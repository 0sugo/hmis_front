// import React from 'react'
// import { Link, Navigate, useNavigate } from 'react-router-dom'
// import { MdAdd, MdDelete } from "react-icons/md";

// const NewVisit = () => {
//   return (
//     <div className='mx-auto p-4'>
//       <section className="bg-white p-4 rounded-lg mb-4">

//         <h4><b>New OP Visit</b></h4>
//         <div className="flex flex-wrap items-center gap-2 justify-between my-4">
//           <div>
//             <label htmlFor="searchpatient">
//               <input
//                 type="search"
//                 className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
//                 placeholder='Search for patient here...'
//               />
//             </label>
//           </div>

//         </div>
//       </section>
//     </div>
//   )
// }

// export default NewVisit
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { MdAdd, MdDelete, MdEdit } from "react-icons/md";

const NewVisit = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  // Sample data - replace with actual API call results
  const [patients] = useState([
    {
      id: 1,
      name: "John Doe",
      age: 35,
      gender: "Male",
      number: "P001",
      insurance: "NHIF",
      scheme: "Standard",
      createdBy: "Dr. Smith"
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 28,
      gender: "Female",
      number: "P002",
      insurance: "AAR",
      scheme: "Premium",
      createdBy: "Dr. Johnson"
    }
  ]);

  // Filter patients based on search term
  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClick = (data) => {
    const formattedName = data.replace(/\s+/g, '').toLowerCase(); // Remove spaces and convert to lowercase
    navigate(`/app/${formattedName}`);
  };

    return (
      <div className='mx-auto p-4'>
        <section className="bg-white p-4 rounded-lg mb-4">
          <h4><b>New OP Visit</b></h4>
          <div className="flex flex-wrap items-center gap-2 justify-between my-4">
            <div>
              <label htmlFor="searchpatient">
                <input
                  type="search"
                  className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                  placeholder='Search for patient here...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Patient Results Table */}
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Patient Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Number
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Insurance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scheme
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created By
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPatients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.age}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.gender}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.insurance}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.scheme}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {patient.createdBy}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex space-x-2">
                        <button className="text-[#0E6F1E] hover:text-green-700" onClick={()=> handleClick('createpersonalvisit')}>
                          <MdAdd size={20} />
                        </button>
                        <button className="text-blue-600 hover:text-blue-800">
                          <MdEdit size={20} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPatients.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No patients found matching your search.
              </div>
            )}
          </div>
        </section>
      </div>
    )
  }

  export default NewVisit
