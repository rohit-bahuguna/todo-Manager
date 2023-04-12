import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_API_URL}/project`;

export const getProjects = async workspaceId => {
	const url = `${baseUrl}/workspace/${workspaceId}`;
	return await axios.get(url, { withCredentials: true });
};
