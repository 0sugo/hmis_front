  import React, { useState } from 'react';
  import hosp from '../../assets/images/hosp.png';
  import mainLogo from '../../assets/images/Logo.svg';
  import { toast } from 'sonner';
  import { useNavigate } from 'react-router-dom';
  import theatre from '../../assets/images/theatre.svg';

  const Options = () => {
    const [selectedHospital, setSelectedHospital] = useState(null);
    const navigate = useNavigate();

    const handleClick = (index) => {
      setSelectedHospital(index);
    };

    const Hospitals = [
      { name: 'Malindi Branch' },
      { name: 'Nairobi Branch' },
    ];

    const handleAlert = (hospitalName) => {
      toast(`${hospitalName} chosen`, {
        icon: '🏥',
        style: {
          borderRadius: '8px',
          background: '#0E6F1E',
          color: '#fff',
        },
      });
      navigate('/login');
    };

    const handleContinue = () => {
      if (selectedHospital === null) {
        toast.error('Please select a hospital first');
      } else {
        handleAlert(Hospitals[selectedHospital].name);
      }
    };

    return (
      <div className='flex flex-col md:flex-row h-screen w-full'>
        <div className='md:w-2/5 h-1/3 md:h-full'>
          <img src={theatre} className='h-full w-full object-cover' alt="Theatre" />
        </div>

        <div className='md:w-3/5 h-2/3 md:h-full p-4 md:p-8 flex flex-col justify-between'>
          <div className='flex flex-col items-center'>
            <img src={mainLogo} alt="logo" className='h-16 md:h-28 mb-4 md:mb-8' />

            <div className='flex flex-col items-center gap-1 mb-6 md:mb-12'>
              <h2 className='text-[#000000] text-xl md:text-2xl text-center font-semibold overflow-hidden'>Select Branch</h2>
              <div className='w-24 md:w-32 border border-customGreen'></div>
              <div className='w-20 md:w-28 border border-customGreen'></div>
            </div>

            <div className='w-full max-w-2xl'>
              <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                {Hospitals.map((hospital, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(index)}
                    className={`bg-[#F5F5F5] w-full sm:w-48 md:w-60 h-48 md:h-60 p-4 flex justify-center items-center rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md ${selectedHospital === index ? 'border-2 border-customGreen' : ''}`}
                  >
                    <div className='flex flex-col items-center gap-y-4 md:gap-y-8'>
                      <img src={hosp} className='w-16 md:w-20' alt={hospital.name} />
                      <p className='text-[#737272] text-center'>{hospital.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              className={`bg-customGreen text-white w-full max-w-md font-medium text-center py-3 md:py-4 rounded-lg transition-all duration-200 ${selectedHospital === null ? 'cursor-not-allowed opacity-90' : 'cursor-pointer hover:bg-green-700'}`}
              onClick={handleContinue}
              disabled={selectedHospital === null}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Options;
