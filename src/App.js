import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? 'App-link-active' : 'App-link'}`
                }
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? 'App-link-active' : 'App-link'}`
                }
                to='/about'
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  `link ${isActive ? 'App-link-active' : 'App-link'}`
                }
                to='/user:mike'
              >
                User
              </NavLink>
            </li>
          </ul>
          <Routes>
            <Route path='/' exact element={<h1>Welcome Home</h1>} />
            <Route path='/about' exact element={<AboutPage />} />
            <Route path='/user:user' exact element={<UserPage />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
