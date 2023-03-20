import React, { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { IoCloudDoneSharp } from 'react-icons/io5';
import { MdPendingActions } from 'react-icons/md';
import { updateAtask } from '../../utils/todoAPI';
import { validateTaskData } from '../user/ValidateData';

const ShowTodo = ({ task, setShowModel, initialErrors, setTodoModel }) => {
	const { value, index } = task;
	const [loading, setLoading] = useState(false);
	const [dispaly, setDispaly] = useState(true);
	const [taskError, setTaskError] = useState(initialErrors);

	const [taskData, setTaskData] = useState({
		id: value._id,
		title: value.title,
		description: value.description,
		status: value.status,
		edited: false
	});

	const updateButton = e => {
		setTaskError(initialErrors);
		setDispaly(!dispaly);
		if (taskData.edited) {
			setTaskData({ ...taskData, edited: false });
		}
	};

	const updatedTask = async () => {
		const { success, errors } = validateTaskData(taskData);
		setLoading(true);
		if (success) {
			try {
				const updatedData = await updateAtask(taskData);

				toast.success(updatedData.data.message);
				setLoading(false);
				setTaskData({ ...taskData, edited: false });
				setDispaly(true);
			} catch (error) {
				toast.error(error.response.data);
			}
		} else {
			setTaskError({ ...taskError, ...errors });
		}
	};

	return (
		<div
			id={index + 1}
			onClick={() => {
				setTodoModel(true);
			}}>
			<div className="px-3 flex flex-col gap-5 border-2 rounded-lg mb-2 text-black p-2   lg:border-0 lg:gap-36 lg:border-t-2 md:flex-row lg:rounded-none lg:mb-0 ">
				<div className="hidden lg:inline   w-12">
					{index + 1}
				</div>
				<div>
					<lable>
						<span className=" md:hidden block text-sm font-medium text-slate-700">
							Title
						</span>
						<textarea
							className="mt-1 px-3 py-2 bg-slate-50 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 disabled:border-none"
							placeholder="Enter Title Here"
							type="text"
							value={taskData.title}
							onChange={e => {
								setTaskData({
									...taskData,
									edited: true,
									title: e.target.value
								});
								setTaskError(initialErrors);
								setLoading(false);
							}}
							disabled={dispaly}
						/>
					</lable>

					{taskError.titleError.status
						? <p className={`text-red-500 text-xs  mx-1`}>
								{taskError.titleError.error} *
							</p>
						: ''}
				</div>
				<div>
					<lable>
						<span className="md:hidden block text-sm font-medium text-slate-700">
							Description
						</span>
						<textarea
							className="mt-1 px-3 py-2 bg-slate-50 border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 
							
							disabled:border-none"
							placeholder="Enter Title Here"
							type="text"
							value={taskData.description}
							disabled={dispaly}
							onChange={e => {
								setTaskData({
									...taskData,
									edited: true,
									description: e.target.value
								});
								setTaskError(initialErrors);
								setLoading(false);
							}}
						/>
					</lable>
					{taskError.descriptionError.status
						? <p className={`text-red-500 text-xs  mx-1`}>
								{taskError.descriptionError.error} *
							</p>
						: ''}
				</div>

				<div>
					<span className=" md:hidden block text-sm font-medium text-slate-700">
						Status
					</span>
					{taskData.status === 'completed'
						? <IoCloudDoneSharp className={`text-green-500   text-4xl `} />
						: <MdPendingActions className={`text-yellow-500   text-4xl `} />}
				</div>
				<div className={`flex gap-5  `}>
					<input
						className={`text-green-500   text-4xl hover:cursor-pointer`}
						type="checkbox"
						value={taskData.status}
						checked={taskData.status === 'pending' ? false : true}
						disabled={dispaly}
						onClick={e =>
							setTaskData({
								...taskData,
								edited: true,
								status: taskData.status === 'pending' ? 'completed' : 'pending'
							})}
					/>

					<div>
						<FaEdit
							id={value._id}
							onClick={e => updateButton(e)}
							className={`text-green-700   text-4xl hover:cursor-pointer hover:text-green-500`}
						/>
					</div>
					<div>
						<MdDelete
							onClick={() =>
								setShowModel({
									status: true,
									taskId: taskData.id,
									redirectId: index + 1
								})}
							className={`text-red-700  text-4xl hover:cursor-pointer hover:text-red-500`}
						/>
					</div>
					<div>
						{taskData.edited
							? <div>
									<button
										onClick={updatedTask}
										className="bg-green-500 hover:bg-green-700 hover:text-white block w-auto px-2 h-8 rounded-full hover:cursor-pointer"
										desabled={`${loading}`}>
										{!taskError.titleError.status &&
										!taskError.descriptionError.status &&
										loading
											? 'Updating'
											: 'Save'}
									</button>
								</div>
							: ''}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShowTodo;
