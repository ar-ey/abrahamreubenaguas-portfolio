import React from "react"
import { BsArrow90DegDown } from 'react-icons/bs';
import "../../assets/css/about.css";
import Certificate from "./Certificate";
import certifications from "./certifications";

export default function Projects() {
    const certificates = certifications.map((certificate) => <Certificate key={certificate.id} image={certificate.image_url} title={certificate.title} />)
    return (
        <main className="about">
            <section className="about">
                <h1 className="title">about me</h1>
                <p>I am currently taking up my 3rd year in bachelor’s degree of Information Technology and I am focused most especially in web development career. I showcase here some of my projects and designs. Hope you’ll like it.</p>
            </section>
            <section className="certificates">
                <h1 className="title">certifications <BsArrow90DegDown className="icon" /></h1>
                <section className="certificates-container">
                    {certificates}
                </section>
            </section></main>
    )
}