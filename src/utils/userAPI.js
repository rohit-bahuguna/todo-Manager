import axios from 'axios';
const baseUrl = `${process.env.REACT_APP_API_URL}/user`;

export const logIn = async userData => {
	const url = `${baseUrl}/signup`;

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

export const sendVerificationMail = async () => {
	const url = `${baseUrl}/mailverification`;
	return await axios.get(url, {
		withCredentials: true
	});
};

export const Verify = async token => {
	const url = `${baseUrl}/verify/${token}`;
	return await axios.get(url, {
		withCredentials: true
	});
};

export const sendForgetPasswordEmail = async email => {
	const url = `${baseUrl}/forgetpasswordmail`;
	console.log(email);
	return await axios.post(
		url,
		{ email },
		{
			withCredentials: true
		}
	);
};

export const forgetUserPassword = async (token, id, password) => {
	const url = `${baseUrl}/forgetuserpassword/${token}/${id}`;
	return await axios.post(
		url,
		{ password },
		{
			withCredentials: true
		}
	);
};
