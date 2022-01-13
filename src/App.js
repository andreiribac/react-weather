import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { Home, MonthStatistics } from './pages';
import { Header } from './components';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="month" element={<MonthStatistics />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
