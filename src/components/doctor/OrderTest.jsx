import React from 'react'


import PatientNavigationBar from '../navbar/PatientNavigationBar'
import { IoIosArrowForward } from 'react-icons/io'
import pic from '../../assets/images/pic.svg'

const OrderTests = () => {
  const tableData = [
    {
      date: '12/12/2021',
      test: 'Test 1',
      class: 'Class 1',
      clinicalInformation: 'Clinical Information 1',
      status: 'Pending'
    },
    {
      date: '12/12/2021',
      test: 'Test 2',
      class: 'Class 2',
      clinicalInformation: 'Clinical Information 2',
      status: 'Ready'
    },
    {
      date: '12/12/2021',
      test: 'Test 3',
      class: 'Class 3',
      clinicalInformation: 'Clinical Information 3',
      status: 'Pending'
    },
    {
      date: '12/12/2021',
      test: 'Test 4',
      class: 'Class 4',
      clinicalInformation: 'Clinical Information 4',
      status: 'Ready'
    },
    {
      date: '12/12/2021',
      test: 'Test 5',
      class: 'Class 5',
      clinicalInformation: 'Clinical Information 5',
      status: 'Pending'
    },
  ]
  return (
    <div className='container mx-auto px-4'>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
        <p className='text-[#192252] font-medium text-lg sm:text-xl flex items-center gap-2'>
          Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Order Tests</span>
        </p>
      </div>

      <div className='bg-white p-4 rounded-lg shadow-md mb-4'>
        <span className='text-[#100C53] font-medium block mb-2'>Request For Lab Test</span>
        <form className='my-2 text-xs'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="mb-2">
              <select name="requestType" placeholder='Request Type' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none">
                <option value="">Request Type</option>
                <option value="requestType1">requestType 1</option>
                <option value="requestType2">requestType 2</option>
                <option value="requestType3">requestType 3</option>
              </select>
            </div>

            <div className="mb-2">
              <select name="class" placeholder='class' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none">
                <option value="">class</option>
                <option value="class1">class 1</option>
                <option value="class2">class 2</option>
                <option value="class3">class 3</option>
              </select>
            </div>

            <div className="mb-2">
              <select name="labTestRequest" placeholder='labTestRequest' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none">
                <option value="">Lab test to be request</option>
                <option value="labTestRequest1">labTestRequest 1</option>
                <option value="labTestRequest2">labTestRequest 2</option>
                <option value="labTestRequest3">labTestRequest 3</option>
              </select>
            </div>

            <div className='mb-2 flex justify-center'>
              <button type="submit" className='px-4 py-2 w-full sm:w-[90%] text-xs rounded-lg bg-customGreen text-white'>Send for Sample Collection</button>
            </div>

            <div className="mb-2 col-span-1 sm:col-span-3">
              <textarea rows="2" name="clinicalInformation" placeholder='Clinical information' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none" />
            </div>
            <div className='flex justify-center'>
              <button type="submit" className='mb-2 px-4 py-2 w-full sm:w-[90%] max-h-[45px] rounded-lg bg-customGreen text-white text-xs'>Refer Out and Print</button>
            </div>
          </div>
        </form>
      </div>

      <div className='bg-white p-4 my-4 rounded-lg shadow-md'>
        <span className='text-[#100C53] font-medium block mb-2'>Ordered Tests</span>
        <div className='overflow-x-auto py-2'>
          <div className="max-h-[400px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="sticky top-0 bg-[#BED0FF] px-2 sm:px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Date</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-2 sm:px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Test</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-2 sm:px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Class</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-2 sm:px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Clinical information</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-2 sm:px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Status</th>
                  <th className="sticky top-0 bg-[#BED0FF] px-2 sm:px-5 py-3 border-b-2 border-gray-200 text-[10px] text-[#413D80] text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data, index) => (
                  <tr key={index}>
                    <td className="px-2 sm:px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.date}</td>
                    <td className="px-2 sm:px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.test}</td>
                    <td className="px-2 sm:px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.class}</td>
                    <td className="px-2 sm:px-4 py-4 border-b border-gray-200 text-[10px] text-[#616161] text-center">{data.clinicalInformation}</td>
                    <td className='px-2 sm:px-4 py-4 border-b border-gray-200 text-[10px] text-center'>
                      <span className={`py-2 px-2 sm:px-4 ${data.status === 'Ready' ? 'bg-[#D8FFD8] text-[customGreen]' : 'text-[#E28903] bg-[#FFEFD8]'}`}>{data.status}</span>
                    </td>
                    <td className='px-2 sm:px-4 py-4 border-b border-gray-200 text-[10px] text-center'>
                      <span className={`py-2 px-2 sm:px-4 ${data.status === 'Collect sample' ? 'bg-customGreen text-white' : 'bg-white text-[#616161]'}`}>Collect Sample</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className='bg-white p-4 rounded-lg shadow-md'>
        <span className='text-[#100C53] font-medium block mb-2'>Request for Imaging Test</span>
        <form className='my-2 text-xs'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className="mb-2">
              <select name="requestType" placeholder='Request Type' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none">
                <option value="">Request Type</option>
                <option value="requestType1">requestType 1</option>
                <option value="requestType2">requestType 2</option>
                <option value="requestType3">requestType 3</option>
              </select>
            </div>

            <div className="mb-2">
              <select name="class" placeholder='class' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none">
                <option value="">class</option>
                <option value="class1">class 1</option>
                <option value="class2">class 2</option>
                <option value="class3">class 3</option>
              </select>
            </div>

            <div className="mb-2">
              <select name="labTestRequest" placeholder='labTestRequest' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none">
                <option value="">Lab test to be request</option>
                <option value="labTestRequest1">labTestRequest 1</option>
                <option value="labTestRequest2">labTestRequest 2</option>
                <option value="labTestRequest3">labTestRequest 3</option>
              </select>
            </div>

            <div className='mb-2 flex justify-center'>
              <button type="submit" className='px-4 py-2 w-full sm:w-[90%] text-xs rounded-lg bg-customGreen text-white'>Send for Sample Collection</button>
            </div>

            <div className="mb-2 col-span-1 sm:col-span-3">
              <textarea rows="2" name="clinicalInformation" placeholder='Clinical information' className="block w-full border bg-white border-[#DEDEDE] rounded-lg px-4 py-2 text-[#AEAEAE] leading-tight focus:outline-none" />
            </div>
            <div className='flex justify-center'>
              <button type="submit" className='mb-2 px-4 py-2 w-full sm:w-[90%] max-h-[45px] rounded-lg bg-customGreen text-white text-xs'>Refer Out and Print</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default OrderTests
