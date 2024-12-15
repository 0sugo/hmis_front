import React, { useState, useEffect, useCallback } from 'react';
import axios from '../../api/api';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner'
import { MdOutlineClose } from 'react-icons/md';
import { IoCheckmarkSharp } from 'react-icons/io5';

const ViewPatient = () => {

  const [viewpatient, setViewpatient] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate()

  // getting patient by id
  const getPatientById = useCallback(async () => {
    try {
      const response = await axios.get(`/api/patients/get?id=${id}`);
      setViewpatient(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  },[id]);
  
  useEffect(() => {
    getPatientById();
  }, [getPatientById]);

  // approve patient
  const approvePatient = async (id) => {
    const confirmed = window.confirm('Are you sure you want to approve this patient');
    if (confirmed) {
      try {
        await axios.put(`/api/patients/approve/${id}`);
        toast.success('patient Approved');
        getPatientById();
      } catch (error) {
        toast.error('Failed to approve patient');
        console.log(error);
      }
    }
  };

  // disable patient
  const disablePatient = async (id) => {
    const confirmed = window.confirm('Are you sure you want to disable this patient');
    if (confirmed) {
      try {
        await axios.put(`/api/patients/disable/${id}`);
        toast.success('patient Disabled');
        getPatientById();
      } catch (error) {
        toast.error('Failed to disable patient');
        console.log(error);
      }
    }
  };


  // soft delete patient
  const softDeletePatient = async (id) => {
    const confirmed = window.confirm('Are you sure you want to soft delete this patient');
    if (confirmed) {
      try {
        await axios.put(`/api/patients/softDelete/${id}`);
        toast.success('patient soft deleted');
        navigate('/app/listpatients')
      } catch (error) {
        toast.error('Failed to soft delete patient');
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
              <span className='font-semibold'>First Name : </span>
              <span>{viewpatient.patient_firstname}</span>
            </div>
            <div>
              <span className='font-semibold'>Last Name : </span>
              <span>{viewpatient.patient_lastname}</span>
            </div>
            <div>
              <span className='font-semibold'>Patient Code : </span>
              <span>{viewpatient.patient_code}</span>
            </div>
            <div>
              <span className='font-semibold'>Date of Birth : </span>
              <span>{viewpatient.dob}</span>
            </div>
            <div>
              <span className='font-semibold'>Identification Type : </span>
              <span>{viewpatient.identification_type}</span>
            </div>
            <div>
              <span className='font-semibold'>ID No : </span>
              <span>{viewpatient.id_no}</span>
            </div>
            <div>
              <span className='font-semibold'>Phone Number 1 : </span>
              <span>{viewpatient.phonenumber1}</span>
            </div>
            <div>
              <span className='font-semibold'>Phone Number 2 : </span>
              <span>{viewpatient.phonenumber2}</span>
            </div>
            <div>
              <span className='font-semibold'>Email : </span>
              <span>{viewpatient.email}</span>
            </div>
            <div>
              <span className='font-semibold'>Address : </span>
              <span>{viewpatient.address}</span>
            </div>
            <div>
              <span className='font-semibold'>Residence : </span>
              <span>{viewpatient.residence}</span>
            </div>
            <div>
              <span className='font-semibold'>Next of Kin Name : </span>
              <span>{viewpatient.next_of_kin_name}</span>
            </div>
            <div>
              <span className='font-semibold'>Next of Kin Contact : </span>
              <span>{viewpatient.next_of_kin_contact}</span>
            </div>
            <div>
              <span className='font-semibold'>Next of Kin Relationship : </span>
              <span>{viewpatient.next_of_kin_relationship}</span>
            </div>
            <div>
              <span className='font-semibold'>Created By : </span>
              <span>{viewpatient.created_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated By : </span>
              <span>{viewpatient.updated_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Approved By : </span>
              <span>{viewpatient.approved_by}</span>
            </div>
            <div>
              <span className='font-semibold'>Created At : </span>
              <span>{viewpatient.created_at ? new Date(viewpatient.created_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Updated At : </span>
              <span>{viewpatient.updated_at ? new Date(viewpatient.updated_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
            <div>
              <span className='font-semibold'>Approved At : </span>
              <span>{viewpatient.approved_at ? new Date(viewpatient.approved_at).toISOString().replace('T', ' ').slice(0, 19) : '...'}</span>
            </div>
          </div>
          <div className='flex items-center justify-center space-x-2 my-2'>
          <button onClick={() => approvePatient(viewpatient.id)} className='bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-500 flex items-center'><span><IoCheckmarkSharp /></span>Approve</button>
          <button onClick={() => disablePatient(viewpatient.id)} className='bg-orange-600 text-white px-4 py-1 rounded-lg hover:bg-orange-500 flex items-center'><span><MdOutlineClose /></span>Disable</button>
            <button onClick={() => softDeletePatient(viewpatient.id)} className='bg-red-600 text-white px-4 py-1 rounded-lg hover:bg-red-500 flex items-center'><span><MdOutlineClose /></span>Soft Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPatient;
