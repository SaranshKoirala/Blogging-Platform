import { TfiWrite } from 'react-icons/tfi';
import { IoIosSearch } from 'react-icons/io';
import { useBlogs } from '../contexts/BlogContext';
import { Link } from 'react-router-dom';

function Navbar() {
  const { search, setSearch } = useBlogs();
  return (
    <nav className='flex justify-between items-center px-8 py-2 border-b border-b-gray-500/20'>
      <div className='flex justify-center items-center gap-4'>
        <Link to={'/'} className='font-serif font-stretch-50% text-lg'>
          Blogging Platform
        </Link>
        <form className='relative'>
          <IoIosSearch className='top-2 left-2 absolute' />
          <input
            type='search'
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='bg-gray-200 px-8 py-1 border border-none rounded-2xl placeholder:text-sm'
          />
        </form>
      </div>
      <div className='flex justify-center items-center gap-5 font-serif text-sm'>
        <Link className='flex justify-center items-center gap-2 bg-gray-200 px-3 py-1 rounded-xl cursor-pointer'>
          <TfiWrite />
          <span>Write</span>
        </Link>
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
      </div>
    </nav>
  );
}

export default Navbar;
