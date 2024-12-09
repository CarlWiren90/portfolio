import './skillset.css';
import React from 'react';

const Skillset = () => {
    return (
        <>
            <section className="skillset">
                <section className="content__heading--container">
                    <h1 className="content__heading">Skillset.</h1>
                </section>

                <section className="content__info-container content__info-container--skillset">
                    <h2 className="content__info content__info--skillset">
                        <ul className='skillset__list'>
                            <li className='skillset__item'>React.js</li>
                            <li className='skillset__item'>JavaScript</li>
                            <li className='skillset__item'>TypeScript</li>
                            <li className='skillset__item'>HTML</li>
                            <li className='skillset__item'>CSS</li>
                            <li className='skillset__item'>Figma</li>
                            <li className='skillset__item'>Git</li>
                        </ul>
                    </h2>  
                </section>
            </section>
        </>
    );
}

export default Skillset;