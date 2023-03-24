import React from 'react';
import { AiFillHome } from "react-icons/ai"
import { MdFeed } from "react-icons/md"
import { RiDiscussFill } from "react-icons/ri"
import { IoCalendarSharp } from "react-icons//io5"
import { HiBriefcase } from "react-icons/hi"
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="bg-black  w-56 h-full fixed text-white top-0 flex flex-col justify-start gap-5  ">
            <div className=' px-2 bg-slate-900  h-16'>Projects</div>
            <div className=' flex flex-col gap-3 px-2 '>
                <Link to="/dashboard"> <p className='hover:bg-slate-400 p-1 rounded-sm'><AiFillHome className='inline mr-1 ' /> Home</p> </Link>
                {/* <Link to="/"> <p className='hover:bg-slate-400 p-1 rounded-sm'><MdFeed className='inline mr-1' /> Feed</p> </Link> */}
                <Link to="/discuss"> <p className='hover:bg-slate-400 p-1 rounded-sm'> <RiDiscussFill className='inline mr-1' /> Discuss</p> </Link>
                <Link to="/calendar"> <p className='hover:bg-slate-400 p-1 rounded-sm'> <IoCalendarSharp className='inline mr-1' /> Calendar</p> </Link>
                <Link to="/projects"> <p className='hover:bg-slate-400 p-1 rounded-sm'><HiBriefcase className='inline mr-1' /> Projects</p> </Link>
            </div>
            <div className=' px-4 '>
                <div className='text-sm font-extrabold mb-4'>
                    WORK OVERVIEW
                </div>
                <div className='ml-3 flex flex-col gap-3 '>
                    <Link to="/">  <p className='hover:bg-slate-400 rounded-sm px-2'>Task</p> </Link>
                    <Link to="/">  <p className='hover:bg-slate-400 rounded-sm px-2'>Issues</p> </Link>
                    <Link to="/">  <p className='hover:bg-slate-400 rounded-sm px-2'>Milestones</p> </Link>
                    <Link to="/">  <p className='hover:bg-slate-400 rounded-sm px-2'>Timesheets</p> </Link>
                </div>
            </div>
            <div className=' px-4  text-sm font-extrabold'>RECENT PROJECTS</div>

        </div>
    );
};

export default Navbar;
