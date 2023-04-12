import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './comman/PageNotFound';
import Discuss from './Main/Discuss';
import Calendar from './Main/Calender';
import Projects from './Main/Projects';
import UserHome from './Main/UserHome';
import Profile from './user/Profile';
import CreateWorkspace from './workspaces/CreateWorkspace';
import WorkspaceInivation from './workspaces/WorkspaceInivation';
import ProjectForm from './comman/forms/ProjectForm';

const Home = () => {
	return (
		<div className="">
			<Routes>
				<Route exact path="*" element={<PageNotFound />} />
				<Route path="/dashboard" element={<UserHome />} />
				<Route path="/userprofile" element={<Profile />} />
				<Route path="/discuss" element={<Discuss />} />
				<Route path="/calendar" element={<Calendar />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/create-project" element={<ProjectForm />} />
				<Route path="/create-workspace" element={<CreateWorkspace />} />
			</Routes>
		</div>
	);
};

export default Home;
