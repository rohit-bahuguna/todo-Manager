import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { JoinNewWorkSpaces } from '../../utils/API/workspace_API.js/workspace_API';
import { logout } from '../../redux/features/userSlice';
const WorkspaceInivation = () => {
	const user = useSelector(state => state.user.data);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { workspaceId, token } = useParams();
	const joinTheWorkspace = async () => {
		try {
			const { data } = await JoinNewWorkSpaces(token, workspaceId);
			console.log(data);
			if (user.loginStatus === true && user.email === data.updatedUser.email) {
				console.log('dashboard');
				navigate('/dashboard');
			} else {
				console.log('redirect');
				dispatch(logout());
				navigate(data.redirectUrl);
			}
		} catch (error) {
			toast.error(error.response.data.messsage);
		}
	};

	return (
		<div className="flex justify-center items-center w-screen h-screen">
			<ToastContainer />
			<div className="border rounded border-sky-400 w-1/3 h-1/3 flex flex-col  justify-around items-center ">
				<p className="text-2xl">Welcome To Project</p>
				<button
					className="border px-2 py-1 rounded-full text-lg bg-sky-400 hover:bg-sky-600"
					onClick={joinTheWorkspace}>
					Join Workspace
				</button>
			</div>
		</div>
	);
};

export default WorkspaceInivation;
