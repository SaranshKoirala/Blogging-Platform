import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import { fetchMyBlogs } from '../services/blogService';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { useUser } from '../contexts/UserContext';

function Profile() {
  const { user } = useUser();
  const token = localStorage.getItem('token');
  //   const user = localStorage.getItem('user');
  const [myBlogs, setMyBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    async function fetch() {
      try {
        const res = await fetchMyBlogs(token);
        console.log('my-blogs', res);
        setMyBlogs(res.data.data);
      } catch (err) {
        alert(err.message);
      }
    }

    fetch();
  }, [token]);
  //   console.log(user);
  return (
    <div>
      <Navbar />
      <main className='px-36 py-6'>
        <div className='flex gap-8'>
          <div className='border-r border-r-gray-500/20 w-[70%] min-h-[85vh] overflow-y-auto'>
            <div className='mb-5 px-3 pb-1 border-b w-fit text-sm py'>
              Published
            </div>

            {myBlogs.length === 0 ? (
              <div className='w-[60%]'>
                <div className='text-black/50'>No blogs published yet</div>
              </div>
            ) : (
              <div className='pr-8 w-full'>
                {myBlogs?.map((item, index) => (
                  <Blog item={item} key={index} />
                ))}
              </div>
            )}
          </div>
          <div>
            <div className='flex justify-center items-center bg-gray-200 mb-3 rounded-full w-16 h-16 text-black'>
              <FaUser className='w-8 h-8' />
            </div>
            <div className='mb-1 text-xs'>{user?.name}</div>
            <div className='mb-1 text-xs'>Blogs-{myBlogs.length}</div>
            <div className='mb-3 text-xs'>
              Joined on{' '}
              {new Date(user?.createdAt).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </div>
            <Link to={'/'} className='bg-gray-200 px-2 py-1 rounded-xs text-sm'>
              Logout
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
