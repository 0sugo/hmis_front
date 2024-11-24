import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

const ProcurementAnalysis = () => {

  const chartData = [
    { month: 'Jan', value: 2500 },
    { month: 'Feb', value: 2700 },
    { month: 'Mar', value: 2900 },
    { month: 'Apr', value: 3100 },
    { month: 'May', value: 3300 },
    { month: 'Jun', value: 3009 },
    { month: 'Jul', value: 300 },
    { month: 'Aug', value: 309 },
    { month: 'Sep', value: 3009 },
    { month: 'Oct', value: 2327 },
    { month: 'Nov', value: 2567 },
    { month: 'Dec', value: 2657 },
  ]

  const insuranceData = [
    { name: 'NHIF', value: 660 },
    { name: 'Minet', value: 630 },
    { name: 'Private Insurance', value: 1200 },
    { name: 'Uninsured', value: 210 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  return (
    <div className='mx-auto p-4'>
      <h4 className='font-semibold my-4'>Procurement <span className='text-[#0E6F1E]'>> Procurement Analysis</span></h4>

      <section className="bg-white p-4 rounded-lg mb-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Total spend</h2>
          <div>
            <label htmlFor="filter">
              <select 
                name="" id=""
                className='px-3 py-1 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1'
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              >
                <option value="">2022</option>
                <option value="">2022</option>
              </select>
            </label>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300} >
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#192252" barSize={24 } />
        </BarChart>
        </ResponsiveContainer>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className='bg-white p-4 rounded-lg'>
            <h2 className="text-lg font-semibold mb-4">Spend Per Item</h2>
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
          <div className='bg-white p-4 rounded-lg'>
            <h2 className="text-lg font-semibold mb-4">Spend Per Category</h2>
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
          <div className='bg-white p-4 rounded-lg'>
            <h2 className="text-lg font-semibold mb-4">Spend Per Supplier</h2>
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
      </section>
    </div>
  )
}

export default ProcurementAnalysis
