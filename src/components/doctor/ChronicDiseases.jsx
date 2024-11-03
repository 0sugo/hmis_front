import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { GoPlus } from 'react-icons/go';
import PatientNavigation from '../navbar/PatientNavigation';

const ChronicDiseases = () => {
  const handleAddNewClick = (type) => {
    // Implement the add new functionality here
    console.log(`Adding new ${type}`);
  };

  return (
    <div className="max-w-7xl sm:mx- px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <p className="text-[#192252] font-medium text-lg sm:text-xl flex flex-wrap items-center gap-2 mb-2 sm:mb-0">
          Ajay Sharma
          <span className="flex items-center text-[#192252] text-sm">
            <IoIosArrowForward className="flex-shrink-0" />
            Relevant History
          </span>
          <span className="flex items-center text-customGreen text-sm">
            <IoIosArrowForward className="flex-shrink-0" />
            Chronic Diseases
          </span>
        </p>

      </div>

      <form className="mt-4">
        <label className="text-[#192252] text-xs font-semibold block mb-2">
          Enter Chronic Disease Here:
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
          <select
            name="disease"
            placeholder="Disease"
            className="block w-full sm:col-span-10 border bg-white border-[#DEDEDE] rounded-lg p-2 text-[#AEAEAE] leading-tight focus:outline-none"
          >
            <option value="">Select Disease...</option>
            <option value="disease1">Disease 1</option>
            <option value="disease2">Disease 2</option>
            <option value="disease3">Disease 3</option>
          </select>

          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 sm:col-span-2 rounded-lg bg-customGreen text-white mt-2 sm:mt-0"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChronicDiseases;
