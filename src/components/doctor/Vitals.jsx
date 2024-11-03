// import React from 'react'
// 
// 
// import { GoPlus } from 'react-icons/go'
// import { IoIosArrowForward } from "react-icons/io";
// import LineChart from '../Graphs/LineChart';
// import pic from '../../assets/images/pic.svg'
// import Chart from 'chart.js/auto';
// import PatientNavigationBar from '../navbar/PatientNavigationBar';

// const Vitals = () => {
//   const lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
//   const lineChartData = [
//     {
//       label: 'BP',
//       data: [0, 3, 3.5, 4, 1, 4, 3, 5, 6],
//       borderColor: '#B4E6EB',
//       backgroundColor: '#ffffff',
//       fill: false,
//     },
//     {
//       label: 'BP2',
//       data: [0, 4, 3, 3.5, 4, 1.5, 2.3, 3, 4],
//       borderColor: '#3F4E8B',
//       backgroundColor: '#ffffff',
//       fill: false,
//     },
//     {
//       label: 'BP3',
//       data: [0, 2, 6, 1.5, 2.4, 5.5, 1.3, 2, 4],
//       borderColor: '#7CCCBE',
//       backgroundColor: '#ffffff',
//       fill: false,
//     },
//   ];
//   return (

//     <div className=''>
//       <div className='flex justify-between items-center'>
//         <p className='text-[#192252] font-medium text-xl flex items-center gap-2'>Ajay Sharma <span className='flex items-center text-customGreen text-sm'><IoIosArrowForward />vitals </span></p>
//         <p className='flex rounded-lg text-customGreen items-center justify-center bg-[#DAE8E3] font-medium gap-1 px-4 py-4 text-xs cursor-pointer'><span><GoPlus /></span>Add Notes</p>
//       </div>
//       <div className='grid grid-cols-3 gap-4'>
//         <div>
//           <span className='text-[#192252] text-sm font-medium '>Current Vitals</span>
//           <div className='bg-white p-4  rounded-xl text-sm my-2'>
//             <div className='flex flex-col gap-2'>
//               <p className='flex justify-between font-normal text-customBlue'>Weight: <span className='text-[#FF1010] font-normal'>160 lb</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Pressure: <span className='text-[#14E31C] font-normal'>124/79 mm</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Glucose: <span className='text-[#EDCB1A] font-normal'>124/79 mm</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Height: <span className='text-[#14E31C] font-normal'>1.78 m</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Type: <span className='text-[#14E31C] font-normal'>O+ positive</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Disease: <span className='text-[#192252] font-normal'>Diabetes</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Allergies: <span className='text-[#FF1010] font-normal'>Peanut</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Nursing Remarks: <span className='text-[#192252] font-normal'>Peanut</span></p>

//             </div>

//           </div>
//         </div>

//         <div>
//           <span className='text-[#192252] text-sm font-medium'>Past Visit Vitals</span>
//           <div className='bg-white p-4  rounded-xl my-2'>
//             <div className='flex flex-col gap-2 text-sm'>
//               <p className='flex justify-between font-normal text-customBlue'>Weight: <span className='text-[#FF1010] font-normal'>160 lb</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Pressure: <span className='text-[#14E31C] font-normal'>124/79 mm</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Glucose: <span className='text-[#EDCB1A] font-normal'>124/79 mm</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Height: <span className='text-[#14E31C] font-normal'>1.78 m</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Type: <span className='text-[#14E31C] font-normal'>O+ positive</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Disease: <span className='text-[#192252] font-normal'>Diabetes</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Allergies: <span className='text-[#FF1010] font-normal'>Peanut</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Nursing Remarks: <span className='text-[#192252] font-normal'>Peanut</span></p>

//             </div>

//           </div>
//         </div>

//         <div>
//           <span className='text-[#192252] text-sm font-medium'>Past Visit Vitals</span>
//           <div className='bg-white p-4  rounded-xl text-sm my-2'>
//             <div className='flex flex-col gap-2'>
//               <p className='flex justify-between font-normal text-customBlue'>Weight: <span className='text-[#FF1010] font-normal'>160 lb</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Pressure: <span className='text-[#14E31C] font-normal'>124/79 mm</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Glucose: <span className='text-[#EDCB1A] font-normal'>124/79 mm</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Height: <span className='text-[#14E31C] font-normal'>1.78 m</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Type: <span className='text-[#14E31C] font-normal'>O+ positive</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Disease: <span className='text-[#192252] font-normal'>Diabetes</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Allergies: <span className='text-[#FF1010] font-normal'>Peanut</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Nursing Remarks: <span className='text-[#192252] font-normal'>Peanut</span></p>

//             </div>

//           </div>
//         </div>
//       </div>

//       <div className='flex gap-4 my-8'>
//         <div className='w-4/12 h-full max-w-[376px] px-4'>
//           <span className='text-[#192252] text-sm font-medium '>Current Vitals</span>
//           <div className='bg-white p-4  rounded-xl text-sm my-2 min-h-[210px]'>
//             <div className='flex flex-col gap-2'>
//               <p className='flex justify-between font-normal text-customBlue'>Date and Time: <span className='text-[#FF1010] font-normal'>160 lb</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Pressure: <span className='text-[#14E31C] font-normal'>124/79 mm</span></p>

//             </div>

//           </div>
//         </div>

