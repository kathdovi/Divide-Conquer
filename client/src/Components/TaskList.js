// TODO: Make a task list here. Will render tasks.
// Uncomment the code & write the jsx

import React, { Component } from "react";
import Task from "./Task";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/Container";
import "./TaskList.css";

let nextTaskId = 0;
import axios from 'axios';

class TaskList extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			tasks : [],
			rawData: {}
		};
		this.addTask = this.addTask.bind(this);
		this.handleNextTaskChange = this.handleNextTaskChange.bind(this)
		this.remove = this.remove.bind(this);

	}

	componentDidMount() {
        axios.get('http://localhost:8080/all-tasks.jsp')
            .then(response => {
            	console.log(response.data)
                const rawData = response.data
                const tasks = rawData.map(x => ({ value: x.task_text })).filter(this.filterDups)
                this.setState({ tasks });
            });
    }

    filterDups(curr, index, arr) {
    	return arr.map(x => x.value).indexOf(curr.value) >= index;
    }

	remove(e) {
		const newtasks = this.state.tasks.filter(task => task.id != e)
		this.setState({tasks : newtasks});
	}
	
    render() {

        return (
            <Container> 
			<div>{this.state.tasks.map(task => <Task value={task.value} key={task.id} fun={()=>this.remove(task.id)} />)}</div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button onClick={this.addTask} variant="outline-secondary" style={{"fontSize": "20px", "width": "70px"}}> + </Button>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Add A Task" style={{ "height": "60px", "fontSize": "20px" }} aria-describedby="basic-addon1" value={this.state.nextTaskValue} onChange={this.handleNextTaskChange} />
                </InputGroup>
            </Container>
        );
    }
	
	addTask(e) {
		const newtask = {value : this.state.nextTaskValue, id : nextTaskId};
		nextTaskId += 1;
		this.setState({tasks : this.state.tasks.concat([newtask])});
	}
	
	handleNextTaskChange(e) {
		const nextTaskValue = e.target.value
		this.setState({
			nextTaskValue
		})
	}
	
}

export default TaskList;
