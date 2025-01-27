import React, { useState, useEffect } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import axios from "../../api/api"

const Medication = () => {
  const navigate = useNavigate();
  const tableData = [
    {
      drug: 'panadol',
      brand: 'Quinox',
      dose: '2 tabs',
      freq: '100mmg',
      duration: '10 days',
      instruction: '...',
      status: 'pending'
    },
    {
      drug: 'panadol',
      brand: 'Quinox',
      dose: '2 tabs',
      freq: '100mmg',
      duration: '10 days',
      instruction: '...',
      status: 'pending'
    },
    {
      drug: 'panadol',
      brand: 'Quinox',
      dose: '2 tabs',
      freq: '100mmg',
      duration: '10 days',
      instruction: '...',
      status: 'Approved'
    },
    {
      drug: 'panadol',
      brand: 'Quinox',
      dose: '2 tabs',
      freq: '100mmg',
      duration: '10 days',
      instruction: '...',
      status: 'pending'
    }
  ]
  const handleAdmissionRequest = () => {
    navigate('/individualpatient/AdmissionRequest', { replace: true });

  }

  const [brand,setBrand] = useState([])
  const [drug,setDrug] = useState([])
  const [drugformula,setDrugformula] = useState([])

  // get brand types
  const getbrand = async () => {
    try {
      const response = await axios.get('/api/brands')
      setBrand(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getbrand()
  }, [])

  // get drug types
  const getdrug = async () => {
    try {
      const response = await axios.get('/api/drugs')
      setDrug(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdrug()
  }, [])

  // get drug formula types
  const getdrugformula = async () => {
    try {
      const response = await axios.get('/api/drugFormulas')
      setDrugformula(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getdrugformula()
  }, [])

  return (
    <div className='w-full px-4 sm:px-6 lg:px-8'>

      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
        <p className='text-[#192252] font-medium text-xl flex items-center gap-2 mb-2 sm:mb-0'>
          Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Prescription</span>
        </p>
        <div className='flex flex-col sm:flex-row gap-2 sm:gap-4'>
          <span className='text-customGreen bg-[#DAE8E3] py-2 px-4 rounded-lg font-medium cursor-pointer text-center' onClick={handleAdmissionRequest}>Admission Request</span>
          <span className='text-customGreen bg-[#DAE8E3] py-2 px-4 rounded-lg font-medium cursor-pointer text-center'>Book Procedure/Surgery</span>
        </div>
      </div>

      <div className='bg-white flex flex-col gap-3 p-4 rounded-[10px] mb-4'>
        <span className='text-[#100C53] font-semibold'>Near Expiry Drugs</span>
        <span className='text-customGreen font-medium'>Drug information</span>
        <div className='text-[#697696]'>
          <p className='flex gap-2'>Drug Name : <span>Paracetamol</span></p>
          <p className='flex gap-2'>Expiry Date : <span>15-02-2023</span></p>
        </div>

      </div>

      <div className='bg-white p-4 my-4 rounded-[10px]'>
        <span className='text-[#100C53] font-semibold'>Make a Prescription  Request Here</span>

        <form>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="mb-2">
              <input type='text' name="route" placeholder='Route' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>

            <div className="mb-2">
              <select name="brand" placeholder='brand' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 leading-tight focus:outline-none " >
                <option value="">Drug</option>
                {drug.map((drugs) => (
                  <option key={drugs.id} value={drugs.name}>{drugs.name} - {drugs.description}</option>
                ))}
              </select>
            </div>

            <div className="mb-2">
              <select name="formulation" placeholder='Formulation' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 leading-tight focus:outline-none " >
                <option value="">Formulation Available</option>
                {drugformula.map((formula) => (
                  <option key={formula.id} value={formula.name}>{formula.name} - {formula.description}</option>
                ))}
              </select>
            </div>

            <div className="mb-2">
              <select name="brand" placeholder='brand' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 leading-tight focus:outline-none " >
                <option value="">Brand Type</option>
                {brand.map((brands) => (
                  <option key={brands.id} value={brands.name}>{brands.name} - {brands.description}</option>
                ))}
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4'>
            <div className="mb-2">
              <input name="price" placeholder='Price : KSHS' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
            <div className="mb-2">
              <input name="quantityInStock" placeholder='Qty in Stock :' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
            <div className="mb-2">
              <input name="packSize" placeholder='Pack size :' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4'>
            <div className="mb-2">
              <input type='text' name="composition" placeholder='composition' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>

            <div className="mb-2">
              <input type='text' name="dose" placeholder='Dose' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>

            <div className="mb-2">
              <input type='text' name="doseUnit" placeholder='Dose Unit' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>

            <div className="mb-2">
              <select name="frequency" placeholder='frequency' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " >
                <option value="">frequency </option>
                <option value="disease1">frequency 1</option>
                <option value="disease2">frequency 2</option>
                <option value="disease3">frequency 3</option>
              </select>
            </div>

            <div className="mb-2">
              <select name="duration" placeholder='Duration' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " >
                <option value="">duration</option>
                <option value="disease1">duration 1</option>
                <option value="disease2">duration 2</option>
                <option value="disease3">duration 3</option>
              </select>
            </div>

            <div className="mb-2">
              <select name="days" placeholder='Days' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " >
                <option value="">days</option>
                <option value="disease1">days 1</option>
                <option value="disease2">days 2</option>
                <option value="disease3">days 3</option>
              </select>
            </div>


          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
            <div className="mb-2">
              <textarea rows="5" name="dosageInstruction" placeholder='Dosage Instruction...' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
            <div className="mb-2">
              <textarea rows="5" name="prescription Instruction" placeholder='Prescription Instruction...' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
          </div>
          <div className='flex justify-center my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Add</button>
          </div>

        </form>

      </div>

      <div className='my-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='bg-white shadow-md rounded-lg overflow-x-auto p-4'>
            <span className='text-[#100C53] font-semibold'>View Prescription Detail</span>
            <div className="max-h-[400px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] my-4">
              <div className="overflow-x-auto">
                <table className="w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-[#BED0FF] rounded-l-xl py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Drug</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Brand</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Dose</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Freq</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Duration</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Instruction</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.drug}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.brand}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.dose}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.freq}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.duration}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.instruction}</td>
                        <td className={`py-4 border-b border-gray-200 text-[10px] text-center ${data.status === 'pending' ? 'text-[#FFA620] ' : 'text-customGreen'} `}><span className={` rounded-md cursor-pointer px-4 py-2 ${data.status === 'pending' ? 'bg-[#FFEFD8] ' : 'bg-[#DBFFD8]'}`}>{data.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='bg-white shadow-md rounded-lg overflow-x-auto p-4'>
            <span className='text-[#100C53] font-semibold'>Suggestion Box</span>
            <div className="max-h-[400px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] my-4">
              <div className="overflow-x-auto">
                <table className="w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-[#BED0FF] rounded-l-xl py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Drug</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Brand</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Dose</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Freq</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Duration</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Instruction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.drug}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.brand}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.dose}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.freq}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.duration}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.instruction}</td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>


          </div>


        </div>
      </div>

      <div className='my-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div className='bg-white shadow-md rounded-lg overflow-x-auto p-4'>
            <span className='text-[#100C53] font-semibold'>View Past Prescription Detail</span>
            <div className="max-h-[400px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] my-4">
              <div className="overflow-x-auto">
                <table className="w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-[#BED0FF] rounded-l-xl py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Drug</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Brand</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Dose</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Freq</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Duration</th>
                      <th className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Instruction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.drug}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.brand}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.dose}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.freq}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.duration}</td>
                        <td className=" py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.instruction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          <div className='bg-white shadow-md rounded-lg overflow-x-auto p-4'>
            <span className='text-[#100C53] font-semibold'>Calculate Drug Dosages</span>
            <form className='my-4'>
              <div className='mb-2'>
                <input type='text' name="route" placeholder='Route' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <input name="Age" placeholder='Age' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
                <input name="Weight" placeholder='Weight' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
                <input name="Rule" placeholder='Rule' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>

              <div className='flex justify-center my-4'>
                <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Calculate</button>
              </div>
            </form>

            <span className='text-customGreen font-semibold'>Drug Information :</span>
            <div className='my-4 grid grid-cols-1 sm:grid-cols-2 gap-2'>
              <p className='text-[#697696]'>Max Daily Dosage : <span>Define Here</span></p>
              <p className='text-[#697696]'>Min Daily Dosage : <span>Define Here</span></p>
              <p className='text-[#697696]'>Drug composition : <span>Define Here</span></p>
              <p className='text-[#697696]'>Frequency : <span>Define Here</span></p>
              <p className='text-[#697696]'>Packaging : <span>Define Here</span></p>
              <p className='text-[#697696]'>Price : <span>Define Here</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Medication
