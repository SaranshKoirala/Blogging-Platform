import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './pages/Profile';
import AdminRoute from './routes/AdminRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path='/profile/:user' element={<Profile />} />
      </Route>

      <Route element={<AdminRoute />}>
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
