import React, { PureComponent, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import search from '../assets/images/search.svg'
import { FaBed, FaUser, FaCalendarAlt, FaClipboardList, FaHospitalUser, FaFlask, FaHeart, FaXRay } from 'react-icons/fa';
import { MdLocalPharmacy } from 'react-icons/md';
import { GoPlus } from 'react-icons/go';
import download from '../assets/images/download.svg';

const Home = () => {
  const [currentChartIndex, setCurrentChartIndex] = useState(0);

  const chartData = [
    {
      title: "Overall Visitors",
      icon: FaHospitalUser,
      data: [
        { month: 'Jan', value: 2500 },
        { month: 'Feb', value: 2700 },
        { month: 'Mar', value: 2900 },
        { month: 'Apr', value: 3100 },
        { month: 'May', value: 3300 },
        { month: 'Jun', value: 3009 },
      ]
    },
    {
      title: "New Patient Enrollment",
      icon: FaUser,
      data: [
        { month: 'Jan', value: 100 },
        { month: 'Feb', value: 110 },
        { month: 'Mar', value: 115 },
        { month: 'Apr', value: 120 },
        { month: 'May', value: 125 },
        { month: 'Jun', value: 129 },
      ]
    },
    {
      title: "OP Visits",
      icon: FaCalendarAlt,
      data: [
        { month: 'Jan', value: 1000 },
        { month: 'Feb', value: 1050 },
        { month: 'Mar', value: 1100 },
        { month: 'Apr', value: 1150 },
        { month: 'May', value: 1180 },
        { month: 'Jun', value: 1210 },
      ]
    },
    {
      title: "IP Visits",
      icon: FaClipboardList,
      data: [
        { month: 'Jan', value: 400 },
        { month: 'Feb', value: 410 },
        { month: 'Mar', value: 420 },
        { month: 'Apr', value: 430 },
        { month: 'May', value: 445 },
        { month: 'Jun', value: 456 },
      ]
    },
    {
      title: "Pharmacy",
      icon: MdLocalPharmacy,
      data: [
        { month: 'Jan', value: 2000 },
        { month: 'Feb', value: 2050 },
        { month: 'Mar', value: 2100 },
        { month: 'Apr', value: 2150 },
        { month: 'May', value: 2200 },
        { month: 'Jun', value: 2234 },
      ]
    },
    {
      title: "Radiology",
      icon: FaXRay,
      data: [
        { month: 'Jan', value: 1 },
        { month: 'Feb', value: 2 },
        { month: 'Mar', value: 3 },
        { month: 'Apr', value: 3 },
        { month: 'May', value: 4 },
        { month: 'Jun', value: 4 },
      ]
    },
    {
      title: "Laboratory",
      icon: FaFlask,
      data: [
        { month: 'Jan', value: 500 },
        { month: 'Feb', value: 520 },
        { month: 'Mar', value: 540 },
        { month: 'Apr', value: 560 },
        { month: 'May', value: 580 },
        { month: 'Jun', value: 600 },
      ]
    },
    {
      title: "Bed Occupancy",
      icon: FaBed,
      data: [
        { month: 'Jan', value: 250 },
        { month: 'Feb', value: 245 },
        { month: 'Mar', value: 240 },
        { month: 'Apr', value: 238 },
        { month: 'May', value: 236 },
        { month: 'Jun', value: 234 },
      ]
    },
  ];

  const insuranceData = [
    { name: 'NHIF', value: 660 },
    { name: 'Minet', value: 630 },
    { name: 'Private Insurance', value: 1200 },
    { name: 'Uninsured', value: 210 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const patients = [
    { id: 'P10235', name: 'Maria Hernandez', age: 32, gender: 'Female', date: '2024-09-22', department: 'General Surgery', diagnosis: 'Appendicitis', status: 'INPATIENT' },
    { id: 'P10204', name: 'James Johnson', age: 65, male: 'Male', date: '2024-09-20', department: 'Oncology', diagnosis: 'Lung Cancer', status: 'INPATIENT' },
    { id: 'P10198', name: 'Jane Smith', age: 45, gender: 'Female', date: '2024-09-18', department: 'Cardiology', diagnosis: 'Coronary Artery Disease', status: 'OUTPATIENT' },
  ];

  const nextChart = () => {
    setCurrentChartIndex((prevIndex) => (prevIndex + 1) % chartData.length);
  };

  const prevChart = () => {
    setCurrentChartIndex((prevIndex) => (prevIndex - 1 + chartData.length) % chartData.length);
  };
  const { icon: Icon = FaUser } = chartData[currentChartIndex];

  return (
    <div className="mx-auto p-8 bg-[#F1F5F9]">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back Maimoon ✋</h1>
        <div className='flex items-baseline justify-between'>
          <p className="text-sm text-gray-600">Last Updated: Jan 2024 - Oct 2024</p>
          <button className='flex rounded-lg gap-2 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
            <img src={download} className='h-5 w-5' alt="download" />
            Download Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard icon={FaHospitalUser} title="Overall visitors" value="3,009" change="+6.2%" />
        <StatCard icon={FaUser} title="New Patients" value="129" change="+6.2%" />
        <StatCard icon={FaCalendarAlt} title="OP Visits" value="1,210" change="+3.2%" />
        <StatCard icon={FaClipboardList} title="IP Visits" value="456" change="+15%" />
        <StatCard icon={MdLocalPharmacy} title="Pharmacy" value="2,234" change="-5.5%" />
        <StatCard icon={FaXRay} title="Radiology" value="4" change="+2.5%" />
        <StatCard icon={FaFlask} title="Laboratory" value="600" change="+10.5%" />
        <StatCard icon={FaBed} title="Bed Occupancy" value="234" change="-5.5%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">

            <h2 className="text-lg font-semibold"><Icon className="inline mr-2 text-[#192252]" />{chartData[currentChartIndex].title} Trend</h2>
            <div className="flex gap-2">
              <button onClick={prevChart} className="p-1 bg-gray-200 rounded-full">
                <IoIosArrowBack />
              </button>
              <button onClick={nextChart} className="p-1 bg-gray-200 rounded-full">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300} >
            <BarChart data={chartData[currentChartIndex].data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#192252" barSize={24 } />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-4 rounded-lg shadow ">
          <h2 className="text-lg font-semibold mb-4">Insurance Coverage Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={insuranceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {insuranceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#353535]">< FaUser />Patient List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Patient ID</th>
                <th className="px-4 py-2 text-left">Patient Name</th>
                <th className="px-4 py-2 text-left">Age</th>
                <th className="px-4 py-2 text-left">Gender</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Primary Diagnosis</th>
                <th className="px-4 py-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient) => (
                <tr key={patient.id} className="border-b">
                  <td className="px-4 py-2">{patient.id}</td>
                  <td className="px-4 py-2">{patient.name}</td>
                  <td className="px-4 py-2">{patient.age}</td>
                  <td className="px-4 py-2">{patient.gender}</td>
                  <td className="px-4 py-2">{patient.date}</td>
                  <td className="px-4 py-2">{patient.department}</td>
                  <td className="px-4 py-2">{patient.diagnosis}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${patient.status === 'INPATIENT' ? 'bg-green-200 text-green-800' : 'bg-blue-200 text-blue-800'
                      }`}>
                      {patient.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon: Icon }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    {Icon && <Icon className="h-6 w-6 text-[#192252]" />}
    <h3 className="text-sm font-medium text-gray-500">{title}</h3>
    <p className="text-2xl font-semibold mt-1">{value}</p>
    {/* { change.startsWith('+') ?<span><FaArrowTrendUp className='text-green-600' /></span> : <span><FaArrowTrendDown /></span>} */}
    <p className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
      {change} vs last month
    </p>
  </div>
);

export default Home;
