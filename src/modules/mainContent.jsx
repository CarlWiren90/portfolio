import React from "react";
import './mainContent.css'
import AboutMe from "./aboutMe";
import Experience from "./experience";
import Skillset from "./skillset";

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

        <section className="main__content">
            <AboutMe/>
            <Experience/>
            <Skillset/>
        </section>
        </main>
    );
}

export default MainContent;