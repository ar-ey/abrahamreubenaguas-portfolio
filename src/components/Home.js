import React from "react";
import { Link } from "react-router-dom"
import "../assets/css/home.css";
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';

export default function Home() {
    const [video, setVideo] = React.useState(false)
    function videoClicked() {
        setVideo(!video)
    }
    return (
        <>
            {video && <div className="video-container"> <iframe width="80%" height="600" src="https://www.youtube.com/embed/QTwXZOCL_HE"> </iframe><MdOutlineClose className="close-video" onClick={videoClicked} /></div>}

            <main className="home flex">
                <section className="hello home-text">
                    <p>hello, I am</p>
                    <h1>ABRAHAM</h1>
                    <p>Student Web Developer | UI Designer </p>
                    <div className="hello-btns one flex">
                        <Link to="/blog"><button className="btn btn-blue">read blog</button></Link>
                        {/* <button className="btn btn-blue video" onClick={videoClicked}>Watch my Video Resume <BsFillPlayCircleFill className="play-icon" /></button> */}
                    </div>
                </section>
                <section className="image">
                    <div className="image-container">
                        <img src={require('../assets/images/image.jpg')} alt="" />
                    </div>
                </section>
                <section className="small-info home-text">
                    <h1>some info about me...</h1>
                    <p>I am currently taking up my 3rd year in bachelor’s degree of Information Technology and I am focused most especially in web development career. I showcase here some of my projects and designs. Hope you’ll like it.</p>
                    <div className="hello-btns two">
                        <Link to="/about"><button className="btn btn-blue read">read more</button></Link>

                    </div>
                </section>
            </main>
        </>
    )
}