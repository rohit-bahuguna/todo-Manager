import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_API_URL}/user`;

export const logIn = async userData => {
	const url = `${baseUrl}/login`;

	return await axios.post(
		url,
		{ ...userData },
		{
			withCredentials: true
		}
	);
};

export const signIn = async userData => {
	const url = `${baseUrl}/signin`;

	return await axios.post(
		url,
		{ ...userData },
		{
			withCredentials: true
		}
	);
};

export const logOut = async () => {
	const url = `${baseUrl}/logout`;

	return await axios.get(url, {
		withCredentials: true
	});
};

export const getUserData = async () => {
	const url = `${baseUrl}/getuserdata`;

	return await axios.get(url, {
		withCredentials: true
	});
};
