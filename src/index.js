import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import { DetailedView, SearchResults } from './pages';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/title" element={<DetailedView />} />
    </Routes>
  </Router>
);
