const todos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [
          ...state,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      case 'DELETE_ITEM':
        return state.filter(todo => todo.id !== action.id);

      case 'SET_COMPLETE':
        return state.map(todo =>
          (todo.id === action.id) 
            ? {...todo, completed: !todo.completed}
            : todo
        )
      default:
        return state
    }
  }
  
  export default todos