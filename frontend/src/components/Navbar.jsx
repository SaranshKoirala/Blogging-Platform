import { TfiWrite } from 'react-icons/tfi';
import { IoIosSearch } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { useBlogs } from '../contexts/BlogContext';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useEffect, useRef, useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);
  const { search, setSearch } = useBlogs('');
  const { user, logout } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (search) {
      navigate('/', { replace: true });
      inputRef.current?.focus();
    }
  }, [search, navigate]);

  return (
    <nav className='flex justify-between items-center px-8 py-2 border-b border-b-gray-500/20'>
      <div className='flex justify-center items-center gap-4'>
        <Link to={'/'} className='font-serif font-stretch-50% text-lg'>
          Blogging Platform
        </Link>
        <form className='relative'>
          <IoIosSearch className='top-2 left-2 absolute' />
          <input
            ref={inputRef}
            type='search'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-gray-200 px-8 py-1 border border-none rounded-2xl placeholder:text-sm'
          />
        </form>
      </div>
      <div className='flex justify-center items-center gap-5 font-serif text-sm'>
        <Link
          to={'/write'}
          className='flex justify-center items-center gap-2 bg-gray-200 px-3 py-1 rounded-xl cursor-pointer'>
          <TfiWrite />
          <span>Write</span>
        </Link>
        {user ? (
          <div
            className='relative flex justify-center items-center bg-gray-200 rounded-full w-7 h-7 cursor-pointer'
            onClick={() => setOpen((open) => !open)}>
            <FaUser />
            {open && (
              <div className='top-10 -right-5 absolute flex flex-col bg-white shadow-2xl p-2 border border-gray-500/20 rounded-xl w-30 h-auto text-black text-xs'>
                <div className='mb-2 pb-1 border-b border-b-gray-500/20 text-center'>
                  {user.name}
                </div>
                <Link
                  to={`/profile/${user.name.split(' ')[0].toLowerCase()}`}
                  className='hover:bg-gray-200 mb-2 px-2 py-1'>
                  Profile
                </Link>
                <div onClick={logout} className='hover:bg-gray-200 px-2 py-1'>
                  Logout
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link
              to={'/login'}
              className='bg-black px-3 py-1 rounded-xl text-white cursor-pointer'>
              Login
            </Link>
            <Link
              to={'/signup'}
              className='bg-gray-200 px-3 py-1 rounded-xl cursor-pointer'>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
