import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
	const location = useLocation();
	const userLoginStatus = useSelector(state => state.user.data.loginStatus);
	console.log(userLoginStatus);
	return userLoginStatus === true
		? <Outlet />
		: <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedRoute;
