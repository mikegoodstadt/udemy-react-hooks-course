import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DepositPage from './pages/DepositPage';
import WithdrawalPage from './pages/WithdrawalPage';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
        <ul className='ul-style'>
          <li className='li-style'><NavLink to='/' className='App-link'>Home</NavLink></li>
          <li className='li-style'><NavLink to='/deposit' className='App-link'>Deposit</NavLink></li>
          <li className='li-style'><NavLink to='/withdrawal' className='App-link'>Withdrawal</NavLink></li>
        </ul>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/deposit' element={<DepositPage />}></Route>
          <Route path='/withdrawal' element={<WithdrawalPage />}></Route>
        </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
