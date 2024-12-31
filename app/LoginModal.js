import React, { useState } from 'react';

const LoginModal = ({ isVisible, onClose, onSwitchToSignup, handleLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }

            if (data.success) {
                handleLoginSuccess(data.email); 
                setSuccess(true);
                setTimeout(() => {
                    onClose(); 
                }, 1500);
            }
        } catch (err) {
            setError(err.message || 'Failed to sign in');
        } finally {
            setLoading(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-[600px] text-gray-800 flex flex-col'>
                <button className='text-white text-xl place-self-end' onClick={onClose}>X</button>
                <div className='bg-white p-10 m-2 rounded-2xl'>
                    {error && <div className="mb-4 p-3 text-red-500 bg-red-100 rounded-lg">{error}</div>}
                    {success && <div className="mb-4 p-3 text-green-500 bg-green-100 rounded-lg">Login successful! Redirecting...</div>}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='p-2 mb-4 text-xl block bg-gray-100 h-12 w-full border text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md rounded-lg'
                        placeholder='Email'
                    />

                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className='p-2 mb-4 text-xl block bg-gray-100 h-12 w-full border text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 focus:shadow-md rounded-lg'
                        placeholder='Password'
                    />

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={loading}
                        className={`inline-block mb-4 px-6 py-3 text-base border-2 border-blue-500 
                            ${loading ? 'bg-gray-300 cursor-not-allowed' : 'text-blue-500 hover:bg-blue-500 hover:text-white'} 
                            transition-colors w-full rounded-lg`}
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>

                    <p className='text-center'>
                        If you don't have an account? 
                        <span className='text-blue-500 cursor-pointer ml-1' onClick={onSwitchToSignup}>
                            Register
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
