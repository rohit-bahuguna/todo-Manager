import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom'

const ProtectedRoute = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const userLoginStatus = useSelector(state => state.userReducer.user.loginStatus)
    useEffect(() => {
        if (userLoginStatus === false) {
            navigate('/')
        }
    }, [])

    return (
        userLoginStatus === true ? <Outlet /> : ''
    )
}

export default ProtectedRoute