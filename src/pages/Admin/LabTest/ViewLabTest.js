import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewLabTest = () => {

  const [viewlab, setViewlab] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting lab test by id
  const getBrandById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/labTestTypes/get?id=${id}`);
      setViewlab(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getBrandById();
  }, [getBrandById]);

  // approve lab test
  const approveBrand = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this lab test');
    if (confirmed) {
      try {
        await axios.put(`/api/labTestTypes/approve/${id}`);
        toast.success('lab test Approved');
        getBrandById();
      } catch (error) {
        toast.error('Failed to approve lab test');
        console.log(error);
      }
    }
  };

  // delete lab test permanently
  const deleteSheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to permanent delete this lab test');
    if (confirmed) {
      try {
        await axios.put(`/api/labTestTypes/permanentlyDelete/${id}`);
        toast.success('lab test permanent deleted');
        navigate('/app/schemes')
      } catch (error) {
        toast.error('Failed to permanent delete lab test');
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
            <span>{viewlab.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewlab.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewlab.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewlab.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewlab.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewlab.created_at ? new Date(viewlab.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewlab.updated_at ? new Date(viewlab.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewlab.approved_at ? new Date(viewlab.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveBrand(viewlab.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => deleteSheme(viewlab.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Permanent Delete</button>
        </section>
      </div>
    </div>
  );
};

export default ViewLabTest;
