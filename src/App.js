import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/comman/Header"
import Footer from "./components/comman/Footer"
import SignIn from "./components/user/SignIn"
import Login from "./components/user/Login"
import Todo from "./components/pages/Todo"
import Profile from "./components/user/Profile"
import ProtectedRoute from './ProtectedRoute';
import Home from './components/Home';
import PageNotFound from './components/comman/PageNotFound';



function App() {

	return (
		<div className="flex flex-row w-screen h-screen	  flex-wrap text-xl">
			<BrowserRouter>

				<Header />
				<div className="flex flex-row w-full  flex-wrap">


					<div className={`basis-{9} w-full  flex flex-col `}>
						<Routes>

							<Route path="/" element={<SignIn />} />
							<Route path="/login" element={<Login />} />
							<Route path="/signin" element={<SignIn />} />
							<Route path="*" element={<PageNotFound />} />
							<Route element={<ProtectedRoute />} >
								<Route path="/dashboard" element={<Todo />} />
								<Route path="/userprofile" element={<Profile />} />

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
