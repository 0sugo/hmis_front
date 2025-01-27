import React, { useState } from 'react'
import axios from '../../../api/api'
import { toast } from 'sonner'

const CreateDrug = () => {

  const [name,setName] = useState('')
  const [description,setDescription] = useState('')
  const [in_stock,setIn_stock] = useState('')
  const [price_per_item,setPrice_per_item] = useState('')
  const [brand,setBrand] = useState('')
  const [expiry_date,setExpiry_date] = useState('')
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true);
    setError(null);
    try {
      await axios.post('/api/drugs/create', { name, description, in_stock, price_per_item, brand, expiry_date })
      toast.success('Drug Created')
      setName('')
      setDescription('')
      setTimeout(() => {
        window.location.reload()
      }, 1000);
    } catch (error) {
      console.log('Error:', error);
      if (!error?.response) {
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
      <h4 className='text-center my-4 font-semibold'>Create Drug</h4>
      <form onSubmit={handleSubmit}>
        <div className='py-2'>
          <label htmlFor='name'>Drug Name
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
          <label htmlFor='name'>In Stock
            <input 
              type="number" 
              required
              placeholder='In Stock'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={in_stock}
              onChange={(e) => setIn_stock(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Price per Item
            <input 
              type="number" 
              required
              placeholder='Price per Item'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={price_per_item}
              onChange={(e) => setPrice_per_item(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Brand
            <input 
              type="text" 
              required
              placeholder='Brand'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </label>
        </div>
        <div className='py-2'>
          <label htmlFor='name'>Expiry Date
            <input 
              type="date" 
              required
              placeholder='Date'
              className='px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
              value={expiry_date}
              onChange={(e) => setExpiry_date(e.target.value)}
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

export default CreateDrug
