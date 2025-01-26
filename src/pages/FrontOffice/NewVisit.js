import React, { useState, useEffect, useCallback } from 'react';
import { MdAdd, MdEdit } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import eye from '../../assets/images/eye.svg'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NewVisit = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const userData = JSON.parse(localStorage.getItem('token'));
  const token = userData?.data?.authorisation?.token;

  // Function to fetch patients
  const fetchPatients = async (search) => {
    if (!search || search.length < 2 || !token) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://maimoon.hospify.co.ke/api/patients/search/${search}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch patients');
      }

      const data = await response.json();
      setPatients(data.data);
    } catch (err) {
      setError("Failed to fetch patients");
      setPatients([]);
    } finally {
      setLoading(false);
    }
  };

  // Create a debounced version of fetchPatients
  const debouncedFetch = useCallback(
    debounce((search) => fetchPatients(search), 300),
    [token]
  );

  // Effect to trigger search
  useEffect(() => {
    if (searchTerm) {
      debouncedFetch(searchTerm);
    } else {
      setPatients([]);
    }

    // Cleanup
    return () => {
      debouncedFetch.cancel();
    };
  }, [searchTerm, debouncedFetch]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = (data) => {
    const formattedName = data.replace(/\s+/g, '').toLowerCase();
    navigate(`/app/${formattedName}`);
  };

  return (
    <div className="mx-auto p-4">
      <section className="bg-white p-4 rounded-lg mb-4">
        <h4><b>New OP Visit</b></h4>
        <div className="flex flex-wrap items-center gap-2 justify-between my-4">
          <div>
            <label htmlFor="searchpatient">
              <input
                type="search"
                id="searchpatient"
                className="px-3 py-2 bg-white border border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#0E6F1E] focus:ring-[#0E6F1E] w-full rounded-md focus:ring-1"
                placeholder="Search for patient here..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </label>
          </div>
        </div>

        {/* Patient Results Table */}
        <div className="mt-6 overflow-x-auto">
          {loading && <div className="text-center py-4 text-gray-500">Loading...</div>}
          {error && <div className="text-center py-4 text-red-500">{error}</div>}
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gender</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Insurance</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Scheme</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created By</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <tr key={patient.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{`${patient.patient_firstname} ${patient.patient_lastname}`}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{new Date().getFullYear() - new Date(patient.dob).getFullYear()}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.gender || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.phonenumber1 || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.insurance_membership || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.insurance_details.length > 0 ? 'Available' : 'None'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{patient.created_by || 'N/A'}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to={`/app/createvisit/${patient.id}`}>
                        <span className='bg-[#DBFFDE] flex justify-center items-center rounded-lg w-8 h-8 cursor-pointer'><img src={eye} alt='eye' /></span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center py-4 text-gray-500">No patients found matching your search.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </section>
    </div>
  );
};

export default NewVisit;
