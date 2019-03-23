// TODO: Make an achievement page here
// Uncomment the code & write the jsx

import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Medal1 from "./medal_1.png";
import Medal2 from "./medal_2.png";
import Medal3 from "./medal_3.png";
import Medal4 from "./medal_4.png";
import axios from 'axios'

// hardcoded score for debugging & testing
let score = 0

// get score from the api here
// Add the 




class AchievementPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            score: -1
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8080/user-score-call.jsp?name="you"')
            .then(response => {
                const score = parseInt(response.data.score);
                this.setState({score});
            });
    }

    render() {

        return (
            <Container style={{"paddingTop": "30px"}}>
                <Row style={{ "paddingTop": "30px" }}>
                    <Col sm={3}>
                        {this.state.score >= 50 && <div> <img style={{"height": "200px"}} src= {Medal1} /> </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 100 && <div> <img style={{ "height": "200px" }} src={Medal2} /></div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 150 && <div> <img style={{ "height": "200px" }} src={Medal3} /> </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 200 && <div> <img style={{ "height": "200px" }} src={Medal4} /> </div>}
                    </Col>
                </Row>
                <Row style={{ "paddingTop": "30px" }}>
                    <Col sm={3}>
                        {this.state.score >= 250 && <div> medal 5 </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 300 && <div> medal 6 </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 350 && <div> medal 7 </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 400 && <div> medal 8 </div>}
                    </Col>
                </Row>
                <Row style={{ "paddingTop": "30px" }}>
                    <Col sm={3}>
                        {this.state.score >= 450 && <div> medal 5 </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 500 && <div> medal 6 </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 550 && <div> medal 7 </div>}
                    </Col>
                    <Col sm={3}>
                        {this.state.score >= 600 && <div> medal 8 </div>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AchievementPage;