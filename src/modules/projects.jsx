import './projects.css';
import React from 'react';
import { projectsList } from './projectsList';

const Projects = () => {


    const displayProject = (project) => {
     /*    let child = event.target; 
        let parent = child.parentElement;
        console.log(parent)
        console.log(child)

        parent.classList.toggle('display-mode')
        child.classList.toggle('hide') */

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
                            <section key={project.projectID} className='image__container' onClick={() => displayProject(project)}>
                                <section className ="project-card__heading-container">{project.projectName}</section>
                                <section className ="project-card__image-container">
                                    <img className='project-card__image' src={project.projectImg}></img>
                                </section>
                                <section className ="project-card__info-container">{project.projectDescription}</section>
                                <section className ="project-card__techstack-container"><span className='bold'>Techstack: </span>{project.projectTechStack}</section>
                                <section className ="project-card__button-container">
                                    <a className='button button--github'>View repo</a> 
                                    <a className='button button--demo'>Live demo</a> 

                                </section>
                            </section>
                        )
                    })}
                </section>
            </section>
        </>
    );
}


export default Projects;