import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../../api/api';
import { useParams } from 'react-router-dom';
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom';

const ViewPayment = () => {

  const [viewpayment, setViewpayment] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting payment by id
  const getClinicById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/paymentTypes/get?id=${id}`);
      setViewpayment(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);

  useEffect(() => {
    getClinicById();
  }, [getClinicById]);

  // approve payment
  const approvePayment = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this payment');
    if (confirmed) {
      try {
        await axios.put(`/api/paymentTypes/approve/${id}`);
        toast.success('payment Approved');
        getClinicById();
      } catch (error) {
        toast.error('Failed to approve payment');
        console.log(error);
      }
    }
  };

  // soft delete payment payment
  const softDeletePayment = async (id) => {
    const confirmed = window.confirm('Are you sure you want to disable this payment');
    if (confirmed) {
      try {
        await axios.put(`/api/paymentTypes/softDelete/${id}`);
        toast.success('payment soft deleted');
        navigate('/app/payments')
      } catch (error) {
        toast.error('Failed to disable payment');
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
            <span>{viewpayment.name}</span>
          </div>
          <div>
            <span className='font-semibold'>Description : </span>
            <span>{viewpayment.description}</span>
          </div>
          <div>
            <span className='font-semibold'>Created By : </span>
            <span>{viewpayment.created_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated By : </span>
            <span>{viewpayment.updated_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved By : </span>
            <span>{viewpayment.approved_by}</span>
          </div>
          <div>
            <span className='font-semibold'>Created At : </span>
            <span>{viewpayment.created_at ? new Date(viewpayment.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Updated At : </span>
            <span>{viewpayment.updated_at ? new Date(viewpayment.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
          <div>
            <span className='font-semibold'>Approved At : </span>
            <span>{viewpayment.approved_at ? new Date(viewpayment.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
          </div>
        </section>

        <section className="flex items-center justify-center space-x-2 py-4">
          <button onClick={() => approvePayment(viewpayment.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:text-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => softDeletePayment(viewpayment.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:text-orange-500 flex items-center'><span><MdOutlineClose /></span>Disable</button>
        </section>
      </div>
    </div>
  );
};

export default ViewPayment;
