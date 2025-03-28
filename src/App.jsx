import './App.css';
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About'; // Import the About component
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<ListEmployeeComponents />} />

        {/* List Employees Route */}
        <Route path="/employees/all" element={<ListEmployeeComponents />} />

        {/* Add Employee Details Route */}
        <Route path="/employees" element={<EmployeeComponent />} />

        {/* UpdateEmployee Details Route */}
        <Route path='/edit-employee/:id' element={<EmployeeComponent />} />

        {/* About Us Route */}
        <Route path="/about" element={<About />} />

        {/* Contact Us Route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;