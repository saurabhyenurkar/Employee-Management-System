import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EmployeeEdit() {
    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        salary: '',
    })

    const navigate = useNavigate()

    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:8081/get/' + id)
            .then(res => {
                setData({
                    ...data, name: res.data.Result[0].name,
                    email: res.data.Result[0].email,
                    address: res.data.Result[0].address,
                    salary: res.data.Result[0].salary
                })
            })
            .catch(err => console.log(err));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8081/update/' + id, data)
            .then(res => {
                if (res.data.Status === "Success") {
                    alert("Employee Update Successfully");
                    navigate('/employees')
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='px-4 bg-body-light'>
            <div className="form-signin border px-5 rounded-3 shadow-lg m-auto">
                <form onSubmit={handleSubmit}>

                    <div className="mt-4 mb-4">
                        <h2 className='text-center'>Update Employee</h2>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' autoComplete='off' required
                            onChange={e => setData({ ...data, name: e.target.value })} value={data.name} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' autoComplete='off' required
                            onChange={e => setData({ ...data, email: e.target.value })} value={data.email} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input type="text" className="form-control" id="salary" name='salary' autoComplete='off' required
                            onChange={e => setData({ ...data, salary: e.target.value })} value={data.salary} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name='address' autoComplete='off' required
                            onChange={e => setData({ ...data, address: e.target.value })} value={data.address} />
                    </div>

                    <div className="py-3 d-grid">
                        <button className="btn btn-primary" type="submit">Create</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default EmployeeEdit