import React from "react";

import { MdOutlineClose } from 'react-icons/md';
import "../assets/css/modal.css"

export default function VideoModal(props) {
    return (
        <>

            {props.video &&
                <div className="modal-backdrop">
                    <div className="modal-container">sds
                        <MdOutlineClose className="close-video" onClick={props.onclick} />
                    </div></div>}</>
    )
}