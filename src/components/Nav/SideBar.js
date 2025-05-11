// import React, { useRef, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineCancel, MdOutlineKeyboardArrowDown } from 'react-icons/md';
// import { FaUser, FaUserMd } from 'react-icons/fa';
// import { RiHomeOfficeFill } from "react-icons/ri";
// import { useStateContext } from '../Context/ContextProvider';
// import 'tw-elements';
// import logo from '../../assets/images/Logo.svg';
// // import dashboard from '../../assets/images/doctor.svg'
// import nurse from '../../assets/images/nurse.svg';
// import lab from '../../assets/images/lab.svg';
// import imaging from '../../assets/images/imaging.svg';
// import pharmacy from '../../assets/images/pharmacy.svg';
// import dental from '../../assets/images/dental.svg';
// import dialysis from '../../assets/images/dialysis.svg';
// import ophthalmology from '../../assets/images/ophthalmology.svg';
// import specialClinics from '../../assets/images/specialClinics.svg';
// import administration from '../../assets/images/administration.svg';
// import procurement from '../../assets/images/procurement.svg';
// import hr from '../../assets/images/hr.svg';
// import inventory from '../../assets/images/inventory.svg';
// import billing from '../../assets/images/billing.svg';
// import Settings from '../../assets/images/settings.svg';

// const SideBar = () => {
//   const { activeMenu, setActiveMenu } = useStateContext();

//   const sidebarRef = useRef(null);

//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // Update screen size
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Close sidebar when clicking outside of it on mobile
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setActiveMenu(false);
//       }
//     };

//     if (isMobile && activeMenu) {
//       document.addEventListener('mousedown', handleClickOutside);
//     } else {
//       document.removeEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [activeMenu, isMobile, setActiveMenu]);

//   // getting current user
//   // const currentUser = window.localStorage.getItem('token');
//   // const user = JSON.parse(currentUser).data.user_data;

