import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

let message = "placeholder";

// get score from the api here
// Add the get request
// axios.get().then(response => console.log(response));
// parse response and set message to the response


class PositiveModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        You Did It!
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4> {message} </h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }  
}

export default PositiveModal;