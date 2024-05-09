import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Layout from './layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Dashboard/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
