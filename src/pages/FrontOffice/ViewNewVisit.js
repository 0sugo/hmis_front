import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner'
import { MdOutlineClose } from 'react-icons/md';

const ViewNewVisit = () => {

  const [viewnewvisit, setViewnewvisit] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting new visit by id
  const getNewVisitById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/visits/get/${id}`);
      setViewnewvisit(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);
  
  useEffect(() => {
    getNewVisitById();
  }, [getNewVisitById]);


  // soft delete new visit
  const softDeleteVisit = async (id) => {
    const confirmed = window.confirm('Are you sure you want to soft delete this new visit');
    if (confirmed) {
      try {
        await axios.put(`/api/visits/softDelete/${id}`);
        toast.success('New visit soft deleted');
        navigate('/app/newvisit')
      } catch (error) {
        toast.error('Failed to soft delete new visit');
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
              <span className='font-semibold'>Patient ID : </span>
              <span>{viewnewvisit.patient_id}</span>
            </div>
            <div>
              <span className='font-semibold'>Patient Code : </span>
              <span>{viewnewvisit.patient_code}</span>
            </div>
            <div>
              <span className='font-semibold'>Claim Number : </span>
              <span>{viewnewvisit.claim_number}</span>
            </div>
            <div>
              <span className='font-semibold'>Amount : </span>
              <span>{viewnewvisit.amount}</span>
            </div>
            <div>
              <span className='font-semibold'>Department : </span>
              <span>{viewnewvisit.department}</span>
            </div>
            <div>
              <span className='font-semibold'>Clinic : </span>
              <span>{viewnewvisit.clinic}</span>
            </div>
            <div>
              <span className='font-semibold'>Visit Type : </span>
              <span>{viewnewvisit.visit_type}</span>
            </div>
            <div>
              <span className='font-semibold'>Scheme : </span>
              <span>{viewnewvisit.scheme}</span>
            </div>
            <div>
              <span className='font-semibold'>Fee Type : </span>
              <span>{viewnewvisit.fee_type}</span>
            </div>
            <div>
              <span className='font-semibold'>Open : </span>
              <span>{viewnewvisit.open}</span>
            </div>
            <div>
              <span className='font-semibold'>Created By : </span>
              <span>{viewnewvisit.created_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated By : </span>
              <span>{viewnewvisit.updated_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Created At : </span>
              <span>{viewnewvisit.created_at ? new Date(viewnewvisit.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated At : </span>
              <span>{viewnewvisit.updated_at ? new Date(viewnewvisit.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
          </div>
          <div className='flex items-center justify-center space-x-2 my-2'>
            <button onClick={() => softDeleteVisit(viewnewvisit.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:bg-orange-500 flex items-center'><span><MdOutlineClose /></span>Soft Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNewVisit;
