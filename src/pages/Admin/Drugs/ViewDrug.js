import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewDrug = () => {

  const [viewdrug, setViewdrug] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting drug by id
  const getBrandById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/drugs/get?id=${id}`);
      setViewdrug(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getBrandById();
  }, [getBrandById]);

  // approve drug
  const approveBrand = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this drug');
    if (confirmed) {
      try {
        await axios.put(`/api/drugs/approve/${id}`);
        toast.success('drug Approved');
        getBrandById();
      } catch (error) {
        toast.error('Failed to approve drug');
        console.log(error);
      }
    }
  };

  // delete drug permanently
  const deleteSheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to permanent delete this drug');
    if (confirmed) {
      try {
        await axios.put(`/api/drugs/permanentlyDelete/${id}`);
        toast.success('drug permanent deleted');
        navigate('/app/schemes')
      } catch (error) {
        toast.error('Failed to permanent delete drug');
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
            <span>{viewdrug.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Brand : </span>
            <span>{viewdrug.brand}</span>
          </div>
          <div>
            <span className='font-semibold'>In Stock : </span>
            <span>{viewdrug.in_stock}</span>
          </div>
          <div>
            <span className='font-semibold'>Expiry Date : </span>
            <span>{viewdrug.expiry_date}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewdrug.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewdrug.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewdrug.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewdrug.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewdrug.created_at ? new Date(viewdrug.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewdrug.updated_at ? new Date(viewdrug.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewdrug.approved_at ? new Date(viewdrug.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveBrand(viewdrug.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => deleteSheme(viewdrug.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Permanent Delete</button>
        </section>
      </div>
    </div>
  );
};

export default ViewDrug;
