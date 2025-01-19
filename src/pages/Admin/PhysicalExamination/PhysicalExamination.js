import React, { useState, useEffect, } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../../api/api'
import { MdOutlineBlock, MdModeEdit } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import Loader from '../../Loader';
import CreatePhysicalExamination from './CreatePhysicalExamination'

const PhysicalExamination = () => {

  const [physicalExamination, setPhysicalExamination] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPhysicalExamination = async () => {
    try {
      const response = await axios.get('/api/physicalExaminationTypes')
      setPhysicalExamination(response.data)
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
    getPhysicalExamination()
  }, [])

  

  // Modal to create physicalExamination
  const openModal = () => {
    const dialog = document.getElementById('my_modal_15');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  return (
    <div  className='bg-white p-4 rounded-lg mb-4'>
      <div className='flex items-center justify-between'>
        <h4 className='font-semibold'><span className='text-[#0E6F1E]'>PhysicalExamination</span></h4>
        <button className='bg-[#0E6F1E] text-[#DBFFDE] hover:bg-[#35a147] px-5 py-2 rounded-lg' onClick={() => openModal()}>Create PhysicalExamination</button>
        {/* CreatePhysicalExamination modal */}
        <dialog id="my_modal_15" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            {/* CreatePhysicalExamination section */}
            <CreatePhysicalExamination/>
          </div>
        </dialog>
      </div>

      <section>
        {loading ? (
          <div className='flex items-center justify-center bg-[#f2ecfc]'>
            <Loader />
          </div>
          ) : error ? (
            <div className='bg-[#f2ecfc] grid place-items-center'>
              <div className='grid place-items-center text-red-600 p-4'>
                <h3><MdOutlineBlock /></h3>
                <span>{error}</span>
              </div>
            </div>
          ) : (
            <div className='overflow-x-auto rounded-lg'>
              {physicalExamination.length > 0 ? (
                <table className='w-full text-justify table-auto'>
                  <thead>
                    <tr className='border-b border-slate-500'>
                      <th className='py-3 px-6'>No</th>
                      <th className='py-3 px-6'>Name</th>
                      <th className='py-3 px-6'>Description</th>
                      <th className='py-3 px-6'>Created By</th>
                      <th className='py-3 px-6'>Created At</th>
                      <th className='py-3 px-6'>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {physicalExamination.map((data) => (
                      <tr key={data.id}>
                        <td className='py-2 px-6'>{data.id}</td>
                        <td className='py-2 px-6'>{data.name}</td>
                        <td className='py-2 px-6'>{data.description}</td>
                        <td className='py-2 px-6'>{data.created_by}</td>
                        <td className='py-2 px-6'>{new Date(data.created_at).toISOString().replace('T', ' ').slice(0, 19)}</td>
                        <td className='py-2 px-6'>
                          <div className='flex space-x-3'>
                            <span className='text-blue-600 text-xl'><Link to={`/app/viewbrand/${data.id}`}><FaRegEye /></Link></span>
                            <span className='text-green-600 text-xl'><Link to={`/app/updatebrand/${data.id}`}><MdModeEdit /></Link></span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                ) : (
                <div className='bg-[#f2ecfc] text-[#8144E5] grid place-items-center'>
                  <div className='grid place-items-center p-4'>
                    <h3><MdOutlineBlock /></h3>
                    <h4>No Data</h4>
                  </div>
                </div>
              )}
            </div>
          )
        }
      </section>
    </div>
  )
}

export default PhysicalExamination
