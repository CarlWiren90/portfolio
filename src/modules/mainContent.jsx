import React from "react";
import './mainContent.css'
import AboutMe from "./aboutMe";
import Experience from "./experience";
import Skillset from "./skillset";
import Projects from "./projects";

const MainContent = () => {
    return (
        <main className='main'>
            <video className='video-background'
            autoPlay
            muted
            loop
            playsInline>
                <source src="/video/site-video-1028.mp4" type="video/mp4" media="all and (min-width: 481px"/>
                <source src="/video/site-video-720.mp4" type="video/mp4" media="all and (max-width: 480px"/>
            </video>

        <section className="main__content">
            <AboutMe/>
            <Experience/>
            <Skillset/>
            <Projects/>
        </section>
        </main>
    );
}

export default MainContent;