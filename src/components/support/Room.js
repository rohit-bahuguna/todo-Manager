import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const { io } = require('socket.io-client');


const ChatRoom = () => {
	const user = useSelector(state => state.user.user);

	const [messages, setMessages] = useState([]);
	const [userData, setUserData] = useState({ name: "rohit", message: '' });

	const socket = io('http://localhost:4000');

	const sendMessage = () => {
		setMessages([...messages, userData]);


	};

	socket.on('message', data => {
		console.log(data);
		setMessages([...messages, data]);
	});
	return (
		<div className='w-80 border-l-2 border-r-2 rounded-b-xl  '>
			<div className="  h-full flex flex-col justify-between gap-5 p-0   ">

				<div className="h-80 overflow-y-auto flex flex-col gap-3">
					{messages.map(data =>
						<>

							<p className="border bg-slate-200 px-2 py-1 rounded-lg w-fit  overflow-">
								{data.message}
							</p>
						</>
					)}
				</div>
				<div className=" flex justify-evenly px-2  py-1 bg-slate-300 text-black border-b-2 rounded-b-lg gap-1 ">
					<input
						type="text"
						value={userData.message}
						placeholder="Type message"
						className="  hover:cursor-text bg-slate-300 border-none placeholder:text-start placeholder:text-black
						placeholder:p-3 "
						onChange={e => {
							setUserData({ ...userData, message: e.target.value });
						}}
					/>

					<button
						className=" px-3 py-2 rounded-lg  text-white bg-black hover:bg-green-500"
						onClick={sendMessage}>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatRoom;
