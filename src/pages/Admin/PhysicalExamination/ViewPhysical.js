import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewPhysical = () => {

  const [viewphysical, setViewphysical] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting physical examination by id
  const getBrandById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/physicalExaminationTypes/get?id=${id}`);
      setViewphysical(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getBrandById();
  }, [getBrandById]);

  // approve physical examination
  const approveBrand = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this physical examination');
    if (confirmed) {
      try {
        await axios.put(`/api/physicalExaminationTypes/approve/${id}`);
        toast.success('physical examination Approved');
        getBrandById();
      } catch (error) {
        toast.error('Failed to approve physical examination');
        console.log(error);
      }
    }
  };

  // delete physical examination permanently
  const deleteSheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to permanent delete this physical examination');
    if (confirmed) {
      try {
        await axios.put(`/api/physicalExaminationTypes/permanentlyDelete/${id}`);
        toast.success('physical examination permanent deleted');
        navigate('/app/schemes')
      } catch (error) {
        toast.error('Failed to permanent delete physical examination');
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
            <span>{viewphysical.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewphysical.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewphysical.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewphysical.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewphysical.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewphysical.created_at ? new Date(viewphysical.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewphysical.updated_at ? new Date(viewphysical.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewphysical.approved_at ? new Date(viewphysical.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveBrand(viewphysical.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => deleteSheme(viewphysical.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Permanent Delete</button>
        </section>
      </div>
    </div>
  );
};

export default ViewPhysical;
