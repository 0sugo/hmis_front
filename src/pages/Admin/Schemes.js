import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import Modal from 'react-bootstrap/Modal';
import pen from '../../assets/images/pen.svg';
import download from '../../assets/images/download.svg';
import { MdDelete } from 'react-icons/md';
import { IoMdSettings } from 'react-icons/io';

const AddSchemeModal = ({ show, handleClose, onAddScheme }) => {
  const [newSchemeName, setNewSchemeName] = useState('');
  const [schemeDescription, setSchemeDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSchemeName.trim() && schemeDescription.trim()) {
      onAddScheme({
        name: newSchemeName.trim(),
        description: schemeDescription.trim(),
      });
      setNewSchemeName('');
      setSchemeDescription('');
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div className='flex justify-center w-full'>
          <Modal.Title>
            <span className='text-[#100C53] font-semibold'>Add New Scheme</span>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input name="schemeName" value={newSchemeName} onChange={(e) => setNewSchemeName(e.target.value)} placeholder='Scheme Name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
          </div>
          <div className="mb-2">
            <input name="SchemeAccount" value={newSchemeName} onChange={(e) => setNewSchemeName(e.target.value)} placeholder='Scheme Name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
          </div>
          <div className="mb-2">
            <input name="schemeName" value={newSchemeName} onChange={(e) => setNewSchemeName(e.target.value)} placeholder='Scheme Name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
          </div>
          <div className="mb-2">
            <input name="schemeName" value={newSchemeName} onChange={(e) => setNewSchemeName(e.target.value)} placeholder='Scheme Name' className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none" />
          </div>
          <div className="mb-2">
            <textarea
              name="schemeDescription"
              value={schemeDescription}
              onChange={(e) => setSchemeDescription(e.target.value)}
              placeholder='Scheme Description'
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>
          <div className='flex justify-center my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Add Scheme</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const Schemes = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [schemes, setSchemes] = useState([]);
  const [filterValue, setFilterValue] = useState('');
  const [selectedColumns, setSelectedColumns] = useState([
    'SchemeName', 'SchemeAccount', 'totalUsers']);

  const tableData = [
    { SchemeName: 'M-Tiba', SchemeAccount: '123', totalUsers: '125' },
    { SchemeName: 'afya', SchemeAccount: '1234', totalUsers: '540' },
    { SchemeName: 'Jubilee', SchemeAccount: '4321', totalUsers: '1032' },
    { SchemeName: 'Britam', SchemeAccount: '2314', totalUsers: '1' },
    { SchemeName: 'Mwalimu', SchemeAccount: '3421', totalUsers: '39' }
  ];

  const toggleColumn = (column) => {
    setSelectedColumns(prev =>
      prev.includes(column) ? prev.filter(col => col !== column) : [...prev, column]
    );
  };

  const filteredData = useMemo(() => {

    return tableData.filter(row => {
      return selectedColumns.some(column => {
        const cellValue = row[column]?.toString().toLowerCase() || '';
        console.log(`Column: ${column}, Cell Value: ${cellValue}`);
        return cellValue.includes(filterValue.toLowerCase());
      });
    });
  }, [tableData, filterValue, selectedColumns]);

  return (
    <div className='mx-auto p-4'>
      <div>
        <div className='flex items-center justify-between py-2 mb-4'>

          <h1 className='text-xl font-bold '>Schemes</h1>

          <div className='flex gap-4'>
            <button onClick={() => setShowModal(true)} className='flex rounded-lg gap-1 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
              <GoPlus />
              Add Scheme
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden my-4">
          <div className="p-4 bg-[#BED0FF]">
            <h2 className="text-lg font-semibold text-[#413D80] mb-2">Schemes List</h2>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {Object.keys(tableData[0]).map(header => (
                <label key={header} className="flex items-center space-x-2 text-xs text-[#413D80]">
                  <input
                    type="checkbox"
                    checked={selectedColumns.includes(header)}
                    onChange={() => toggleColumn(header)}
                    className="form-checkbox h-3 w-3 text-[#413D80]"
                  />
                  <span>{header}</span>
                </label>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                value={filterValue}
                onChange={(e) => setFilterValue(e.target.value)}
                className="border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm w-full rounded-lg pt-2 pb-2 pl-12 pr-3"
                placeholder="Search for employee by any field"
              />
            </div>
          </div>
          <div className="overflow-x-auto overflow-y-auto max-h-[1000px] scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300">
            <table className="w-full leading-normal ">
              <thead>
                <tr>
                  {selectedColumns.map((header) => (
                    <th key={header} className="sticky top-0 bg-[#BED0FF] px-1 py-3 border-b-2 border-gray-200 text-left text-xs font-semibold text-[#413D80] uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                  <th className="sticky top-0 px-1 py-3 border-b-2 border-gray-200 bg-[#BED0FF] text-center text-xs font-semibold text-[#413D80] uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((data, index) => (
                    <tr key={index}>
                      {selectedColumns.map((column) => (
                        <td key={column} className="p-3 border-b border-gray-200 bg-white text-xs">
                          <p className="text-gray-900 whitespace-no-wrap">{data[column]}</p>
                        </td>
                      ))}
                      <td className="py-4 border-b border-gray-200 bg-white text-xs">
                        <div className='flex justify-center gap-2'>
                          <span className='bg-[#E4EDFE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer' onClick={() => console.log('Edit user')}><IoMdSettings className='text-[#3E36B0] size-5 hover:text-[#3E36E0]' /></span>
                          <span className='bg-[#E4EDFE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer' ><MdDelete className='text-red-600 size-5 hover:text-red-500' /> </span>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={selectedColumns.length + 1} className="text-center py-4 text-gray-500">No results found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
      <AddSchemeModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Schemes
