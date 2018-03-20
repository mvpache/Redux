import { ADD_TODO } from "../actions";

export default (todos = [], action) => {
  switch (action.type) {

    case ADD_TODO:
      const todoToAdd = {
        text: action.text,
        complete: false
      }
      return todos.concat(todoToAdd);

    default:
      return todos;
  }
};