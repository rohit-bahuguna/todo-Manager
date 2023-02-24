import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAssignedTask } from '../../redux/assignedTaskSlice';
import { allAssignedTasks } from '../../utils/todoAPI';
import ShowAssignedTask from './ShowAssignedTask';

const AsignedTask = () => {
	const dispatch = useDispatch();
	const allTasks = useSelector(state => state.assignedTaskReducer.tasks);

	const getAllAsignedTask = async () => {
		const tasks = await allAssignedTasks();

		dispatch(setAssignedTask(tasks.data.assignedTask));
	};
	console.log('from reducer', allTasks);

	useEffect(() => {
		getAllAsignedTask();
	}, []);
	return (
		<div>
			<div className="flex flex-col  gap-3">
				{allTasks &&
					allTasks.map(value => {
						return <ShowAssignedTask key={value._id} task={value} />;
					})}
			</div>
		</div>
	);
};

export default AsignedTask;
