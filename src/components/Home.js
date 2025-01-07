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
                    <p>Software Developer</p>
                    <div className="hello-btns one flex">
                        <Link to="/blog"><button className="btn btn-blue">read blog</button></Link>
                        {/* <button className="btn btn-blue video" onClick={videoClicked}>Watch my Video Resume <BsFillPlayCircleFill className="play-icon" /></button> */}
                    </div>
                </section>
                <section className="image">
                    <div className="image-container">
                        <img src={require('../assets/images/2x2_Aguas2.png')} alt="" />
                    </div>
                </section>
                <section className="small-info home-text">
                    <h1>some info about me...</h1>
                    <p>Motivated software engineer looking for opportunities to develop essential skills and have a
                        meaningful impact to the company . Showed ability to design and develop software which satisfied the needs of
                        the client. A productive person committed to continuous learning and professional growth, staying updated with
                        the latest emerging technologies and trends to deliver innovative solutions.</p>
                    <div className="hello-btns two">


                    </div>
                </section>
            </main>
        </>
    )
}