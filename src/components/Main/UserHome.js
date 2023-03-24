import React from 'react'
import { useSelector } from 'react-redux'
import Layout from '../comman/Layout'
import { BiTask } from "react-icons/bi"
import { GoMilestone, GoIssueOpened } from "react-icons/go"
const UserHome = () => {
    const data = useSelector(state => state.user.data)
    console.log(data);
    return (
        <Layout heading={"Home"}>

            <div className=' px-2 h-4/5 flex flex-col gap-5 '>

                <div className='flex flex-col gap-5'>
                    <div>
                        {data && <><p>Welcome : {data.name} </p>
                            <p>Company : {data.email}</p></>}
                    </div>
                    <div className='flex gap-5 '>

                        <div className='border rounded-lg bg-gray-800 text-white w-48 p-2 h-20'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-3xl'>0</p>
                                    <p className='text-lg'>Open Tasks</p>
                                </div>
                                <div> <BiTask className='w-10 h-12' /></div>
                            </div>

                        </div>

                        <div className='border rounded-lg bg-gray-800 text-white w-48 p-2 h-20'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-3xl'>0</p>
                                    <p className='text-lg'>Close Tasks</p>
                                </div>
                                <div> <BiTask className='w-10 h-12' /></div>
                            </div>

                        </div>

                        <div className='border rounded-lg bg-gray-800 text-white w-48 p-2 h-20'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-3xl'>0</p>
                                    <p className='text-lg'>Open Issues</p>
                                </div>
                                <div> <GoIssueOpened className='w-10 h-12' /></div>
                            </div>

                        </div>

                        <div className='border rounded-lg bg-gray-800 text-white w-48 p-2 h-20'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-3xl'>0</p>
                                    <p className='text-lg'>Close Issues</p>
                                </div>
                                <div> <GoIssueOpened className='w-10 h-12' /></div>
                            </div>

                        </div>

                        <div className='border rounded-lg bg-gray-800 text-white w-52 p-2 h-20'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-3xl'>0</p>
                                    <p className='text-lg'>Open Milestones</p>
                                </div>
                                <div> <GoMilestone className='w-10 h-12' /></div>
                            </div>

                        </div>

                        <div className='border rounded-lg bg-gray-800 text-white w-52 p-2 h-20'>
                            <div className='flex justify-between items-center'>
                                <div>
                                    <p className=' text-3xl'>0</p>
                                    <p className='text-lg'>Close Milestones</p>
                                </div>
                                <div > <GoMilestone className='w-10 h-12' /></div>
                            </div>

                        </div>

                    </div>
                </div>
                <div >optional</div>
            </div>
        </Layout>

    )
}

export default UserHome