import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/comman/Header';
import Footer from './components/comman/Footer';
import SignIn from './components/user/SignIn';
import Login from './components/user/Login';
import Todo from './components/pages/Todo';
import Profile from './components/user/Profile';
import ProtectedRoute from './ProtectedRoute';
import Home from './components/Home';
import PageNotFound from './components/comman/PageNotFound';
import VerifyUser from './components/user/VerifyUser';
import ForgetPassword from './components/user/ForgetPassword';
import ForgetPasswordForm from './components/user/ForgetPasswordForm';
import AsignedTask from './components/pages/AsignedTask';
import Support from './components/support/Support';
import ChatRoom from './components/support/Room';
import Navbar from "./components/comman/Navbar"
import { BsChatSquareTextFill } from 'react-icons/bs';
import WorkspaceInivation from './components/workspaces/WorkspaceInivation';

function App() {

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<SignIn />} />
					<Route exact path="/login" element={<Login />} />
					<Route exact path="/verify/:token" element={<VerifyUser />} />
					<Route
						exact
						path="/forgetpasswordmail"
						element={<ForgetPassword />}
					/>
					<Route
						exact
						path="forgetpassword/:token/:id"
						element={<ForgetPasswordForm />}
					/>
					<Route
					path="/workspace-ivitation/:workspaceId/:token"
					element={<WorkspaceInivation />}
					/>

					<Route exact path="/join-workspace/signin/:email" element={<SignIn />} />
					
					<Route element={<ProtectedRoute />}>
						<Route path='*' element={<Home />} />
					</Route>

				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;


// 
// 									<Route exact path="/login" element={<Login />} />
// 									<Route exact path="/verify/:token" element={<VerifyUser />} />
// 									<Route
// 										exact
// 										path="/forgetpasswordmail"
// 										element={<ForgetPassword />}
// 									/>
// 									<Route
// 										exact
// 										path="forgetpassword/:token/:id"
// 										element={<ForgetPasswordForm />}
// 									/>