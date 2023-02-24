import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
	const [showProfile, setShowProfile] = useState(false);
	const navigate = useNavigate();
	const name = localStorage.getItem('name');
	const userLoginStatus = useSelector(
		state => state.userReducer.user.loginStatus
	);

	return (
		<div
			className={`flex flex-row  w-screen  max-h-16 justify-between content-center gap-x-{6}  p-2 bg-slate-900 text-sky-500 m-0 `}>
			<Link to={userLoginStatus === true ? '/dashboard' : '/'}>
				<img
					src="/logo.png"
					alt="logo"
					className="w-12 rounded-full hover:cursor-pointer"
				/>
			</Link>
			{/* <h2 className={` pt-2 hidden md:inline `}>Task Manager</h2> */}

			<h2 className={` md:pr-12 pt-2  `}>
				<div className={`flex min-w-26 justify-between gap-2 content-center`}>
					<div className=" flex gap-5 mx-5 ">
						<Link to="assignedtask">
							<button className={` focus-within:text-green-700`}>
								Assigned Tasks
							</button>
						</Link>
						<Link to="dashboard">
							<button className={` focus:text-green-700`}>My Tasks</button>
						</Link>
					</div>
					{name &&
						<div>
							{name} 😊
						</div>}

					<div>
						{userLoginStatus === true
							? <div className={`align-center `}>
									{showProfile
										? <FiChevronUp
												onClick={() => {
													navigate('/dashboard');
													setShowProfile(!showProfile);
												}}
												className={`text-sky-500   mt-1 hover:cursor-pointer `}
											/>
										: <FiChevronDown
												className={`text-sky-500   mt-1 hover:cursor-pointer`}
												onClick={() => {
													navigate('/userprofile');
													setShowProfile(!showProfile);
												}}
											/>}
								</div>
							: ''}
					</div>
				</div>
			</h2>
		</div>
	);
};

export default Header;
