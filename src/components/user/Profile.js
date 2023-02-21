import React from 'react';
import { useSelector } from 'react-redux';

import LogOut from './LogOut';



const Profile = () => {
	const userData = useSelector(state => state.userReducer.user)

	const name = localStorage.getItem('name')
	const email = localStorage.getItem('email')
	return (
		<div className={`flex justify-center my-5`}>
			<div className={'border-2 rounded-lg flex flex-col gap-5 p-8'}>
				<h2>
					Name : {name}
				</h2>
				<h3>
					Email : {email}
				</h3>
				<h3>
					Total Task : {userData.totalTasks}
				</h3>
				<LogOut />
			</div>
		</div>
	);
};

export default Profile;
