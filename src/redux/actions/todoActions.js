import {
  ADD_TODO,
  DELETE_CHECKLIST_TODO,
  DELETE_TODO,
} from '../type';

export const addTodoAction = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const removeTodoAction = () => {
  return {
    type: DELETE_CHECKLIST_TODO,
  };
};
