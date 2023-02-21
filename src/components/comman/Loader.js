import React from 'react';

const Loader = ({ message, color }) => {
	return (
		<div className={`flex flex-col  `}>
			<img src="./loader.svg" alt="Loging" />
			{message &&
				<span className={`text-${color}-500 text-sm self-center `}>
					{message}
				</span>}
		</div>
	);
};

export default Loader;
