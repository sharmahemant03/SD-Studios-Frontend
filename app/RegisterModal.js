import React, { useState } from 'react';

const RegisterModal = ({isVisible, onClose, onSwitchToLogin}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
        const response = await fetch('http://localhost:8080/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const data = await response.json();
            setError(data.message || 'Registration failed');
            return;
        }

        const data = await response.json();
        if (data.success) {
            setSuccess(true);
            setTimeout(() => {
                onClose();
                onSwitchToLogin();
            }, 1500);
        } else {
            setError(data.message || 'Registration failed');
        }
    } catch (err) {
        setError(err.message || 'Failed to sign up');
    } finally {
        setLoading(false);
    }
};


  if (!isVisible) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
      <div className='w-[600px] text-gray-800 flex flex-col'>
        <button className='text-white text-xl place-self-end' onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <div className='bg-white p-10 m-2 rounded-2xl'>
            {error && <div className="mb-4 p-3 text-red-500 bg-red-100 rounded-lg">{error}</div>}
            {success && <div className="mb-4 p-3 text-green-500 bg-green-100 rounded-lg">Registration successful! Redirecting to login...</div>}
            <input 
              type="text" 
              id='fullName' 
              name='fullName' 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
              className='p-2 text-xl block bg-gray-100 mb-4 h-12 w-full border focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md rounded-lg text-gray-800' 
              placeholder='Full Name'
            />
            <input 
              type="email" 
              id='email' 
              name='email' 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className='p-2 mb-4 text-xl block bg-gray-100 h-12 w-full border text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md rounded-lg' 
              placeholder='Email'
            />
            <input 
              type="password" 
              id='password' 
              name='password' 
              value={formData.password} 
              onChange={handleChange} 
              required 
              className='p-2 mb-4 text-xl block bg-gray-100 h-12 w-full border text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md rounded-lg' 
              placeholder='Password'
            />
            <button 
              type="submit"
              disabled={loading}
              className={`inline-block mb-4 px-6 py-3 text-base border-2 border-blue-500 
                ${loading ? 'bg-gray-300 cursor-not-allowed' : 'text-blue-500 hover:bg-blue-500 hover:text-white'} 
                transition-colors w-full rounded-lg`}
            >
              {loading ? 'Signing up...' : 'Sign up'}
            </button>
            <p className='text-center'>
              If you already have an account? 
              <span className='text-blue-500 cursor-pointer ml-1' onClick={onSwitchToLogin}>
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;