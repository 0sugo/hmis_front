import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import eye from '../../assets/images/eye.svg'

const ShiftManagement = () => {

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
      <h4 className='font-semibold my-4'>Shift Management</h4>

      <section className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className='mr-2'>Show:</span>
          <select
            className='px-2 py-0.5 bg-white border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] focus:ring-1'
            // value={recordsPerPage}
            // onChange={(e) => {
            //   setRecordsPerPage(parseInt(e.target.value, 10));
            //   setCurrentPage(1);
            // }}
          >
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='75'>75</option>
            <option value='100'>100</option>
          </select>
          <span className='ml-2'>Entries</span>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to='/app/assignshift' className='text-[#0E6F1E] bg-[#E7F1E9] hover:bg-[#caebd1] px-5 py-3 rounded-md font-semibold'>Assign Shift</Link>
          <Link to='/app/shifts' className='text-[#0E6F1E] bg-[#E7F1E9] hover:bg-[#caebd1] px-5 py-3 rounded-md font-semibold'>Shifts</Link>
        </div>
      </section>

      <section className='bg-white p-4 my-4 rounded-lg'>
        <div className='overflow-x-auto rounded-lg xl:max-w-[61em] 2xl:max-w-full'>
          <table className='w-full table-auto'>
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold">ID.</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Member Name</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Shift Type</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Timing</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Role</th>
                <th className="px-6 py-3 text-left text-xs font-semibold">Status</th>
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
                    <Link to={`/app/viewshift/${data.No}`}>
                      <span className='bg-[#FFF2DF] text-[#FFA620] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
                    </Link>
                    <Link to={`/app/updateshift/${data.No}`}>
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

export default ShiftManagement
