import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { sendVerificationMail } from '../../utils/userAPI';

import LogOut from './LogOut';

const Profile = () => {
	const userData = useSelector(state => state.user.data);

	const sendEmail = async () => {
		try {
			const response = await sendVerificationMail();
			console.log(response);
			toast.success(response.data.message);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	console.log(userData.verified);

	return (
		<div className={`flex justify-center my-5 `}>
			<div className={'border-2 rounded-lg flex flex-col gap-5 p-8'}>
				<h2>
					Name : {userData.name}
				</h2>
				<h3>
					Email : {userData.email}
				</h3>
				<h3>
					Total Task : {userData.totalTasks}
				</h3>
				{!userData.verified
					? <button
							onClick={sendEmail}
							className={` mt-3 self-center text-md  bg-green-500 hover:bg-green-700 hover:text-white block w-42 px-2 h-10 rounded-full  `}>
							Verify Account
						</button>
					: 'Your Account is verified'}
				<LogOut />
			</div>
		</div>
	);
};

export default Profile;
