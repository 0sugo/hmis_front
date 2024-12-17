import React, { useState } from 'react'
import axios from '../../../api/api'
import { toast } from 'sonner'

const CreateClinic = () => {

  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    setError(null);
    try {
      await axios.post('/api/clinics/create', { name, description })
      toast.success('Clinic Created')
      setName('')
      setDescription('')
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
      <h4 className='text-center my-4 font-semibold'>Create Clinic</h4>
      <form onSubmit={handleSubmit}>
        <div className='py-2'>
          <label htmlFor='name'>Clinic Name
            <input 
              type="text" 
              required
              placeholder='name'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Description
            <input 
              type="text" 
              required
              placeholder='Description'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <div className='p-2 text-center'>
          <button type='submit' disabled={loading} className='bg-[#0E6F1E] text-white px-8 py-2 rounded-lg hover:bg-[#0E6F1E]'>{loading ? 'Wait...' : 'Create'}</button>
        </div>
      </form>
      {error && <div className="mt-4 text-center text-red-600">{error}</div>}
    </div>
  )
}

export default CreateClinic
