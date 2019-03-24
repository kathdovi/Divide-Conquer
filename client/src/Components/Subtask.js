import React, { Component } from "react";
//import Subtask from "./Subtask";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Task.css'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'

let nextSubTaskId = 0;

class Subtask extends Component {
	
	onChange(e) {
		this.setState({done: !this.state.done});
	}
	
	constructor(props) {
		super(props);
		this.state = {done: false};
		this.state = {id: nextSubTaskId};
		this.state = {name: props.value};
		nextSubTaskId += 1;
		this.onChange = this.onChange.bind(this);
		
	}

     render() {


        return (
		<Container style={{"paddingLeft" : "10px","paddingBottom" : "10px", "paddingTop" : "10px"}}>
		<Alert key={this.state.id} variant={this.state.done ? 'success' : 'warning'}>
			<Form>
				<Form.Group as={Row} controlId={this.state.id}>
				<Col sm={8}>
					<Form.Check type="checkbox" id={this.state.id}
					label={this.state.name} onChange={this.onChange} />

				</Col>
				<Col sm={4}>
					<Button onClick={this.props.fun} variant="outline-danger">Delete</Button>
				</Col>
				</Form.Group>
			</Form>
		</Alert>
		</ Container>
        );
    }
}
export default Subtask;