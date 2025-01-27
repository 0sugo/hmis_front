import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewImageRequest = () => {

  const [viewclass, setViewclass] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting image request by id
  const getBrandById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/imageTestRequests/get?id=${id}`);
      setViewclass(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getBrandById();
  }, [getBrandById]);

  // approve image request
  const approveBrand = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this image request');
    if (confirmed) {
      try {
        await axios.put(`/api/imageTestRequests/approve/${id}`);
        toast.success('Image request Approved');
        getBrandById();
      } catch (error) {
        toast.error('Failed to approve image request');
        console.log(error);
      }
    }
  };

  // delete image request permanently
  const deleteSheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to permanent delete this image request');
    if (confirmed) {
      try {
        await axios.put(`/api/imageTestRequests/permanentlyDelete/${id}`);
        toast.success('Image request permanent deleted');
        navigate('/app/schemes')
      } catch (error) {
        toast.error('Failed to permanent delete image request');
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
            <span>{viewclass.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewclass.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewclass.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewclass.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewclass.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewclass.created_at ? new Date(viewclass.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewclass.updated_at ? new Date(viewclass.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewclass.approved_at ? new Date(viewclass.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveBrand(viewclass.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => deleteSheme(viewclass.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Permanent Delete</button>
        </section>
      </div>
    </div>
  );
};

export default ViewImageRequest;
