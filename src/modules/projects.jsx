import './projects.css';
import React from 'react';
import { projectsList } from './projectsList';

const Projects = () => {

    const displayProject = (project) => {
        const image = event.target;
/*         image.classList.toggle('displayed')
 */        console.log(event.target);
    }
    
    return (
        <>
            <section className="projects">
                <section className="content__heading--container">
                    <h1 className="content__heading">Projects.</h1>
                </section>

                <section className="content__info-container content__info-container--projects">
                    {projectsList.map((project, index) => {
                        return (
                        <div key={index} className='image__container' onClick={() => displayProject(project)}>
                            <img key={index} className='project__image' src={project.projectImg}>
                         </img>
                        </div>


                        )
                    })}
                </section>
            </section>
        </>
    );
}


export default Projects;