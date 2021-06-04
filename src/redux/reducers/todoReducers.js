import {
  ADD_TODO,
  DELETE_CHECKLIST_TODO,
  DELETE_TODO,
} from '../type';

const initialState = {
  lists: [],
};


export const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        //initial state
        ...state,
        //current data
        lists: [...state.lists, { id, data }],
      };
    case DELETE_TODO:
      const newLists = state.lists.filter(
        (list) => list.id !== action.payload
      );
      return {
        //initial state
        ...state,
        //current data
        lists: newLists,
      };
    case DELETE_CHECKLIST_TODO:
      return {
        ...state,
        lists: [],
      };
    default:
      return state;
  }
};
