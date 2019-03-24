
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
import axios from 'axios';

let nextSubTaskId = 0;

class Task extends Component {
	
	componentDidMount() {
        axios.get('http://localhost:8080/all-tasks.jsp')
            .then(response => {
            	console.log(response.data)
                const rawData = response.data
                const subTasks = rawData.filter(x => x.sub_text !== "null").filter(x => this.state.name == x.task_text).map(x => ({ value: x.sub_text }))
                this.setState({ subTasks });
            });
    }

	onChange(e) {
		axios.get('http://localhost:8080/user-score-call.jsp?name="you"')
            .then(response => {
                const score = parseInt(response.data.score);
                this.setState({score});
            });
			
		this.setState({done: !this.state.done});
		if (!this.state.done) {
			this.setState({ score: this.state.score + 5});
			this.setState({ modalShow: true });
		} else {
			this.setState({ score: this.state.score - 5});
		}
		
		//post new score here as well
	}
	
	constructor(props) {
		super(props);
		this.state = { 
			score: 0,
			modalShow: false, 
			subTasks : [],

			done:false, 
			id:props.id, 
			name:props.value,
			nextSubtaskValue: ''
		};
		
		this.onChange = this.onChange.bind(this);
		this.addSubTask = this.addSubTask.bind(this);
		this.handleNextSubtaskChange = this.handleNextSubtaskChange.bind(this)
		
	}

	
	addSubTask(e) {
		const newtask = {value : this.state.nextSubtaskValue, id : nextSubTaskId};
		nextSubTaskId += 1;
		this.setState({subTasks : this.state.subTasks.concat([newtask])});
	}
	
	handleNextSubtaskChange(evt) {
		const nextSubtaskValue = evt.target.value
		this.setState({
			nextSubtaskValue
		})
	}
	
	remove(sub) {
		const newtasks = this.state.subTasks.filter(task => task.id != sub)
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
					<Form.Check type="checkbox" id={this.state.id} isStatic={false}
					label={this.state.name} onChange={this.onChange} />

				</Col>
				<Col sm={4}>
					<Button variant="outline-danger" onClick={this.props.fun}>Delete</Button>
				</Col>
				</Form.Group>
			</Form>
		</Alert>
	 <div>{this.state.subTasks.map(subtask => <Subtask value={subtask.value} key={subtask.id} fun={()=>this.remove(subtask.id)} />)}</div>
		
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
