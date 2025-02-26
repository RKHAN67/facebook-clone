import React, { useState } from "react";
import userImage from "../assets/images/user.jpeg";
import { LeftSideBar } from "../components/LeftSideBar";
import { CenterBar } from "../components/CenterBar";

const Home = () => {
    return (
        <div className="flex bg-[#1c1c1d] w-full h-full">
            <LeftSideBar />
            <div className="flex flex-col gap-10">
                <CenterBar />
                <div className="bg-[#252728] p-5 rounded-2xl">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 rounded-full cursor-pointer overflow-hidden">
                            <img src={userImage} alt="Profile" className="w-full h-full object-cover" />
                        </div>
                        <span className="flex flex-col gap-1">
                            <p className="text-sm text-white hover:underline cursor-pointer">Habib U Aar Rehman</p>
                            <p className="text-xs text-[#b0b3b8]">7h</p>
                        </span>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="w-[80%]"></div>
        </div>
    );
};

export default Home;
