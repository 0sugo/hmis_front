import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";
import Swal from 'sweetalert2'
import eye from '../../../assets/images/eye.svg'

const Payroll = () => {

  const waitingReviewsData = [
    {
      No: 1,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    },
    {
      No: 2,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    },
    {
      No: 3,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    },
    {
      No: 4,
      date: '12/12/2021',
      patientName: 'Idris Miamoon',
      insurance: 'cash',
      scheme: 'Kilifi',
      createdBy: 'Nemo',
      time: '10:15 AM',
    }
  ];

  const [list, setList] = useState(waitingReviewsData);

  const handleClick  = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className='mx-auto p-4'>
      <section className="flex flex-wrap items-center justify-between gap-4">
        <h4 className='font-semibold my-4'>Payroll <span className='text-[#0E6F1E]'>> Member Salary</span></h4>
        <div className='flex items-center space-x-4'>
        <Link to='/app/addsalary' className='flex items-center font-semibold space-x-2 text-[#0E6F1E] bg-[#E7F1E9] hover:bg-[#caebd1] px-5 py-3 rounded-md'>
          <span><MdAdd /></span>
          <span>Add Salary</span>
        </Link>
        </div>
      </section>

      <section className='bg-white p-4 my-4 rounded-lg'>
        <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">ID.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Member Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Join date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Salary</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Payslip</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-3 text-sm">{data.No}</td>
                  <td className="px-6 py-3 text-sm">{data.date}</td>
                  <td className="px-6 py-3 text-sm">{data.patientName}</td>
                  <td className="px-6 py-3 text-sm">{data.insurance}</td>
                  <td className="px-6 py-3 text-sm">{data.scheme}</td>
                  <td className="px-6 py-3 text-sm">{data.createdBy}</td>
                  <td className="px-6 py-3 text-sm"><button className='bg-[#3e36b0] text-white px-5 py-1 rounded-lg hover:bg-[#292474]'>Generate</button></td>
                  <td className='py-2 px-6 flex items-center space-x-2'>
                    <Link to={`/app/updatesalary/${data.No}`}>
                      <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
                    </Link>
                    <button onClick={handleClick} className='bg-[#FFE5E9] text-[#ED021E] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}

export default Payroll
