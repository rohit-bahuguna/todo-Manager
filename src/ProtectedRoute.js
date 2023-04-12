import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Outlet, Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
	const location = useLocation();
	const { data } = useSelector(state => state.user);

	console.log(data);
	return data.loginStatus === true
		? <Outlet />
		: <Navigate to="/" state={{ from: location }} replace />;
};

export default ProtectedRoute;
