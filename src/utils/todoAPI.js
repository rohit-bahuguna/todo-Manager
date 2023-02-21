import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_API_URL}/todo`;

export const createTask = async task => {
	console.log(task);
	const url = `${baseUrl}/create`;
	return await axios.post(
		url,
		{ ...task },
		{
			withCredentials: true
		}
	);
};

export const getAllTasks = async () => {
	const url = `${baseUrl}/getalltask`;
	return await axios.get(url, {
		withCredentials: true
	});
};

export const updateAtask = async taskData => {
	const url = `${baseUrl}/updatetask/${taskData.id}`;
	return await axios.put(
		url,
		{ ...taskData },
		{
			withCredentials: true
		}
	);
};

export const deleteAtask = async taskId => {
	const url = `${baseUrl}/deletetask/${taskId}`;
	return await axios.delete(url, {
		withCredentials: true
	});
};
