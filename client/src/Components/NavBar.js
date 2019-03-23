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
                <Navbar variant="light" style={{ backgroundColor: "#00897b" }}>
                    <Nav className="mr-auto">
                        <Link style={{ color: "white", paddingRight: "20px", paddingTop: "8px", paddingBottom: "6px", fontSize: "20px"}} to="/">
                            Tasks
                    </Link>
                        <Link style={{ color: "white", paddingRight: "20px", paddingTop: "8px", paddingBottom: "6px", fontSize: "20px"}} to="/achievements">
                            Achievements
                    </Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default withRouter(NavBar);