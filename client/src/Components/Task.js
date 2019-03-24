
import React, { Component } from "react";
import Subtask from "./Subtask";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './Task.css'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Modal from "./Modal";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

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
		this.state = { 
			modalShow: false, 
			subTasks : [], 
			done:false, 
			id:nextTaskId, 
			name:props.value,
			nextSubtaskValue: ''
		};
		
		nextTaskId += 1;
		this.onChange = this.onChange.bind(this);
		this.addSubTask = this.addSubTask.bind(this);
		this.handleNextSubtaskChange = this.handleNextSubtaskChange.bind(this)
		
	}

	
	addSubTask(e) {
		const newtask = {value : this.state.nextSubtaskValue};
		this.setState({subTasks : this.state.subTasks.concat([newtask])});
	}
	
	handleNextSubtaskChange(evt) {
		const nextSubtaskValue = evt.target.value
		this.setState({
			nextSubtaskValue
		})
	}
	
	remove(sub) {
		const newtasks = this.state.subTasks.filter(task => task.value != sub)
		this.setState({subTasks : newtasks});
	}


     render() {

		 let modalClose = () => this.setState({ modalShow: false });


        return (
		<div>
		<Alert style={{"width":"100%", "float":"left"}} key={this.state.id} variant={this.state.done ? 'success' : 'warning'}>
			<Form >
				<Form.Group as={Row} controlId={this.state.id}>
				<Col sm={8}>
					<Form.Check type="checkbox" id={this.state.id}
					label={this.state.name} onChange={this.onChange} />

				</Col>
				<Col sm={4}>
					<Button variant="outline-danger" onClick={this.props.fun}>Delete</Button>
				</Col>
				</Form.Group>
			</Form>
		</Alert>
	 <div>{this.state.subTasks.map(subtask => <Subtask value={subtask.value} key={subtask.value} fun={()=>this.remove(subtask.value)} />)}</div>
		
		<div style={{"width":"80%", "float":"right"}}>
		<InputGroup className="mb-3">
            <InputGroup.Prepend>
                <Button onClick={this.addSubTask} variant="outline-secondary" style={{"fontSize": "20px", "width": "70px"}}> + </Button>
            </InputGroup.Prepend>
            <FormControl placeholder="Add A Subtask" style={{ "height": "60px", "fontSize": "20px" }} aria-describedby="basic-addon1" value={this.state.nextSubtaskValue} onChange={this.handleNextSubtaskChange} />
        </InputGroup>
		</div>

		 <Modal
          show={this.state.modalShow}
          onHide={modalClose}
        />
		</ div>
        );
    }
}
export default Task;
