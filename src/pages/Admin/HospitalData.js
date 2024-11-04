import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { FaPen, FaPlus } from 'react-icons/fa';
import { GoPlus } from "react-icons/go";
import download from '../../assets/images/download.svg';
import logo from '../../assets/images/Logo.svg';
import { jsPDF } from 'jspdf';
import Modal from 'react-bootstrap/Modal';

const AddBranchModal = ({ show, handleClose, onAddBranch }) => {
  const [newBranchName, setNewBranchName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBranchName.trim()) {
      onAddBranch(newBranchName.trim());
      setNewBranchName('');
      handleClose();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <div className='flex justify-center w-full'>
          <Modal.Title>
            <span className='text-[#100C53] font-semibold'>Add New Branch</span>
          </Modal.Title>
        </div>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              name="branchName"
              value={newBranchName}
              onChange={(e) => setNewBranchName(e.target.value)}
              placeholder='Branch Name'
              className="block w-full border bg-white border-[#DEDEDE] rounded-lg p-3 text-[#AEAEAE] leading-tight focus:outline-none"
            />
          </div>
          <div className='flex justify-center my-4'>
            <button type="submit" className='px-4 py-2 rounded-lg bg-customGreen text-white'>Add Branch</button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

const HospitalData = () => {
  const navigate = useNavigate();
  const [hospitalName, setHospitalName] = useState('Maimoon hospital');
  const [isEditingName, setIsEditingName] = useState(false);
  const [branches, setBranches] = useState(['Malindi', 'Rongai']);
  const [showBranches, setShowBranches] = useState(false);
  const [logoFile, setLogoFile] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleNavigate = (path) => {
    navigate(path, { replace: true });
  };

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleNameChange = (e) => {
    setHospitalName(e.target.value);
  };

  const handleNameSubmit = () => {
    setIsEditingName(false);
  };

  const handleAddBranch = (newBranch) => {
    setBranches([...branches, newBranch]);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogoFile(file);
    }
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('Hospital Data Report', 20, 20);

    doc.setFontSize(12);
    doc.text(`Hospital Name: ${hospitalName}`, 20, 40);
    doc.text(`Total Branches: ${branches.length}`, 20, 50);

    doc.text('Branches:', 20, 60);
    branches.forEach((branch, index) => {
      doc.text(`- ${branch}`, 30, 70 + (index * 10));
    });

    doc.save('hospital_data_report.pdf');
  };

  return (
    <div className='mx-auto p-4'>
      <div>
        <div className='flex items-center justify-between py-2'>
          <div className="lg:block relative max-w-xs">
            <h1 className='text-xl font-bold mb-4'>Hospital Data</h1>
          </div>

          <div className='flex gap-4'>
            <button onClick={handleDownloadPDF} className='flex rounded-lg gap-2 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
              <img src={download} className='h-5 w-5' alt="download" />
              Download Hospital Report
            </button>
            <button onClick={() => setShowModal(true)} className='flex rounded-lg gap-1 text-customGreen items-center justify-center bg-[#DAE8E3] font-medium px-4 py-2 text-xs'>
              <GoPlus />
              Add Branch
            </button>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='flex items-center'>
            <p className='mr-2'>Hospital name:</p>
            {isEditingName ? (
              <input
                type="text"
                value={hospitalName}
                onChange={handleNameChange}
                onBlur={handleNameSubmit}
                className='border-b border-gray-300 focus:outline-none focus:border-customGreen'
                autoFocus
              />
            ) : (
              <span className='font-medium'>{hospitalName}</span>
            )}
            <button onClick={handleEditName} className='ml-2 text-customGreen'>
              <FaPen className='h-4 w-4' />
            </button>
          </div>

          <div className='flex items-center'>
            <p className='mr-2'>Hospital logo:</p>
            <div className='flex items-baseline'>

              <img src={logoFile ? URL.createObjectURL(logoFile) : logo} alt="Hospital logo" className='h-24 w-2h-24 object-contain' />
              <label className='ml-4 cursor-pointer text-xs text-customGreen'>
                <input type="file" accept="image/*" onChange={handleLogoChange} className='hidden' />
                Change Logo ?
              </label>
            </div>
          </div>

          <div>
            <p className='flex items-center'>
              Total branches: <span className='font-medium ml-2'>{branches.length}</span>
              <button onClick={() => setShowBranches(!showBranches)} className='ml-2 text-customGreen'>
                <FaPlus className='h-4 w-4' />
              </button>
            </p>
            {showBranches && (
              <ul className='mt-2 ml-4'>
                {branches.map((branch, index) => (
                  <li key={index} className='text-sm'>{branch}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <AddBranchModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        onAddBranch={handleAddBranch}
      />
    </div>
  );
};

export default HospitalData;
