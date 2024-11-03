import React, { useEffect } from 'react';
import mainLogo from '../assets/images/Logo.svg';
import { TiArrowBackOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { FaCompressArrowsAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import AuthToken from '../components/Context/AuthToken';


const Login = () => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
  
    if (username === "user" && password === "password") {
      // Create a mock token payload
      const payload = {
        username: username,
        role: "admin", // You can adjust this based on your logic
        iat: Math.floor(Date.now() / 1000), // Issued at
        exp: Math.floor(Date.now() / 1000) + 3600 // Expires in 1 hour
      };
  
      // Base64 encode the header and payload
      const header = {
        alg: "HS256",
        typ: "JWT"
      };
  
      const base64Header = btoa(JSON.stringify(header));
      const base64Payload = btoa(JSON.stringify(payload));
  
      // Create the JWT (not signed, just a mock)
      const token = `${base64Header}.${base64Payload}`;
  
      // Create the final object to store
      const authData = {
        data: {
          accessToken: token,
          username: username,
          role: "admin" // Or whatever role logic you have
        },
        expiresAt: Date.now() + 3600 * 1000 // Expiration time in milliseconds
      };
  
      // Store the auth data in local storage
      localStorage.setItem('token', JSON.stringify(authData));
      alert("Login successful! Token saved to local storage.");
      navigate('/app/dashboard');
      window.location.reload()
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  useEffect(() => {
    if (AuthToken) {
      navigate('/app/dashboard');
    }
  }, [navigate]);
  
  

  const handleBack = () => {
    navigate('/');
  }

  const handleDashboard = () => {
    navigate('/app/adminDashboard');
  }

  const handleBypass = () => {
    navigate('/app/dashboard');
  }
  return (
    <div className='flex md:flex-row justify-center gap-8 md:gap-0 flex-col h-screen w-full'>
      <div className='md:bg-customGreen flex justify-center md:w-1/2 items-center'>
        <img src={mainLogo} alt="" />
      </div>
      <div className=" flex justify-center md:w-1/2 items-center relative ">
      <div className='absolute top-8 left-8 cursor-pointer' >
        <div className='flex gap-12'>
          <div className='flex flex-col items-center' onClick={handleBack}>
            <TiArrowBackOutline className='size-7 text-customGreen' />
            <span className='text-[#A7A7A7]'>Back</span>
          </div>

          <div className='flex flex-col items-center' onClick={handleDashboard}>
            <FaCompressArrowsAlt className='size-7 text-customGreen' />
            <span className='text-[#A7A7A7]'>Dashboard</span>
          </div>

          <div className='flex flex-col items-center' onClick={handleBypass}>
            <FaArrowUp className='size-7 text-customGreen' />
            <span className='text-[#A7A7A7]'>Bypass</span>
          </div>
        </div>
      </div>
      <div className="bg-white w-[70%] p-4 rounded ">
        <div className='flex flex-col items-center gap-1 md:mb-12 mb-6'>
          <h2 className='text-customGreen text-3xl text-center font-semibold overflow-hidden'>Login</h2>
          <div className='w-16 border border-customGreen'></div>
          <div className='w-12 border border-customGreen'></div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="username" className="block text-[#737272]">User</label>
            <input type="text" id="username" name="username" className="w-full bg-[#F5F5F5] px-3 py-2 border rounded-lg" required autoComplete='off' />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-[#737272]">Password</label>
            <input type="password" id="password" name="password" className="w-full bg-[#F5F5F5] px-3 py-2 border rounded-lg" required autoComplete='off' />
          </div>
          <button type="submit" className="w-full bg-customGreen text-white px-4 py-2 rounded-lg hover:bg-green-600">Login</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login
