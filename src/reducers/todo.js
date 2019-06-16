import ActionTypes from '../constans';

// const defaultState = {
//   credentials: {},
//   authenticated: false,
//   selectedRoomId: 0,
// };

const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case ActionTypes.fetchTodo:
      return { ...state ,todo: [] };
    default:
      return state;
  }
};

export default todoReducer;
