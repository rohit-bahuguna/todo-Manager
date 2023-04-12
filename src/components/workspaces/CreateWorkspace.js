import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { createNewWorkSpaces } from '../../utils/API/workspace_API.js/workspace_API';
import InputField from '../comman/Custom/InputField';

const CreateWorkspace = () => {
	const navigate = useNavigate();
	const [WorkspaceData, setWorkspaceData] = useState({
		title: '',
		description: '',
		invitedMembers: []
	});
	const [member, setMember] = useState('');
	const [error, setError] = useState({
		titleError: { status: false, message: '' },
		descriptionError: { status: false, message: '' }
	});

	const getWorkSpaceData = e => {
		e.preventDefault();
		if (e.target.name === 'invitedMembers') {
			setMember(e.target.value);
		} else {
			setWorkspaceData({
				...WorkspaceData,
				[e.target.name]: e.target.value
			});
		}
	};

	const enterValueToArray = e => {
		if (
			e.target.name === 'invitedMembers' &&
			e.keyCode === 13 &&
			member !== '' &&
			!WorkspaceData.invitedMembers.includes(member)
		) {
			setWorkspaceData({
				...WorkspaceData,
				invitedMembers: [...WorkspaceData.invitedMembers, member]
			});
			setMember('');
		}
	};

	const removeMember = e => {
		const newMembers = WorkspaceData.invitedMembers.filter(
			member => member !== e.target.id
		);
		setWorkspaceData({
			...WorkspaceData,
			invitedMembers: [...newMembers]
		});
	};

	const createWorkspace = async () => {
		try {
			const { data } = await createNewWorkSpaces(WorkspaceData);

			toast.success(data.message, {
				autoClose: 1000
			});
			setTimeout(() => {
				navigate('/dashboard');
			}, 1000);
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};

	return (
		<div className="flex w-screen h-screen">
			<ToastContainer />
			<div className="w-1/4 border">Welcome</div>
			<div className="border w-3/4 flex justify-center items-center">
				<div className="border w-2/3 h-2/3 p-2">
					<p className="text-2xl text-center">Create Your First Workspace</p>
					<div className="flex justify-center items-center mt-5  ">
						<div className="flex flex-col gap-6 w-2/3">
							<div className="flex flex-col gap-3">
								<InputField
									label={'Workspace Name'}
									placeholder={'Enter Workspace Name'}
									type={'text'}
									name={'title'}
									value={WorkspaceData.title}
									callback={getWorkSpaceData}
									error={error.titleError}
								/>
								<InputField
									label={'Workspace Description'}
									placeholder={'Enter Workspace Description'}
									type={'text'}
									name={'description'}
									value={WorkspaceData.description}
									callback={getWorkSpaceData}
									error={error.descriptionError}
								/>
							</div>
							<div>
								<div className="w-22   max-h-24 overflow-y-scroll mb-2  py-1 flex flex-col">
									{WorkspaceData.invitedMembers &&
										WorkspaceData.invitedMembers.map((member, index) =>
											<span className=" border px-3 py-1 w-fit rounded-full mb-1 shadow-lg">
												<span key={index * 7854} className="">
													{member}
												</span>
												<span
													id={member}
													className="ml-3"
													onClick={removeMember}>
													X
												</span>
											</span>
										)}
								</div>
								<InputField
									label={'Invite Members'}
									placeholder={'Enter Members Email Id'}
									type={'text'}
									name={'invitedMembers'}
									value={member}
									callback={getWorkSpaceData}
									aftertext={''}
									callbackOnEnterKey={enterValueToArray}
								/>
							</div>
							<button
								className="border w-48 px-2  py-2 rounded-full bg-sky-300 text-lg  hover:bg-sky-600 hover:text-xl self-center shadow-sm "
								onClick={createWorkspace}>
								Create Workspace
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateWorkspace;
