import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useSelector } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

const Header = ({ heading }) => {
	const [showProfile, setShowProfile] = useState(false);
	const navigate = useNavigate();

	const loggedInUser = useSelector(state => state.user.data);

	return (
		<div className='flex  sticky top-0 justify-between items-center w-full h-16 bg-slate-900 text-white px-2'>
			<div className='text-xl'>
				{heading}
			</div>
			<div className='flex justify-around gap-2 border border-white w-52 py-3'>
				<p>S</p>
				<p>N</p>
				<p>+</p>
				<p>O</p>
			</div>
		</div>
	);
};

export default Header;