//   return (
//     <main ref={sidebarRef} className='bg-white text-[#f1f5f9] h-screen md:overflow-hidden relative overflow-auto md:hover:overflow-auto pb-10 z-10'>
//       {activeMenu && (
//         <>
//           <div className='flex justify-between items-center relative p-2 font-sans font-bold border-b-4 border-b-[#f1f5f9]'>
//             <img src={logo} alt="Company Logo" className="h-12  w-auto mx-auto" />
//             <div className='text-xl text-[#0E6F1E] rounded-full hover:bg-light-gray block md:hidden'>
//               <button onClick={() => setActiveMenu(!activeMenu)}><MdOutlineCancel /></button>
//             </div>
//           </div>
//           <nav>
//             <div className='overflow-y-auto'>
//               <div id='sidenavSecExample'>
//                 <ul className='relative px-1'>
//                   <li className='relative'>
//                     <Link to='/app/dashboard' className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
//                       <span className='w-4 h-4 mr-3'><img src={Settings} alt="dashboard-icon" /></span>
//                       <span>DashBoard</span>
//                     </Link>
//                   </li>
//                   <li className='relative' id='sidenavXxEx3'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx3' aria-expanded='false' aria-controls='collapseSidenavXxEx3'>
//                       <span className='w-4 h-4 mr-3'><FaUser /></span>
//                       <span>Admin</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx3' aria-labelledby='sidenavXxEx8' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/departments' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Departments</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/schemes' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Schemes</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/employees' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Employees</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/clinic' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Clinic</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/payments' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Payments</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/vendors' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Vendors</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/accounts' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Accounts</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/hospitaldata' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Hospital Data</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/productpricelist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Product & Pricelist</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/todolist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>To Do List</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx1'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx1' aria-expanded='false' aria-controls='collapseSidenavXxEx1'>
//                       <span className='w-4 h-4 mr-3'><FaUserMd /></span>
//                       <span>Doctors</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx1' aria-labelledby='sidenavXxEx1' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/OPDashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>OP DashBoard</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/IPDashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>IP Dashboard</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/maternity-dashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Maternity DashBoard</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/PatientList' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patient List</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/doctors-daycare' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Day Care</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/calculators' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Calculators</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/patienteducation' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patient Education</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/guidelines' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Guidelines</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx2'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx2' aria-expanded='false' aria-controls='collapseSidenavXxEx2'>
//                       <span className='w-4 h-4 mr-3'><img src={nurse} alt="nurse-icon" /></span>
//                       <span>Nurse</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx2' aria-labelledby='sidenavXxEx2' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/nurse-opdashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Op DashBoard</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/opnurseorders' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Op Nurse Orders</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/nurse-ipdashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Ip DashBoard</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/wardtransfer' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Ward Transfer</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/daycare' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Daycare</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/nursereports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reports</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx4'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx4' aria-expanded='false' aria-controls='collapseSidenavXxEx4'>
//                       <span className='w-4 h-4 mr-3'><img src={lab} alt="lab-icon" /></span>
//                       <span>Labaratory</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx4' aria-labelledby='sidenavXxEx4' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/phleobotomy' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Phleobotomy</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/samples' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Samples</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/storage' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Storage</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/worklist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Worklist</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/labtest' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Lab Test</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/labrequests' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Requests</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/instrumentcalling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Instrument Callin. & Maint.</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/packageshipment' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Package & Shipment</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/orders' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Orders</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/reports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reports</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/labmanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Lab Management & Settings</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx5'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx5' aria-expanded='false' aria-controls='collapseSidenavXxEx5'>
//                       <span className='w-4 h-4 mr-3'><img src={imaging} alt="imaging-icon" /></span>
//                       <span>Imaging</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx5' aria-labelledby='sidenavXxEx5' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/requests' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Requests</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/patient' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patient</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/imagingprocess' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Imaging Process</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/imagingreports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reports</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/storemanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Store Management</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx6'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx6' aria-expanded='false' aria-controls='collapseSidenavXxEx6'>
//                       <span className='w-4 h-4 mr-3'><img src={pharmacy} alt="pharmacy-icon" /></span>
//                       <span>Pharmacy</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx6' aria-labelledby='sidenavXxEx6' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/opvisit' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Op Visit</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/walkin-prescription' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Walk-In Prescription</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/op-prescription' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>OP Prescriptions</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/ip-prescription' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>IP Prescriptions</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/pharmacystoremanagemet' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Store Management</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx7'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx7' aria-expanded='false' aria-controls='collapseSidenavXxEx7'>
//                       <span className='w-4 h-4 mr-3'><img src={dental} alt="dental-icon" /></span>
//                       <span>Dental</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx7' aria-labelledby='sidenavXxEx7' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Dental</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx8'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx8' aria-expanded='false' aria-controls='collapseSidenavXxEx8'>
//                       <span className='w-4 h-4 mr-3'><img src={dialysis} alt="dialysis-icon" /></span>
//                       <span>Dialysis</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx8' aria-labelledby='sidenavXxEx8' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Dialysis</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx9'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx9' aria-expanded='false' aria-controls='collapseSidenavXxEx9'>
//                       <span className='w-5 h-5 mr-2'><RiHomeOfficeFill /></span>
//                       <span>Front Office</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx9' aria-labelledby='sidenavXxEx9' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/fo-dashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>DashBoard</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/addnewpatient' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add Patient</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/patientregistration' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Patent Registration</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/listemergencyvisit' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Emergency Visit</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx10'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx10' aria-expanded='false' aria-controls='collapseSidenavXxEx10'>
//                       <span className='w-4 h-4 mr-3'><img src={ophthalmology} alt="ophthalomology-icon" /></span>
//                       <span>Ophtalmology</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx10' aria-labelledby='sidenavXxEx10' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Ophtalmology</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx11'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx11' aria-expanded='false' aria-controls='collapseSidenavXxEx11'>
//                       <span className='w-4 h-4 mr-3'><img src={specialClinics} alt="specialclinic-icon" /></span>
//                       <span>Special clinics</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx11' aria-labelledby='sidenavXxEx11' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Special clinics</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx12'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx12' aria-expanded='false' aria-controls='collapseSidenavXxEx12'>
//                       <span className='w-4 h-4 mr-3'><img src={administration} alt="administration-icon" /></span>
//                       <span>Administration</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx12' aria-labelledby='sidenavXxEx12' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='#' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Administration</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx13'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx13' aria-expanded='false' aria-controls='collapseSidenavXxEx13'>
//                       <span className='w-4 h-4 mr-3'><img src={procurement} alt="procurement-icon" /></span>
//                       <span>Procurement</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx13' aria-labelledby='sidenavXxEx13' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/procurementrequests' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Requests</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/purchaseorder' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Purchased Order</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/pricelist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Price List</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/vendorlist' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Vendor List</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/procurementanalysis' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Procurement Analysis</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/addnewproduct' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Add New Product</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/supplier' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Supplier</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/notes' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Notes</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className='relative' id='sidenavXxEx14'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx14' aria-expanded='false' aria-controls='collapseSidenavXxEx14'>
//                       <span className='w-4 h-4 mr-3'><img src={hr} alt="hr-icon" /></span>
//                       <span>HR</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx14' aria-labelledby='sidenavXxEx14' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/shiftmanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Shift  Management</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/payroll' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Payroll</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/leavemanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Leave Management</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/employeemanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Employee Management</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/incidentreporting' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Incident Reporting</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/adavancesalary' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Advace Salary/Loan Management</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/timeattendance' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Time and Attendance</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/recruitment' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Recruitment</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/reportinganalysis' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Reporting and Analysis</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/memos' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Memos</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/departmentalheads' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Departmental Heads</Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className='relative' id='sidenavXxEx15'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx15' aria-expanded='false' aria-controls='collapseSidenavXxEx15'>
//                       <span className='w-4 h-4 mr-3'><img src={inventory} alt="inventory-icon" /></span>
//                       <span>Inventory</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx15' aria-labelledby='sidenavXxEx15' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/procurement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Procurement</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/suppliermanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Supplier Management</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/procurementanalysis' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Procurement Analysis</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/strategicpurchasing' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Strategic Purchasing</Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className='relative' id='sidenavXxEx16'>
//                     <span className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out cursor-pointer' data-mdb-ripple='true' data-mdb-ripple-color='primary' data-bs-toggle='collapse' data-bs-target='#collapseSidenavXxEx16' aria-expanded='false' aria-controls='collapseSidenavXxEx16'>
//                       <span className='w-4 h-4 mr-3'><img src={billing} alt="billing-icon" /></span>
//                       <span>Billing/Acounting</span>
//                       <span className='w-4 h-4 ml-auto text-xl'><MdOutlineKeyboardArrowDown /></span>
//                     </span>
//                     <ul className='relative accordion-collapse collapse' id='collapseSidenavXxEx16' aria-labelledby='sidenavXxEx16' data-bs-parent='#sidenavSecExample'>
//                       <li className='relative'>
//                         <Link to='/app/billing-dashboard' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Billing DashBoard</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/creditpatientbilling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Credit Patient Billing</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/cashbilling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Cash Billing</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/claimmanagement' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Claim Management</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/inpatientbilling' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Inpatient Billing</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/approvaldesk' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Approval Desk</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/billingreports' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Billing Reports</Link>
//                       </li>
//                       <li className='relative'>
//                         <Link to='/app/billquote' className='flex items-center text-xs py-4 pl-12 pr-6 h-6 overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>Bill Quote</Link>
//                       </li>
//                     </ul>
//                   </li>

