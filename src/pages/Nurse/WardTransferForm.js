import React, { useState } from 'react';

const WardTransferForm = () => {
  const [formData, setFormData] = useState({
    systolicBP: '',
    diastolicBP: '',
    spo2: '',
    pulseRate: '',
    temperature: '',
    respRate: '',
    medicationGiven: '',
    handedOverTo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can dispatch a Redux action or do API call here
    console.log('Form Submitted', formData);
  };

  return (
    <div className='mx-auto p-4'>
      <div className="mx-auto p-4 bg-white">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-[#192252] mb-6">
            Transfer to ward (Vitals at Transfer)
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* BP Systolic */}
            <div>
              <label className="block text-[#413D80] mb-2">BP (mm/Hg)</label>
              <input
                type="text"
                name="systolicBP"
                value={formData.systolicBP}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SPO2 */}
            <div>
              <label className="block text-[#413D80] mb-2">SPO2 (%)</label>
              <input
                type="text"
                name="spo2"
                value={formData.spo2}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* BP Diastolic */}
            <div>
              <label className="block text-[#413D80] mb-2">D/BP (mmHg)</label>
              <input
                type="text"
                name="diastolicBP"
                value={formData.diastolicBP}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Pulse Rate */}
            <div>
              <label className="block text-[#413D80] mb-2">Pulse Rate</label>
              <input
                type="text"
                name="pulseRate"
                value={formData.pulseRate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Temperature */}
            <div>
              <label className="block text-[#413D80] mb-2">Temperature</label>
              <input
                type="text"
                name="temperature"
                value={formData.temperature}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Respiratory Rate */}
            <div>
              <label className="block text-[#413D80] mb-2">Resp Rate (Breaths/Min)</label>
              <input
                type="text"
                name="respRate"
                value={formData.respRate}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Medication Given */}
            <div>
              <label className="block text-[#413D80] mb-2">Medication Given</label>
              <input
                type="text"
                name="medicationGiven"
                value={formData.medicationGiven}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Handed Over To */}
          <div className="mt-6">
            <label className="block text-[#413D80] mb-2">Handed over to which nurse</label>
            <input
              type="text"
              name="handedOverTo"
              value={formData.handedOverTo}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Save Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="bg-green-700 text-white px-12 py-3 rounded-lg font-medium hover:bg-green-800 transition duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WardTransferForm;
