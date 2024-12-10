import React, { useState, useEffect, } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../api/api'
import { MdOutlineBlock, MdModeEdit } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import Loader from '../Loader';
import Pagination from '../Pagination';
import CreateScheme from './CreateScheme'

const Schemes = () => {

  const [scheme, setSheme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(20);
  const [count, setCount] = useState(0)

  const getSchemes = async () => {
    try {
      const response = await axios.get('/api/schemes')
      setSheme(response.data)
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
    getSchemes()
  }, [])

  

  // Modal to create scheme
  const openModal = () => {
    const dialog = document.getElementById('my_modal_3');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  return (
    <div className='mx-auto p-4'>
      <div className='flex items-center justify-between'>
        <h4 className='font-semibold'>Admin <span className='text-[#0E6F1E]'>> Schemes</span></h4>
        <button className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg' onClick={() => openModal()}>Create Schemes</button>
        {/* create scheme modal */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {/* create scheme section */}
            <CreateScheme/>
          </div>
        </dialog>
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
            <div className='overflow-x-auto rounded-lg'>
              {scheme.length > 0 ? (
                <table className='w-full text-justify table-auto'>
                  <thead>
                    <tr className='border-b border-slate-500'>
                      <th className='py-3 px-6'>No</th>
                      <th className='py-3 px-6'>Name</th>
                      <th className='py-3 px-6'>Account</th>
                      <th className='py-3 px-6'>Created By</th>
                      <th className='py-3 px-6'>Created At</th>
                      <th className='py-3 px-6'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheme.map((data) => (
                      <tr key={data.id}>
                        <td className='py-2 px-6'>{data.id}</td>
                        <td className='py-2 px-6'>{data.name}</td>
                        <td className='py-2 px-6'>{data.account}</td>
                        <td className='py-2 px-6'>{data.created_by}</td>
                        <td className='py-2 px-6'>{new Date(data.created_at).toISOString().replace('T', ' ').slice(0, 19)}</td>
                        <td className='py-2 px-6'>
                          <div className='flex space-x-3'>
                            <span className='text-blue-600 text-xl'><Link to={`/app/viewscheme/${data.id}`}><FaRegEye /></Link></span>
                            <span className='text-green-600 text-xl'><Link to={`/app/updatescheme/${data.id}`}><MdModeEdit /></Link></span>
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

export default Schemes
