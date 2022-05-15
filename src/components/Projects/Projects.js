import React from "react"
import { BsArrow90DegDown } from 'react-icons/bs';
import "../../assets/css/projects.css";
import Project from "./Project";
import projectlist from "./projectlist";

export default function Projects() {
    const projects = projectlist.map((project) => <Project key={project.id} image={project.image_url} title={project.title} tag={project.tag} tagcolor={project.tagcolor} tagtextcolor={project.tagtext} link={project.link} />)
    return (

        <main className="projects">
            <h1 className="title">projects <BsArrow90DegDown className="icon" /></h1>
            <section className="projects-container">
                {projects}
            </section>
        </main>
    )
}