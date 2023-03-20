import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { logOut } from '../../utils/userAPI';

import { logout } from "../../redux/userSlice"
import { useDispatch } from 'react-redux';

const LogOut = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate();
	const userLogOut = async () => {
		try {
			const response = await logOut();
			toast.success(response.data.message);
			
			dispatch(logout())

			navigate('/');

		} catch (error) {
			toast.error(error.response.data);
		}
	};
	return <> <ToastContainer /> <button
		className={`  mt-3 self-center text-md  bg-red-500 hover:bg-red-700 hover:text-white block w-28 h-10 rounded-full  `} onClick={userLogOut}>logout</button></>;
};

export default LogOut;
