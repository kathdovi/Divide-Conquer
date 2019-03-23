/**

  Name: /src/layouts/Primary.js

  Description: This is the primary layout for our app.

  TODO:
  - Figure out how to stretch the paper/div element to the full height.

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { observer } from 'mobx-react';

import AppBar from 'material-ui/AppBar';

import Footer from '../components/Footer';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';


const styles = {
  container: {
    textAlign: 'left',
    padding: 0,
  },
  contentBody: {
    minHeight: '76vh',
  },
  todoList: {

  },
  footerArea: {
    padding: 0,
    bottom: '0px',
    left: '0px',
    right: '0px',
    width: '100%',
  },
  addButton: {
    textAlign: 'right',
    bottom: '0px',
    right: '0px',
    margin: '40px',
    marginRight: '50px',
  },
};


@observer class Primary extends React.Component {

  render() {
    return (
      <div style={styles.container}>
          <div style={styles.contentBody}>
            <AppBar
              title="Stuff"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            <TodoList store={this.props.store} style={styles.todoList} />
          </div>
          <div style={styles.footerArea}>
            <div style={styles.addButton}>
              <AddTodo store={this.props.store} />
            </div>
            <Footer store={this.props.store} />
          </div>   
      </div>
    );
  }
}

export default Primary;
