// TODO: Make a task list here. Will render tasks.
// Uncomment the code & write the jsx

import React, { Component } from "react";
import Task from "./Task";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import Container from "react-bootstrap/Container";


class TaskList extends Component {

    render() {

        return (
            <Container> 
                <Task value="do something" /> 
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <Button variant="outline-secondary" style={{"fontSize": "20px", "width": "70px"}}> + </Button>
                    </InputGroup.Prepend>
                    <FormControl style={{ "height": "60px", "fontSize": "20px" }} aria-describedby="basic-addon1" />
                </InputGroup>
            </Container>
        );
    }
}

export default TaskList;
