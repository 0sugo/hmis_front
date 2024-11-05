import React from 'react'
import pic from '../../assets/images/pic.svg'
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ViewShift = () => {
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Shift Management <span className='text-[#0E6F1E]'>> Idris   Maimoon > View</span></h4>

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
          <h5 className='text-[#0E6F1E] font-semibold'>Shift Details</h5>
          <div className='my-4 space-y-2 w-full lg:w-1/4 xl:w-full'>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Shift Type:</h5>
              <p className='float-left'>Morning Shift</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Timing:</h5>
              <p>10:00am - 07:00pm</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Paid Leaves:</h5>
              <p>1 in a month</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Break Time:</h5>
              <p>1 Hr</p>
            </div>
            <div className='flex items-center justify-between'>
              <h5 className='font-semibold text-[#192252]'>Working Days:</h5>
              <p>5</p>
            </div>
          </div>

          <div className='flex flex-wrap gap-3 items-center my-4'>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>M</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>T</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>W</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>T</h5>
            <h5 className='bg-[#0E6F1E] text-white px-4 py-2 rounded-md'>F</h5>
            <h5 className='border border-[#0E6F1E] text-[#0E6F1E] px-4 py-2 rounded-md'>S</h5>
            <h5 className='border border-[#0E6F1E] text-[#0E6F1E] px-4 py-2 rounded-md'>S</h5>
          </div>

          <hr />

          <div className='my-4'>
            <h5 className='text-[#0E6F1E] font-semibold mb-2'>Privacy Policies</h5>
            <div className='space-y-2'>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas blanditiis suscipit neque 
                consectetur tempora dolor sapiente nihil explicabo minima laudantium ducimus, ab repudiandae 
                nisi ipsam voluptate quae ullam tenetur nulla.
              </p>
              <ul className='list-disc font-light ml-8'>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi nihil</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi nihil</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est excepturi nihil</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ViewShift
