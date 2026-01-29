import { TfiWrite } from 'react-icons/tfi';
import { IoIosSearch } from 'react-icons/io';

function Navbar() {
  return (
    <nav className='flex justify-between items-center px-8 py-4 border-b border-b-gray-500/20'>
      <div className='flex justify-center items-center gap-4'>
        <div className='font-serif text-xl'>Blogging Platform</div>
        <form className='relative'>
          <IoIosSearch className='top-2 left-2 absolute' />
          <input
            type='search'
            placeholder='Search'
            className='bg-gray-200 px-8 py-1 border border-none rounded-2xl placeholder:text-sm'
          />
        </form>
      </div>
      <div className='flex justify-center items-center gap-5 font-serif text-sm'>
        <div className='flex justify-center items-center gap-2 bg-gray-200 px-3 py-1 rounded-xl cursor-pointer'>
          <TfiWrite />
          <span>Write</span>
        </div>
        <div className='bg-black px-3 py-1 rounded-xl text-white cursor-pointer'>
          Login
        </div>
        <div className='bg-gray-200 px-3 py-1 rounded-xl cursor-pointer'>
          Sign Up
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
