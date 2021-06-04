import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { todoReducers } from './reducers/todoReducers';

const composeEnhancer =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedState = localStorage.getItem('reduxToDoState')
  ? JSON.parse(localStorage.getItem('reduxToDoState'))
  : [];



const enhancer = composeEnhancer(applyMiddleware());

const store = createStore(
  combineReducers({
    data: todoReducers,
  }),
  persistedState,
  enhancer
);

store.subscribe(() => {
  localStorage.setItem(
    'reduxToDoState',
    JSON.stringify(store.getState())
  );
});

export default store;
