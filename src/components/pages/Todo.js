import React, { useEffect, useState } from 'react';
import { deleteAtask } from '../../utils/todoAPI';
import { toast, ToastContainer } from 'react-toastify';
import { TfiClose } from 'react-icons/tfi';
import { createTask, getAllTasks } from '../../utils/todoAPI';
import ShowTodo from './ShowTodo';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import Loader from '../comman/Loader';
import { validateTaskData } from '../user/ValidateData';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalTask } from '../../redux/userSlice';
import { setAllTasks, updateTasks } from '../../redux/todoSclice';
import Layout from '../comman/Layout';

const Todo = () => {
	const dispatch = useDispatch();
	const [newTask, setNewTask] = useState({
		title: '',
		description: '',
		status: 'pending'
	});

	const [showModel, setShowModel] = useState({
		status: false,
		taskId: '',
		redirectId: ''
	});
	const initialErrors = {
		titleError: {
			status: false,
			error: ''
		},
		descriptionError: {
			status: false,
			error: ''
		}
	};
	const [taskErrors, setTaskErrors] = useState(initialErrors);

	const [loading, setLoading] = useState({
		create: false,
		delete: false
	});

	const allTasks = useSelector(state => state.taskReducer.data);
	console.log(allTasks);
	const totalTasks = useSelector(state => state.user.data.totalTasks);

	const location = useLocation();

	const createNewTask = async e => {
		setLoading({ ...loading, create: true });
		setNewTask({ title: '', description: '', status: 'pending' });
		e.preventDefault();
		const { success, errors } = validateTaskData(newTask, false, false, true);
		if (success) {
			try {
				const response = await createTask(newTask);
				toast.success(response.data.message);

				dispatch(updateTasks(response.data.task));
				dispatch(setTotalTask(totalTasks + 1));
				setLoading({ ...loading, create: false });
			} catch (error) {
				toast.error(error.response.data);
			}
		} else {
			setTaskErrors({ ...taskErrors, ...errors });
		}
	};

	const filterItemsAfterDeleting = deletedTaskId => {
		const filteredTask = allTasks.filter(value => {
			return value._id !== deletedTaskId;
		});

		dispatch(setAllTasks(filteredTask));
		dispatch(setTotalTask(totalTasks - 1));
	};

	const getNewTask = e => {
		setTaskErrors(initialErrors);
		setLoading({ ...loading, create: false });
		setNewTask({
			...newTask,
			[e.target.name]: e.target.value
		});
	};
	const deleteTask = async taskId => {
		setLoading({ ...loading, delete: true });
		try {
			const response = await deleteAtask(taskId);
			setShowModel(false);
			setLoading({ ...loading, delete: false });

			const deletedTaskId = response.data.deletedTodoItem._id;
			filterItemsAfterDeleting(deletedTaskId);
			toast.success(response.data.message);
		} catch (error) {
			toast.error(error.response.data);
		}
	};

	const getalltask = async () => {
		try {
			const tasks = await getAllTasks();

			dispatch(setAllTasks(tasks.data.tasks));
			dispatch(setTotalTask(tasks.data.totalTasks));
		} catch (error) {
			toast.error(error.responose.data);
		}
	};

	useEffect(() => {
		getalltask();
	}, []);

	return (

		<Layout>
			<div className={`flex flex-col h-full   my-4`}>
				<ToastContainer />
				<div className={`flex flex-col  md:flex-row   p-10 gap-4 `}>
					{/* Title input section */}
					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
							Title
						</span>
						<input
							className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
						placeholder:text-sm 
						placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Enter Title Here"
							type="text"
							name="title"
							value={newTask.title}
							onChange={getNewTask}
						/>
						{taskErrors.titleError.status
							? <p className={`text-red-500 text-xs  mx-1`}>
								{taskErrors.titleError.error} *
							</p>
							: ''}
					</label>

					{/* description input section */}

					<label className="block">
						<span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
							Description
						</span>
						<input
							className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 
						placeholder:text-sm 
						placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
							placeholder="Enter Title Here"
							type="text"
							name="description"
							value={newTask.description}
							onChange={e => getNewTask(e)}
						/>
						{taskErrors.descriptionError.status
							? <p className={`text-red-500 text-xs  mx-1`}>
								{taskErrors.descriptionError.error} *
							</p>
							: ''}
					</label>

					<button
						onClick={e => createNewTask(e)}
						className={`  mt-5  bg-sky-500 hover:bg-sky-700 hover:text-white block w-28 h-10 rounded-full self-center `}
						disable={`${loading.create}`}>
						{!taskErrors.titleError.status &&
							!taskErrors.descriptionError.status &&
							loading.create
							? 'Creating'
							: 'Create'}
					</button>
				</div>

				<div className={`  mb-5 p-5 lg:border-2 rounded-md `}>
					<div
						className={`pr-5 pl-5   bg-slate-900 text-white p-2 rounded-t-md hidden md:flex md:gap-24 lg:gap-60`}>
						<h1>S.No</h1>
						<h1>Title</h1>
						<h1>Description</h1>
						<h1>Status</h1>
						<h1>Actions</h1>
					</div>
					<div>
						{showModel.status
							? <div className={` mt-2 `}>
								<div className={` flex justify-center `}>
									<div
										className={`max-w-xl m-2 p-3 border-2 border-red-500 rounded-lg shadow-md  shadow-red-500/50`}>
										<div className="flex flex-col gap-5   m-0 rounded-lg ">
											<div className={`flex justify-end  mt-0`}>
												<Link to={`#${showModel.redirectId}`}>
													<TfiClose
														className={` text-emerald-300 hover:text-red-500  `}
														onClick={() => {
															setShowModel(false);
														}}
													/>
												</Link>
											</div>
											<h3>Are you sure you want to delete This Task</h3>
											<div className={`flex justify-evenly `}>
												<Link
													to={`${location.pathname}#${showModel.redirectId -
														1}`}>
													<button
														className={`border-2 px-3 py-1 rounded-lg bg-red-700 hover:bg-red-500`}
														onClick={() => deleteTask(showModel.taskId)}
														disabled={loading.delete}>
														{loading.delete ? 'Deleting' : 'Yes'}
													</button>
												</Link>
												{loading.delete === false
													? <Link to={`#${showModel.redirectId}`}>
														<button
															className={`border-2 px-3 py-1 rounded-lg bg-green-700 hover:bg-green-400`}
															onClick={() => setShowModel(false)}>
															No
														</button>
													</Link>
													: ''}
											</div>
										</div>
									</div>
								</div>
							</div>
							: <div
								className={` p-2  lg:border-y-2  lg:border-b-2  rounded-b-md lg:bg-slate-50 `}>
								{allTasks
									? allTasks.map((value, index) => {
										return (
											<ShowTodo
												key={value._id}
												task={{ value, index }}
												setShowModel={setShowModel}
												initialErrors={initialErrors}
											/>
										);
									})
									: <div className={`flex justify-center`}>
										<Loader message={'Loading Tasks'} />
									</div>}
							</div>}
					</div>
				</div>
			</div>
		</Layout>

	);
};

export default Todo;