//                   <li className='relative'>
//                     <Link to='#' className='flex items-center text-sm py-4 px-6 h-12 rounded-lg overflow-hidden whitespace-nowrap text-[#7987a1] hover:bg-[#0E6F1E] hover:text-white transition duration-300 ease-in-out' data-mdb-ripple='true' data-mdb-ripple-color='primary'>
//                       <span className='w-4 h-4 mr-3'><img src={Settings} alt="settings-icon" /></span>
//                       <span>Settings</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </>
//       )}
//     </main>
//   );
// };

// export default SideBar;
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineCancel, MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FaUser, FaUserMd } from 'react-icons/fa';
import { RiHomeOfficeFill } from "react-icons/ri";
import { useStateContext } from '../Context/ContextProvider';
import logo from '../../assets/images/Logo.svg';
import nurse from '../../assets/images/nurse.svg';
import lab from '../../assets/images/lab.svg';
import imaging from '../../assets/images/imaging.svg';
import pharmacy from '../../assets/images/pharmacy.svg';
import dental from '../../assets/images/dental.svg';
import dialysis from '../../assets/images/dialysis.svg';
import ophthalmology from '../../assets/images/ophthalmology.svg';
import specialClinics from '../../assets/images/specialClinics.svg';
import administration from '../../assets/images/administration.svg';
import procurement from '../../assets/images/procurement.svg';
import hr from '../../assets/images/hr.svg';
import inventory from '../../assets/images/inventory.svg';
import billing from '../../assets/images/billing.svg';
import Settings from '../../assets/images/settings.svg';

