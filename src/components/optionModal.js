import React from "react";
import Modal from "react-modal";
// implicit return when using ( )

Modal.setAppElement( '#app' )

const OptionModal = (props) => (
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose = {props.handleCloseModal}
    contentLabel = "Selected option"
    >
    <h3> Hello world </h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleCloseModal}>Okay</button>
    </Modal>

);

export default OptionModal;