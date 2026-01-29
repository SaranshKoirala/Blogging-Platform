import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blogService';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      const res = await fetchBlogs(1);
      setBlogs(res.data.data.data);
    }

    loadBlogs();
  }, []);

  console.log(blogs);
  return (
    <div className=''>
      <div className='mb-5 px-3 pb-1 border-b w-fit text-sm py'>Home</div>
      <div className='w-[60%]'>
        {blogs.map((item, index) => (
          <div
            key={item._id}
            className='mb-4 pb-4 border-b border-b-gray-500/20'>
            <div className='flex items-center gap-4 pb-1 text-xs'>
              <p>Saransh Koirala</p>{' '}
              <div>
                {new Date(item.createdAt).toLocaleDateString('en-US', {
                  month: 'short', // "Jan"
                  day: 'numeric', // 29
                  year: 'numeric', // 2026
                })}
              </div>
            </div>
            <div className='flex justify-between items-center mb-4'>
              <div className='w-[85%]'>
                <div className='pb-1 font-serif font-semibold text-lg'>
                  {item.title}
                </div>
                <div className='font-light text-sm'>
                  {item.content.slice(0, 100)}
                </div>
              </div>
              <div className='w-20 h-20'>
                <img
                  src={`http://localhost:3000/${item.image}`}
                  className='w-full h-full'
                />
              </div>
            </div>
            <div className='bg-gray-200 px-3 py-1 rounded-2xl w-fit text-xs'>
              {item.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
