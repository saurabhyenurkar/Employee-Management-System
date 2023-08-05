import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
    var i = 1;
    const [adminCount, setAdminCount] = useState()
    const [employeeCount, setEmployeeCount] = useState()
    const [salary, setSalary] = useState()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/getAdmin')
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

    useEffect(() => {
        axios.get('http://localhost:8081/adminCount')
            .then(res => {
                setAdminCount(res.data[0].admin)
            }).catch(err => console.log(err));

        axios.get('http://localhost:8081/employeeCount')
            .then(res => {
                setEmployeeCount(res.data[0].employee)
            }).catch(err => console.log(err));

        axios.get('http://localhost:8081/salary')
            .then(res => {
                setSalary(res.data[0].sumOfSalary)
            }).catch(err => console.log(err));
    }, [])

    return (
        <div className='px-'>
            <div className="px-4 text-center mt-4">
                <div className="row row-cols-3 row-cols-lg-3  g-lg-3">

                    <div className="col">
                        <div className="py-4 rounded-3 text-light bg-secondary">
                            Admin: <span className="badge bg-primary">{adminCount}</span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="py-4 rounded-3 text-light bg-secondary">
                            Employee: <span className="badge bg-primary">{employeeCount}</span>
                        </div>
                    </div>

                    <div className="col">
                        <div className="py-4 rounded-3 text-light bg-secondary">
                            Salary: <span className="badge bg-primary">&#x20B9; {salary}</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className='p-4 border rounded-3 shadow-lg m-4'>

                <div className='text-center mt-3 mb-4'>
                    <h2>Admin List</h2>
                </div>

                <div className=' '>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((admin, index) => {
                                return <tr key={index}>
                                    <th scope="row">{i++}</th>
                                    <td>{admin.email}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Home