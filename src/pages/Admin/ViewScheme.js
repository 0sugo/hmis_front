import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewScheme = () => {

  const [viewscheme, setViewscheme] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting scheme by id
  const getSchemeById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/schemes/get?id=${id}`);
      setViewscheme(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getSchemeById();
  }, [getSchemeById]);

  // approve scheme
  const approveScheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this scheme');
    if (confirmed) {
      try {
        await axios.put(`/api/schemes/approve/${id}`);
        toast.success('Schemes Approved');
        getSchemeById();
      } catch (error) {
        toast.error('Failed to approve scheme');
        console.log(error);
      }
    }
  };

  // disable scheme
  const disableScheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to disable this scheme');
    if (confirmed) {
      try {
        await axios.put(`/api/schemes/disable/${id}`);
        toast.success('Schemes Disabled');
        getSchemeById();
      } catch (error) {
        toast.error('Failed to disable scheme');
        console.log(error);
      }
    }
  };

  // delete scheme permanently
  const deleteSheme = async (id) => {
    const confirmed = window.confirm('Are you sure you want to permanent delete this scheme');
    if (confirmed) {
      try {
        await axios.put(`/api/schemes/permanentlyDelete/${id}`);
        toast.success('Schemes permanent deleted');
        navigate('/app/schemes')
      } catch (error) {
        toast.error('Failed to permanent delete scheme');
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
            <span>{viewscheme.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Account : </span>
            <span>{viewscheme.account}</span>
          </div>
          <div>
            <span className='font-semibold'>Initiate Url : </span>
            <span>{viewscheme.initiate_url}</span>
          </div>
          <div>
            <span className='font-semibold'>Authentication Url : </span>
            <span>{viewscheme.authentication_url}</span>
          </div>
          <div>
            <span className='font-semibold'>Validation Url : </span>
            <span>{viewscheme.validation_url}</span>
          </div>
          <div>
            <span className='font-semibold'>Balance Url : </span>
            <span>{viewscheme.balance_url}</span>
          </div>
          <div>
            <span className='font-semibold'>Bridge Balance Url : </span>
            <span>{viewscheme.bridge_balance_url}</span>
          </div>
          <div>
            <span className='font-semibold'>Other Url : </span>
            <span>{viewscheme.other_url}</span>
          </div>
          <div>
            <span className='font-semibold'>Username: </span>
            <span>{viewscheme.username}</span>
          </div>
          <div>
            <span className='font-semibold'>Password : </span>
            <span>{viewscheme.password}</span>
          </div>
          <div>
            <span className='font-semibold'>Other Details : </span>
            <span>{viewscheme.other_details}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewscheme.description}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewscheme.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewscheme.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewscheme.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Disabled By : </span>
            <span>{viewscheme.disabled_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewscheme.created_at ? new Date(viewscheme.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewscheme.updated_at ? new Date(viewscheme.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewscheme.approved_at ? new Date(viewscheme.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Disabled At : </span>
            <span>{viewscheme.disabled_at ? new Date(viewscheme.disabled_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approveScheme(viewscheme.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => disableScheme(viewscheme.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Disable</button>
          <button onClick={() => deleteSheme(viewscheme.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Permanent Delete</button>
        </section>
      </div>
    </div>
  );
};

export default ViewScheme;
