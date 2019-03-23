
import React, { Component } from "react";
import Subtask from "./Subtask";

// import React, { Component } from "react";
// import Subtask from "./Subtask";

let nextTaskId = 0;

class Task extends Component {
	
	constructor(props) {
		super(props);
		this.state = {done: false};
		this.state = {id: nextTaskId};
		nextTaskId += 1;
	}
	
	toggle() {
		this.setState(!this.done);
	}
	
// class Task extends Component {


     render() {


        return (
            <div />
        );
    }
}
// export default Task;
