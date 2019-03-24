import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

let message = "placeholder";
let rand = Math.floor(Math.random() * 10) +1

// get score from the api here
// Add the get request
// parse response and set message to the response


class PositiveModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/reinforcement-call.jsp?aff_id=" + rand)
        .then(response => {
            console.log(rand)
            const message = response.data.message;
            this.setState({message});
            });
    }
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
                        Task Completed!
          </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4> {this.state.message} </h4>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }  
}

export default PositiveModal;