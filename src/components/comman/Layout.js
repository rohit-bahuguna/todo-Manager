import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
const Layout = ({ children, heading }) => {
	return (
		<div className="flex justify-center ">
			<div className="w-64">
				<Sidebar />
				<Navbar />
			</div>

			<div className="w-screen h-screen bg-slate-100  ">
				<Header heading={heading} />

				{children}
			</div>
		</div>
	);
};

export default Layout;
