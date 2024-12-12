import './hero.css';
import React from 'react';
import { useEffect } from 'react';

const Hero = () => {



    return (
        <section className='section section--hero'>
            <section className='heading__container heading__container--hero'>
                <div className='heading-wrapper'>
                    <h1 className='heading heading__hero--carl'>CARL</h1>
                    <h1 className='heading heading__hero--wiren'>WIREN</h1>
                </div>
                <span className='hero-line'></span>
                <div className='heading-wrapper'>
                    <h1 className='heading heading__hero--frontend'>FRONTEND</h1>
                    <h1 className='heading heading__hero--developer'>DEVELOPER</h1>
                </div>   
                <section className='heading__status'>
                    <span className='status'>Status:</span>
                    <span className='status__info'>Looking for internship</span>
                </section> 
            </section>

            <section className='image__container image__container--hero'>
                <img className='image image__hero' src="./images/hero-image-eye.avif"></img>
            </section>
        </section>
    );
}

export default Hero;