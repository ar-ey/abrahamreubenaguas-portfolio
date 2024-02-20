import React from "react"
import { BsArrow90DegDown } from 'react-icons/bs';
import "../../assets/css/about.css";
import Certificate from "./Certificate";
import certifications from "./certifications";

export default function Certificates() {
    const certificates = certifications.map((certificate) => <Certificate key={certificate.id} image={certificate.image_url} title={certificate.title} tag={certificate.tag} tagcolor={certificate.tagcolor} tagtextcolor={certificate.tagtext} link={certificate.link} />)
    return (
        <main className="about">

            <section className="certificates">
                <h1 className="title">certifications <BsArrow90DegDown className="icon" /></h1>
                <section className="certificates-container">
                    {certificates}
                </section>
            </section></main>
    )
}