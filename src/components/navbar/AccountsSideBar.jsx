import React, { useState } from 'react';
import doctor from '../../assets/images/doctor.svg';
import nurse from '../../assets/images/nurse.svg';
import lab from '../../assets/images/lab.svg';
import imaging from '../../assets/images/imaging.svg';
import pharmacy from '../../assets/images/pharmacy.svg';
import dental from '../../assets/images/dental.svg';
import dialysis from '../../assets/images/dialysis.svg';
import { useNavigate } from 'react-router-dom';

const AccountsSideBar = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedSublist, setSelectedSublist] = useState('');
  const [showSublist, setShowSublist] = useState(null);
  const [NavigationStatus, setNavigationStatus] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (option) => {
    if (selectedOption === option) {
      setSelectedOption('');
      setSelectedSublist('');
    } else {
      setSelectedOption(option);
      console.log(option);
      setShowSublist(navItems.find(item => item.title === option)?.sublist || null);
    }
  }

  const handleSelectSublist = (option) => {
    const cleanedPath = `/${option.replace(/\s+/g, '')}`;

    navigate(cleanedPath, { replace: true });
    setSelectedSublist(option);
  }

  const handleNavigationStatus = (option) => {
  }

  const navItems = [
    {
      title: 'Dashboard',
      icon: doctor,
      sublist: [],
      link: '#',
    },
    {
      title: 'Credit Patient Billing',
      icon: nurse,
      sublist: [],
      link: '#',
    },
    {
      title: 'Cash Billing',
      icon: lab,
      sublist: ['phlebotomy', 'samples', 'Storage', 'worklists', 'Lab Inventory', 'Reagents', 'Instrument Calin & Maint.', 'Package & Shipment', 'Documents', 'Reports', 'Lab Management & Settings',],
      link: '#',
    },
    {
      title: 'Reports',
      icon: imaging,
      link: '#',
    },
    {
      title: 'Claim Management',
      icon: pharmacy,
      link: '#',
    },
    {
      title: 'Inpatient Billing',
      icon: dental,
      link: '#',
    },
    {
      title: 'Approvals Desk',
      icon: dialysis,
      link: '#',
    },
  ];

  return (
    <div className='h-dvh scrollbar-none  pb-24  fixed top-12'>
      <div className="pt-0 pr-0 pb-0 pl-0 mt-0 mr-0 mb-0 ml-0"></div>
      <div className="bg-white"></div>
      <div className="bg-white ">
        <div className="flex-col flex">
          <div className="border-b border-gray-200"></div>
          <div className="flex  overflow-x-hidden">
            <div className="bg-white lg:flex md:w-56 border-r border-[#00000040] md:flex-col hidden">
              <div className="flex-col pt-5 flex overflow-y-auto">
                <div className="h-full flex-col justify-between px-2 flex">
                  <div className="space-y-4">
                    <div className="bg-top bg-cover space-y-1">
                      {navItems.map((item, index) => (
                        <div key={index}>
                          <div onClick={() => handleSelect(item.title)} className={`font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex transition-all duration-200 hover:bg-gray-300 group cursor-pointer ${selectedOption === item.title ? 'bg-customGreen hover:bg-green-700' : ''}`}>
                            <div className='flex items-center gap-x-2 justify-between'>
                              <div className='min-w-6'>
                                <img src={item.icon} className="justify-center items-center flex" />
                              </div>
                              <span className={`${selectedOption === item.title ? 'text-white' : 'text-customBlue'} `}>{item.title}</span>
                            </div>
                          </div>
                          {selectedOption === item.title && item.sublist && (
                            <div className="ml-2 mt-1">
                              <ul className='mb-4'>
                                {item.sublist.map((subItem, subIndex) => (
                                  <li key={subIndex} onClick={() => handleSelectSublist(subItem)} className={`${selectedSublist === subItem ? 'text-customGreen' : ''} text-[#353535] font-normal text-sm items-center mt-2 cursor-pointer transition-all duration-200`}>{subItem}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountsSideBar;
