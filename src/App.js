import React from 'react'
import FilterButtons from './components/FilterButtons'
import AddItem from './containers/AddItem'
import VisibleTodoList from './containers/VisibleItems'

const App = () => (
  <div>
    <AddItem />
    <VisibleTodoList />
    <FilterButtons />
  </div>
)

export default App