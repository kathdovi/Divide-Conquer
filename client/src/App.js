import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AchievementPage from './Components/AchievementPage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TaskList from './Components/TaskList';
import NavBar from "./Components/NavBar";

const Main = () => (
  <Switch>
    <Route exact path="/" component={TaskList} />
    <Route exact path="/achievements" component={AchievementPage} />
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Main />
        </header>
      </div>
    );
  }
}

export default App;
