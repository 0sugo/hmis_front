import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCancel, MdSpaceDashboard, MdOutlineKeyboardArrowDown, MdMedication } from 'react-icons/md';
import { FaUsers,FaMoneyCheck,FaPrescriptionBottle,FaUserInjured, FaUserMd, FaBook, FaMoneyBillWaveAlt } from 'react-icons/fa';
import { useStateContext } from '../Context/ContextProvider';
import 'tw-elements';
import logo from '../../assets/images/Logo.svg';

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  // getting current user
  // const currentUser = window.localStorage.getItem('token');
  // const user = JSON.parse(currentUser).data.user_data;

  return (
    <main className='bg-[#0c1427] text-white h-screen md:overflow-hidden relative overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center relative p-2 font-sans font-bold border-b border-b-[#7987a1]'>
            <img src={logo} alt="Company Logo" className="h-12 w-auto mx-auto" />
            <div className='text-xl rounded-full hover:bg-light-gray block md:hidden'>
              <button onClick={() => setActiveMenu(!activeMenu)}><MdOutlineCancel /></button>
            </div>
          </div>
          <nav>
            <div className='overflow-y-auto'>
              <div id='sidenavSecExample'>
                <ul className='relative px-1'>
                  <li className='relative'>
                    <Link to='/app/dashboard' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><MdSpaceDashboard /></span>
                      <span>DashBoard</span>
                    </Link>
                  </li>
                    <li className='relative' id='sidenavXxEx1'>
                      <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx1' aria-expanded='false' aria-controls='collapseSidenavXxEx1'>
                        <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUsers /></span>
                        <span>Doctors</span>
                        <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                      </span>
                      <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx1' aria-labelledby='sidenavXxEx1' data-bs-parent='#sidenavSecExample'>
                        <li className='relative'>
                          <Link to='/app/users' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patient List</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/adduser' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add User</Link>
                        </li>
                      </ul>
                    </li>
                  <li className='relative' id='sidenavXxEx2'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx2' aria-expanded='false' aria-controls='collapseSidenavXxEx2'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaBook /></span>
                      <span>Nurse</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx2' aria-labelledby='sidenavXxEx2' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/appointments' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Appointment</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx4'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx4' aria-expanded='false' aria-controls='collapseSidenavXxEx4'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserInjured /></span>
                      <span>Labaratory</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx4' aria-labelledby='sidenavXxEx4' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/patients' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Patients</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/addpatient' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Patient</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx5'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx5' aria-expanded='false' aria-controls='collapseSidenavXxEx5'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Imaging</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx5' aria-labelledby='sidenavXxEx5' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx6'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx6' aria-expanded='false' aria-controls='collapseSidenavXxEx6'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Pharmacy</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx6' aria-labelledby='sidenavXxEx6' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx7'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx7' aria-expanded='false' aria-controls='collapseSidenavXxEx7'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Dental</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx7' aria-labelledby='sidenavXxEx7' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx8'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx8' aria-expanded='false' aria-controls='collapseSidenavXxEx8'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Dialysis</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx8' aria-labelledby='sidenavXxEx8' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx9'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx9' aria-expanded='false' aria-controls='collapseSidenavXxEx9'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Front Office</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx9' aria-labelledby='sidenavXxEx9' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx10'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx10' aria-expanded='false' aria-controls='collapseSidenavXxEx10'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Ophtalmology</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx10' aria-labelledby='sidenavXxEx10' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx11'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx11' aria-expanded='false' aria-controls='collapseSidenavXxEx11'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Special clinics</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx11' aria-labelledby='sidenavXxEx11' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx12'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx12' aria-expanded='false' aria-controls='collapseSidenavXxEx12'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Administration</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx12' aria-labelledby='sidenavXxEx12' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx14'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx13' aria-expanded='false' aria-controls='collapseSidenavXxEx13'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Procurement</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx14' aria-labelledby='sidenavXxEx14' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx15'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx14' aria-expanded='false' aria-controls='collapseSidenavXxEx14'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>HR</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx15' aria-labelledby='sidenavXxEx15' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx16'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx15' aria-expanded='false' aria-controls='collapseSidenavXxEx15'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Inventory</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx16' aria-labelledby='sidenavXxEx16' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx17'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx16' aria-expanded='false' aria-controls='collapseSidenavXxEx16'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaUserMd /></span>
                      <span>Billing/Acounting</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx17' aria-labelledby='sidenavXxEx17' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/doctors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>All Doctors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adddoctor' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Doctor</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative'>
                    <Link to='/app/payments' className='flex items-center text-sm py-4 px-6 h-12 overflow-hidden whitespace-nowrap text-[#7987a1] hover:text-[#007CFF] focus:text-[#007CFF] focus:border-l-2 focus:border-l-[#007CFF] transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3 text-[#007CFF]'><FaMoneyCheck /></span>
                      <span>Settings</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      )}
    </main>
  );
};

export default SideBar;
