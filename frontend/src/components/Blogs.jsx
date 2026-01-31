import Blog from './Blog';
import { useBlogs } from '../contexts/BlogContext';

function Blogs() {
  const { blogs, category, setCategory, setPage, hasMore, loading } =
    useBlogs();

  const categories = [
    'All',
    'Technology',
    'Lifestyle',
    'Fashion',
    'Sports',
    'Business',
    'Programming',
  ];

  async function handleCategoryBtn(category) {
    if (category === 'All') {
      setCategory(null);
    } else {
      setCategory(category);
    }
    setPage(1);
  }

  console.log(blogs);
  return (
    <>
      <div className='flex gap-8'>
        <div className='w-[70%] overflow-y-auto'>
          <div className='mb-5 px-3 pb-1 border-b w-fit text-sm py'>Home</div>

          {loading && blogs.length === 0 ? (
            <div className='text-black/50" className="w-[60%]'>Loading...</div>
          ) : blogs.length === 0 ? (
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
          <div className='gap-2 grid grid-cols-3'>
            {categories.map((item, index) => (
              <button
                key={index}
                className={`flex justify-center items-center p-2 rounded-2xl text-xs cursor-pointer ${
                  (item === 'All' && category === null) || item === category
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } `}
                onClick={() => handleCategoryBtn(item)}>
                <p>{item}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      {hasMore && (
        <button className='border-b border-b-black/50 text-xs cursor-pointer'>
          Load more
        </button>
      )}
    </>
  );
}

export default Blogs;
