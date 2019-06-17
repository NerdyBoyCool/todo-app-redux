import React, {Component} from 'react';
import {Grommet} from 'grommet';
import TodoInput from '../containers/TodoInput';
import TodoList from '../components/TodoList';

class App extends Component {
  render() {
    return (
      <Grommet plain>
        <TodoInput/>
        <TodoList/>
      </Grommet>
    );
  }
}

export default App
