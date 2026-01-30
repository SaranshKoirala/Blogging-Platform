function Blog({ item }) {
  return (
    <div key={item._id} className='mb-4 pb-4 border-b border-b-gray-500/20'>
      <div className='flex items-center gap-4 pb-1 text-xs'>
        <p>Saransh Koirala</p>{' '}
        <div>
          {new Date(item.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })}
        </div>
      </div>
      <div className='flex justify-between items-center mb-4'>
        <div className='w-[85%]'>
          <div className='pb-1 font-serif font-semibold font-stretch-50%'>
            {item.title}
          </div>
          <div className='font-light text-black/50 text-sm'>
            {item.content.slice(0, 110)}
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
  );
}

export default Blog;
