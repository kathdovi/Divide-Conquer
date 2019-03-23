
import React, { Component } from "react";
//import Subtask from "./Subtask";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
// import './Task.css'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Modal from "./Modal";

let nextTaskId = 0;

class Task extends Component {
	
	onChange(e) {
		this.setState({done: !this.state.done});
		if (!this.state.done) {
			this.setState({ modalShow: true });
		}
	}
	
	constructor(props) {
		super(props);
		this.state = { modalShow: false };
		this.state = {subTasks: {}};
		this.state = {done: false};
		this.state = {id: nextTaskId};
		this.state = {name: props.value};
		nextTaskId += 1;
		this.onChange = this.onChange.bind(this);
		
	}
	
	remove(e) {
	}

	
	addSubTask(props) {
		
	}


     render() {

		 let modalClose = () => this.setState({ modalShow: false });


        return (
		<div style={{"paddingBottom" : "10px", "paddingTop" : "10px"}}>
		<Alert key={this.state.id} variant={this.state.done ? 'success' : 'warning'}>
			<Form>
				<Form.Group as={Row} controlId={this.state.id}>
				<Col sm={8}>
					<Form.Check type="checkbox" id={this.state.id}
					label={this.state.name} onChange={this.onChange} />

				</Col>
				<Col sm={4}>
					<Button variant="outline-danger" onClick={this.remove}>Delete</Button>
				</Col>
				</Form.Group>
			</Form>
		</Alert>
		<div>{this.state.subTasks}</div>
		 <Modal
          show={this.state.modalShow}
          onHide={modalClose}
        />
		</ div>
        );
    }
}
export default Task;
