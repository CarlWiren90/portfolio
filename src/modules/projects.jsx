import './projects.css';
import React from 'react';
import { projectsList } from './projectsList';

const Projects = () => {

    const displayProject = (project) => {
        let child = event.target;
        let parent = child.parentElement;
        
        child.classList.add('hide-image')
        parent.classList.add('display-mode');

        const projectCardHeadingContainer = document.createElement('section');
        projectCardHeadingContainer.classList.add('project-card__heading-container');
        parent.appendChild(projectCardHeadingContainer);

        const projectCardInfoContainer = document.createElement('section');
        projectCardInfoContainer.classList.add('project-card__info-container');
        parent.appendChild(projectCardInfoContainer);

        const projectCardButtonContainer = document.createElement('section');
        projectCardButtonContainer.classList.add('project-card__button-container');
        parent.appendChild(projectCardButtonContainer);
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
                        <section key={index} className='image__container' onClick={() => displayProject(project)}>
                            <img key={index} className='project__image' src={project.projectImg}>
                         </img>
                        </section>
                        )
                    })}
                </section>
            </section>
        </>
    );
}


export default Projects;