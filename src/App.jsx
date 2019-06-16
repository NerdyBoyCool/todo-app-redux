import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grommet, Form, FormField, Button} from 'grommet';

import {createTodo} from './actions'
// import mapStateToProps from "react-redux/es/connect/mapStateToProps";

class App extends Component {
  // MEMO: ラムダ関数で書くことでthisのcontextが保たれる。
  // this.handleSubmit = this.handleSubmit.bind(this)
  // とか書かなくて済む
  handleSubmit = (text) => {
    this.props.createTodo(text)
  }

  render() {
    return (
      <Grommet plain>
        <p>{this.props.todos}</p>
        <Form onSubmit={this.handleSubmit}>
          <FormField name="name" label="TODO"/>
          <Button type="submit" primary label="登録"/>
        </Form>
      </Grommet>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  createTodo: () => {
    dispatch(createTodo())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

