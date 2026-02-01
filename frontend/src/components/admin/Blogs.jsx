// function Blogs() {
//   return <div>This is the blogs content</div>;
// }
// export default Blogs;
import { FiSearch, FiTrash2 } from 'react-icons/fi';

const blogs = [
  {
    id: 1,
    title: 'How to Build a Scalable MERN Blog Platform from Scratch',
    author: 'Saransh Koirala',
    createdAt: 'Feb 1, 2026',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Understanding React Router Layouts and Nested Routes',
    author: 'Saransh Koirala',
    createdAt: 'Jan 30, 2026',
    status: 'Draft',
  },
  {
    id: 3,
    title: 'Why Every Developer Should Learn MongoDB Aggregations',
    author: 'John Doe',
    createdAt: 'Jan 28, 2026',
    status: 'Published',
  },
];

const truncate = (text, length = 50) =>
  text.length > length ? text.slice(0, length) + '...' : text;

function Blogs() {
  return (
    <div>
      <div className='mb-8'>
        <h1 className='font-semibold text-3xl'>Blogs</h1>
        <p className='text-black/50 text-sm'>Manage the blogs post</p>
      </div>
      <div className='bg-white p-6 border border-gray-200 rounded-xl'>
        {/* Search */}
        <div className='mb-6'>
          <div className='relative w-full max-w-sm'>
            <FiSearch className='top-1/2 left-3 absolute text-gray-400 -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search blogs...'
              className='py-2 pr-4 pl-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full'
            />
          </div>
        </div>

        {/* Blog List */}
        <div className='flex flex-col divide-y divide-gray-200'>
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className='group flex justify-between items-center hover:bg-gray-50 px-2 py-4 rounded-lg transition'>
              {/* Left */}
              <div>
                <h3 className='font-semibold text-gray-900'>
                  {truncate(blog.title)}
                </h3>
                <p className='mt-1 text-gray-500 text-sm'>
                  {blog.author} • {blog.createdAt}
                </p>
              </div>

              {/* Right - Actions */}
              <button
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
