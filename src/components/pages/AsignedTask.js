import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAssignedTask } from '../../redux/assignedTaskSlice';
import { allAssignedTasks } from '../../utils/todoAPI';
import ShowAssignedTask from './ShowAssignedTask';

const AsignedTask = () => {
	const dispatch = useDispatch();
	const allTasks = useSelector(state => state.assignedTaskReducer.data);

	const getAllAsignedTask = async () => {
		const tasks = await allAssignedTasks();

		dispatch(setAssignedTask(tasks.data.assignedTask));
	};

	useEffect(() => {
		getAllAsignedTask();
	}, []);

	return (
		<div>
			<div className="flex flex-col  gap-3">
				{allTasks.length > 0
					? allTasks.map(value => {
							return <ShowAssignedTask key={value._id} task={value} />;
						})
					: <p className="text-center text-2xl">
							No Task has been assigned to you
						</p>}
			</div>
		</div>
	);
};

export default AsignedTask;
