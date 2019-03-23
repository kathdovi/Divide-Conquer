import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import "./navbar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar variant="light" style={{ backgroundColor: "#FDBCF6"}}>
                    <Nav className="mr-auto">
                        <Link className="link" to="/">
                            Tasks
                    </Link>
                        <Link className="link" to="/achievements">
                            Achievements
                    </Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(NavBar);