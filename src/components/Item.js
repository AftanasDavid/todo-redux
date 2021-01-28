import React from 'react'

const Item = ({ onClick, completed, text }) => (
  <li onClick={onClick} className={completed ? 'completed' : ''}>
    {text}
  </li>
)

export default Item