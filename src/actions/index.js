import ActionTypes from '../constans'

let nextTodoId = 0
export const createTodo = text => ({
 type: ActionTypes.createTodo,
 id: nextTodoId++,
 text
})

