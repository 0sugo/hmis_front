import React from 'react'
import PatientNavigationBar from './PatientNavigationBar'
import { IoIosArrowForward } from 'react-icons/io'
import profPic from '../../assets/images/pic.svg'

const AdmissionRequest = () => {
  return (

    <div className=''>
      <div className='flex justify-between items-center'>
        <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />Admission Request</span></p>
      </div>

      <div className='grid grid-cols-12 w-full bg-white p-8 rounded-[10px]'>
        <div className='flex flex-col col-span-2 items-center gap-2'>
          <img src={profPic} />
          <span className='text-[#192252] font-semibold'>Idris Maimoon</span>
        </div>

        <div className='col-span-5 w-full px-4 text-[#413D80]'>
          <p className=''>Patient Name : <span className='text-[#616161]'>Idriis Maimoon</span></p>
          <p className=''>Age: <span className='text-[#616161]'>26 Years</span></p>
          <p className=''>Gender: <span className='text-[#616161]'>Male</span></p>
          <p className=''>Occupation: <span className='text-[#616161]'>Medical Doctor</span></p>
          <p className=''>Company: <span className='text-[#616161]'>Britam</span></p>

        </div>
        <div className='col-span-5 w-full text-[#413D80]'>
          <p>Visit code : <span className='text-[#616161]'>MH-0001</span></p>
          <p>Scheme: <span className='text-[#616161]'>Kifili Country Government</span></p>
          <p>Prescription No: <span className='text-[#616161]'>MHP1-000001</span></p>
          <p>Address: <span className='text-[#616161]'>Ndovi Road, Malindi Kenya</span></p>
          <p>Prescribed by: <span className='text-[#616161]'>Dr. Yunus</span></p>

        </div>
      </div>

      <div className='bg-white p-4 my-4 rounded-[10px]'>
        <span className='text-[#100C53]'>Medical Report</span>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <label className='text-customGreen '>Chief Complaints </label>
              <input name="" placeholder='' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
            <div className="mb-2">
              <label className='text-customGreen'>History of Presenting Illness </label>
              <input name="pastMedicalHistory" placeholder='' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <input name="pastMedicalHistory" placeholder='Past Medical History' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>

            <div className="mb-2">
              <input name="expectedLengthOfStay" placeholder='Expected Length Of Stay' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="mb-2">
              <textarea rows="5" name="deathCause" placeholder='Plan of management' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>

            <div className="mb-2">
              <textarea rows="5" name="deathCause" placeholder='Reason of admission' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none " />
            </div>


          </div>
          <div className=' my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Save and Next</button>
          </div>

        </form>
      </div>


    </div>
  )
}

export default AdmissionRequest
