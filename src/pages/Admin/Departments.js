import React, { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { useNavigate } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { FaUserPlus, FaUserEdit, FaUserCog, FaTrash, FaCross } from 'react-icons/fa'
import Modal from 'react-bootstrap/Modal'
import pen from '../../assets/images/pen.svg'
import eye from '../../assets/images/eye.svg'
import { MdDelete } from 'react-icons/md'
import { FaHospitalUser, FaUser, FaUsers } from 'react-icons/fa6';

const Departments = () => {

  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState('')
  const [filterValue, setFilterValue] = useState('')


  const handleNavigate = (path) => {
    navigate(path, { replace: true })
  }

  const openModal = (type) => {
    setModalType(type)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setModalType('')
  }
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const tableData = [
    {
      IpNo: 'mmh12',
      employeeName: 'James Kingori',
      employeeCode: 'EMP001',
      age: '32',
      gender: 'Male',
      dob: '1992-05-15',
      role: 'Doctor',
      specialty: 'Cardiology',
    },
    {
      IpNo: 'mmh92',
      employeeName: 'Peter Milke',
      employeeCode: 'EMP002',
      age: '28',
      gender: 'Male',
      dob: '1996-09-20',
      role: 'Nurse',
      specialty: 'Emergency Care',
    },
    {
      IpNo: 'mmh92',
      employeeName: 'Carl paul',
      employeeCode: 'EMP003',
      age: '28',
      gender: 'Male',
      dob: '1996-09-20',
      role: 'Cook',
      specialty: 'Head Cook',
    },
    {
      IpNo: 'mmh92',
      employeeName: 'Carl paul',
      employeeCode: 'EMP003',
      age: '28',
      gender: 'Male',
      dob: '1996-09-20',
      role: 'Security',
      specialty: 'Head security',
    },
    {
      IpNo: 'mmh92',
      employeeName: 'Carl paul',
      employeeCode: 'EMP003',
      age: '28',
      gender: 'Male',
      dob: '1996-09-20',
      role: 'Janitor',
      specialty: 'Head Janitor',
    },
  ];

  const comparisonData = [
    { name: 'Jan', workers: 50, customers: 265 },
    { name: 'Feb', workers: 55, customers: 470 },
    { name: 'Mar', workers: 60, customers: 680 },
    { name: 'Apr', workers: 58, customers: 885 },
    { name: 'May', workers: 62, customers: 1090 },
    { name: 'Jun', workers: 65, customers: 1200 },
  ];

  const insuranceData = [
    { name: 'Doctors', value: 12 },
    { name: 'Nurses', value: 26 },
    { name: 'Surgeon', value: 2 },
    { name: 'Other', value: 30 },
  ];
  const [selectedColumns, setSelectedColumns] = useState(Object.keys(tableData[0]))

  const toggleColumn = (column) => {
    setSelectedColumns(prev =>
      prev.includes(column) ? prev.filter(col => col !== column) : [...prev, column]
    )
  }

  const filteredData = useMemo(() => {
    return tableData.filter(row => {
      return selectedColumns.some(column =>
        row[column].toString().toLowerCase().includes(filterValue.toLowerCase())
      )
    })
  }, [tableData, filterValue, selectedColumns])

  const totalValue = insuranceData.reduce((sum, entry) => sum + entry.value, 0);

  return (
    <div className='mx-auto p-4'>
      <div>
        <h1 className='text-xl font-bold mb-4'>Department Management</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>

          {/* <button
            onClick={() => openModal('createAccount')}
            className='flex items-center justify-center py-3 px-4 bg-green-200 rounded-lg hover:bg-green-300'
          >
            <FaUserCog className='mr-2' /> Create User Roles
          </button>

          <button
            onClick={() => openModal('createUser')}
            className='flex items-center justify-center py-3 px-4 bg-purple-200 rounded-lg hover:bg-purple-300'
          >
            <FaUserPlus className='mr-2' /> Create User
          </button>

          <button
            onClick={() => openModal('editUser')}
            className='flex items-center justify-center py-3 px-4 bg-blue-200 rounded-lg hover:bg-blue-300'
          >
            <FaUserEdit className='mr-2' /> Edit/Update User
          </button> */}

          <div className="bg-white p-4 rounded-lg shadow ">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaHospitalUser /> Workers Department Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={insuranceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {insuranceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                  <Label
                    value={`Total: ${totalValue}`}
                    position="center"
                    style={{ fontSize: '16px', fontWeight: 'bold', fill: '#333' }}
                  />
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><FaUsers /> Workers vs Customers Comparison</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={comparisonData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="workers" fill="#ff8042" />
                <Bar dataKey="customers" fill="#0088fe" />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>



        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-4 bg-[#BED0FF]">
            <h2 className="text-lg font-semibold text-[#413D80] mb-2">Employee List</h2>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {Object.keys(tableData[0]).map(header => (
                <label key={header} className="flex items-center space-x-2 text-xs text-[#413D80]">
                  <input
                    type="checkbox"
                    checked={selectedColumns.includes(header)}
                    onChange={() => toggleColumn(header)}
                    className="form-checkbox h-3 w-3 text-[#413D80]"
                  />
                  <span>{header}</span>
                </label>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-12 pr-3"
                placeholder="Search for employee by any field"
              />
            </div>
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[300px] scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300">
            <table className="w-full leading-normal ">
              <thead>
                <tr>
                  {selectedColumns.map((header) => (
                    <th key={header} className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-[#413D80] uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                  <th className="sticky top-0 px-1 py-3 border-b-2 border-gray-200 bg-[#BED0FF] text-center text-xs font-semibold text-[#413D80] uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((data, index) => (
                  <tr key={index}>
                    {selectedColumns.map((column) => (
                      <td key={column} className="p-3 border-b border-gray-200 bg-white text-xs">
                        <p className="text-gray-900 whitespace-no-wrap">{data[column]}</p>
                      </td>
                    ))}
                    <td className="py-4 border-b border-gray-200 bg-white text-xs">
                      <div className='flex justify-center gap-2'>
                        <span className='bg-[#E4EDFE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer' onClick={() => openModal('editUser')}><img src={pen} alt='pen' /></span>
                        <span className='bg-[#E4EDFE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer' ><MdDelete className='text-red-600 size-5 hover:text-red-500' /> </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <UserManagementModal show={showModal} handleClose={closeModal} type={modalType} />
    </div>
  )
}

const UserManagementModal = ({ show, handleClose, type }) => {
  const getModalTitle = () => {
    switch (type) {
      case 'createUser': return 'Create User'
      case 'editUser': return 'Edit/Update User'
      case 'createAccount': return 'Create New User Roles'
      // case 'deleteUser': return 'Delet a User'
      default: return ''
    }
  }

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div className='flex justify-center w-full'>
          <Modal.Title>
            <span className='text-[#100C53] font-semibold'>{getModalTitle()}</span>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form>
          {type === 'createUser' && (
            <>
              <div className="mb-2">
                <input name="firstName" type="text" placeholder='first name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="lastName" type="text" placeholder='last Name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="identification" type="text" placeholder='ID / Passport No' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="nssf" type="text" placeholder='NSSF No' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="nhif" type="text" placeholder='NHIF No' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="kra" type="text" placeholder='KRA Pin' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
            </>
          )}
          {type === 'editUser' && (
            <>
              <div className="mb-2">
                <select name="userToEdit" className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none">
                  <option value="">Select User to Edit</option>
                  {/* Add options dynamically */}
                </select>
              </div>
              <div className="mb-2">
                <input name="newfirstName" type="text" placeholder='Updated first name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="newlastName" type="text" placeholder='Updated last Name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="newidentification" type="text" placeholder='Updated ID / Passport No' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="newnssf" type="text" placeholder='Updated NSSF No' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="newnhif" type="text" placeholder='Updated NHIF No' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2">
                <input name="newkra" type="text" placeholder='UpdatedKRA Pin' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
            </>
          )}
          {type === 'createAccount' && (
            <>
              <div className="mb-2">
                <input name="accountName" placeholder='Account Name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
              <div className="mb-2 flex gap-2">
                <label>Power 1</label>
                <input name="firstName" type="checkbox" className="   border-[#DEDEDE] rounded-lg" />

              </div>
              <div className="mb-2 flex gap-2">
                <label>Power 2</label>
                <input name="firstName" type="checkbox" className="   border-[#DEDEDE] rounded-lg" />

              </div>
              <div className="mb-2 flex gap-2">
                <label>Power 3</label>
                <input name="firstName" type="checkbox" className="   border-[#DEDEDE] rounded-lg" />

              </div>

            </>
          )}
          <div className='flex justify-center my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Submit</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  )
}
export default Departments
