import React, { useState, useEffect, } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/api'
import { MdOutlineBlock, MdModeEdit, MdOutlineDeleteForever } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import Loader from '../Loader';
import Pagination from '../Pagination';
import { toast } from 'sonner'
import download from '../../assets/images/download.svg';
import { GoPlus } from "react-icons/go";
import axios from '../../api/api'

const PatientList = () => {

  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [count, setCount] = useState(0)

  const getPatients = async () => {
    try {
      const response = await axios.get('/hmis/public/api/patients')
      setPatients(response.data.data)
      setLoading(false);
      setError(null);
    } catch (error) {
      console.log(error)
      setLoading(false);
      if (!error.response) {
        setError('Network error! Check your connection.');
      } else if (error.response.status >= 500) {
        setError('Server error! Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  }

  useEffect(() => {
    getPatients()
  }, [])

  // delete patient
  const deletePatient = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this patient');
    if (confirmed) {
      try {
        await axios.put(`/api/patients/permanentlyDelete/${id}`);
        toast.success('Patient Deleted');
        getPatients();
      } catch (error) {
        toast.error('Failed to delete patient');
        console.log(error);
      }
    }
  };


  return (
    <div className="mx-auto p-4">
      <h2 className='text-[#192252] font-medium py-4 text-xl'>Patient List</h2>
      <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between py-2 space-y-4 sm:space-y-0'>
        <div className="w-full sm:w-auto relative">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="search"
              className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 text-sm w-full rounded-lg pt-2 pb-2 pl-12 pr-3"
              placeholder="Search for patient"
            />
          </div>
        </div>

        <div className='flex flex-wrap gap-4'>
          <button className='flex rounded-lg gap-2 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
            <img src={download} className='h-5 w-5' alt="Download" />
            <span className="hidden sm:inline">Download Report</span>
          </button>
          <button className='flex rounded-lg gap-1 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
            <GoPlus />
            <span className="hidden sm:inline">Add Patient Report</span>
          </button>
        </div>
      </div>
     
      <section className='bg-white p-4 my-4 rounded-lg'>
        {loading ? (
          <div className='flex items-center justify-center bg-[#f2ecfc] h-[70vh]'>
            <Loader />
          </div>
          ) : error ? (
            <div className='bg-[#f2ecfc] grid place-items-center h-[70vh]'>
              <div className='grid place-items-center text-red-600 p-4'>
                <h3><MdOutlineBlock /></h3>
                <span>{error}</span>
              </div>
            </div>
          ) : (
            <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
              {patients.length > 0 ? (
                <table className='w-full text-justify table-auto'>
                  <thead>
                    <tr className='border-b border-slate-500'>
                      <th className='py-3 px-6'>No</th>
                      <th className='py-3 px-6'>First Name</th>
                      <th className='py-3 px-6'>Last Name</th>
                      <th className='py-3 px-6'>Patient Code</th>
                      <th className='py-3 px-6'>Created By</th>
                      <th className='py-3 px-6'>Created At</th>
                      <th className='py-3 px-6'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((data) => (
                      <tr key={data.id}>
                        <td className='py-2 px-6'>{data.id}</td>
                        <td className='py-2 px-6'>{data.patient_firstname}</td>
                        <td className='py-2 px-6'>{data.patient_lastname}</td>
                        <td className='py-2 px-6'>{data.patient_code}</td>
                        <td className='py-2 px-6'>{data.created_by}</td>
                        <td className='py-2 px-6'>{new Date(data.created_at).toISOString().replace('T', ' ').slice(0, 19)}</td>
                        <td className='py-2 px-6'>
                          <div className='flex space-x-3'>
                            <span className='text-blue-600 text-xl'><Link to={`/app/viewpatient/${data.id}`}><FaRegEye /></Link></span>
                            <span className='text-green-600 text-xl'><Link to={`/app/updatepatient/${data.id}`}><MdModeEdit /></Link></span>
                            <button onClick={() => deletePatient(data.id)} className='text-red-600 text-xl hover:text-red-500'><span><MdOutlineDeleteForever /></span></button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                ) : (
                <div className='bg-[#f2ecfc] text-[#8144E5] grid place-items-center h-[70vh]'>
                  <div className='grid place-items-center p-4'>
                    <h3><MdOutlineBlock /></h3>
                    <h4>No Data</h4>
                  </div>
                </div>
              )}
            </div>
          )
        }
        <div className='flex flex-wrap items-center justify-between mt-4 gap-4'>
          <div>
            <span className='mr-2'>Records per page:</span>
            <select
              className='px-3 py-1 border bg-[#f2ecfc] border-slate-300 rounded-md focus:outline-none focus:border-[#8144E5] focus:ring-[#8144E5] focus:ring-1'
              value={recordsPerPage}
              onChange={(e) => {
                setRecordsPerPage(parseInt(e.target.value, 10));
                setCurrentPage(1);
              }}
            >
              <option value='20'>20</option>
              <option value='50'>50</option>
              <option value='75'>75</option>
              <option value='100'>100</option>
            </select>
          </div>
          <Pagination
            nPages={Math.ceil(count / recordsPerPage)}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </section>
    </div>
  )
}

export default PatientList
