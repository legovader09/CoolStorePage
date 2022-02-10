import React from "react";
import handleModal from "./handleModal";

const Modal = (props) => (
    <div className="modal overlay" data-product={`${props.content.id}`}>
        <div className="modal--content">
            <h4 className="modal--title">{props.content.title}</h4>
            <button className="btn-close" type="button" label="Close" onClick={() => handleModal(props.content.id)} />
            <p className="modal--text">{ props.content.description }</p>
        </div>
    </div>
);

export default Modal;