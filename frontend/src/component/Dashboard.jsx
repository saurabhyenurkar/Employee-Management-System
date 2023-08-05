import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('http://localhost:8081/dashboard')
            .then(res => {
                if (res.data.Status === "Success") {
                    if (res.data.role === "admin") {
                        navigate('/')
                    } else {
                        const id = res.data.id;
                        navigate('/employeedetail/' + id)
                    }

                } else {
                    navigate('/start')
                }
            })
    }, [])

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                navigate('/start')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg mx-4 mb-3 border-bottom">
                <div className="container-fluid">

                    <div className="d-flex align-items-center mb-3 mb-md-0 md-auto text-decoration-none">
                        <span className="fs-4 fw-bold">Admin Dashboard</span>
                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse text-center navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav align-items-center ms-auto ">

                            <li className="me-3 nav-item">
                                <Link to="/" className="mx-2 my-2 btn btn-sm btn-outline-dark">Dashboard</Link>
                            </li>

                            <li className="me-3 nav-item">
                                <Link to="/employees" className="mx-2 my-2 btn btn-sm btn-outline-dark">Manage Employees</Link>
                            </li>

                            <li onClick={handleLogout} className="nav-item">
                                <Link to="" className="mx-2 my-2 btn btn btn-sm btn-dark">Log Out</Link>
                            </li>

                        </ul>
                    </div>

                </div>
            </nav>
            
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard