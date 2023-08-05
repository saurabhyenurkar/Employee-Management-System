import { useState } from 'react';
import "../node_modules/jquery/dist/jquery.min.js";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard.jsx';
import Home from './component/Home.jsx';
import Employees from './component/dashboard/Employees.jsx';
import AddEmployee from './component/dashboard/AddEmployee.jsx';
import EmployeeEdit from './component/dashboard/EmployeeEdit.jsx';
import Login from './component/Login.jsx';
import Start from './component/Start.jsx';
import EmployeeLogin from './component/dashboard/EmployeeLogin.jsx';
import EmployeeDetail from './component/dashboard/EmployeeDetail.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />}>
          <Route path='' element={<Home />}></Route>
          <Route path='/employees' element={<Employees />}></Route>
          <Route path='/create' element={<AddEmployee />}></Route>
          <Route path='/employeeEdit/:id' element={<EmployeeEdit />}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/start' element={<Start />}></Route>
        <Route path='/employeelogin' element={<EmployeeLogin />}></Route>
        <Route path='/employeedetail/:id' element={<EmployeeDetail />}></Route>
      </Routes>
    </Router>
  )
}

export default App
