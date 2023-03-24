import React, { useState } from 'react';
import Layout from '../comman/Layout';
const Projects = () => {
	const [allProjects, setAllProjects] = useState([]);
	const [projectType, setProjectType] = useState('All Projects');
	return (
		<Layout heading={'Projects'}>
			<div className=" h-4/5 flex flex-col gap-5 ">
				<div className="flex flex-col gap-5">
					<div className="flex border-b border-gray-600 justify-between px-10 py-3">
						<select onChange={e => setProjectType(e.target.value)}>
							<option value="All Project">All Project</option>
							<option value="Completed Project">Completed Project</option>
							<option value="Trashed Project">Trashed Project</option>
						</select>

						<button className=" border bg-sky-500 px-5 py-2 text-white rounded-full">
							New Project
						</button>
					</div>
					<div>projects</div>
				</div>
			</div>
		</Layout>
	);
};

export default Projects;
