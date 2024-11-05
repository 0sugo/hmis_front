import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdAdd } from "react-icons/md";
import Swal from 'sweetalert2'
import newPatient from '../../../assets/images/newPatient.svg'
import eye from '../../../assets/images/eye.svg'

const EmployeeManagement = () => {

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
      <div className="flex flex-wrap gap-2 items-center justify-between mb-4">
        <h3 className='text-xl text-center font-semibold text-[#192252]'>Employee Management</h3>
        <Link to='/app/addemployee' className='flex items-center font-semibold space-x-2 text-[#0E6F1E] bg-[#E7F1E9] hover:bg-[#caebd1] px-5 py-3 rounded-md'>
          <span><MdAdd /></span>
          <span>Add Employee</span>
        </Link>
      </div>

      <section className='bg-white p-4 my-4 rounded-lg'>
        <div className='overflow-x-auto rounded-lg'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">ID.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Member Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Email</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Mobile NUmber</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Join Date</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Role</th>
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
                  <td className='py-2 px-6 flex items-center space-x-2'>
                    <Link to={`/app/viewemployee/${data.No}`}>
                      <span className='bg-[#FFF2DF] text-[#FFA620] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
                    </Link>
                    <Link to={`/app/updateemployee/${data.No}`}>
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

export default EmployeeManagement
