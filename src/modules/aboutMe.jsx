import React from "react";
import './aboutMe.css';

const AboutMe = () => {
    return (
        <>
            <section className="about-me">
                <section className="content__heading--container">
                    <h1 className="content__heading">About me.</h1>
                </section>

                <section className="content__info-container content__info-container--about-me">
                    <h2 className="content__info content__info--about-me">
                    My name is Carl Wirén and I’m a  
                    <span className="bold"> <br></br>Frontend developer</span> & <span className="bold">UX/UI </span> 
                    designer based out of <span className="bold">Malmö, Sweden</span>.
                    </h2>
                    <h2 className="content__info">
                    <br></br>
                        I love spending my time designing and creating beautiful applications with <span className="bold">Javascript</span>,<span className="bold">Typescript</span>  and <span className="bold">CSS</span>.
                    </h2>
                </section>
                
                <section className="button-container">
                    <a className="button button--download-cv" href="/CarlWiren-CV.pdf" download="CarlWiren-CV.pdf" aria-label="Download CV">Download CV</a>
                    <a className="button button--contact-me" aria-label="Contact me">Contact me</a>
                </section>
            </section>
        </>
    );
}

export default AboutMe;