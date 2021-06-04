import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './todo.styles.js';
import { AddItems, Button, Section } from './todo.styles.js';
import {
  addTodoAction,
  deleteTodoAction,
  removeTodoAction,
} from '../redux/actions/todoActions';
const Todo = () => {
  const dispatch = useDispatch()
  const [inputText, setInputText] = useState('');
  const lists = useSelector((state) => state.data.lists);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodoAction(inputText));
    setInputText('');
  };

  return (
    <Section>
      <figure>
        <figcaption>Add your list here 👍</figcaption>
      </figure>
      <AddItems onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='✍ Add items...'
          required
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <Button type='submit'>➕</Button>
      </AddItems>
      <div>
        {lists.length === 0 && <p>No todo list</p>}
        {lists?.map((list) => {
          return (
            <div className='flex justify-between m-4' key={list.id}>
              <h3>{list.data}</h3>
              <button
                type='button'
                onClick={() => dispatch(deleteTodoAction(list.id))}
              >
                ❌
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <button
          className='btn-red'
          type='button'
          onClick={() => dispatch(removeTodoAction())}
        >
          Delete all
        </button>
      </div>
    </Section>
  );
};

export default Todo;
