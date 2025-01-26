import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewDrugFormula = () => {

  const [viewformula, setViewformula] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting drug formula by id
  const getBrandById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/drugFormulas/get?id=${id}`);
      setViewformula(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getBrandById();
  }, [getBrandById]);

  // approve drug formula
  const approveBrand = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this drug formula');
    if (confirmed) {
      try {
        await axios.put(`/api/drugFormulas/approve/${id}`);
        toast.success('drug formula Approved');
        getBrandById();
      } catch (error) {
        toast.error('Failed to approve drug formula');
        console.log(error);
      }
    }
  };

  // delete drug formula permanently
  const deleteSheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to permanent delete this drug formula');
    if (confirmed) {
      try {
        await axios.put(`/api/drugFormulas/permanentlyDelete/${id}`);
        toast.success('drug formula permanent deleted');
        navigate('/app/schemes')
      } catch (error) {
        toast.error('Failed to permanent delete drug formula');
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
            <span>{viewformula.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewformula.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Formula : </span>
            <span>{viewformula.formula}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewformula.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewformula.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewformula.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewformula.created_at ? new Date(viewformula.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewformula.updated_at ? new Date(viewformula.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewformula.approved_at ? new Date(viewformula.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveBrand(viewformula.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => deleteSheme(viewformula.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Permanent Delete</button>
        </section>
      </div>
    </div>
  );
};

export default ViewDrugFormula;
