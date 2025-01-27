import React, { useState, useEffect } from 'react'
import axios from '../../api/api'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner'

const UpdateEmployee = () => {

  const { id } = useParams();
  const [employee_name,setEmployee_name] = useState('')
  const [ipnumber,setIpnumber] = useState('')
  const [role,setRole] = useState('')
  const [dob,setDob] = useState('')
  const [speciality,setSpeciality] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  // getting employee by id
  useEffect(() => {
    const getEmployeeById = async () => {
      try {
        const response = await axios.get(`/api/employees/get?id=${id}`);
        setEmployee_name(response.data[0].employee_name);
        setIpnumber(response.data[0].ipnumber);
        setRole(response.data[0].role);
        setDob(response.data[0].dob);
        setSpeciality(response.data[0].speciality);
      } catch (error) {
        console.error(error);
      }
    };
    getEmployeeById();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    setError(null);
    try {
      await axios.put(`/api/employees/update?id=${id}`, { 
        employee_name, ipnumber, role, dob, speciality
      })
      toast.success('Employee Updated')
      navigate('/app/employees')
    } catch (error) {
      console.log('Error:', error);
      if (!error.response) {
        setError('Network error! Check your connection.');
      } else if (error.response.status >= 500) {
        setError('Server error! Please try again later.');
      } else {
        setError(error.response.data?.message || 'An unexpected error occurred.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="mx-auto p-4">
        <div className="bg-white p-4 rounded-lg">
          <h4 className='text-center my-4 font-semibold'>Update Employee</h4>
          <form onSubmit={handleSubmit}>
        <div className='py-2'>
          <label htmlFor='name'>Employee Name
            <input 
              type="text" 
              required
              placeholder='name'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={employee_name}
              onChange={(e) => setEmployee_name(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Ip Number
            <input 
              type="number" 
              required
              placeholder='Ip Number'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={ipnumber}
              onChange={(e) => setIpnumber(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Role
            <input 
              type="text" 
              placeholder='Role'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Date of Birth
            <input 
              type="date" 
              placeholder='name'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Speciality
            <input 
              type="text" 
              placeholder='speciality'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={speciality}
              onChange={(e) => setSpeciality(e.target.value)}
            />
          </label>
        </div>
        <div className='p-2 text-center'>
          <button type='submit' disabled={loading} className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>{loading ? 'Wait...' : 'Update'}</button>
        </div>
      </form>
          {error && <div className="mt-4 text-center text-red-600">{error}</div>}
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee
