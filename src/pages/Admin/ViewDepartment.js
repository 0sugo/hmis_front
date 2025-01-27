import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/api';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner'
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';

const ViewDepartment = () => {

  const [viewdepartment, setViewdepartment] = useState([]);
  const { id } = useParams();

  // getting department by id
  const getDepartmentById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/departments/get?id=${id}`);
      setViewdepartment(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);
  
  useEffect(() => {
    getDepartmentById();
  }, [getDepartmentById]);


  // approve department
  const approveDepartment = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this department');
    if (confirmed) {
      try {
        await axios.put(`/api/departments/approve/${id}`);
        toast.success('Department Approved');
        getDepartmentById();
      } catch (error) {
        toast.error('Failed to approve department');
        console.log(error);
      }
    }
  };

  // disable department
  const disableDepartment = async (id) => {
    const confirmed = window.confirm('Are you sure you want to disable this department');
    if (confirmed) {
      try {
        await axios.put(`/api/departments/disable/${id}`);
        toast.success('Department Disabled');
        getDepartmentById();
      } catch (error) {
        toast.error('Failed to disable department');
        console.log(error);
      }
    }
  };

  return (
    <div className='mx-auto p-4'>
      <div className='bg-white p-4 rounded-lg'>
        <div className='pb-4'>
          <div className='grid grid-cols-2 gap-4 py-2 md:grid-cols-3 2xl:grid-cols-4'>
            <div>
              <span className='font-semibold'>Name : </span>
              <span>{viewdepartment.name}</span>
            </div>
            <div>
              <span className='font-semibold'>Created By : </span>
              <span>{viewdepartment.created_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated By : </span>
              <span>{viewdepartment.updated_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Approved By : </span>
              <span>{viewdepartment.approved_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Disabled By : </span>
              <span>{viewdepartment.disabled_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Created At : </span>
              <span>{viewdepartment.created_at ? new Date(viewdepartment.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated At : </span>
              <span>{viewdepartment.updated_at ? new Date(viewdepartment.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Approved At : </span>
              <span>{viewdepartment.approved_at ? new Date(viewdepartment.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Disabled At : </span>
              <span>{viewdepartment.disabled_at ? new Date(viewdepartment.disabled_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
          </div>
          <div className='flex items-center justify-center space-x-2 my-2'>
            <button onClick={() => approveDepartment(viewdepartment.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
            <button onClick={() => disableDepartment(viewdepartment.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:bg-orange-500 flex items-center'><span><MdOutlineClose /></span>Disable</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDepartment;
