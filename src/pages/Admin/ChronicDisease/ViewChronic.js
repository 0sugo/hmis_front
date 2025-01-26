import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewChronic = () => {

  const [viewchronic, setViewchronic] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting chronic by id
  const getBrandById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/chronicDiseases/get?id=${id}`);
      setViewchronic(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getBrandById();
  }, [getBrandById]);

  // approve chronic
  const approveBrand = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this chronic');
    if (confirmed) {
      try {
        await axios.put(`/api/chronicDiseases/approve/${id}`);
        toast.success('Chronic disease Approved');
        getBrandById();
      } catch (error) {
        toast.error('Failed to approve chronic');
        console.log(error);
      }
    }
  };

  // delete chronic permanently
  const deleteSheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to permanent delete this chronic');
    if (confirmed) {
      try {
        await axios.put(`/api/chronicDiseases/permanentlyDelete/${id}`);
        toast.success('Chronic disease permanent deleted');
        navigate('/app/schemes')
      } catch (error) {
        toast.error('Failed to permanent delete chronic');
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
            <span>{viewchronic.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewchronic.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewchronic.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewchronic.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewchronic.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewchronic.created_at ? new Date(viewchronic.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewchronic.updated_at ? new Date(viewchronic.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewchronic.approved_at ? new Date(viewchronic.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveBrand(viewchronic.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => deleteSheme(viewchronic.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Permanent Delete</button>
        </section>
      </div>
    </div>
  );
};

export default ViewChronic;
