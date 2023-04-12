import React from 'react';

const SelectField = ({ name, placeHolder, options, callback }) => {
	return (
		<div className="flex gap-2">
			<select
				onChange={callback}
				name={name}
				className="w-32 text-sm border rounded-md">
				<option selected>
					{placeHolder}
				</option>
				{options.map(option => {
					return (
						<option value={option}>
							{option}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default SelectField;
