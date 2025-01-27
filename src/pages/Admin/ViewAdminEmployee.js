import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/api';
import { useParams } from 'react-router-dom';
import { toast } from 'sonner'
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';

const ViewAdminEmployee = () => {

  const [viewemployee, setViewemployee] = useState([]);
  const { id } = useParams();

  // getting employee by id
  const getEmployeeById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/employees/get?id=${id}`);
      setViewemployee(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);
  
  useEffect(() => {
    getEmployeeById();
  }, [getEmployeeById]);


  // approve employee
  const approveDepartment = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this employee');
    if (confirmed) {
      try {
        await axios.put(`/api/employees/approve/${id}`);
        toast.success('Employee Approved');
        getEmployeeById();
      } catch (error) {
        toast.error('Failed to approve employee');
        console.log(error);
      }
    }
  };

  // disable employee
  const disableDepartment = async (id) => {
    const confirmed = window.confirm('Are you sure you want to disable this employee');
    if (confirmed) {
      try {
        await axios.put(`/api/employees/disable/${id}`);
        toast.success('Employee Disabled');
        getEmployeeById();
      } catch (error) {
        toast.error('Failed to disable employee');
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
              <span className='font-semibold'>Employee Name : </span>
              <span>{viewemployee.employee_name}</span>
            </div>
            <div>
              <span className='font-semibold'>Employee Code : </span>
              <span>{viewemployee.employee_code}</span>
            </div>
            <div>
              <span className='font-semibold'>Ip Number : </span>
              <span>{viewemployee.ipnumber}</span>
            </div>
            <div>
              <span className='font-semibold'>Created By : </span>
              <span>{viewemployee.created_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated By : </span>
              <span>{viewemployee.updated_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Approved By : </span>
              <span>{viewemployee.approved_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Disabled By : </span>
              <span>{viewemployee.disabled_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Created At : </span>
              <span>{viewemployee.created_at ? new Date(viewemployee.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated At : </span>
              <span>{viewemployee.updated_at ? new Date(viewemployee.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Approved At : </span>
              <span>{viewemployee.approved_at ? new Date(viewemployee.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Disabled At : </span>
              <span>{viewemployee.disabled_at ? new Date(viewemployee.disabled_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
          </div>
          <div className='flex items-center justify-center space-x-2 my-2'>
            <button onClick={() => approveDepartment(viewemployee.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
            <button onClick={() => disableDepartment(viewemployee.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:bg-orange-500 flex items-center'><span><MdOutlineClose /></span>Disable</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAdminEmployee;
