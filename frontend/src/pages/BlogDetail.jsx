import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { fetchBlogBySlug } from '../services/blogService';
import { useParams } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function BlogDetail() {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    async function handleSlug() {
      const res = await fetchBlogBySlug(slug);
      setBlog(res.data.data);
    }

    handleSlug();
  }, [slug]);

  if (!blog) return null;
  console.log(blog);

  return (
    <>
      <Navbar />

      <div className='space-y-6 mx-auto px-4 py-10 max-w-4xl'>
        <div className='rounded-lg w-full h-105 overflow-hidden'>
          <img
            src={`http://localhost:3000/${blog.image}`}
            alt={blog.title}
            className='w-full h-full object-cover'
          />
        </div>

        <h1 className='font-serif font-bold text-gray-900 text-3xl md:text-4xl'>
          {blog.title}
        </h1>

        <div className='flex justify-between items-center pb-4 border-b text-gray-500 text-sm'>
          <div className='flex items-center gap-2'>
            <FaUser />
            <span>{blog.author?.name}</span>
          </div>

          <div>
            Published on{' '}
            {new Date(blog.createdAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>

        <div className='max-w-none text-gray-800 prose prose-lg'>
          {blog.content}
        </div>
      </div>
    </>
  );
}

export default BlogDetail;
