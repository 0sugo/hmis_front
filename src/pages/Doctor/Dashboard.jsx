import React, { useEffect, useState } from 'react'
import newPatient from '../../assets/images/newPatient.svg'
// import search from '../../assets/images/search.svg'
import patientWait from '../../assets/images/patientWait.svg'
import sleep from '../../assets/images/sleep.svg'
import dayCaseImg from '../../assets/images/dayCase.svg'
// import pen from '../../assets/images/pen.svg'
import eye from '../../assets/images/eye.svg'
import { useNavigate } from 'react-router-dom'
import axios from '../../api/api'

const Dashboard = () => {
  const navigate = useNavigate();
  const [patientlist, setPatientlist] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const summary = [
    {
      icon: 'aegfff',
      number: 34,
      desc: 'New Patients',
      style: 'bg-[#F3E8FF]',
      tableData: [
        {
          visitCode: 'MM0001',
          date: '12/12/2021',
          patientName: 'Idris Maimon',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0002',
          date: '12/12/2021',
          patientName: 'Jane Doe',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0003',
          date: '12/12/2021',
          patientName: 'Idris Maimon',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'V0004',
          date: '12/12/2021',
          patientName: 'Jane Doe',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0005',
          date: '12/12/2021',
          patientName: 'Idris Maimon',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0006',
          date: '12/12/2021',
          patientName: 'Jane Doe',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0007',
          date: '12/12/2021',
          patientName: 'Idris Maimon',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0008',
          date: '12/12/2021',
          patientName: 'Jane Doe',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0009',
          date: '12/12/2021',
          patientName: 'Idris Maimon',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0010',
          date: '12/12/2021',
          patientName: 'Jane Doe',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
      ]
    },
    {
      icon: 'aegfff',
      number: 24,
      desc: 'Patients waiting for results',
      style: 'bg-[#F3E8FF]',
      tableData: [
        {
          visitCode: 'MM0003',
          date: '12/12/2021',
          patientName: 'Waiting results',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'V0004',
          date: '12/12/2021',
          patientName: 'Waiting results',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0005',
          date: '12/12/2021',
          patientName: 'Waiting results',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0006',
          date: '12/12/2021',
          patientName: 'Waiting results',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0007',
          date: '12/12/2021',
          patientName: 'Waiting results',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },

      ]
    },
    {
      icon: 'aegfff',
      number: 18,
      desc: 'Patients waiting for review',
      style: 'bg-[#F3E8FF]',
      tableData: [
        {
          visitCode: 'MM0003',
          date: '12/12/2021',
          patientName: 'Waiting review',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'V0004',
          date: '12/12/2021',
          patientName: 'Jane Doe',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0005',
          date: '12/12/2021',
          patientName: 'Waiting review',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0006',
          date: '12/12/2021',
          patientName: 'Jane Doe',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0007',
          date: '12/12/2021',
          patientName: 'Waiting review',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },

      ]
    },
    {
      icon: 'aegfff',
      number: 16,
      desc: 'DayCase/ OPbservation',
      style: 'bg-[#F3E8FF]',
      tableData: [
        {
          visitCode: 'MM0003',
          date: '12/12/2021',
          patientName: 'Day Case',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'V0004',
          date: '12/12/2021',
          patientName: 'Day Case',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0005',
          date: '12/12/2021',
          patientName: 'Day Case',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0006',
          date: '12/12/2021',
          patientName: 'Day Case',
          age: 34,
          gender: 'Female',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },
        {
          visitCode: 'MM0007',
          date: '12/12/2021',
          patientName: 'Day Case',
          age: 34,
          gender: 'Male',
          scheme: 'NHIF',
          triaged: 'Yes',
          visitType: 'OPD',
          waitTime: '30 mins',
        },

      ]
    }
  ];
  const tableData = [
    {
      visitCode: 'MM0001',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0002',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0003',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'V0004',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0005',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0006',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0007',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0008',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0009',
      date: '12/12/2021',
      patientName: 'Idris Maimon',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0010',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
  ];
  const newPatientsData = [
    {
      visitCode: 'MM0001',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0002',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0003',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'V0004',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0005',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0006',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0007',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0008',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0009',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0010',
      date: '12/12/2021',
      patientName: 'new patient',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
  ];
  const waitingReviewsData = [
    {
      visitCode: 'MM0003',
      date: '12/12/2021',
      patientName: 'Waiting review',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'V0004',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0005',
      date: '12/12/2021',
      patientName: 'Waiting review',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0006',
      date: '12/12/2021',
      patientName: 'Jane Doe',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0007',
      date: '12/12/2021',
      patientName: 'Waiting review',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },

  ];
  const waitingResultsData = [
    {
      visitCode: 'MM0003',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'V0004',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0005',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0006',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0007',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },

  ];
  const Observation = [
    {
      visitCode: 'MM0003',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'V0004',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0005',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0006',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0007',
      date: '12/12/2021',
      patientName: 'Waiting results',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },

  ];
  const dayCase = [
    {
      visitCode: 'MM0003',
      date: '12/12/2021',
      patientName: 'Day Case',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'V0004',
      date: '12/12/2021',
      patientName: 'Day Case',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0005',
      date: '12/12/2021',
      patientName: 'Day Case',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0006',
      date: '12/12/2021',
      patientName: 'Day Case',
      age: 34,
      gender: 'Female',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },
    {
      visitCode: 'MM0007',
      date: '12/12/2021',
      patientName: 'Day Case',
      age: 34,
      gender: 'Male',
      scheme: 'NHIF',
      triaged: 'Yes',
      visitType: 'OPD',
      waitTime: '30 mins',
    },

  ];
  const [list, setList] = useState(waitingReviewsData);
  const [currentListName, setCurrentListName] = useState('Waiting Reviews');

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/patients');
      setPatientlist(response.data.data); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);  
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const ageDiff = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };


  const showNewPatients = () => {
    setList(newPatientsData);
    setCurrentListName('New Patients');
  };

  const showWaitingResults = () => {
    setList(waitingResultsData);
    setCurrentListName('Patients Waiting for Results');
  };

  const showWaitingReviews = () => {
    setList(waitingReviewsData);
    setCurrentListName('Waiting Reviews');
  };

  const showObservation = () => {
    setList(Observation);
    setCurrentListName('DayCase / Observation');
  };

  const showDayCase = () => {
    setList(dayCase);
    setCurrentListName('Day Case');
  };

  const handleIndividualPatient = () => {
    navigate('/app/patientview');
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='mx-auto p-4'>
      <div className="bg-white p-4 rounded-lg">
        {/* Header */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center w-full mb-6 md:mb-2'>
          <div className='flex flex-col mb-4 md:mb-0'>
            <span className='text-black text-sm'>Good Morning</span>
            <span className='text-customGreen font-semibold text-xl'>Dr.Alamini</span>
          </div>
          <div className="w-full md:w-auto">
            <div className="relative">
              <input
                type="search"
                className="w-full md:w-64 border border-gray-300 focus:ring-indigo-600 focus:border-indigo-600 rounded-lg py-2 pl-10 pr-3 text-sm"
                placeholder="Search for patient..."
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}

        <div className="flex flex-col lg:flex-row gap-4">
          <div className='flex flex-col gap-2 lg:w-1/4'>
            <SummaryCard icon={newPatient} bgColor="bg-[#F3E8FF]" iconBgColor="bg-[#8D49D4]" number={34} description="New Patients" onClick={showNewPatients} />
            <SummaryCard icon={patientWait} bgColor="bg-[#DEF3FF]" iconBgColor="bg-[#2E8BBF]" number={24} description="Patients waiting for Results" onClick={showWaitingResults} />
            <SummaryCard icon={sleep} bgColor="bg-[#FFE2E5]" iconBgColor="bg-[#DD3459]" number={16} description="Patients waiting for Review" onClick={showWaitingReviews} />
            <SummaryCard icon={dayCaseImg} bgColor="bg-[#DCF4E0]" iconBgColor="bg-[#058843]" number={16} description="DayCase / Observation" onClick={showObservation} />
          </div>

          <div className='lg:w-3/4 bg-[#f7f4ff] rounded-lg overflow-x-auto py-3 px-2'>
            <div className="sticky top-0 z-10">
              <span className='text-lg flex justify-center items-center font-semibold text-[#413D80] p-1'>
                {currentListName}
              </span>
            </div>

            {/* Table Container */}
            <div className="max-h-[400px] overflow-y-auto scrollbar-w-1 scrollbar scrollbar-thumb-[#413D80] scrollbar-track-slate-300">
              <table className="min-w-full leading-normal overflow-x-auto">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-[#BED0FF] text-left text-xs font-semibold">Visit Code</th>
                    <th className="px-6 py-3 bg-[#BED0FF] text-left text-xs font-semibold">Patient Name</th>
                    <th className="px-6 py-3 bg-[#BED0FF] text-left text-xs font-semibold">Age</th>
                    <th className="px-6 py-3 bg-[#BED0FF] text-left text-xs font-semibold">Gender</th>
                    <th className="px-6 py-3 bg-[#BED0FF] text-left text-xs font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3 text-sm">{data.visitCode}</td>
                      <td className="px-6 py-3 text-sm">{data.patientName}</td>
                      <td className="px-6 py-3 text-sm">{data.age}</td>
                      <td className="px-6 py-3 text-sm">{data.gender}</td>
                      <td className="px-6 py-3 text-sm">
                        <button onClick={() => handleIndividualPatient(data.visitCode)} className="bg-[#DBFFDE] p-2 rounded-lg">
                          <img src={eye} alt="View" className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className='my-4'>
          <span className='text-[#413D80] font-medium text-lg mb-4 md:mb-2 block'>Patient List</span>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">Patient Name</th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">Patient ID</th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">Weight</th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">Blood Pressure</th>
                  <th className="px-6 py-3 bg-[#F3F7FF] text-[#413D80] text-left text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {patientlist.length > 0 ? (
                  patientlist.map((data, index) => (
                    <tr key={index}>
                      <td className="px-6 py-3 text-sm">{`${data.patient_firstname} ${data.patient_lastname}`}</td>
                      <td className="px-6 py-3 text-sm">{data.patient_code}</td>
                      <td className="px-6 py-3 text-sm">{data.age} kg</td>
                      <td className="px-6 py-3 text-sm">120/80</td>
                      <td className="px-6 py-3 text-sm">
                        <button onClick={() => handleIndividualPatient(data.visitCode)} className="bg-[#DBFFDE] p-2 rounded-lg">
                          <img src={eye} alt="View" className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))) : (
                  <tr>
                    <td colSpan="4" className="px-6 py-3 text-sm text-center">No patients found</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, bgColor, iconBgColor, number, description, onClick }) => (
  <div onClick={onClick} className={`flex items-center ${bgColor} rounded-lg p-4 cursor-pointer`}>
    <span className={`${iconBgColor} p-3 rounded-full mr-4`}>
      <img src={icon} className="w-6 h-6" alt={description} />
    </span>
    <div>
      <p className={`font-semibold text-xl ${iconBgColor.replace('bg-', 'text-')}`}>{number}</p>
      <p className="text-[#5E5E5E] text-sm">{description}</p>
    </div>
  </div>
);

export default Dashboard;