const SideBar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const sidebarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openMenus, setOpenMenus] = useState({});

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle click outside to close sidebar on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setActiveMenu(false);
      }
    };

    if (isMobile && activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeMenu, isMobile, setActiveMenu]);

  // Toggle submenu
  const toggleMenu = (menuId) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menuId]: !prev[menuId],
    }));
  };

  return (
    <div
      ref={sidebarRef}
      className={`fixed md:static inset-y-0 left-0 z-50 bg-white shadow-lg transition-transform duration-300 ease-in-out 
        ${activeMenu ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 ${isMobile ? 'w-64' : 'w-62'} h-screen overflow-y-auto`}
    >
      <div className="flex justify-between items-center p-4 border-b-4 border-gray-100">
        <img src={logo} alt="Company Logo" className="h-12 w-auto mx-auto md:mx-0" />
        <button
          onClick={() => setActiveMenu(false)}
          className="md:hidden text-2xl text-green-700 hover:bg-gray-100 p-2 rounded-full"
        >
          <MdOutlineCancel />
        </button>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/app/dashboard"
              className="flex items-center p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={Settings} alt="dashboard-icon" className="w-5 h-5 mr-3" />
              <span>Dashboard</span>
            </Link>
          </li>

          {/* Admin Menu */}
          <li>
            <button
              onClick={() => toggleMenu('admin')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <FaUser className="w-5 h-5 mr-3" />
              <span>Admin</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.admin ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.admin ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/departments', label: 'Departments' },
                { to: '/app/schemes', label: 'Schemes' },
                { to: '/app/employees', label: 'Employees' },
                { to: '/app/clinic', label: 'Clinic' },
                { to: '/app/payments', label: 'Payments' },
                { to: '/app/vendors', label: 'Vendors' },
                { to: '/app/accounts', label: 'Accounts' },
                { to: '/app/hospitaldata', label: 'Hospital Data' },
                { to: '/app/productpricelist', label: 'Product & Pricelist' },
                { to: '/app/todolist', label: 'To Do List' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Doctors Menu */}
          <li>
            <button
              onClick={() => toggleMenu('doctors')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <FaUserMd className="w-5 h-5 mr-3" />
              <span>Doctors</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.doctors ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.doctors ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/OPDashboard', label: 'OP Dashboard' },
                { to: '/app/IPDashboard', label: 'IP Dashboard' },
                { to: '/app/maternity-dashboard', label: 'Maternity Dashboard' },
                { to: '/app/PatientList', label: 'Patient List' },
                { to: '/app/doctors-daycare', label: 'Day Care' },
                { to: '/app/calculators', label: 'Calculators' },
                { to: '/app/patienteducation', label: 'Patient Education' },
                { to: '/app/guidelines', label: 'Guidelines' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Nurse Menu */}
          <li>
            <button
              onClick={() => toggleMenu('nurse')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={nurse} alt="nurse-icon" className="w-5 h-5 mr-3" />
              <span>Nurse</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.nurse ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.nurse ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/nurse-opdashboard', label: 'OP Dashboard' },
                { to: '/app/opnurseorders', label: 'OP Nurse Orders' },
                { to: '/app/nurse-ipdashboard', label: 'IP Dashboard' },
                { to: '/app/wardtransfer', label: 'Ward Transfer' },
                { to: '/app/daycare', label: 'Daycare' },
                { to: '/app/nursereports', label: 'Reports' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Laboratory Menu */}
          <li>
            <button
              onClick={() => toggleMenu('laboratory')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={lab} alt="lab-icon" className="w-5 h-5 mr-3" />
              <span>Laboratory</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.laboratory ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.laboratory ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/phleobotomy', label: 'Phlebotomy' },
                { to: '/app/samples', label: 'Samples' },
                { to: '/app/storage', label: 'Storage' },
                { to: '/app/worklist', label: 'Worklist' },
                { to: '/app/labtest', label: 'Lab Test' },
                { to: '/app/labrequests', label: 'Requests' },
                { to: '/app/instrumentcalling', label: 'Instrument Calling & Maintenance' },
                { to: '/app/packageshipment', label: 'Package & Shipment' },
                { to: '/app/orders', label: 'Orders' },
                { to: '/app/reports', label: 'Reports' },
                { to: '/app/labmanagement', label: 'Lab Management & Settings' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Imaging Menu */}
          <li>
            <button
              onClick={() => toggleMenu('imaging')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={imaging} alt="imaging-icon" className="w-5 h-5 mr-3" />
              <span>Imaging</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.imaging ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.imaging ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/requests', label: 'Requests' },
                { to: '/app/patient', label: 'Patient' },
                { to: '/app/imagingprocess', label: 'Imaging Process' },
                { to: '/app/imagingreports', label: 'Reports' },
                { to: '/app/storemanagement', label: 'Store Management' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Pharmacy Menu */}
          <li>
            <button
              onClick={() => toggleMenu('pharmacy')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={pharmacy} alt="pharmacy-icon" className="w-5 h-5 mr-3" />
              <span>Pharmacy</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.pharmacy ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.pharmacy ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/opvisit', label: 'OP Visit' },
                { to: '/app/walkin-prescription', label: 'Walk-In Prescription' },
                { to: '/app/op-prescription', label: 'OP Prescriptions' },
                { to: '/app/ip-prescription', label: 'IP Prescriptions' },
                { to: '/app/pharmacystoremanagemet', label: 'Store Management' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Dental Menu */}
          <li>
            <button
              onClick={() => toggleMenu('dental')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={dental} alt="dental-icon" className="w-5 h-5 mr-3" />
              <span>Dental</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.dental ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.dental ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                >
                  Dental
                </Link>
              </li>
            </ul>
          </li>

          {/* Dialysis Menu */}
          <li>
            <button
              onClick={() => toggleMenu('dialysis')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={dialysis} alt="dialysis-icon" className="w-5 h-5 mr-3" />
              <span>Dialysis</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.dialysis ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.dialysis ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                >
                  Dialysis
                </Link>
              </li>
            </ul>
          </li>

          {/* Front Office Menu */}
          <li>
            <button
              onClick={() => toggleMenu('frontOffice')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <RiHomeOfficeFill className="w-5 h-5 mr-3" />
              <span>Front Office</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.frontOffice ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.frontOffice ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/fo-dashboard', label: 'Dashboard' },
                { to: '/app/addnewpatient', label: 'Add Patient' },
                { to: '/app/patientregistration', label: 'Patient Registration' },
                { to: '/app/listemergencyvisit', label: 'Emergency Visit' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Ophthalmology Menu */}
          <li>
            <button
              onClick={() => toggleMenu('ophthalmology')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={ophthalmology} alt="ophthalmology-icon" className="w-5 h-5 mr-3" />
              <span>Ophthalmology</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.ophthalmology ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.ophthalmology ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                >
                  Ophthalmology
                </Link>
              </li>
            </ul>
          </li>

          {/* Special Clinics Menu */}
          <li>
            <button
              onClick={() => toggleMenu('specialClinics')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={specialClinics} alt="specialclinics-icon" className="w-5 h-5 mr-3" />
              <span>Special Clinics</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.specialClinics ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.specialClinics ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                >
                  Special Clinics
                </Link>
              </li>
            </ul>
          </li>

          {/* Administration Menu */}
          <li>
            <button
              onClick={() => toggleMenu('administration')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={administration} alt="administration-icon" className="w-5 h-5 mr-3" />
              <span>Administration</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.administration ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.administration ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <li>
                <Link
                  to="#"
                  className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                >
                  Administration
                </Link>
              </li>
            </ul>
          </li>

          {/* Procurement Menu */}
          <li>
            <button
              onClick={() => toggleMenu('procurement')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={procurement} alt="procurement-icon" className="w-5 h-5 mr-3" />
              <span>Procurement</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.procurement ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.procurement ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/procurementrequests', label: 'Requests' },
                { to: '/app/purchaseorder', label: 'Purchased Order' },
                { to: '/app/pricelist', label: 'Price List' },
                { to: '/app/vendorlist', label: 'Vendor List' },
                { to: '/app/procurementanalysis', label: 'Procurement Analysis' },
                { to: '/app/addnewproduct', label: 'Add New Product' },
                { to: '/app/supplier', label: 'Supplier' },
                { to: '/app/notes', label: 'Notes' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* HR Menu */}
          <li>
            <button
              onClick={() => toggleMenu('hr')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={hr} alt="hr-icon" className="w-5 h-5 mr-3" />
              <span>HR</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.hr ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.hr ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/shiftmanagement', label: 'Shift Management' },
                { to: '/app/payroll', label: 'Payroll' },
                { to: '/app/leavemanagement', label: 'Leave Management' },
                { to: '/app/employeemanagement', label: 'Employee Management' },
                { to: '/app/incidentreporting', label: 'Incident Reporting' },
                { to: '/app/adavancesalary', label: 'Advance Salary/Loan Management' },
                { to: '/app/timeattendance', label: 'Time and Attendance' },
                { to: '/app/recruitment', label: 'Recruitment' },
                { to: '/app/reportinganalysis', label: 'Reporting and Analysis' },
                { to: '/app/memos', label: 'Memos' },
                { to: '/app/departmentalheads', label: 'Departmental Heads' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Inventory Menu */}
          <li>
            <button
              onClick={() => toggleMenu('inventory')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={inventory} alt="inventory-icon" className="w-5 h-5 mr-3" />
              <span>Inventory</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.inventory ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.inventory ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/procurement', label: 'Procurement' },
                { to: '/app/suppliermanagement', label: 'Supplier Management' },
                { to: '/app/procurementanalysis', label: 'Procurement Analysis' },
                { to: '/app/strategicpurchasing', label: 'Strategic Purchasing' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          {/* Billing/Accounting Menu */}
          <li>
            <button
              onClick={() => toggleMenu('billing')}
              className="flex items-center w-full p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={billing} alt="billing-icon" className="w-5 h-5 mr-3" />
              <span>Billing/Accounting</span>
              <MdOutlineKeyboardArrowDown
                className={`w-5 h-5 ml-auto transition-transform ${openMenus.billing ? 'rotate-180' : ''}`}
              />
            </button>
            <ul
              className={`pl-6 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                openMenus.billing ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {[
                { to: '/app/billing-dashboard', label: 'Billing Dashboard' },
                { to: '/app/creditpatientbilling', label: 'Credit Patient Billing' },
                { to: '/app/cashbilling', label: 'Cash Billing' },
                { to: '/app/claimmanagement', label: 'Claim Management' },
                { to: '/app/inpatientbilling', label: 'Inpatient Billing' },
                { to: '/app/approvaldesk', label: 'Approval Desk' },
                { to: '/app/billingreports', label: 'Billing Reports' },
                { to: '/app/billquote', label: 'Bill Quote' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="flex items-center p-2 text-sm text-gray-600 hover:bg-green-700 hover:text-white rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link
              to="#"
              className="flex items-center p-3 text-gray-600 hover:bg-green-700 hover:text-white rounded-lg transition-colors duration-200"
            >
              <img src={Settings} alt="settings-icon" className="w-5 h-5 mr-3" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;