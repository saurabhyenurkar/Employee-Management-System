import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function EmployeeLogin() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/employeelogin', values)
            .then(res => {
                if (res.data.Status === 'Success') {
                    const id = res.data.id;
                    alert("Login Successfully")
                    navigate('/employeedetail/' + id);

                } else {
                    setError(res.data.Error);
                    alert(error && error);
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='d-flex text-light bgs justify-content-center vh-100 align-items-center'>
            <main className="container-sm form-signin w-50 border p-4 rounded-4 shadow-lg m-auto">
                <form onSubmit={handleSubmit}>

                    <div className="mb-3 mb-4">
                        <h1 className='text-center fw-bold'>Login Here</h1>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control transparent-input border text-light" id="exampleInputEmail1" aria-describedby="emailHelp"
                            name='email' autoComplete='off' onChange={e => setValues({ ...values, email: e.target.value })} />
                        <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control transparent-input border text-light" id="exampleInputPassword1"
                            name='password' autoComplete='off' onChange={e => setValues({ ...values, password: e.target.value })} />
                    </div>

                    <div className="py-3 text-center">
                        <button className="btn btn-primary me-4" type="submit">Login</button>
                        <button className="btn btn-success" type="submit" onClick={e => navigate('/start')}>Back</button>
                    </div>

                </form>
            </main>
        </div>
    )
}

export default EmployeeLogin