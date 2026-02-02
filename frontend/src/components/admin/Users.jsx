import { FiSearch, FiTrash2 } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { deleteUser, fetchUsers } from '../../services/authService';

function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const token = localStorage.getItem('token');

  useEffect(() => {
    async function fetch() {
      try {
        const res = await fetchUsers(token);
        setUsers(res.data.users);
      } catch (err) {
        alert(err.message);
      }
    }
    fetch();
  }, []);

  async function handleDeleteUser(id) {
    if (!confirm('Are you sure you want to delete this user?')) return;

    try {
      await deleteUser(id, token);
      alert('User deleted successfully!');
      setUsers((prev) => prev.filter((user) => user._id !== id));
    } catch {
      alert('Something went wrong!');
    }
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <div className='mb-8'>
        <h1 className='font-semibold text-3xl'>Users</h1>
        <p className='text-black/50 text-sm'>Manage users and their blogs</p>
      </div>

      <div className='bg-white p-6 border border-gray-200 rounded-xl'>
        <div className='mb-6'>
          <div className='relative w-full max-w-sm'>
            <FiSearch className='top-1/2 left-3 absolute text-gray-400 -translate-y-1/2' />
            <input
              type='text'
              placeholder='Search users...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className='py-2 pr-4 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 w-full'
            />
          </div>
        </div>

        {/* Users */}
        <div className='space-y-4'>
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              className='hover:bg-gray-50 p-4 border border-gray-200 rounded-lg transition'>
              {/* User Header */}
              <div className='flex justify-between items-center'>
                <div>
                  <h3 className='font-semibold text-lg'>{user.name}</h3>
                  <p className='text-gray-500 text-sm'>{user.email}</p>
                </div>

                <button
                  onClick={() => handleDeleteUser(user._id)}
                  className='hover:bg-red-50 p-2 rounded-md text-red-500 hover:text-red-700 transition'
                  title='Delete user'>
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Users;
