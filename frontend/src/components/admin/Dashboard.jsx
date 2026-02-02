import { useEffect, useState } from 'react';
import { useBlogs } from '../../contexts/BlogContext';
import { FaRegFileAlt } from 'react-icons/fa';
import { HiUsers } from 'react-icons/hi';
import { IoMdEye } from 'react-icons/io';
import { TfiStatsUp } from 'react-icons/tfi';
import { fetchUsers } from '../../services/authService';

function Dashboard() {
  const { blogs } = useBlogs();
  const recentBlogs = blogs.slice(0, 3);
  const token = localStorage.getItem('token');
  const [users, setUsers] = useState([]);
  console.log(recentBlogs);

  const stats = [
    {
      title: 'Total Blogs',
      data: blogs.length,
      icon: <FaRegFileAlt />,
      growth: 12,
      color: 'blue-400',
    },
    {
      title: 'Total Users',
      data: blogs.length,
      icon: <HiUsers />,
      growth: 4,
      color: 'black',
    },
    {
      title: 'Total Views',
      data: 100,
      icon: <IoMdEye />,
      growth: 40,
      color: 'orange-500',
    },
    {
      title: 'Published',
      data: blogs.length,
      icon: <TfiStatsUp />,
      growth: 12,
      color: 'green-500',
    },
  ];

  useEffect(() => {
    async function fetch() {
      try {
        const res = await fetchUsers(token);
        setUsers(res.data.users);
      } catch (err) {
        alert(err.message);
      }
    }
    fetch();
  }, []);

  return (
    <div>
      <div className='mb-8'>
        <h1 className='font-semibold text-3xl'>Dashboard</h1>
        <p className='text-black/50 text-sm'>
          Welcome Back! Here's an overview of the blogs.
        </p>
      </div>
      <div className='flex justify-between mb-8'>
        {stats.map((item, index) => (
          <div
            className='flex justify-center items-center gap-4 bg-white p-7 border border-gray-500/20 rounded-xl shadown-2xl'
            key={index}>
            <div>
              <div className='mb-2 text-xs'>{item.title}</div>
              <div className='mb-2 font-semibold text-2xl'>{item.data}</div>
              <div className='text-green-500 text-xs'>
                +{item.growth}% from last month
              </div>
            </div>
            <div className={`bg-gray-200 p-2 rounded-sm text-${item.color}`}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
      <div className='flex gap-4'>
        <div className='bg-white p-6 border border-gray-200 rounded-xl w-full h-fit'>
          <h2 className='mb-4 font-semibold text-lg'>Recent Blogs</h2>

          <div className='flex flex-col divide-y divide-gray-200'>
            {recentBlogs.map((blogs) => (
              <div
                key={blogs._id}
                className='flex justify-between items-center py-4'>
                <div className='flex items-center gap-4'>
                  <div className='flex justify-center items-center bg-blue-100 rounded-full w-10 h-10 font-semibold text-blue-600'>
                    {blogs.title.charAt(0)}
                  </div>

                  <div>
                    <div className='font-medium text-gray-900 tex-sm'>
                      {blogs?.title?.length > 50
                        ? blogs.title.slice(0, 50) + '...'
                        : blogs?.title}
                    </div>
                    <div className='text-gray-500 text-sm'>
                      {blogs.author.name}
                    </div>
                  </div>
                </div>

                <div className='text-gray-500 text-sm'>{blogs.date}</div>
              </div>
            ))}
          </div>
        </div>
        <div className='bg-white p-6 border border-gray-200 rounded-xl w-full h-fit'>
          <h2 className='mb-4 font-semibold text-lg'>Recent Users</h2>

          <div className='flex flex-col divide-y divide-gray-200'>
            {users.map((user) => (
              <div
                key={user.id}
                className='flex justify-between items-center py-4'>
                <div className='flex items-center gap-4'>
                  <div className='flex justify-center items-center bg-blue-100 rounded-full w-10 h-10 font-semibold text-blue-600'>
                    {user.name.charAt(0)}
                  </div>

                  <div>
                    <div className='font-medium text-gray-900'>{user.name}</div>
                    <div className='text-gray-500 text-sm'>{user.email}</div>
                  </div>
                </div>

                <div className='text-gray-500 text-sm'>{user.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
