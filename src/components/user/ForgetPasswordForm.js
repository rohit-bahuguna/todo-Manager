

import React, { useEffect, useImperativeHandle, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { forgetUserPassword } from '../../utils/userAPI'
import Loader from '../comman/Loader'

const ForgetPasswordForm = () => {
    const { token , id } = useParams()
    const [userPassword, setUserPassword] = useState({
        password: '',
        confirmPassword: ''
        
    })
    const initialErrors = {
        passwordError: { status: false, error: '' },
        confirmPasswordError: { status: false, error: '' },
        resetPasswordError : {status : false , error: ''}
    }
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const [passwordError, setPasswordError] = useState(initialErrors)
    const navigate = useNavigate()
    const validatePassword = (userPassword) => {
        let errors = {}
        let success = true
        if (!(userPassword.password === userPassword.confirmPassword)) {
            errors = {
                ...errors,
                confirmPasswordError: {
                    status: true,
                    error: 'passsword and confirm password should be same'
                }
            };
            success = false;
        }

        if (userPassword.confirmPassword === '') {
            errors = {
                ...errors,
                confirmPasswordError: {
                    status: true,
                    error: 'confirm password can not be empty'
                }
            };
            success = false;
        }
        if (userPassword.password.length < 8) {
            errors = {
                ...errors,
                passwordError: {
                    status: true,
                    error: 'password should have atleast 8 character'
                }
            };
            success = false;
        }
        return { success, errors }
    }

    const getUserData = (e) => {
        setPasswordError({ ...initialErrors })
        setUserPassword({ ...userPassword, [e.target.name]: e.target.value })
    }

    const forgetUserPasswordHandler = async () => {

        const { success, errors } = validatePassword(userPassword);

        if (success) {
            setLoading(true)
            try {
                const response = await forgetUserPassword(token, id , userPassword.password)
                setLoading(false)
                toast.success(response.data.message)
                setSuccess(true)
                setTimeout(() => {
                    navigate('/')
                }, 5000)
            } catch (error) {
                 setLoading(false)
             
                toast.error("reset password link expire")
                
                setTimeout(() => {
                    navigate('/')
                },3000)
               
               
            }
        } else {
            setPasswordError({ ...passwordError, ...errors })

        }

    }

   




    return (
        <div className={`flex  justify-center my-5 mx-3`}>
            <ToastContainer />

            <div className={`flex flex-col gap-5 p-8 rounded-lg border-2`}>
                {!success ? <>
                    <h1 className={`text-center`}> Forget Password</h1>

                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Password
                        </span>
                        <input
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
						placeholder:text-sm
						focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="Enter Your Password ?"
                            type="password"
                            name="password"
                            value={userPassword.password}
                            onChange={e => getUserData(e)}
                        />
                        {passwordError.passwordError.status
                            ? <p className={`text-red-500 text-xs  mx-1`}>
                                {' '}{passwordError.passwordError.error} *
                            </p>
                            : ''}
                    </label>

                    {/* confirm password input section */}
                    <label className="block">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Confirm password
                        </span>
                        <input
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
						placeholder:text-sm
						focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="confirm Your Password ?"
                            type="text"
                            name="confirmPassword"
                            value={userPassword.confirmPassword}
                            onChange={e => getUserData(e)}
                        />
                        {passwordError.confirmPasswordError.status
                            ? <p className={`text-red-500 text-xs  mx-1`}>
                                {' '}{passwordError.confirmPasswordError.error} *
                            </p>
                            : ''}
                    </label>

                </> : <div>
                    <p className='text-center'><p>click on the Go Back Button below</p> OR  you will be redirected to sign in page in 5 seconds</p>
                </div>}
                {/* Password input section */}


                {loading
                    ? <div className=" flex justify-center">
                        <Loader message={'Sending mail'} />
                    </div>
                    : <div className={`flex justify-center`}>
                        {success ? <button
                            className={`  mt-3   bg-sky-500 hover:bg-sky-700 hover:text-white block w-28 h-10 rounded-full  `}
                            onClick={() => {

                                navigate('/')
                            }}>
                            Go Back
                        </button> : <button
                            className={`  mt-3   bg-sky-500 hover:bg-sky-700 hover:text-white block w-28 h-10 rounded-full  `}
                            onClick={() => forgetUserPasswordHandler()}>
                            Save
                        </button>}

                    </div>}
            </div>
        </div>
    )
}

export default ForgetPasswordForm