import React from "react";
import './mainContent.css'
import AboutMe from "./aboutMe";

const MainContent = () => {
    return (
        <main className='main'>
            <video className='video-background'
            autoPlay
            muted
            loop
            playsInline>
                <source src="/video/site-video-1028.mp4" type="video/mp4"/>
            </video>
            <AboutMe/>

        </main>
    );
}

export default MainContent;