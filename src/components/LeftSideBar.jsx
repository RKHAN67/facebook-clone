import React, { useState } from 'react'
import { Icons } from '../assets/icon/Icons'
import { Link } from 'react-router-dom';
import userImage from "../assets/images/user.jpeg";

const menuItems = [
    { name: "Friends", icon: Icons.FRIENDS, link: "/friends" },
    { name: "Memories", icon: Icons.MEMORIES, link: "/memories" },
    { name: "Saved", icon: Icons.SAVE, link: "/saved" },
    { name: "Groups", icon: Icons.PROFILE, link: "/groups" },
    { name: "Video", icon: Icons.VIDEO, link: "/video" },
    { name: "Marketplace", icon: Icons.MARKETPLACE, link: "/marketplace" },
    { name: "Feeds", icon: Icons.FEEDS, link: "/feeds" },
    { name: "Events", icon: Icons.EVENTS, link: "/events" },
    { name: "Ads Manager", icon: Icons.ADS, link: "/ads" },
    { name: "Fundraisers", icon: Icons.HEART, link: "/fundraisers" },
];

const moreItems = [
    { name: "Birthdays", icon: Icons.GIFT, link: "/birthdays" },
    { name: "Gaming Video", icon: Icons.GAMEING_VIDEO, link: "/gaming-video" },
    { name: "Messenger", icon: Icons.MESSENGER, link: "/messenger" },
    { name: "Play Games", icon: Icons.GAMES, link: "/play-games" },
    { name: "Reels", icon: Icons.REELS, link: "/reels" },
];
export const LeftSideBar = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <div className="flex flex-col gap-5 py-3 px-5 w-[80%] h-full overflow-hidden hover:overflow-y-auto custom-scrollbar">
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full cursor-pointer overflow-hidden">
                    <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-white text-base font-semibold">Rizwan Khan</h3>
            </div>
            {menuItems.map((item, index) => (
                <Link to={item.link} key={index} className="flex items-center gap-2">
                    <span className="text-white text-2xl">{item.icon}</span>
                    <h3 className="text-white text-base font-semibold">{item.name}</h3>
                </Link>
            ))}
            {showMore &&
                moreItems.map((item, index) => (
                    <Link to={item.link} key={index} className="flex items-center gap-2">
                        <span className="text-white text-2xl">{item.icon}</span>
                        <h3 className="text-white text-base font-semibold">{item.name}</h3>
                    </Link>
                ))}
            <div
                className="flex gap-2 items-center -ml-1 cursor-pointer"
                onClick={() => setShowMore(!showMore)}
            >
                <div
                    className="rounded-full bg-[#333334] py-1 px-1 transition-transform duration-300"
                    style={{ transform: showMore ? "rotate(180deg)" : "rotate(0deg)" }}
                >
                    <span className="text-xl text-[#a7aaaf]">{Icons.DROPDOWN}</span>
                </div>
                <h3 className="text-white text-base font-semibold">
                    {showMore ? "See less" : "See more"}
                </h3>
            </div>
        </div>
    )
}
