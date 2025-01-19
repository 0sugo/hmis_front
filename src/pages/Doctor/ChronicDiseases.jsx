import React, { useState} from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import axios from '../../api/api'
import { toast } from 'sonner'

const ChronicDiseases = () => {

  const [name,setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/chronicDiseases/create', {
        name
      })
      toast.success('Chronic disease added')
      setName('')
    } catch (error) {
      console.log(error)
      if (!error?.response) {
        toast.error('Network error! Check your connection.');
      } else if (error.response.status === 422) {
        toast.error(error.response.data.errors.name)
      } else {
        toast.error('Oops! Something went wrong.')
      }
    }
  };

  return (
    <div className="max-w-7xl sm:mx- px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <p className="text-[#192252] font-medium text-lg sm:text-xl flex flex-wrap items-center gap-2 mb-2 sm:mb-0">
          Ajay Sharma
          <span className="flex items-center text-[#192252] text-sm">
            <IoIosArrowForward className="flex-shrink-0" />
            Relevant History
          </span>
          <span className="flex items-center text-customGreen text-sm">
            <IoIosArrowForward className="flex-shrink-0" />
            Chronic Diseases
          </span>
        </p>

      </div>

      <form className="mt-4" onSubmit={handleSubmit}>
        <label className="text-[#192252] text-xs font-semibold block mb-2">
          Enter Chronic Disease Here:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
          <input 
            type="text" 
            required
            placeholder='disease'
            className="block w-full sm:col-span-10 border bg-white border-[#DEDEDE] rounded-lg p-2  leading-tight focus:outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 sm:col-span-2 rounded-lg bg-customGreen text-white mt-2 sm:mt-0"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChronicDiseases;
