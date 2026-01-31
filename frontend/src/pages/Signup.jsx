import { useState } from 'react';
import Navbar from '../components/Navbar';
import { FaUser } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { IoKey } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../services/authService';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      return alert('Please fill up the form!');
    }

    if (password !== confirmPassword) {
      return alert('Password do not match!');
    }

    try {
      await signupUser(name, email, password, confirmPassword);
      alert('User is created');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  }
  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar />
      <form
        className='flex flex-col flex-1 justify-center items-center'
        onSubmit={handleSignup}>
        <h1 className='mb-8 font-serif text-3xl'>Join Us Today</h1>
        <div className='relative flex flex-col gap-4 mb-8 w-64'>
          <input
            type='text'
            placeholder='Full Name'
            className='bg-gray-200 px-8 py-1 rounded-lg w-full placeholder:text-xs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FaUser className='top-3 left-3 absolute text-xs' />
          <input
            type='email'
            placeholder='Email'
            className='bg-gray-200 px-8 py-1 rounded-lg w-full placeholder:text-xs'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <HiOutlineMail className='top-15 left-3 absolute text-xs' />
          <input
            type='password'
            placeholder='Password'
            className='bg-gray-200 px-8 py-1 rounded-lg w-full placeholder:text-xs'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IoKey className='top-27 left-3 absolute text-xs rotate-180' />
          <HiOutlineMail className='top-15 left-3 absolute text-xs' />
          <input
            type='password'
            placeholder='Confirm Password'
            className='bg-gray-200 px-8 py-1 rounded-lg w-full placeholder:text-xs'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <IoKey className='top-39 left-3 absolute text-xs rotate-180' />
        </div>
        <button
          className='bg-black mb-8 px-4 py-1 rounded-xl font-serif text-white text-sm cursor-pointer'
          type='submit'>
          Sign Up
        </button>
        <div className='bg-gray-500/20 mb-2 w-64 h-px'></div>
        <div className='flex justify-center items-center gap-1 text-sm'>
          <p>Already a member ?</p>
          <Link to={'/signup'} className='border-b'>
            Login here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Signup;
