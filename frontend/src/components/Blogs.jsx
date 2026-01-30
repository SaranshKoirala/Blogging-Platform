import { useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blogService';
import Blog from './Blog';

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function loadBlogs() {
      const res = await fetchBlogs(1);
      setBlogs(res.data.data.data);
    }

    loadBlogs();
  }, []);

  const categories = [
    'Technology',
    'Lifestyle',
    'Fashion',
    'Sports',
    'Business',
    'Programming',
  ];

  console.log(blogs);
  return (
    <div className='flex gap-8'>
      <div className='w-[70%]'>
        <div className='mb-5 px-3 pb-1 border-b w-fit text-sm py'>Home</div>
        {blogs.length < 1 ? (
          <div className='w-[60%]'>
            <div className='text-black/50'>No Blogs Found</div>
          </div>
        ) : (
          <div className='pr-8 border-r border-r-gray-500/20 w-full'>
            {blogs.map((item, index) => (
              <Blog item={item} key={index} />
            ))}
          </div>
        )}
      </div>
      <div>
        <div className='mb-4 font-serif font-semibold font-stretch-50%'>
          Stories from all interest
        </div>
        <div className='gap-3 grid grid-cols-3'>
          {categories.map((item, index) => (
            <div
              key={index}
              className='flex justify-center items-center bg-gray-200 p-2 rounded-2xl text-xs cursor-pointer'>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
