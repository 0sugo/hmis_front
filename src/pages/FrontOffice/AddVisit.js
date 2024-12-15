import React, { useState } from 'react'
import axios from '../../api/api'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner'

const AddVisit = () => {

  const [patient_id,setPatient_id] = useState('')
  const [claim_number,setClaim_number] = useState('')
  const [amount,setAmount] = useState('')
  const [department,setDepartment] = useState('')
  const [clinic,setClinic] = useState('')
  const [visit_type,setVisit_type] = useState('')
  const [scheme,setScheme] = useState('')
  const [fee_type,setFee_type] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    setError(null);
    try {
      await axios.post(`/api/visits/create`, { 
        patient_id, claim_number, amount, department, clinic, visit_type, scheme, fee_type
      })
      toast.success('New Visit Updated')
      navigate('/app/newvisit')
      setTimeout(() => {
        window.location.reload()
      }, 1000);
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
          <h4 className='text-center my-4 font-semibold'>Add New Visit</h4>
          <form onSubmit={handleSubmit}>
        <div className='py-2'>
          <label htmlFor='name'>Patient ID
            <input 
              type="text" 
              required
              placeholder='name'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={patient_id}
              onChange={(e) => setPatient_id(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Claim Number
            <input 
              type="text" 
              required
              placeholder='Claim Number'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={claim_number}
              onChange={(e) => setClaim_number(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Amount
            <input 
              type="number" 
              placeholder='Amount'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Department
            <input 
              type="text" 
              placeholder='Department'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Clinic
            <input 
              type="text" 
              placeholder='clinic'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={clinic}
              onChange={(e) => setClinic(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Visit Type
            <input 
              type="text" 
              placeholder='Visit type'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={visit_type}
              onChange={(e) => setVisit_type(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Scheme
            <input 
              type="text" 
              placeholder='scheme'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Fee Type
            <input 
              type="text" 
              placeholder='fee type'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={fee_type}
              onChange={(e) => setFee_type(e.target.value)}
            />
          </label>
        </div>
        <div className='p-2 text-center'>
          <button type='submit' disabled={loading} className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>{loading ? 'Wait...' : 'Add Visit'}</button>
        </div>
      </form>
          {error && <div className="mt-4 text-center text-red-600">{error}</div>}
        </div>
      </div>
    </div>
  )
}

export default AddVisit
