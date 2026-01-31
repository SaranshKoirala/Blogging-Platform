import { Navigate } from 'react-router-dom';

function AdminRoute() {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to={'/login'} replace />;
  }

  if (user.role !== 'admin') {
    return <Navigate to={'/'} replace />;
  }
}
export default AdminRoute;
