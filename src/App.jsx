import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Layout from './layout';
import Activites from './components/Dash_Content/Activities';
import Courses from './components/Dash_Content/Course';
import Resouses from './components/Dash_Content/Resourse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Dashboard/></Layout>} />
        <Route path="/activites" element={<Layout><Activites/></Layout>} />
        <Route path="/courses" element={<Layout><Courses/></Layout>} />
        <Route path="/resourses" element={<Layout><Resouses/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
