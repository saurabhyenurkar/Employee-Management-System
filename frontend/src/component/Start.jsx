import React from 'react'
import '../style.css'
import { useNavigate } from 'react-router-dom'

function Start() {
    const navigate = useNavigate()
    return (
        <div className='bgs'>
            <div className='d-flex justify-content-center vh-100 align-items-center bg-body-light'>
                <main className="container-sm form-signin  w-50 border p-4 rounded-4 shadow-lg m-auto">
                    <div className="container text-light text-center">

                        <h1 className='border-bottom mb-5'>Employee Management System</h1>
                        <h2 className='mb-4'>Login As</h2>

                        <div className="row">
                            <div className="col">
                                <button type="button" className="p-3 px-5 text-light border btn btn-outline-primary btn-lg" onClick={e => navigate('/employeelogin')}>Employee</button>
                            </div>

                            <div className="col">
                                <button type="button" className="p-3 px-5 text-light border btn btn-outline-warning btn-lg" onClick={e => navigate('/login')}>Admin</button>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Start