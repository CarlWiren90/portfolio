import './hero.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Hero = () => {
    const [runAnimation, setRunAnimation] = useState(true);

    useEffect(() => {
        if (runAnimation) {
            const letterO = document.querySelector('.o');
            letterO.classList.add('letter-animation');  
            setRunAnimation(false);

            setTimeout(() => {
                setRunAnimation(true);
                console.log(runAnimation)
            }, 2500);
        }

            
    }, []);

    return (
        <section className='section section--hero'>
            <section className='heading__container heading__container--hero'>
                <div className='heading-wrapper'>
                    <h1 className='heading heading__hero--carl'>CARL</h1>
                    <h1 className='heading heading__hero--wiren'>WIREN</h1>
                </div>
                <span className='hero-line'></span>
                <div className='heading-wrapper'>
                    <h1 className='heading heading__hero--frontend'>FR<span className='o'>O</span>NTEND</h1>
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