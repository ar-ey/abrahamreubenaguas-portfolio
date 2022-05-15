import React from "react";

export default function Project(props) {
    const tag_styles = {
        background: props.tagcolor,
        color: props.tagtextcolor,

    }
    return (
        <div className="certificate">
            <div className="img-container" >
                <img src={props.image} alt={props.title} />
                {/* <p className="certificate-title">{props.title}</p> */}
            </div>

        </div>

    )
}