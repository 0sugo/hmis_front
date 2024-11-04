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
    <main className='bg-white text-[#f1f5f9] h-screen md:overflow-hidden relative overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center relative p-2 font-sans font-bold border-b-4 border-b-[#f1f5f9]'>
            <img src={logo} alt="Company Logo" className="h-12  w-auto mx-auto" />
            <div className='text-xl text-[#0E6F1E] rounded-full hover:bg-light-gray block md:hidden'>
              <button onClick={() => setActiveMenu(!activeMenu)}><MdOutlineCancel /></button>
            </div>
          </div>
          <nav>
            <div className='overflow-y-auto'>
              <div id='sidenavSecExample'>
                <ul className='relative px-1'>
                  <li className='relative'>
                    <Link to='/app/dashboard' className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><MdSpaceDashboard /></span>
                      <span>DashBoard</span>
                    </Link>
                  </li>
                  <li className='relative' id='sidenavXxEx3'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx3' aria-expanded='false' aria-controls='collapseSidenavXxEx3'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Admin</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx3' aria-labelledby='sidenavXxEx8' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/departments' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Departments</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/schemes' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Schemes</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/vendors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Vendors</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/accounts' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Accounts</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/hospitaldata' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Hospital Data</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/productpricelist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Product & Pricelist</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/todolist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>To Do List</Link>
                      </li>
                    </ul>
                  </li>
                    <li className='relative' id='sidenavXxEx1'>
                      <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx1' aria-expanded='false' aria-controls='collapseSidenavXxEx1'>
                        <span className='w-4 h-4 mr-3'><FaUsers /></span>
                        <span>Doctors</span>
                        <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                      </span>
                      <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx1' aria-labelledby='sidenavXxEx1' data-bs-parent='#sidenavSecExample'>
                        <li className='relative'>
                          <Link to='/app/OPDashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>OP DashBoard</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/IPDashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>IP Dashboard</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/PatientList' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patient List</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/maternity-dashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Maternity DashBoard</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/doctors-daycare' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Day Care</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/calculators' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Calculators</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/patienteducation' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patient Education</Link>
                        </li>
                        <li className='relative'>
                          <Link to='/app/guidelines' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Guidelines</Link>
                        </li>
                      </ul>
                    </li>
                  <li className='relative' id='sidenavXxEx2'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx2' aria-expanded='false' aria-controls='collapseSidenavXxEx2'>
                      <span className='w-4 h-4 mr-3'><FaBook /></span>
                      <span>Nurse</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx2' aria-labelledby='sidenavXxEx2' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/nurse-opdashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Op DashBoard</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/opnurseorders' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Op Nurse Orders</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/nurse-ipdashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Ip DashBoard</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/wardtransfer' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Ward Transfer</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/daycare' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Daycare</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/nursereports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reports</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx4'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx4' aria-expanded='false' aria-controls='collapseSidenavXxEx4'>
                      <span className='w-4 h-4 mr-3'><FaUserInjured /></span>
                      <span>Labaratory</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx4' aria-labelledby='sidenavXxEx4' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/phleobotomy' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Phleobotomy</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/samples' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Samples</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/storage' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Storage</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/worklist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Worklist</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/labinventory' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Lab Inventory</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/reagents' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reagents</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/instrumentcalling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Instrument Callin. & Maint.</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/packageshipment' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Package & Shipment</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/documents' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Documents</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/reports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reports</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/labmanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Lab Management & Settings</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx5'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx5' aria-expanded='false' aria-controls='collapseSidenavXxEx5'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Imaging</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx5' aria-labelledby='sidenavXxEx5' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/requests' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Requests</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/patient' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patient</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/imagingprocess' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Imaging Process</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/imagingreports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reports</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/storemanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Store Management</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx6'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx6' aria-expanded='false' aria-controls='collapseSidenavXxEx6'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Pharmacy</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx6' aria-labelledby='sidenavXxEx6' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/walkin-prescription' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Walk-In Prescription</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/op-prescription' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>OP Prescriptions</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/ip-prescription' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>IP Prescriptions</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/pharmacystoremanagemet' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Store Management</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx7'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx7' aria-expanded='false' aria-controls='collapseSidenavXxEx7'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Dental</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx7' aria-labelledby='sidenavXxEx7' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Dental</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx8'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx8' aria-expanded='false' aria-controls='collapseSidenavXxEx8'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Dialysis</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx8' aria-labelledby='sidenavXxEx8' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Dialysis</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx9'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx9' aria-expanded='false' aria-controls='collapseSidenavXxEx9'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Front Office</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx9' aria-labelledby='sidenavXxEx9' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/fo-dashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Fo DashBoard</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/addpatient' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Patient</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/patientregistration' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patent Registration</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/searchpatient' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Search Patient</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx10'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx10' aria-expanded='false' aria-controls='collapseSidenavXxEx10'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Ophtalmology</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx10' aria-labelledby='sidenavXxEx10' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Ophtalmology</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx11'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx11' aria-expanded='false' aria-controls='collapseSidenavXxEx11'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Special clinics</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx11' aria-labelledby='sidenavXxEx11' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Special clinics</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx12'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx12' aria-expanded='false' aria-controls='collapseSidenavXxEx12'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Administration</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx12' aria-labelledby='sidenavXxEx12' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Administration</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx13'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx13' aria-expanded='false' aria-controls='collapseSidenavXxEx13'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Procurement</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx13' aria-labelledby='sidenavXxEx13' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/requests' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Requests</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/purchaseorder' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Purchased Order</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/pricelist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Price List</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/vendorlist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Vendor List</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/procurementanalysis' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Procurement Analysis</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/addnewproduct' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add New Product</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/supplier' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Supplier</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/notes' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Notes</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx14'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx14' aria-expanded='false' aria-controls='collapseSidenavXxEx14'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>HR</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx14' aria-labelledby='sidenavXxEx14' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/shiftmanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Shift  Management</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/payroll' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Payroll</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/leavemanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Leave Management</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/employeemanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Employee Management</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/incidentreporting' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Incident Reporting</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/adavancesalary' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Advace Salary/Loan Management</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/timeattendance' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Time and Attendance</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/recruitment' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Recruitment</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/reportinganalysis' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reporting and Analysis</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/memos' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Memos</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/departmentalheads' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Departmental Heads</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx15'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx15' aria-expanded='false' aria-controls='collapseSidenavXxEx15'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Inventory</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx15' aria-labelledby='sidenavXxEx15' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/procurement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Procurement</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/suppliermanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Supplier Management</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/procurementanalysis' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Procurement Analysis</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/strategicpurchasing' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Strategic Purchasing</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative' id='sidenavXxEx16'>
                    <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx16' aria-expanded='false' aria-controls='collapseSidenavXxEx16'>
                      <span className='w-4 h-4 mr-3'><FaUserMd /></span>
                      <span>Billing/Acounting</span>
                      <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
                    </span>
                    <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx16' aria-labelledby='sidenavXxEx16' data-bs-parent='#sidenavSecExample'>
                      <li className='relative'>
                        <Link to='/app/billing-dashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Billing DashBoard</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/creditpatientbilling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Credit Patient Billing</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/cashbilling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Cash Billing</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/claimmanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Claim Management</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/inpatientbilling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Inpatient Billing</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/approvaldesk' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Approval Desk</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/billingreports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Billing Reports</Link>
                      </li>
                      <li className='relative'>
                        <Link to='/app/billquote' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Bill Quote</Link>
                      </li>
                    </ul>
                  </li>
                  <li className='relative'>
                    <Link to='#' className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
                      <span className='w-4 h-4 mr-3'><FaMoneyCheck /></span>
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
