import React, { Component } from "react";
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import axios from 'axios'

class PointBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {score : 0}
	}
	
	componentDidMount() {
      axios.get('http://localhost:8080/user-score-call.jsp?name="you"')
            .then(response => {
                const score = parseInt(response.data.score);
                this.setState({score});
            });
    }
	
	render() { 
	
		axios.get('http://localhost:8080/user-score-call.jsp?name="you"')
            .then(response => {
                const score = parseInt(response.data.score);
                this.setState({score});
            });	

		return (
			<Container>
				<Alert variant={'dark'} style={{"width":"25vw", "float":"right"}}>
					{this.state.score}
				</Alert>
			</Container>
		);
	}
}
export default PointBar