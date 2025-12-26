import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DistrictAdminDashboard from "./DistrictAdminDashboard";
import AdminLogin from "./AdminLogin";
import AddSchoolPage from "./AddSchool";
import Navbar from "./Navbar";
import CodeChuru from "./codechur/CodeChuru";
import LibrarianRequests from "./requests"
import Developer from "./Developer";
import SchoolOverviewPage from "./SchoolOverviewPage";
import ContactPage from "./Contect";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/request" element={<LibrarianRequests />}/>
        <Route path="/districtadmin/dashboard" element={<DistrictAdminDashboard />} />
        <Route path="/admin/add-schools" element={<AddSchoolPage />} />
        <Route path="/codechuru"  element={<CodeChuru />}/>
        <Route path="/devloper" element={<Developer />}/>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/request" element={<LibrarianRequests />} />
        <Route path='/districtadmin/:schoolId' element={<SchoolOverviewPage />} />
      </Routes>
  
    </div>
  );
}

export default App;
