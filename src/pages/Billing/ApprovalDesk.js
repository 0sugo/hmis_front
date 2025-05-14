import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import newPatient from '../../assets/images/newPatient.svg';
import eye from '../../assets/images/eye.svg';

const ApprovalDesk = () => {
  const waitingReviewsData = [
    {
      No: 1,
      date: '12/12/2021',
      visitCode: 'VC001',
      invoiceNo: 'INV001',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      invoiceAmt: '5000',
      status: 'Pending',
      createdBy: 'Nemo',
      timeWaited: '2h 30m',
      department: 'Outpatient',
      time: '10:15 AM',
    },
    {
      No: 2,
      date: '12/12/2021',
      visitCode: 'VC002',
      invoiceNo: 'INV002',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      invoiceAmt: '7500',
      status: 'Pending',
      createdBy: 'Nemo',
      timeWaited: '1h 45m',
      department: 'InpatientMedical',
      time: '10:15 AM',
    },
    {
      No: 3,
      date: '12/12/2021',
      visitCode: 'VC003',
      invoiceNo: 'INV003',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      invoiceAmt: '6000',
      status: 'Pending',
      createdBy: 'Nemo',
      timeWaited: '3h 15m',
      department: 'Maternity',
      time: '10:15 AM',
    },
    {
      No: 4,
      date: '12/12/2021',
      visitCode: 'VC004',
      invoiceNo: 'INV004',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      invoiceAmt: '8000',
      status: 'Pending',
      createdBy: 'Nemo',
      timeWaited: '1h 20m',
      department: 'Surgical',
      time: '10:15 AM',
    },
  ];

  const [list, setList] = useState(waitingReviewsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDepartment, setActiveDepartment] = useState('Outpatient');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredList = waitingReviewsData.filter(
      (item) =>
        item.patientName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.visitCode.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.invoiceNo.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setList(filteredList);
  };

  const handleDepartmentChange = (dept) => {
    setActiveDepartment(dept);
    const filteredList = waitingReviewsData.filter((item) => item.department === dept);
    setList(filteredList);
  };

  return (
    <div className="mx-auto p-4 max-w-screen-xl">
      <section className="bg-white p-4 rounded-lg mb-4 shadow-sm">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-[#F3E8FF] p-4 rounded-lg flex items-center gap-4">
            <div className="bg-[#8D49D4] p-3 rounded-full">
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className="font-bold text-[#8D49D4]">3423</h5>
              <p>Approval Requests</p>
            </div>
          </div>
          <div className="bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4">
            <div className="bg-[#2E8BBF] p-3 rounded-full">
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className="font-bold text-[#2E8BBF]">1623</h5>
              <p>Pending Approval</p>
            </div>
          </div>
          <div className="bg-[#DEF3FF] p-4 rounded-lg flex items-center gap-4">
            <div className="bg-[#2E8BBF] p-3 rounded-full">
              <img src={newPatient} alt="patient" />
            </div>
            <div>
              <h5 className="font-bold text-[#2E8BBF]">1623</h5>
              <p>Pending Extension</p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-3 my-6">
        <Link to="#">
          <span className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-4 py-2 rounded-md text-sm font-medium">
            Finalized Approval
          </span>
        </Link>
        <Link to="#">
          <span className="bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-4 py-2 rounded-md text-sm font-medium">
            Finalized Extensions
          </span>
        </Link>
      </div>

      <nav className="mb-6">
        <ul className="flex flex-wrap gap-2">
          {['Outpatient', 'InpatientMedical', 'Maternity', 'Surgical'].map((dept) => (
            <li key={dept}>
              <button
                onClick={() => handleDepartmentChange(dept)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeDepartment === dept
                    ? 'bg-[#0E6F1E] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section className="bg-white p-4 rounded-lg shadow-sm">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by Patient Name, Visit Code, or Invoice No"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full sm:w-80 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0E6F1E] text-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="sticky top-0 bg-gray-50">
              <tr>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4">No.</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4">Date</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4">Invoice No</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4">Patient Name</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4 hidden sm:table-cell">Insurance</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4 hidden md:table-cell">Scheme</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4 hidden md:table-cell">Invoice Amt.</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4 hidden lg:table-cell">Status</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4 hidden lg:table-cell">Request By</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4 hidden xl:table-cell">Time Waited</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4 hidden xl:table-cell">Department</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-600 sm:px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4">{data.No}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4">{data.date}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4">{data.invoiceNo}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4">{data.patientName}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4 hidden sm:table-cell">{data.insurance}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4 hidden md:table-cell">{data.scheme}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4 hidden md:table-cell">{data.invoiceAmt}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4 hidden lg:table-cell">{data.status}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4 hidden lg:table-cell">{data.createdBy}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4 hidden xl:table-cell">{data.timeWaited}</td>
                  <td className="px-2 py-2 text-sm text-gray-700 sm:px-4 hidden xl:table-cell">{data.department}</td>
                  <td className="px-2 py-2 sm:px-4">
                    <Link to={`/app/viewapproval/${data.No}`}>
                      <span className="bg-[#DBFFDE] flex justify-center items-center rounded-md w-8 h-8 cursor-pointer hover:bg-[#C8E6CC]">
                        <img src={eye} alt="eye" />
                      </span>
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

export default ApprovalDesk;