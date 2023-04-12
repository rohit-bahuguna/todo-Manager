import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_API_URL}/workspace`;

export const getUsersWorkSpaces = async () => {
	const url = `${baseUrl}/users-workspace`;
	return await axios.get(url, {
		withCredentials: true
	});
};

export const createNewWorkSpaces = async workspaceData => {
	const url = `${baseUrl}/create`;
	return await axios.post(
		url,
		{ ...workspaceData },
		{
			withCredentials: true
		}
	);
};

export const JoinNewWorkSpaces = async (token, workspaceId) => {
	const url = `${baseUrl}/join`;
	return await axios.post(
		url,
		{ token, workspaceId },
		{
			withCredentials: true
		}
	);
};
