import React, { useEffect } from 'react'
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

    const verifyUser = async () => {
        try {
            const response = await Verify(token)
            dispatch(setVerificationStatus(response.data.success))
            toast.success(response.data.message)
            setTimeout(() => {
                navigate('/dashboard')
            }, 2000)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        verifyUser()
    }, [token])


    return (
        <div>
            <ToastContainer />
            <Loader meassage='Hold on Verifing Your Account' />
        </div>
    )
}

export default VerifyUser