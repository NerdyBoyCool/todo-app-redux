import React from 'react'
import {connect} from 'react-redux';
import TodoListItem from './TodoListItem'

const TodoList = ({ todos }) => (
  <React.Fragment>
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  </React.Fragment>
)


const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
