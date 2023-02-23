import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import { setVerificationStatus } from '../../redux/userSlice'
import { Verify } from '../../utils/userAPI'
import Loader from '../comman/Loader'

const VerifyUser = () => {
    const { token } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [success, setSuccess] = useState({
        message: "Hold on Verifing your account ",
        color: 'yellow'
    })
    const verifyUser = async () => {
        try {
            const response = await Verify(token)
            dispatch(setVerificationStatus(response.data.success))
            toast.success(response.data.message)
            setSuccess({
                message: 'Redirecting you to the sign in',
                color: 'green'
            })
            setTimeout(() => {
                navigate('/')
            }, 5000)
        } catch (error) {
            toast.error(error.message)
            setSuccess({
                message: 'verification failed please try again',
                color: 'red'
            })
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }

    useEffect(() => {
        verifyUser()
    }, [token])


    return (
        <div>
            <ToastContainer />
            <div className='flex justify-center'>



                <Loader message={success.message} color={success.color} />


            </div>
        </div>
    )
}

export default VerifyUser