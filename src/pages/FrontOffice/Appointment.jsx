import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const Appointment = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    department: '',
    rate: '',
    remarks: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="mx-auto p-4">
      <h4 className="text-[#192252] font-bold mb-4">New OP Visit</h4>

      <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg mb-4 shadow-sm">
        {/* Search Section */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-grow">
            <input
              type="search"
              className="px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1"
              placeholder="Search for patient here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button
            type="button"
            className="bg-[#0E6F1E] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-green-700 transition"
          >
            <MdSearch />
            Search on DB
          </button>
        </div>

        {/* Patient Info & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[#413D80] mb-2">
              Patient Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            />
          </div>
          <div>
            <label className="block text-[#413D80] mb-2">
              Phone <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            />
          </div>
        </div>

        {/* Doctor & Appointment Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[#413D80] mb-2">
              Doctor <span className="text-red-600">*</span>
            </label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            >
              <option value="">Select Doctor</option>
              <option value="dr_john">Dr. John Doe</option>
              <option value="dr_jane">Dr. Jane Doe</option>
            </select>
          </div>
          <div>
            <label className="block text-[#413D80] mb-2">
              Appointment Date <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            />
          </div>
        </div>

        {/* Time & Department */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-[#413D80] mb-2">
              Appointment Time <span className="text-red-600">*</span>
            </label>
            <input
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            />
          </div>
          <div>
            <label className="block text-[#413D80] mb-2">
              Department <span className="text-red-600">*</span>
            </label>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            >
              <option value="">Select Department</option>
              <option value="dentist">Dentist</option>
              <option value="maternity">Maternity</option>
              <option value="general">General</option>
            </select>
          </div>
        </div>

        {/* Rate & Remarks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-[#413D80] mb-2">
              Rate <span className="text-red-600">*</span>
            </label>
            <input
              type="number"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            />
          </div>
          <div>
            <label className="block text-[#413D80] mb-2">
              Remarks
            </label>
            <input
              type="text"
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#0E6F1E]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-[#0E6F1E] text-white rounded-md hover:bg-green-700 transition"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
