import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner'
import { MdOutlineClose } from 'react-icons/md';

const ViewEmergencyVisit = () => {

  const [viewemergencyvisit, setViewemergencyvisit] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting emergency visit by id
  const getEmergencyVisitById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/emergencyVisits/get/${id}`);
      setViewemergencyvisit(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);
  
  useEffect(() => {
    getEmergencyVisitById();
  }, [getEmergencyVisitById]);


  // soft delete emergency visit
  const softDeleteVisit = async (id) => {
    const confirmed = window.confirm('Are you sure you want to soft delete this emergency visit');
    if (confirmed) {
      try {
        await axios.put(`/api/emergencyVisits/softDelete/${id}`);
        toast.success('Emergency visit soft deleted');
        navigate('/app/newvisit')
      } catch (error) {
        toast.error('Failed to soft delete emergency visit');
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
              <span className='font-semibold'>Patient Name : </span>
              <span>{viewemergencyvisit.patient_name}</span>
            </div>
            <div>
              <span className='font-semibold'>Patient Type : </span>
              <span>{viewemergencyvisit.patient_type}</span>
            </div>
            <div>
              <span className='font-semibold'>Gender : </span>
              <span>{viewemergencyvisit.gender}</span>
            </div>
            <div>
              <span className='font-semibold'>Age : </span>
              <span>{viewemergencyvisit.age}</span>
            </div>
            <div>
              <span className='font-semibold'>Payment Type : </span>
              <span>{viewemergencyvisit.payment_type}</span>
            </div>
            <div>
              <span className='font-semibold'>Contact Info : </span>
              <span>{viewemergencyvisit.contact_info}</span>
            </div>
            <div>
              <span className='font-semibold'>Clinic : </span>
              <span>{viewemergencyvisit.clinic}</span>
            </div>
            <div>
              <span className='font-semibold'>Doctor : </span>
              <span>{viewemergencyvisit.doctor}</span>
            </div>
            <div>
              <span className='font-semibold'>Created By : </span>
              <span>{viewemergencyvisit.created_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated By : </span>
              <span>{viewemergencyvisit.updated_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Created At : </span>
              <span>{viewemergencyvisit.created_at ? new Date(viewemergencyvisit.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated At : </span>
              <span>{viewemergencyvisit.updated_at ? new Date(viewemergencyvisit.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
          </div>
          <div className='flex items-center justify-center space-x-2 my-2'>
            <button onClick={() => softDeleteVisit(viewemergencyvisit.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:bg-orange-500 flex items-center'><span><MdOutlineClose /></span>Soft Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewEmergencyVisit;
