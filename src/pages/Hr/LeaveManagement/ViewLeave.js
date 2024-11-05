import React from 'react'
import pic from '../../../assets/images/pic.svg'
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ViewLeave = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Leaves <span className='text-[#0E6F1E]'>> Idris   Maimoon </span></h4>

      <section className='flex flex-wrap gap-4'>
        <div className='w-full lg:w-1/6 xl:w-1/4'>
          <div className='bg-white p-4 rounded-lg mb-4'>
            <div>
              <div className='flex items-center justify-center'>
                <img src={pic} className="w-36 h-36 rounded-full" alt="user" />
              </div>
              <div className='text-center my-3'>
                <h5 className="text-[#192252] font-semibold">Idris Maimoon</h5>
                <p className='text-[#0E6F1E] font-semibold'>Present</p>
              </div>
            </div>
            <div className='space-y-4'>
              <p >Lorem ipsum dolor sit, amet conetur adipisicing elit. Desnt dignissimos eligendi consntur illum tenetur</p>
              <div className='flex items-center justify-between'>
                <h5 className='font-semibold'>Gender</h5>
                <p>Male</p>
              </div>
              <div className='flex items-center justify-between'>
                <h5 className='font-semibold'>Designation</h5>
                <p>Staff member</p>
              </div>
            </div>
          </div>

          <div className='bg-white p-4 rounded-lg space-y-3'>
            <h5>Address</h5>
            <p className='flex items-center'><span><MdLocationOn /></span>&nbsp;San Fransisco, USA</p>
            <p className='flex items-center'><span><FaPhoneAlt /></span>&nbsp;+1 242 234 2343</p>
            <p className='flex items-center'><span><MdEmail /></span>&nbsp;songei@gmail.com</p>
          </div>
        </div>

        <div className='bg-white p-4 rounded-lg w-full lg:w-3/4 xl:w-2/3'>
          <h5 className='text-[#0E6F1E] font-semibold'>Leave Detail</h5>
          <div className='my-4 space-y-2 w-full lg:w-1/4 xl:w-full'>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Leave Type:</h5>
              <p className='float-left'>Casual Leave</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>No. of Days:</h5>
              <p>10:00am - 07:00pm</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Paid Leaves:</h5>
              <p>1 day</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>From Date:</h5>
              <p>07 March 2024</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>To Date:</h5>
              <p>02 April 2024</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Reason</h5>
              <p>Reason here</p>
            </div>
          </div>

          <hr />

          <div className='my-4'>
            <h5 className='text-[#0E6F1E] font-semibold mb-2'>Leave Approval</h5>
            <div className="flex items-center justify-between border rounded-lg p-2">
              <h6>Dr. Patel</h6>
              <p>Approved</p>
            </div>
            <div className="flex items-center justify-between border rounded-lg p-2">
              <h6>Musafiq</h6>
              <div className='flex items-center space-x-4'>
                <button type='submit' className='bg-[#E72424] text-white px-5 py-1 w-full hover:bg-[#a51d1d] rounded-lg'>Reject</button>
                <button type='submit' className='bg-[#0E6F1E] text-white px-5 py-1 w-full hover:bg-[#22d33f] rounded-lg'>Approve</button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ViewLeave
