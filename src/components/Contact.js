import React from "react";
import "../assets/css/contact.css"
import { HiMail } from 'react-icons/hi'
import { BsPhoneFill } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export default function Contact() {

    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        message: ""
    })


    function handleInput(event) {
        const { name, value } = event.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const reply = `Hello! ${formData.name}. This is an auto-generated message. I'll get back to you in a while. Thank you`

    return (
        <main className="contact">
            <h1 className="title">contact me</h1>
            <div className="contact-container flex">
                <section className="contact-form">
                    <form action="https://formsubmit.co/c8e4596c94db537d0475a79c9dcaec21" method="POST">
                        <p className="input-label">How should I call you?</p>
                        <input type="text" name="name" placeholder="Enter your name" onChange={handleInput} value={formData.name} />
                        <p className="input-label">Do you have an Email?</p>
                        <input type="email" name="email" placeholder="Enter your email" onChange={handleInput} value={formData.email} />
                        <p className="input-label">How can I help you?</p>
                        <textarea name="message" placeholder="Write your message..." onChange={handleInput} value={formData.message} > </textarea><br />
                        <button className="btn btn-blue send-message">Send my message</button>

                        <input type="hidden" name="_subject" value="Portfolio Message"></input>
                        <input type="hidden" name="_autoresponse" value={reply}></input>
                        <input type="hidden" name="_next" value="http://localhost:3000/success"></input>
                    </form>
                </section>
                <section className="contact-info">
                    <h1>Okay</h1>
                    <h1>Let's begin.</h1>
                    <div className="contact-details">
                        <div className="detail flex"> <HiMail className="icon" /> <p>abraham.reuben10@gmail.com</p></div>
                        <div className="detail flex"> <BsPhoneFill className="icon" /> <p>+63 927 024 3914</p></div>
                        <div className="detail flex">  <BsGithub className="icon" /><a href="https://github.com/ar-ey" target="_blank"><p>github account</p></a></div>

                    </div>
                </section></div>
        </main>
    )
}