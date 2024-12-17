import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewClinic = () => {

  const [viewclinic, setViewclinic] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting clinic by id
  const getClinicById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/clinics/get?id=${id}`);
      setViewclinic(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getClinicById();
  }, [getClinicById]);

  // approve clinic
  const approveClinic = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this clinic');
    if (confirmed) {
      try {
        await axios.put(`/api/clinics/approve/${id}`);
        toast.success('clinic Approved');
        getClinicById();
      } catch (error) {
        toast.error('Failed to approve clinic');
        console.log(error);
      }
    }
  };

  // soft delete clinic clinic
  const softDeleteClinic = async (id) => {
    const confirmed = window.confirm('Are you sure you want to disable this clinic');
    if (confirmed) {
      try {
        await axios.put(`/api/clinics/softDelete/${id}`);
        toast.success('clinic soft deleted');
        navigate('/app/clinics')
      } catch (error) {
        toast.error('Failed to disable clinic');
        console.log(error);
      }
    }
  };

  return (
    <div className='mx-auto p-4'>
      <div className='bg-white p-4 rounded-lg'>
        <section className='grid grid-cols-2 gap-4 py-2 md:grid-cols-3 2xl:grid-cols-4'>
          <div>
            <span className='font-semibold'>Name : </span>
            <span>{viewclinic.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewclinic.description}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewclinic.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewclinic.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewclinic.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewclinic.created_at ? new Date(viewclinic.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewclinic.updated_at ? new Date(viewclinic.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewclinic.approved_at ? new Date(viewclinic.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveClinic(viewclinic.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => softDeleteClinic(viewclinic.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Disable</button>
        </section>
      </div>
    </div>
  );
};

export default ViewClinic;
