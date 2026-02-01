import Navbar from '../components/Navbar';
import { FiSend } from 'react-icons/fi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FiUpload } from 'react-icons/fi';
import { useState } from 'react';
import { createBlog } from '../services/blogService';
import { useNavigate } from 'react-router-dom';

function Write() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');

  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  function handleCoverImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      alert('Please select a file!');
      return; // Add return here
    }
    setImage(file);
  }

  async function submitBlog(e) {
    // Make it async
    e.preventDefault();

    if (!token) {
      alert('No authentication token found!');
      return;
    }

    if (!title || !category || !image || !content) {
      return alert('Fill out the form!');
    }

    // ✅ CORRECT - Create FormData inside submit function
    const formData = new FormData();
    formData.append('image', image); // image has the actual file now
    formData.append('title', title);
    formData.append('category', category);
    formData.append('content', content);

    try {
      await createBlog(token, formData); // Add await
      navigate('/');
    } catch (err) {
      console.error('Error creating blog:', err);
      alert(err.message || 'Failed to create blog');
    }
  }

  function handleCancelBtn(e) {
    e.preventDefault(); // Prevent form submission
    setTitle('');
    setCategory('');
    setImage(null);
    setContent('');
  }

  return (
    <div>
      <Navbar />
      <form
        className='space-y-6 mx-auto px-4 py-10 max-w-4xl'
        onSubmit={submitBlog}>
        <div className='flex justify-end gap-4 mb-8 w-full text-sm'>
          <button
            type='button' // Add type='button' to prevent form submission
            className='bg-gray-200 px-5 py-1 rounded-sm cursor-pointer'
            onClick={handleCancelBtn}>
            Cancel
          </button>
          <button
            className='flex justify-center items-center gap-2 bg-black px-3 py-1 rounded-sm text-white cursor-pointer'
            type='submit'>
            <FiSend />
            <div>Publish</div>
          </button>
        </div>
        <input
          type='text'
          placeholder='Your amazing title....'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='mb-8 p-2 py-6 border-b border-b-gray-500/20 focus:outline-none w-full h-4 font-serif font-bold font-stretch-75% text-3xl placeholder:text-3xl'
        />
        <div className='relative flex flex-col gap-2 mb-8 w-fit'>
          <label className='font-semibold text-sm'>Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className='px-4 py-2 pr-8 border border-gray-500/20 rounded-sm w-fit text-xs appearance-none cursor-pointer'>
            <option value={''}>Select a category</option>
            <option value={'Technology'}>Technology</option>
            <option value={'Lifestyle'}>Lifestyle</option>
            <option value={'Fashion'}>Fashion</option>
            <option value={'Sports'}>Sports</option>
            <option value={'Business'}>Business</option>
            <option value={'Programming'}>Programming</option>
          </select>
          <span className='top-10 right-2 absolute cursor-pointer'>
            <RiArrowDropDownLine className='font-light text-xl' />
          </span>
        </div>

        <div className='flex flex-col gap-2 mb-8'>
          <label className='font-semibold text-sm'>Cover Image </label>

          {!image ? (
            <label
              htmlFor='coverImage'
              className='flex flex-col justify-center items-center gap-3 bg-[#faf7f2] border-2 border-gray-300 hover:border-gray-400 border-dashed rounded-lg w-[60%] h-72 text-gray-600 text-sm transition cursor-pointer'>
              <FiUpload className='text-2xl' />
              <span>Click to upload cover image</span>
              <span className='text-gray-400 text-xs'>Max 5MB</span>
            </label>
          ) : (
            <div className='relative border rounded-lg w-[60%] h-72 overflow-hidden'>
              <img
                src={URL.createObjectURL(image)}
                alt='Cover preview'
                className='w-full h-full object-cover'
              />

              <label
                htmlFor='coverImage'
                className='absolute inset-0 flex justify-center items-center bg-black/40 opacity-0 hover:opacity-100 text-white text-sm transition cursor-pointer'>
                Click to change image
              </label>
            </div>
          )}

          <input
            id='coverImage'
            type='file'
            accept='image/*'
            onChange={handleCoverImageChange}
            className='hidden'
          />
        </div>

        <div className='flex flex-col gap-2 mb-8 text-sm'>
          <label className='font-semibold text-sm'>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='p-3 border border-gray-500/20 w-full h-96 resize-none'
            placeholder='Write your story here...'
          />
        </div>
      </form>
    </div>
  );
}

export default Write;
