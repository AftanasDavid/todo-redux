import React from 'react'
import Item from './Item'

const Items = ({ todos, onTodoClick, onClickDelete }) => (
  <ul>
    {todos.map(todo => (
      <span key={todo.id}>
        <Item {...todo} onClick={() => onTodoClick(todo.id)} />
        <button onClick={() => onClickDelete(todo.id)}>X</button>
      </span>
    ))}
  </ul>
)

export default Items