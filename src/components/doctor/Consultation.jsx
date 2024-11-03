import React, { useState } from 'react';
import BarChart from '../Graphs/BarChart';
import DoughnutChart from '../Graphs/DoughnutChart';

const Consultation = () => {
  const barChartLabels = ['Headache', 'Chest pains', 'Fever', 'Abdonimal pains', 'Diarrhoea', 'Migraine', 'Acid Reflux'];
  const barChartData = [12, 6, 7, 10, 1, 2, 5];
  const doughnutChartLabels = ['Headache', 'Chest pains', 'Fever', 'Abdonimal pains', 'Diarrhoea', 'Migraine', 'Acid Reflux'];
  const doughnutChartData = [12, 6, 7, 10, 1, 2, 5];

  const [chiefComplaints, setChiefComplaints] = useState([]);
  const [selectedComplaint, setSelectedComplaint] = useState('');
  const [customComplaint, setCustomComplaint] = useState('');

  const handleAddComplaint = () => {
    if (selectedComplaint === 'custom' && customComplaint.trim()) {
      setChiefComplaints(prevComplaints => [...prevComplaints, customComplaint.trim()]);
      setCustomComplaint('');
    } else if (selectedComplaint && selectedComplaint !== 'custom') {
      setChiefComplaints(prevComplaints => [...prevComplaints, selectedComplaint]);
    }
    setSelectedComplaint('');
  };

  const handleRemoveComplaint = (index) => {
    setChiefComplaints(prevComplaints => prevComplaints.filter((_, i) => i !== index));
  };

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col sm:flex-row justify-between items-center mb-6'>
        <p className='text-[#192252] font-medium text-xl mb-4 sm:mb-0'>Ajay Sharma</p>
        <div className='flex flex-wrap gap-2'>
          <button className='rounded-lg text-white bg-[#EC1C1C] font-medium px-3 py-2 text-xs'>Admission/Daycare Request</button>
          <button className='rounded-lg text-white bg-[#6690CE] font-medium px-3 py-2 text-xs'>Appointments</button>
          <button className='rounded-lg text-white bg-[#6690CE] font-medium px-3 py-2 text-xs'>Book Surgery</button>
          <button className='rounded-lg text-customGreen bg-[#DAE8E3] font-medium px-3 py-2 text-xs'>Report Incident</button>
          <button className='rounded-lg text-customGreen bg-[#DAE8E3] font-medium px-3 py-2 text-xs'>Sick Leave</button>
        </div>
      </div>

      <div className='bg-white p-4 my-4 rounded-lg'>
        <form className="w-full text-xs">
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div className='lg:col-span-3'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className="mb-4">
                  <label className="block text-[#192252] text-sm font-medium mb-2" htmlFor="consultationType">
                    Select Consultation Template
                  </label>
                  <select id="consultationType"
                    className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none">
                    <option value="">Select a type</option>
                    <option value="general">General Consultation</option>
                    <option value="specialist">Specialist Consultation</option>
                    <option value="follow-up">Follow-up</option>
                  </select>
                </div>

                <div className="mb-4 flex flex-col sm:flex-row items-end gap-2">
                  <div className='w-full'>
                    <label className="block text-[#192252] text-sm md:text-nowrap font-medium mb-2" htmlFor="chiefComplaints">Chief Complaints</label>
                    <select
                      id="chiefComplaints"
                      className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none"
                      value={selectedComplaint}
                      onChange={(e) => setSelectedComplaint(e.target.value)}
                    >
                      <option value="">Select a complaint</option>
                      <option value="Fever">Fever</option>
                      <option value="Cough">Cough</option>
                      <option value="Headache">Headache</option>
                      <option value="Pain">Pain</option>
                      <option value="custom">Other(specify)</option>
                    </select>
                  </div>
                  {selectedComplaint === 'custom' && (
                    <input
                      type="text"
                      className="mt-2 block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none"
                      placeholder="custom complaint"
                      value={customComplaint}
                      onChange={(e) => setCustomComplaint(e.target.value)}
                    />
                  )}
                  <button
                    type="button"
                    className='bg-[#DAE8E3] text-customGreen rounded-md px-4 py-2 mt-2 sm:mt-0'
                    onClick={handleAddComplaint}
                  >
                    Add
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="clinicalHistory">
                  Enter Brief Clinical History Here
                </label>
                <textarea
                  id="clinicalHistory"
                  rows="4"
                  className="block w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  placeholder="Enter clinical history..."
                ></textarea>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="examinationTemplate">
                  Select Examination Template
                </label>
                <select
                  id="examinationTemplate"
                  className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-2 px-3 text-[#AEAEAE] leading-tight focus:outline-none">
                  <option value="">Select a template</option>
                  <option value="template1">Template 1</option>
                  <option value="template2">Template 2</option>
                  <option value="template3">Template 3</option>
                </select>
              </div>
            </div>

            <div className='lg:col-span-1'>
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Chief Complaints
              </label>
              <div className="block w-full h-full min-h-[200px] border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight overflow-y-auto">
                {chiefComplaints.map((complaint, index) => (
                  <div key={index} className="mb-1 p-1 bg-gray-100 rounded flex justify-between items-center">
                    <span>{complaint}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveComplaint(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='text-[#192252] font-medium text-sm mb-4 mt-6'>Enter Physical Examination :-CNS,CVS,RESP,GUT,GIT,MMS,ENT</div>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            {[
              { label: "General exam", id: "generalExam" },
              { label: "Central Nervous System", id: "cns" },
              { label: "CVS", id: "cvs" },
              { label: "Respiratory System", id: "respiratory" },
              { label: "Abdominal", id: "abdominal" },
              { label: "Genitourinary System", id: "genitourinary" },
              { label: "Masculoskeletal", id: "masculoskeletal" },
              { label: "Ear Nose and throat examination", id: "ent" }
            ].map((field) => (
              <div key={field.id} className="mb-4">
                <label className="block text-[#000000] text-sm mb-2" htmlFor={field.id}>{field.label}</label>
                <input id={field.id} className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-3 px-3 text-[#AEAEAE] leading-tight focus:outline-none" />
              </div>
            ))}
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
            <div className="mb-2 w-full sm:w-[calc(100%-8rem)]">
              <label className="block text-[#000000] text-sm mb-2" htmlFor="diagnosis">Enter Diagnosis</label>
              <select
                id="diagnosis"
                className="block w-full border bg-white border-[#DEDEDE] rounded-lg py-3 px-3 text-[#AEAEAE] leading-tight focus:outline-none">
                <option value="">Select a diagnostic</option>
                <option value="diagnostic1">Diagnostic 1</option>
                <option value="diagnostic2">Diagnostic 2</option>
                <option value="diagnostic3">Diagnostic 3</option>
              </select>
            </div>
            <button type='submit' className='bg-customGreen mt-4 text-white rounded-md py-3 px-4 sm:p-4 w-full sm:w-auto'>Add</button>
          </div>

        </form>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-8'>
          <div className='bg-[#FFFFFF] p-4 shadow rounded-lg'>
            <span className='lg:text-nowrap text-[#000000] font-medium block mb-4'>Past Chief Complaints</span>
            <DoughnutChart labels={doughnutChartLabels} data={doughnutChartData} />
          </div>

          <div className='lg:col-span-3 bg-[#FFFFFF] p-4 shadow rounded-lg'>
            <span className=' text-[#000000] font-medium block mb-4'>Past Chief Complaints</span>
            <BarChart data={barChartData} labels={barChartLabels} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
