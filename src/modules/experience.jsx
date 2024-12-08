import './experience.css';

const Experience = () => {
    return (
        <section className="experience">
                <section className="content__heading--container">
                    <h1 className="content__heading">Experience.</h1>
                </section>

                <section className="content__info-container">
                    <h2 className="content__info content__info-heading">
                        Folkuniversitetet Göteborg
                    </h2>
                    <h3 className='content__info content__info-year'>
                        2024-2026
                    </h3>
                    <h3 className='content__info content__info-position'>
                        Frontend Developer program
                    </h3>
                </section>
                
                <section className="content__info-container">
                    <h2 className="content__info content__info-heading">
                        Capio Vårdcentral Malmö Centrum
                    </h2>
                    <h3 className='content__info content__info-year'>
                        2022-2024
                    </h3>
                    <h3 className='content__info content__info-position'>
                        Clinical Physiotherapist
                    </h3>
                </section>

                            
                <section className="content__info-container">
                    <h2 className="content__info content__info-heading">
                        Backyard Sessions
                    </h2>
                    <h3 className='content__info content__info-year'>
                        2018-2022
                    </h3>
                    <h3 className='content__info content__info-position'>
                        Social Media Manager & Copywriter
                    </h3>
                </section>
            </section>
    );
}

export default Experience;