import React, { useState, useRef, useEffect } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const PatientNavigationBar = ({ activeSection, onSectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !dropdownRefs.current[openDropdown].contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [openDropdown]);

  const handleSectionChange = (value) => {
    onSectionChange(value);
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (value) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(openDropdown === value ? null : value);
  };

  const handleMouseEnter = (value) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(value);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 3000);
  };

  const patientSections = [
    { name: 'General', value: 'patientInformation' },
    { name: 'Vitals', value: 'vitals' },
    {
      name: 'Past History',
      value: 'pastHistory',
      dropdown: [
        { name: 'Past History', value: 'pastHistory' },
        { name: 'Chronic Disease', value: 'chronicDiseases' },
      ],
    },
    { name: 'Consultation', value: 'consultation' },
    { name: 'Order Tests', value: 'orderTests' },
    { name: 'Diagnostics', value: 'diagnostics' },
    { name: 'Prescription', value: 'prescription' },
    { name: 'Services', value: 'services' },
    { name: 'Nurse orders', value: 'nursingOrders' },
    { name: 'Follow ups', value: 'followUps' },
    {
      name: 'Documents',
      value: 'claimForm',
      dropdown: [
        { name: 'Claim Form', value: 'claimForm' },
        { name: 'Documents', value: 'documents' },
      ],
    },
  ];

  const flattenedSections = patientSections.reduce((acc, section) => {
    if (section.dropdown) {
      return [...acc, ...section.dropdown];
    }
    return [...acc, section];
  }, []);

  return (
    <div className="my-4">
      {/* Desktop view */}
      <div className="hidden lg:flex justify-between items-center text-sm rounded-[11px] p-4 bg-[#DAE8E3] relative">
        {patientSections.map((section) => (
          <div
            key={section.value}
            className="relative group"
            ref={(el) => dropdownRefs.current[section.value] = el}
            onMouseEnter={() => section.dropdown && handleMouseEnter(section.value)}
            onMouseLeave={handleMouseLeave}
          >
            <span
              className={`cursor-pointer hover:text-[#3F4E8B] transition-colors whitespace-nowrap ${
                activeSection === section.value ? 'text-[#3F4E8B] font-bold' : 'text-[#697696]'
              }`}
              onClick={() => section.dropdown ? handleDropdownToggle(section.value) : handleSectionChange(section.value)}
            >
              {section.name}
              {section.dropdown && <BiChevronDown className={`inline ml-1 transition-transform duration-300 ${openDropdown === section.value ? 'rotate-180' : ''}`} />}
            </span>
            {section.dropdown && (
              <div
                className={`absolute top-full left-0 mt-1 bg-white border border-[#DAE8E3] rounded-[11px] shadow-lg z-10 transition-all duration-300 ease-in-out ${
                  openDropdown === section.value ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {section.dropdown.map((item) => (
                  <div
                    key={item.value}
                    className={`p-3 text-sm cursor-pointer hover:bg-[#DAE8E3] transition-colors whitespace-nowrap ${
                      activeSection === item.value ? 'bg-[#DAE8E3] text-[#3F4E8B] font-bold' : 'text-[#697696]'
                    }`}
                    onClick={() => handleSectionChange(item.value)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile view (updated) */}
      <div className="lg:hidden relative">
        <button
          className="w-full flex justify-between items-center text-sm rounded-[11px] p-4 bg-[#DAE8E3] text-[#697696]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {flattenedSections.find(section => section.value === activeSection)?.name || 'Navigate Patient Story'}
          <BiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#DAE8E3] rounded-[11px] shadow-lg z-10">
            {flattenedSections.map((section) => (
              <div
                key={section.value}
                className={`p-3 text-sm cursor-pointer hover:bg-[#DAE8E3] transition-colors ${
                  activeSection === section.value ? 'bg-[#DAE8E3] text-[#3F4E8B] font-bold' : 'text-[#697696]'
                }`}
                onClick={() => handleSectionChange(section.value)}
              >
                {section.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientNavigationBar;
