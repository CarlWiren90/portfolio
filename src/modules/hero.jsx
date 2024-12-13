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
                    <h1 className='heading heading__hero--carl'>C<span className='letter'>A</span>RL</h1>
                    <h1 className='heading heading__hero--wiren'>WIREN</h1>
                </div>
                <span className='hero-line'></span>
                <div className='heading-wrapper'>
                    <h1 className='heading heading__hero--frontend'>F<span className='letter'>R</span><span className='letter'>O</span>NTEN<span className='letter'>D</span></h1>
                    <h1 className='heading heading__hero--developer'>D<span className='letter'>E</span>VELO<span className='letter'>P</span>ER</h1>
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

