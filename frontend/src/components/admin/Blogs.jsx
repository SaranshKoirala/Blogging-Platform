import { FiSearch, FiTrash2 } from 'react-icons/fi';
import { useBlogs } from '../../contexts/BlogContext';
import { deleteBlog } from '../../services/blogService';

function Blogs() {
  const { blogs, setBlogs, search, setSearch } = useBlogs();
  const token = localStorage.getItem('token');

  async function handleDeleteBlog(id) {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      await deleteBlog(id, token);
      alert('Blog deleted successfully!');
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || error.message);
    }
  }

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className='mb-8'>
        <h1 className='font-semibold text-3xl'>Blogs</h1>
        <p className='text-black/50 text-sm'>Manage the blog posts</p>
      </div>

      <div className='bg-white p-6 border border-gray-200 rounded-xl'>
        <div className='mb-6'>
          <div className='relative w-full max-w-sm'>
            <FiSearch className='top-1/2 left-3 absolute text-gray-400 -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search blogs...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='py-2 pr-4 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 w-full'
            />
          </div>
        </div>

        <div className='flex flex-col divide-y divide-gray-200'>
          {filteredBlogs.map((blog) => (
            <div
              key={blog._id}
              className='group flex justify-between items-center hover:bg-gray-50 px-2 py-4 rounded-lg transition'>
              <div>
                <h3 className='font-semibold text-gray-900'>{blog.title}</h3>
                <p className='mt-1 text-gray-500 text-sm'>
                  {blog.author?.name} •{' '}
                  {new Date(blog.createdAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <button
                onClick={() => handleDeleteBlog(blog._id)}
                className='hover:bg-red-50 opacity-0 group-hover:opacity-100 p-2 rounded-md text-red-500 hover:text-red-700 transition'
                title='Delete blog'>
                <FiTrash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blogs;
