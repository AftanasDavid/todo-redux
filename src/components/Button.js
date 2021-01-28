import React from 'react'

const Button = ({ active, children, onClick }) => {
  if (active) {
    return <button>{children}</button>
  }

  return (
    <button onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </button>
  )
}

export default Button