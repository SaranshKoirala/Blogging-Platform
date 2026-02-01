import { Outlet, Link } from 'react-router-dom';
import { RiAdminFill } from 'react-icons/ri';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { FaFileAlt } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { GoSignOut } from 'react-icons/go';
import { useUser } from '../contexts/UserContext';

function Admin() {
  const { logout } = useUser();
  const Links = [
    { title: 'Dashboard', icon: <RiDashboardHorizontalLine /> },
    { title: 'Blogs', icon: <FaFileAlt /> },
    { title: 'Users', icon: <HiUsers /> },
  ];
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <aside className='flex flex-col bg-gray-900 p-5 w-64 text-white'>
        <div className='flex justify-start items-center gap-4 mb-10 py-2 border-b border-b-gray-400'>
          <RiAdminFill className='text-white text-3xl' />
          <div>
            <h1 className='font-bold text-lg'>Admin Panel</h1>
            <p className='-mt-1 text-gray-400 text-xs'>Manage the blogs</p>
          </div>
        </div>
        <div className='mb-2 text-[11px] text-gray-400'>MENU</div>
        <nav className='flex flex-col flex-1 gap-5 text-sm'>
          {Links.map((item, index) => (
            <Link
              to={item.title.toLowerCase()}
              key={index}
              className='flex justify-start items-center gap-2'>
              <span>{item.icon}</span>
              <div>{item.title}</div>
            </Link>
          ))}
          <div
            className='flex justify-start items-center gap-2 mt-auto cursor-pointer'
            onClick={logout}>
            <GoSignOut />
            <div>Sign Out</div>
          </div>
        </nav>
      </aside>

      <main className='flex-1 bg-orange-50/50 overflow-auto'>
        <div className='border-b border-b-gray-500/20 w-full h-12'></div>
        <div className='p-5'>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Admin;
