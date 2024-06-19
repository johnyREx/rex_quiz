import React from "react";
import { createPortal } from "react-dom";
import "./Modal.css";
import usekeyDown from "../../Hooks/useKeyDown";

const Modal = ({ children, setIsModalOpen }) => {
    usekeyDown(() => {
        setIsModalOpen(false);
    }, "Escape");
    usekeyDown(() => {
        setIsModalOpen(true);
    }, "q");

    return createPortal(
        <div className="modal-container"> {children} </div>,
        document.getElementById("modal")
    );
};

export default Modal;