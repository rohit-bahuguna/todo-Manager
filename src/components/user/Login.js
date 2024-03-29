import React, { useState, useEffect } from 'react';
import { logIn } from '../../utils/userAPI';
import { validateUserData } from './ValidateData';
import { ToastContainer, toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../comman/Loader';
import { login } from '../../redux/features/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
	const isUserLoggedIn = useSelector(state => state.user.data.loginStatus);
	const dispatch = useDispatch();
	const [userData, setUserData] = useState({
		name: '',
		email: '',
		password: '',
		confirmed_password: ''
	});
	const initialErrors = {
		nameError: { status: false, error: '' },
		emailError: { status: false, error: '' },
		passwordError: { status: false, error: '' },
		confirmPasswordError: { status: false, error: '' }
	};
	const [loading, setLoading] = useState(false);
	const [formErrors, setFormErrors] = useState(initialErrors);

	const navigate = useNavigate();

	const getUserData = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
		setFormErrors({ ...initialErrors });
	};

	const userLogIn = async e => {
		const { success, errors } = validateUserData(userData, true);
		if (success) {
			setLoading(true);
			try {
				const response = await logIn(userData);

				dispatch(login(response.data.user));
				toast.success(response.data.message, {
					autoClose: 1000
				});
				setTimeout(() => {
					navigate(`/create-workspace`);
				}, 1000);
				setLoading(false);
			} catch (error) {
				toast.error(error.response.data.message);
			}
		} else {
			setFormErrors({
				...formErrors,
				...errors
			});
		}
	};

	useEffect(() => {
		if (isUserLoggedIn) {
			navigate('/dashboard');
		}
	}, []);

	return (
		<div className={`flex justify-center content-center  my-5 mx-3`}>
			<ToastContainer />

			<div className={`flex flex-col w-86 border-2 p-8 rounded-lg gap-3`}>
				<h1 className={`text-center`}>LOGIN</h1>

				{/* Name input section */}

				<label className="block">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
						Name
					</span>
					<input
						className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
						placeholder:text-sm
						focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						placeholder="What is your name ?"
						type="text"
						name="name"
						value={userData.name}
						onChange={e => getUserData(e)}
					/>
					{formErrors.nameError.status
						? <p className={`text-red-500 text-xs  mx-1`}>
								{' '}{formErrors.nameError.error} *
							</p>
						: ''}
				</label>

				{/* Email input section */}
				<label className="block">
					<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
						Email
					</span>
					<input
						className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 
						placeholder:text-sm
						focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
						placeholder="What is your email ?"
						type="email"
						name="email"
						value={userData.email}
						onChange={e => getUserData(e)}
					/>
					{formErrors.emailError.status
						? <p className={`text-red-500 text-xs  mx-1`}>
								{' '}{formErrors.emailError.error} *
							</p>
						: ''}
				</label>

				{/* Password input section */}
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
						value={userData.password}
						onChange={e => getUserData(e)}
					/>
					{formErrors.passwordError.status
						? <p className={`text-red-500 text-xs  mx-1`}>
								{' '}{formErrors.passwordError.error} *
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
						placeholder="Enter Your Password ?"
						type="text"
						name="confirmed_password"
						value={userData.confirmed_password}
						onChange={e => getUserData(e)}
					/>
					{formErrors.confirmPasswordError.status
						? <p className={`text-red-500 text-xs  mx-1`}>
								{' '}{formErrors.confirmPasswordError.error} *
							</p>
						: ''}
				</label>
				{!loading
					? <div className={`flex flex-col gap-5`}>
							<button
								className={`  mt-3 self-center text-md  bg-sky-500 hover:bg-sky-700 hover:text-white block w-28 h-10 rounded-full  `}
								onClick={e => {
									userLogIn(e);
								}}>
								Login
							</button>
							<p className={`text-xs text-center`}>
								Already have an account{' '}
								<span
									onClick={() => navigate(-1)}
									className={`text-sky-700 hover:cursor-pointer hover:text-sky-500`}>
									Click Here
								</span>
							</p>
						</div>
					: <div className=" flex justify-center">
							<Loader message={'login in progress'} />
						</div>}
			</div>
		</div>
	);
};

export default Login;
