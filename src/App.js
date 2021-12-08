import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.scss';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';
import messageContext from './contexts/messageContext';
import HomePage from './pages/HomePage';
import loggedInContext from './contexts/loggedInContext';
import Authenticate from './pages/components/authenticate';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('I am being shared!');

  function onClickHandle() {
    setLoggedIn(!loggedIn);
  }

  return (
    <BrowserRouter>
      <loggedInContext.Provider value={[loggedIn, setLoggedIn]}>
        <messageContext.Provider value={[message, setMessage]}>
          <div className='App'>
            <header className='App-header'>
              <ul className='ul-style'>
                <li className='li-style'>
                  <NavLink
                    className={({ isActive }) =>
                      `link ${isActive ? 'App-link-active' : 'App-link'}`
                    }
                    to='/'
                  >
                    Home
                  </NavLink>
                </li>
                <li className='li-style'>
                  <NavLink
                    className={({ isActive }) =>
                      `link ${isActive ? 'App-link-active' : 'App-link'}`
                    }
                    to='/about'
                  >
                    About
                  </NavLink>
                </li>
                <li className='li-style'>
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
              {loggedIn.toString()}
              <button className='button' onClick={onClickHandle}>Login/logout</button>
              <Routes>
                <Route path='/' exact element={<HomePage />} />
                <Route path='/about' exact element={<AboutPage />} />
                <Route
                  path='/user:user'
                  element={
                    <Authenticate>
                      <UserPage />
                    </Authenticate>
                  }
                />
              </Routes>
            </header>
          </div>
        </messageContext.Provider>
      </loggedInContext.Provider>
    </BrowserRouter>
  );
}

export default App;
