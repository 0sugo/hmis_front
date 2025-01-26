import React, { useState, useEffect } from 'react'
import axios from '../../../api/api'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner'

const UpdateDrugFormula = () => {

  const { id } = useParams();
  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [formula,setFormula] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  // getting drug formula by id
  useEffect(() => {
    const getDepartmentById = async () => {
      try {
        const response = await axios.get(`/api/drugFormulas/get?id=${id}`);
        setName(response.data[0].name);
        setDescription(response.data[0].description);
        setFormula(response.data[0].formula);
      } catch (error) {
        console.error(error);
      }
    };
    getDepartmentById();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    setError(null);
    try {
      await axios.put(`/api/drugFormulas/update?id=${id}`, { name, description, formula })
      toast.success('drug formula Updated')
      navigate('/app/schemes')
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
          <h4 className='text-center my-4 font-semibold'>Update drug formula</h4>
          <form onSubmit={handleSubmit}>
            <div className='py-2'>
              <label htmlFor='name'>drug formula Name
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
            <div className='py-2'>
                <label htmlFor='name'>Formula
                    <input 
                    type="text" 
                    required
                    placeholder='Formula'
                    className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                    value={formula}
                    onChange={(e) => setFormula(e.target.value)}
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

export default UpdateDrugFormula
