import React from "react";

export default function Project(props) {
    const tag_styles = {
        background: props.tagcolor,
        color: props.tagtextcolor,

    }
    return (
        <div className="project">
            <a href={props.link} target="_blank"><div className="img-container" >
                <img src={props.image} alt={props.title} />
                <p className="project-title">{props.title}</p>
            </div>
                <div className="project-tag" style={tag_styles}>{props.tag}</div>
            </a>
        </div>

    )
}