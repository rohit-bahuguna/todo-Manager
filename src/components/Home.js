import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './comman/PageNotFound'
import Discuss from './Main/Discuss'
import Calendar from './Main/Calender'
import Projects from './Main/Projects'
import UserHome from './Main/UserHome'
import Todo from './pages/Todo'
import Profile from './user/Profile'


const Home = () => {
    return (
        <div className=''>
            <Routes>
                <Route exact path="*" element={<PageNotFound />} />
                <Route path="/dashboard" element={<UserHome />} />
                <Route path="/userprofile" element={<Profile />} />
                <Route path='/discuss' element={<Discuss />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/projects' element={<Projects />} />
            </Routes>
        </div>
    )
}

export default Home