import React from "react";
import './aboutMe.css';

const AboutMe = () => {
    return (
        <>
            <section className="about-me">
                <section className="content__heading--container">
                    <h1 className="content__heading">About me.</h1>
                </section>
                <section className="content__info-container">
                    <h2 className="content__info">
                    I’m Carl Wirén and I’m a  
                    <span className="frontend-developer"> <br></br>Frontend developer</span> & <span className="uxui-designer">UX/UI </span> 
                    designer based out of Malmö, Sweden.
                    </h2>
                </section>
            </section>
        </>
    );
}

export default AboutMe;