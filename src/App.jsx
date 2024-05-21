import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Layout from './layout';
import Activites from './components/Dash_Content/Activities';
import Courses from './components/Dash_Content/Course';
import Resouses from './components/Dash_Content/Resourse';
import Approve from './components/Approve';
import ApproveContent from './components/Approve_content/content01';
import Content from './components/Approve_content/Detail';
import Induction from './components/Induction';
import PlanA from './components/Induction_content/PlanA';
import Indetail from './components/Induction_content/Details';
import Session from './components/Induction_content/CreateSession';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Dashboard/></Layout>} />
        <Route path="/activites" element={<Layout><Activites/></Layout>} />
        <Route path="/courses" element={<Layout><Courses/></Layout>} />
        <Route path="/resourses" element={<Layout><Resouses/></Layout>} />
        <Route path="/approve" element={<Layout><Approve/></Layout>} />
        <Route path="/content01" element={<Layout><ApproveContent/></Layout>} />
        <Route path="/content" element={<Layout><Content/></Layout>} />
        <Route path="/induction" element={<Layout><Induction/></Layout>} />
        <Route path="/planA" element={<Layout><PlanA/></Layout>} />
        <Route path="/details" element={<Layout><Indetail/></Layout>} />
        <Route path="/createSession" element={<Layout><Session/></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
