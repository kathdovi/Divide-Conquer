/**

  Name: /src/components/TodoList.js

  Description: This creates a todo list given todos.

  TODO:

  Copyright (c) 2017-present Justin Haaheim

  This file is subject to the terms and conditions defined in
  file 'LICENSE', which is part of this source code package.

********************************************** */

import React from 'react';
import { observer } from 'mobx-react';

import { List } from 'material-ui/List';

import Todo from './Todo';


@observer class TodoList extends React.Component {


  render() {
    const { filteredTodos, addTodoAfter, focusNode } = this.props.store;

    const items = filteredTodos.map((todo, index) => (
      <Todo
        key={todo.id}
        store={this.props.store}
        addAfter={() => addTodoAfter(todo)}
        arrayIndex={index}
        completed={todo.completed}
        deleteSelf={todo.delete}
        depth={todo.depth}
        focusNode={focusNode}
        getsFocus={todo.getsFocus}
        id={todo.id}
        indent={todo.indent}
        moveDown={todo.moveDown}
        moveUp={todo.moveUp}
        node={todo}
        text={todo.text}
        toggle={todo.toggle}
        unindent={todo.unindent}
        update={todo.update}
      />
    ));

    return (
      <List>
        {items}
      </List>
    );
  }
}

export default TodoList;
