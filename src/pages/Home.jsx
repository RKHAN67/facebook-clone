import React from 'react'
import userImage from '../assets/images/user.jpeg';
import { Icons } from '../assets/icon/Icons';

const Home = () => {
    return (
        <div className='flex  bg-black w-full h-full'>
            <div className='flex flex-col gap-5  py-3 px-5 w-full'>
                <div className='flex items-center gap-2'>
                    <div className="w-6 h-6 rounded-full cursor-pointer overflow-hidden ">
                        <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <h3 className='text-white text-base font-semibold'>Rizwan Khan</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.FRIENDS}</span>
                    <h3 className='text-white text-base font-semibold'>Friends</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.MEMORIES}</span>
                    <h3 className='text-white text-base font-semibold'>Memories</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.SEARCH}</span>
                    <h3 className='text-white text-base font-semibold'>Saved</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.PROFILE}</span>
                    <h3 className='text-white text-base font-semibold'>Groups</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.VIDEO}</span>
                    <h3 className='text-white text-base font-semibold'>Video</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.VIDEO}</span>
                    <h3 className='text-white text-base font-semibold'>Marketplace</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.VIDEO}</span>
                    <h3 className='text-white text-base font-semibold'>Feeds</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.VIDEO}</span>
                    <h3 className='text-white text-base font-semibold'>Events</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.VIDEO}</span>
                    <h3 className='text-white text-base font-semibold'>Ads Manager</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.VIDEO}</span>
                    <h3 className='text-white text-base font-semibold'>Fundraisers</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white text-2xl'>{Icons.VIDEO}</span>
                    <h3 className='text-white text-base font-semibold'>Video</h3>
                </div>

            </div>
            <div className='w-full bg-[#262829]'>
                <div></div>
                <div></div>
                <div></div>
            </div>
           <div className='w-full'>

           </div>
        </div>
    )
}
export default Home
