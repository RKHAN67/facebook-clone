import React, { useState } from "react";
import { Link } from "react-router-dom";
import userImage from "../assets/images/user.jpeg";
import { Icons } from "../assets/icon/Icons";

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

const postActions = [
    { name: "Live video", icon: Icons.REELS, color: "#f02849" },
    { name: "Photo/video", icon: Icons.PHOTO, color: "#45bd62" },
    { name: "Feeling/activity", icon: Icons.EMOJI, color: "#f7b928" },
];

const Home = () => {
    const [showMore, setShowMore] = useState(false);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex bg-[#1c1c1d] w-full h-full">
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
            <div className="w-full pt-2">
                <div className="flex flex-col gap-3 bg-[#252728] p-5 rounded-2xl">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full cursor-pointer overflow-hidden">
                            <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <div className="bg-[#333334] rounded-full hidden md:flex items-center h-10 px-3 w-full">
                            <input
                                type="text"
                                className="outline-none bg-transparent text-white ml-2 w-full"
                                placeholder="What's on your mind, Rizwan?"
                            />
                        </div>
                    </div>
                    <div className="border border-[#333536]"></div>
                    <div className="flex items-center gap-9">
                        {postActions.map((action, index) => (
                            <button
                                key={index}
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => action.name === "Photo/video" && setShowModal(true)}
                            >
                                <span className="text-xl" style={{ color: action.color }}>
                                    {action.icon}
                                </span>
                                <h3 className="text-[#9ea1a5] text-base font-semibold">
                                    {action.name}
                                </h3>
                            </button>
                        ))}
                    </div>
                </div>
                {showModal && (
                    <div className="fixed inset-0  backdrop-blur-sm flex justify-center items-center">
                        <div className="flex flex-col gap-3 bg-[#252728] p-5 rounded-lg w-[450px] shadow-lg">
                            <div className="flex items-center justify-end gap-35">
                                <h2 className="text-lg font-semibold text-white text-center">Create Post</h2>
                                <div
                                    className="cursor-pointer rounded-full bg-[#333334] py-2 px-2 "
                                    onClick={() => setShowModal(false)}
                                >
                                    <span className="text-xl text-[#a7aaaf]">{Icons.CLOSE}</span>
                                </div>
                            </div>
                            <div className="border border-[#333536]"></div>
                            <div className="flex flex-col gap-5">
                                <textarea className="w-full h-[150px] text-xl text-white outline-none resize-none" placeholder="What's on your mind, Rizwan?"></textarea>
                                <div className="flex justify-between border border-[#4b4d50] rounded-lg py-3.5 px-4">
                                    <h3 className="text-white text-sm cursor-pointer">Add to your post</h3>
                                    <div className="flex gap-2">
                                        <span className="text-xl text-[#45bd62] cursor-pointer">{Icons.PHOTO}</span>
                                        <span className="text-xl text-[#1877f2] cursor-pointer">{Icons.FRIENDS}</span>
                                        <span className="text-xl text-[#f7b928] cursor-pointer">{Icons.EMOJI}</span>
                                        <span className="text-xl text-[#f02849] cursor-pointer">{Icons.PHOTO}</span>
                                        <span className="text-xl text-[#2ab8a4] cursor-pointer">{Icons.PHOTO}</span>
                                    </div>
                                </div>
                                <button className="w-full text-center text-white cursor-pointer bg-[#1877f2] py-2 rounded-lg">Post</button>
                            </div>
                        </div>
                    </div>
                )}

            </div>

            <div className="w-[80%]"></div>
        </div>
    );
};

export default Home;
