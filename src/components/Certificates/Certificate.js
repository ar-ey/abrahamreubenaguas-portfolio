import React from "react";

export default function Certificate(props) {
    const tag_styles = {
        background: props.tagcolor,
        color: props.tagtext,

    }
    return (
        <div className="certificate">
            <a href={props.link} target="_blank">
                <div className="img-container" >
                    <img src={props.image} alt={props.title} />
                    {/* <p className="certificate-title">{props.title}</p> */}
                </div>
                <div className="certificate-tag" style={tag_styles}>{props.tag}</div>
            </a>
        </div>

    )
}