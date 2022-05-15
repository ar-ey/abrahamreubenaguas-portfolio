import React from "react";
import { Link } from "react-router-dom"
import "../assets/css/success.css"



export default function Success() {
    return (
        <main className="success">
            <h1>Thank you!</h1>
            <p>We will send you a confirmation that we received your email.</p>
            <Link to="/home"><button className="btn btn-blue">back to home</button></Link>
        </main>
    )
}