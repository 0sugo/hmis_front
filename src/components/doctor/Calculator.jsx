import React, { useState } from 'react';
import { FaCalculator, FaWeightHanging, FaRulerVertical, FaHeartbeat } from 'react-icons/fa';

const Calculator = ({ isOpen, onClose }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [calculatorType, setCalculatorType] = useState('standard');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [maxHR, setMaxHR] = useState(null);

  const handleButtonClick = (value) => {
    setDisplayValue((prevValue) => {
      if (prevValue === '0') {
        return value;
      }
      return prevValue + value;
    });
  };

  const handleClear = () => {
    setDisplayValue('0');
  };

  const handleCalculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
    }
  };

  const calculateMaxHR = () => {
    if (age) {
      const maxHRValue = gender === 'male'
        ? Math.round(220 - age)
        : Math.round(226 - age);
      setMaxHR(maxHRValue);
    }
  };

  if (!isOpen) return null;

  const renderCalculator = () => {
    switch (calculatorType) {
      case 'standard':
        return (
          <div className="grid grid-cols-4 gap-2">
            {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
              <button
                key={btn}
                onClick={() => btn === '=' ? handleCalculate() : handleButtonClick(btn)}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
              >
                {btn}
              </button>
            ))}
            <button onClick={handleClear} className="col-span-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors">
              Clear
            </button>
          </div>
        );
      case 'bmi':
        return (
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Height (cm)"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Weight (kg)"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <button onClick={calculateBMI} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">
              Calculate BMI
            </button>
            {bmi && <p className="text-center font-bold">BMI: {bmi}</p>}
          </div>
        );
      case 'maxHR':
        return (
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border rounded"
            />
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button onClick={calculateMaxHR} className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors">
              Calculate Max HR
            </button>
            {maxHR && <p className="text-center font-bold">Max HR: {maxHR} bpm</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Hospital Calculator</h2>
      <div className="mb-4 flex justify-center space-x-2">
        <button
          onClick={() => setCalculatorType('standard')}
          className={`p-2 rounded ${calculatorType === 'standard' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <FaCalculator />
        </button>
        <button
          onClick={() => setCalculatorType('bmi')}
          className={`p-2 rounded ${calculatorType === 'bmi' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <FaWeightHanging />
        </button>
        <button
          onClick={() => setCalculatorType('maxHR')}
          className={`p-2 rounded ${calculatorType === 'maxHR' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          <FaHeartbeat />
        </button>
      </div>
      {calculatorType === 'standard' && (
        <div className="mb-4 p-2 bg-gray-100 rounded text-right text-2xl font-bold">
          {displayValue}
        </div>
      )}
      {renderCalculator()}
    </div>
  );
};

export default Calculator;
