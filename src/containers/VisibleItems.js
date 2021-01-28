import { connect } from 'react-redux'
import { deleteItem, setComplete } from '../actions'
import Items from '../components/Items'

const getVisibleItems = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos
    case 'COMPLETED':
      return todos.filter(t => t.completed)
    case 'ACTIVE':
      return todos.filter(t => !t.completed)
    default: return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleItems(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClickDelete: id => {
      dispatch(deleteItem(id))
    },
    
    onTodoClick: id => {
      dispatch(setComplete(id))
    }
  }
}

const VisibleItems = connect(
  mapStateToProps,
  mapDispatchToProps
)(Items)

export default VisibleItems