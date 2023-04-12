import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getProjects } from '../../utils/API/project_API.js/project_API';
import { getUsersWorkSpaces } from '../../utils/API/workspace_API.js/workspace_API';
import {
	setWorkspaces,
	setCurrentWorkspace
} from '../../redux/features/workspaceSlice';
import { useDispatch, useSelector } from 'react-redux';
import { MdAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch();
	const allWorkSpaces = useSelector(state => state.workspaceReducer.workspaces);
	const currentWorkspace = useSelector(
		state => state.workspaceReducer.currentWorkspace
	);

	const userWorkspaces = async () => {
		try {
			const { data } = await getUsersWorkSpaces();
			console.log(data)
			dispatch(setWorkspaces(data.usersWorkspace));
			dispatch(setCurrentWorkspace(data.usersWorkspace[0]._id));
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
		}
	};

	const getAllProjectsOfAworkspace = async () => {
		try {
			const { data } = await getProjects(currentWorkspace);
			console.log('all projects', data.allProjects);
		} catch (error) {
			console.log(error);
		}
	};

	const createNewWorkSpace = () => {
          navigate('/create-workspace')
	}

	useEffect(() => {
		userWorkspaces();
	}, []);

	useEffect(
		() => {
			getAllProjectsOfAworkspace();
		},
		[currentWorkspace]
	);

	return (
		<div className="w-16 h-full bg-slate-900 fixed top-0 ">
			<div className="flex flex-col items-center text-center text-black gap-5 mt-14  ">
				<>
					{allWorkSpaces.map(workspace => {
					return (
						<div
							key={workspace._id}
							className="border w-14 h-14 px-1 py-3 bg-sky-300  rounded-full self-center text-xl hover:cursor-pointer hover:bg-sky-400"
							onClick={() => dispatch(setCurrentWorkspace(workspace._id))}>
							{workspace.title.split(' ')[0]}
						</div>
					);
				})}
				<div
					
					className="border w-14 h-14  p-2 bg-sky-300  rounded-full self-center text-xl hover:cursor-pointer hover:bg-sky-400 "
					onClick={() => createNewWorkSpace()}>
					<MdAdd className='w-10 h-10 '/>
				</div>
				</>
			</div>
		</div>
	);
};

export default Sidebar;
