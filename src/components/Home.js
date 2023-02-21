import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './pages/Todo'
import Profile from './user/Profile'

const Home = () => {
    return (
        <div>
            <Routes>
                <Route path="/dashboard" element={<Todo />} />
                <Route path="/userprofile" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Home