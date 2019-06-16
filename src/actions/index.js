import ActionTypes from '../constans'

export const fetchTodo = () => {
  dispatch({
    type: ActionTypes.fetchTodo,
    payload: ''
  })
}
