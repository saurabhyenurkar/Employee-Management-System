import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeDetail() {
    const { id } = useParams();
    const navigate = useNavigate()
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/get/' + id)
            .then(res => setEmployee(res.data.Result[0]))
            .catch(err => cansole.log(err));
    })

    const handleLogout = () => {
        axios.get('http://localhost:8081/logout')
            .then(res => {
                navigate('/start')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='shadow-lg p-4 border rounded-3 m-5 border rounded-3 shadow-lg'>
            <div className='container mt-5 mb-5 d-flex justify-content-center align-items-center'>
                <div className='container-sm'>

                    <h1 className='text-center mt-3 mb-3'>Employee Details</h1>

                    <div className='text-center p-2 mb-3'>
                        <img className='rounded-circle border p-1' src={`http://localhost:8081/images/` + employee.image} alt='profile' width="150" height="150" />
                    </div>

                    <table className="table border">
                        <thead>

                            <tr>
                                <th scope="col" className='text-muted'>Full Name</th>
                                <th scope="col">{employee.name}</th>
                            </tr>

                            <tr>
                                <th scope="col" className='text-muted'>Email Address</th>
                                <th scope="col">{employee.email}</th>
                            </tr>

                            <tr>
                                <th scope="col" className='text-muted'>Salary</th>
                                <th scope="col">{employee.salary}</th>
                            </tr>

                        </thead>
                    </table>

                    <div className="text-center mb-4 mt-4">
                        <a to="/" className="btn btn-lg btn-dark" onClick={handleLogout}>Logout</a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetail