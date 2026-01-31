import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { BlogProvider } from './contexts/BlogContext.jsx';
import { UserProvider } from './contexts/UserContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <BlogProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </BlogProvider>
    </BrowserRouter>
  </StrictMode>,
);
