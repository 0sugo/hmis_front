import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../api/api';
import { MdOutlineBlock, MdModeEdit } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import Loader from '../Loader';
import CreateScheme from './CreateScheme';
import Brand from './Brand/Brand';
import ChronicDisease from './ChronicDisease/ChronicDisease';
import ImageTest from './ImageTest/ImageTest';
import LabTest from './LabTest/LabTest';
import ImageClass from './ImageClass/ImageClass';
import LabClass from './LabClass/LabClass';
import ImageRequest from './ImageRequest/ImageRequest';
import LabRequest from './LabRequest/LabRequest';
import Drug from './Drugs/Drugs';
import DrugFormula from './DrugFormulas/DrugFormula';
import PhysicalExamination from './PhysicalExamination/PhysicalExamination';
import Symptoms from './Symptoms/Symptoms';

const Schemes = () => {
  const [scheme, setScheme] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getSchemes = async () => {
    try {
      const response = await axios.get('/api/schemes');
      setScheme(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (!error.response) {
        setError('Network error! Check your connection.');
      } else if (error.response.status >= 500) {
        setError('Server error! Please try again later.');
      } else {
        setError('An unexpected error occurred.');
      }
    }
  };

  useEffect(() => {
    getSchemes();
  }, []);

  // Modal to create scheme
  const openModal = () => {
    const dialog = document.getElementById('my_modal_3');
    if (dialog !== null) {
      dialog.showModal();
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          <span className="text-primary">Schemes</span> Management
        </h1>
        <button
          className="btn btn-primary btn-md text-white"
          onClick={() => openModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Create Scheme
        </button>
        {/* Create Scheme Modal */}
        <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box bg-white">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg mb-4">Create New Scheme</h3>
            <CreateScheme />
          </div>
        </dialog>
      </div>

      {/* Schemes Table Section */}
      <div className="card bg-base-100 shadow-xl mb-8">
        <div className="card-body">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader />
            </div>
          ) : error ? (
            <div className="alert alert-error shadow-lg">
              <div>
                <MdOutlineBlock className="w-6 h-6" />
                <span>{error}</span>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              {scheme.length > 0 ? (
                <table className="table w-full table-zebra">
                  <thead>
                    <tr>
                      <th className="text-sm">No</th>
                      <th className="text-sm">Name</th>
                      <th className="text-sm">Account</th>
                      <th className="text-sm">Created By</th>
                      <th className="text-sm">Created At</th>
                      <th className="text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scheme.map((data) => (
                      <tr key={data.id}>
                        <td>{data.id}</td>
                        <td className="font-medium">{data.name}</td>
                        <td>{data.account}</td>
                        <td>{data.created_by}</td>
                        <td>
                          {new Date(data.created_at)
                            .toISOString()
                            .replace('T', ' ')
                            .slice(0, 19)}
                        </td>
                        <td>
                          <div className="flex space-x-2">
                            <Link
                              to={`/app/viewscheme/${data.id}`}
                              className="btn btn-ghost btn-sm"
                              title="View"
                            >
                              <FaRegEye className="text-blue-500 w-5 h-5" />
                            </Link>
                            <Link
                              to={`/app/updatescheme/${data.id}`}
                              className="btn btn-ghost btn-sm"
                              title="Edit"
                            >
                              <MdModeEdit className="text-green-500 w-5 h-5" />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="alert alert-info shadow-lg">
                  <div>
                    <MdOutlineBlock className="w-6 h-6" />
                    <span>No schemes available.</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Other Components */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Brands</h2>
            <Brand />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Chronic Diseases</h2>
            <ChronicDisease />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Image Tests</h2>
            <ImageTest />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Lab Tests</h2>
            <LabTest />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Image Classes</h2>
            <ImageClass />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Lab Classes</h2>
            <LabClass />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Image Requests</h2>
            <ImageRequest />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Lab Requests</h2>
            <LabRequest />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Drugs</h2>
            <Drug />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Drug Formulas</h2>
            <DrugFormula />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Physical Examinations</h2>
            <PhysicalExamination />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Symptoms</h2>
            <Symptoms />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;