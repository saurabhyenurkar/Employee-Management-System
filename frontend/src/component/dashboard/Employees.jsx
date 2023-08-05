import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Employees() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/getEmployee')
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log(res.data.Result)
                    setData(res.data.Result);
                } else {
                    alert("Failed..");
                }
            })
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/' + id)
            .then(res => {
                if (res.data.Status === "Success") {
                    window.location.reload('');
                } else {
                    alert("Error")
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='shadow-lg p-4 border rounded-3  m-4'>

            <div className='text-center py-2'>
                <h2>Employee List</h2>
            </div>

            <div className='justify-content-end d-flex m-3 mt-3'>
                <Link to='/create' className="btn btn-outline-danger">Add Employee</Link>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((employee, index) => {
                        return <tr key={index}>
                            <th scope="row">{employee.name}</th>
                            <td>{
                                <img className='rounded-circle' src={`http://localhost:8081/images/` + employee.image} alt='delete' width="40" height="40" />
                            }</td>
                            <td>{employee.email}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.address}</td>
                            <td>
                                <Link to={`/employeeEdit/` + employee.id} className='me-4'><img src='/assets/logo/edit.png' alt='edit' width="25px" height="25px" /></Link>
                                <Link><img onClick={e => handleDelete(employee.id)} src='/assets/logo/delete.png' alt='delete' width="29px" height="29px" /></Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            
        </div>
    )
}

export default Employees