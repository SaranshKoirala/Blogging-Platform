import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './pages/Profile';
import AdminRoute from './routes/AdminRoute';
import BlogDetail from './pages/BlogDetail';
import Write from './pages/Write';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:slug' element={<BlogDetail />} />

      <Route element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path='/write' element={<Write />} />
        <Route path='/profile/:user' element={<Profile />} />
      </Route>

      <Route element={<AdminRoute />}>
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
