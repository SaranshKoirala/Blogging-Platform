import { createContext, useContext, useEffect, useState } from 'react';
import { fetchBlogs } from '../services/blogService';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    async function loadBlogs() {
      setLoading(true);
      try {
        const res = await fetchBlogs({ page, category, search });
        setBlogs(res.data.data.data);
        setHasMore(res.data.data.hasMore);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadBlogs();
  }, [page, category, search]);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        loading,
        page,
        setPage,
        category,
        setCategory,
        search,
        setSearch,
        hasMore,
      }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);
