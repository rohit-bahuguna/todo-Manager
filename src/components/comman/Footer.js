import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
const Footer = () => {
	const navigate = useNavigate()
	return (
		<div
			className={`h-16 w-full ;
      text-center text-sm  mt-3 `}>
			<p className="flex	justify-center gap-1 mt-3">
				Made with
				<AiFillHeart className={`text-red-500 mt-1`} />
				by  <span className="text-sky-500 hover:cursor-pointer" onClick={() => alert(`Welcome `)}>Rohit Bahuguna</span>
			</p>

		</div>
	);
};

export default Footer;
