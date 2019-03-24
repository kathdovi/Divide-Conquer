import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'


class PointBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {points : 0}
	}
	
	componentDidMount() {
      
    }
	
	render() { 
		return (
			<Container>
				<Alert variant={'dark'} style={{ "width": "25vw", "float": "right"}}>
					{this.state.points}
				</Alert>
			</Container>
		);
	}
}
export default PointBar