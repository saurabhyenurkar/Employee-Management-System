import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddEmployee() {
    const [data, setData] = useState({
        name: '',
        email: '',
        passwoed: '',
        salary: '',
        address: '',
        image: ''
    })

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);
        formdata.append("salary", data.salary);
        formdata.append("address", data.address);
        formdata.append("image", data.image);
        axios.post('http://localhost:8081/create', formdata)
            .then(res => {
                alert("Employee Add Successfully");
                navigate('/employees')
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='px-4 bg-body-light'>
            <div className="form-signin border px-5 rounded-3 shadow-lg m-auto">
                <form onSubmit={handleSubmit}>

                    <div className="mt-4 mb-4">
                        <h2 className='text-center'>Add Employee</h2>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' autoComplete='off' required
                            onChange={e => setData({ ...data, name: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' autoComplete='off' required
                            onChange={e => setData({ ...data, email: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' autoComplete='off' required
                            onChange={e => setData({ ...data, password: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input type="text" className="form-control" id="salary" name='salary' autoComplete='off' required
                            onChange={e => setData({ ...data, salary: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" name='address' autoComplete='off' required
                            onChange={e => setData({ ...data, address: e.target.value })} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="profile" className="form-label">Profile Picture</label>
                        <input type="file" className="form-control" id="profile" name='profile' required
                            onChange={e => setData({ ...data, image: e.target.files[0] })} />
                    </div>

                    <div className="py-3 d-grid">
                        <button className="btn btn-primary" type="submit">Create</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddEmployee