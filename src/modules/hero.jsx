import './hero.css';
import React, { useState } from 'react';
import { useEffect } from 'react';

const Hero = () => {
    const [runAnimation, setRunAnimation] = useState(true);  

    useEffect(() => {
        const letterNodes = Array.from(document.querySelectorAll('.letter'));
        
        if (runAnimation) {
            let chosenLetter = letterNodes[Math.floor((Math.random() * letterNodes.length))];        
            
            if (chosenLetter) {
                if (chosenLetter.classList.contains('letter-reverse')) {
                    chosenLetter.classList.remove('letter-reverse')
                    chosenLetter.classList.add('letter-animation');
                    setRunAnimation(false);
                }
                else if (chosenLetter.classList.contains('letter-animation')) {
                    chosenLetter.classList.remove('letter-animation');
                    chosenLetter.classList.add('letter-reverse')
                    setRunAnimation(false);
                }  
                else {
                    chosenLetter.classList.add('letter-animation');
                    setRunAnimation(false);
                }          
            }
            else 
            {
                console.log('Chosen letter not found in DOM');
            }

            setTimeout(() => {
                setRunAnimation(true);

            }, 3500);
        }
    }, [runAnimation])

    return (
        <section className='section section--hero'>
            <section className='heading__container heading__container--hero'>
                <div className='heading-wrapper'>
                    <h1 className='heading heading__hero--carl'>CARL</h1>
                    <h1 className='heading heading__hero--wiren'>WIREN</h1>
                </div>
                <span className='hero-line'></span>
                <div className='heading-wrapper'>
                    <h1 className='heading heading__hero--frontend'><span className='letter'>F</span><span className='letter'>R</span>ONT<span className=''>E</span>N<span className='letter'>D</span></h1>
                    <h1 className='heading heading__hero--developer'>D<span className='letter'>E</span>VELO<span className='letter'>P</span>E<span className='letter'>R</span></h1>
                </div>
                <p className='heading__info'>I’m a sucker for <span className="bold">modern</span> and <span className='bold'>cool</span> design and I love spending my time creating beautiful applications with <span className='bold'>Javascript</span>, <span className='bold'>Typescript</span> and <span className='bold'>CSS</span>.</p>
                <section className="button-container">
                    <a className="button button--download-cv" href="/Carl-Wiren-CV-portfolio.pdf" download="CarlWiren-CV.pdf" aria-label="Download CV">Download CV</a>
                    <a className="button button--contact-me" href="mailto:carlwiren90@gmail.com" aria-label="Contact me">Contact me</a>
                </section>
            </section>

            <section className='image__container image__container--hero'>
                <img className='image image__hero' src="./images/hero-image.png"></img>
            </section>
        </section>
    );
}

export default Hero;

