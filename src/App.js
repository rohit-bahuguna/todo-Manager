import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

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

function App() {
	return (
		<div className="flex flex-row w-screen h-screen	  flex-wrap text-xl">
			<BrowserRouter>
				<Header />
				<div className="flex flex-row w-full  flex-wrap">
					<div className={`basis-{9} w-full  flex flex-col `}>
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
							{/* <Route exact path="/signin" element={<SignIn />} /> */}
							<Route exact path="*" element={<PageNotFound />} />
							<Route element={<ProtectedRoute />}>
								<Route exact path="/dashboard" element={<Todo />} />
								<Route exact path="/userprofile" element={<Profile />} />
								<Route exact path="/assignedtask" element={<AsignedTask />} />
							</Route>
						</Routes>
					</div>
				</div>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
