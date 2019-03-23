// TODO: Make an achievement page here
// Uncomment the code & write the jsx

import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

// get score from the api here
let score = 290

class AchievementPage extends Component {

    render() {

        return (
            <Container>
                <Row>
                    <Col sm={3}>
                        {score >= 50 && <div> medal 1 </div>}
                    </Col>
                    <Col sm={3}>
                        {score >= 100 && <div> medal 2 </div>}
                    </Col>
                    <Col sm={3}>
                        {score >= 150 && <div> medal 3 </div>}
                    </Col>
                    <Col sm={3}>
                        {score >= 200 && <div> medal 4 </div>}
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        {score >= 250 && <div> medal 5 </div>}
                    </Col>
                    <Col sm={3}>
                        {score >= 300 && <div> medal 6 </div>}
                    </Col>
                    <Col sm={3}>
                        {score >= 350 && <div> medal 7 </div>}
                    </Col>
                    <Col sm={3}>
                        {score >= 400 && <div> medal 8 </div>}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AchievementPage;