import ActionTypes from '../constans';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.createTodo:
      return [...state, { text: action.text }]
    default:
      return state;
  }
};

export default todoReducer;
