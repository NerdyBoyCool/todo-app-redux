import ActionTypes from '../constans';

const todos = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.createTodo:
      return [...state, { id: action.id, text: action.text }]
    default:
      return state;
  }
};

export default todos;
