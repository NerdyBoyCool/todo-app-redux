import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormField, Button} from 'grommet';

import {createTodo} from '../actions'

class TodoInput extends Component {
  // MEMO: ラムダ関数で書くことでthisのcontextが保たれる。
  // this.handleSubmit = this.handleSubmit.bind(this)
  // とか書かなくて済む
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createTodo(e.value.name)
    console.log(this)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormField name="name" label="TODO"/>
        <Button type="submit" primary label="登録"/>
      </Form>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  createTodo: text => {
    dispatch(createTodo(text))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoInput);