//         <div className='pb-12 pt-4'>
//           <LineChart labels={lineChartLabels} lineChartData={lineChartData} />

//         </div>

//       </div>

//       <div className='flex gap-4 my-8 max-h-[397px]'>
//         <div className='w-4/12 h-full max-w-[376px] px-4'>
//           <span className='text-[#192252] text-sm font-medium '>Current Vitals</span>
//           <div className='bg-white p-4  rounded-xl text-sm my-2 min-h-[210px]'>
//             <div className='flex flex-col gap-2'>
//               <p className='flex justify-between font-normal text-customBlue'>Date and Time: <span className='text-[#FF1010] font-normal'>160 lb</span></p>
//               <p className='flex justify-between font-normal text-customBlue'>Blood Pressure: <span className='text-[#14E31C] font-normal'>124/79 mm</span></p>

//             </div>

//           </div>
//         </div>

//         <div className='pb-12 pt-4'>
//           <LineChart labels={lineChartLabels} lineChartData={lineChartData} />

//         </div>

//       </div>
//     </div>
//   )
// }

// export default Vitals
import React from 'react';
import { GoPlus } from 'react-icons/go';
import { IoIosArrowForward } from "react-icons/io";
import LineChart from '../Graphs/LineChart';

const Vitals = () => {
  const lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];
  const lineChartData = [
    {
      label: 'BP',
      data: [0, 3, 3.5, 4, 1, 4, 3, 5, 6],
      borderColor: '#B4E6EB',
      backgroundColor: '#ffffff',
      fill: false,
    },
    {
      label: 'BP2',
      data: [0, 4, 3, 3.5, 4, 1.5, 2.3, 3, 4],
      borderColor: '#3F4E8B',
      backgroundColor: '#ffffff',
      fill: false,
    },
    {
      label: 'BP3',
      data: [0, 2, 6, 1.5, 2.4, 5.5, 1.3, 2, 4],
      borderColor: '#7CCCBE',
      backgroundColor: '#ffffff',
      fill: false,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <p className="text-[#192252] font-medium text-xl flex items-center gap-2 mb-2 sm:mb-0">
          Ajay Sharma <span className="flex items-center text-customGreen text-sm"><IoIosArrowForward />vitals </span>
        </p>
        <button className="flex rounded-lg text-customGreen items-center justify-center bg-[#DAE8E3] font-medium gap-1 px-4 py-2 text-xs cursor-pointer">
          <GoPlus /> Add Notes
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {['Current Vitals', 'Past Visit Vitals', 'Past Visit Vitals'].map((title, index) => (
          <div key={index}>
            <span className="text-[#192252] text-sm font-medium">{title}</span>
            <div className="bg-white p-4 rounded-xl text-sm my-2">
              <VitalsList />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="w-full lg:w-4/12 max-w-full lg:max-w-[376px]">
          <span className="text-[#192252] text-sm font-medium">Current Vitals</span>
          <div className="bg-white p-4 rounded-xl text-sm my-2 min-h-[210px]">
            <div className="flex flex-col gap-2">
              <p className="flex justify-between font-normal text-customBlue">Date and Time: <span className="text-[#FF1010] font-normal">160 lb</span></p>
              <p className="flex justify-between font-normal text-customBlue">Blood Pressure: <span className="text-[#14E31C] font-normal">124/79 mm</span></p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 pb-12 pt-4">
          <LineChart labels={lineChartLabels} lineChartData={lineChartData} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-8">
        <div className="w-full lg:w-4/12 max-w-full lg:max-w-[376px]">
          <span className="text-[#192252] text-sm font-medium">Current Vitals</span>
          <div className="bg-white p-4 rounded-xl text-sm my-2 min-h-[210px]">
            <div className="flex flex-col gap-2">
              <p className="flex justify-between font-normal text-customBlue">Date and Time: <span className="text-[#FF1010] font-normal">160 lb</span></p>
              <p className="flex justify-between font-normal text-customBlue">Blood Pressure: <span className="text-[#14E31C] font-normal">124/79 mm</span></p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-8/12 pb-12 pt-4">
          <LineChart labels={lineChartLabels} lineChartData={lineChartData} />
        </div>
      </div>
    </div>
  );
};

const VitalsList = () => (
  <div className="flex flex-col gap-2">
    <p className="flex justify-between font-normal text-customBlue">Weight: <span className="text-[#FF1010] font-normal">160 lb</span></p>
    <p className="flex justify-between font-normal text-customBlue">Blood Pressure: <span className="text-[#14E31C] font-normal">124/79 mm</span></p>
    <p className="flex justify-between font-normal text-customBlue">Blood Glucose: <span className="text-[#EDCB1A] font-normal">124/79 mm</span></p>
    <p className="flex justify-between font-normal text-customBlue">Height: <span className="text-[#14E31C] font-normal">1.78 m</span></p>
    <p className="flex justify-between font-normal text-customBlue">Blood Type: <span className="text-[#14E31C] font-normal">O+ positive</span></p>
    <p className="flex justify-between font-normal text-customBlue">Disease: <span className="text-[#192252] font-normal">Diabetes</span></p>
    <p className="flex justify-between font-normal text-customBlue">Allergies: <span className="text-[#FF1010] font-normal">Peanut</span></p>
    <p className="flex justify-between font-normal text-customBlue">Nursing Remarks: <span className="text-[#192252] font-normal">Peanut</span></p>
  </div>
);

export default Vitals;
