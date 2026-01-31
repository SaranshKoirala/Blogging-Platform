import Navbar from '../components/Navbar';
import { HiOutlineMail } from 'react-icons/hi';
import { IoKey } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/authService';
import { useState } from 'react';
import { useUser } from '../contexts/UserContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useUser();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await loginUser(email, password);
      const { token, user } = res.data.data;
      console.log('login', res.data.data);
      login(user, token);
      setEmail('');
      setPassword('');
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className='flex flex-col w-full h-screen'>
      <Navbar />
      <form
        className='flex flex-col flex-1 justify-center items-center'
        onSubmit={(e) => handleSubmit(e)}>
        <h1 className='mb-8 font-serif text-3xl'>Welcome Back</h1>
        <div className='relative flex flex-col gap-4 mb-8 w-64'>
          <input
            type='email'
            placeholder='Email'
            className='bg-gray-200 px-8 py-1 rounded-lg w-full placeholder:text-xs'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <HiOutlineMail className='top-3 left-3 absolute text-xs' />
          <input
            type='password'
            placeholder='Password'
            className='bg-gray-200 px-8 py-1 rounded-lg w-full placeholder:text-xs'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <IoKey className='top-15 left-3 absolute text-xs rotate-180' />
        </div>
        <button
          className='bg-black mb-8 px-4 py-1 rounded-xl font-serif text-white text-sm cursor-pointer'
          type='submit'>
          Login
        </button>
        <div className='bg-gray-500/20 mb-2 w-64 h-px'></div>
        <div className='flex justify-center items-center gap-1 text-sm'>
          <p>Don't have an account ?</p>
          <Link to={'/signup'} className='border-b'>
            Join us today
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
