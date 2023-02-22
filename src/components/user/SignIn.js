import { useEffect, useState } from 'react';
import { signIn } from '../../utils/userAPI';
import { validateUserData } from './ValidateData';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loader from '../comman/Loader';
import { login, setDataAfterRefresh } from "../../redux/userSlice"
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
	const loggedInUserData = useSelector((state) => state.userReducer.user)
	const dispatch = useDispatch()
	const [userData, setUserData] = useState({
		email: '',
		password: ''
	});

	const initialErrors = {
		emailError: { status: false, error: '' },
		passwordError: { status: false, error: '' }
	};

	const [loading, setLoading] = useState(false);

	const [formErrors, setFormErrors] = useState(initialErrors);

	const getUserData = e => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
		setFormErrors({ ...initialErrors });
	};
	const navigate = useNavigate();
	const userSignIn = async e => {
		e.preventDefault();
		const { success, errors } = validateUserData(userData);
		if (success) {
			setLoading(true);
			signIn(userData)
				.then(response => {
					toast.success(response.data.message);

					setLoading(false);
					localStorage.setItem('name', response.data.user.name)
					localStorage.setItem('email', response.data.user.email)
					localStorage.setItem('status', response.data.success)
					dispatch(login(response.data.user))

					setTimeout(() => {

						navigate(`/dashboard`);
					}, 1000);


				})
				.catch(error => {
					setLoading(false);
					toast.error(error.message);
				});
		} else {
			setFormErrors({
				...formErrors,
				...errors
			});
		}
	};


	return (
		<div className={`flex  justify-center my-5 mx-3`}>
			<ToastContainer />

			<div className={`flex flex-col gap-5 p-8 rounded-lg border-2`}>
				<h1 className={`text-center`}> SIGN IN</h1>
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
							{formErrors.emailError.error} *
						</p>
						: ''}
				</label>

				{/* Password input section */}

				<label className="block ">
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
				<Link to='forgetpasswordmail'><p className='text-sm text-sky-700 hover:text-sky-500'>forget password ?</p></Link>
				{loading
					? <div className=" flex justify-center">
						<Loader message={'signing in'} />
					</div>
					: <div className={`flex justify-between`}>
						<button
							className={`  mt-3 self-center  bg-sky-500 hover:bg-sky-700 hover:text-white block w-28 h-10 rounded-full  `}
							onClick={userSignIn}>
							Signin
						</button>
						<Link to="/login">
							<button
								className={`  mt-3 self-center  bg-sky-500 hover:bg-sky-700 hover:text-white block w-28 h-10 rounded-full  `}>
								Signup
							</button>
						</Link>
					</div>}
			</div>
		</div>
	);
};

export default SignIn;
