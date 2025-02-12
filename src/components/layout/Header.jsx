import React from 'react';
import Logo from '../../assets/images/facebook-logo.png';
import userImage from '../../assets/images/user.jpeg';
import { Icons } from '../../assets/icon/Icons';

const NavigationIcon = [
    { icon: Icons.HOME, active: true },
    { icon: Icons.VIDEO, active: false },
    { icon: Icons.STORE, active: false },
    { icon: Icons.PROFILE, active: false },
    { icon: Icons.GAMES, active: false }
]

const Header = () => {
    return (
        <div className="flex gap-2 bg-[#252728] w-full h-16 md:px-5 drop-shadow-xl border-b border-[#343637] justify-between items-center">
            <div className="flex gap-2 items-center">
                <div className="w-10 cursor-pointer">
                    <img src={Logo} alt="Logo" className="w-full h-full" />
                </div>
                <div className="bg-[#333334] rounded-full hidden md:flex items-center h-10 px-3">
                    <span className="text-lg text-[#a7aaaf]">{Icons.SEARCH}</span>
                    <input type="text" className="outline-none bg-transparent text-white ml-2" placeholder="Search Facebook" />
                </div>
                <div className="rounded-full bg-[#333334] p-3 cursor-pointer block md:hidden">
                    <span className="text-lg text-[#a7aaaf]">{Icons.SEARCH}</span>
                </div>
            </div>
            <div className="hidden md:flex items-center gap-8 mt-2 ">
                {NavigationIcon.map((item, index) => (
                    <div key={index} className="relative flex items-center justify-center w-14 h-14 cursor-pointer">
                        <span className={`text-3xl ${item.active ? 'text-blue-500' : 'text-[#a7aaaf]'}`}>
                            {item.icon}
                        </span>
                        {item.active && (
                            <div className="absolute bottom-[1px] left-1/2 transform -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full"></div>
                        )}
                    </div>
                ))}
            </div>
            <div className="flex gap-3 items-center">
                <div className="rounded-full bg-[#333334] p-3 cursor-pointer">
                    <span className="text-xl text-[#a7aaaf]">{Icons.GRID}</span>
                </div>
                <div className="rounded-full bg-[#333334] p-3 cursor-pointer">
                    <span className="text-xl text-[#a7aaaf]">{Icons.MESSENGER}</span>
                </div>
                <div className="relative rounded-full bg-[#333334] p-3 cursor-pointer">
                    <span className="text-xl text-[#a7aaaf]">{Icons.NOTIFICATION}</span>
                    <span className="bg-[#dd2334] w-7 h-5 text-[10px] font-semibold text-center leading-5 rounded-full text-white absolute -top-1 -right-3">
                        20+
                    </span>
                </div>
                <div className="relative">
                    <div className="w-10 h-10 rounded-full cursor-pointer overflow-hidden ">
                        <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute right-0 -bottom-1 bg-[#3b3d3e] w-4 h-4 flex items-center justify-center rounded-full cursor-pointer">
                        <span className="text-[14px] text-white">{Icons.DROPDOWN}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
