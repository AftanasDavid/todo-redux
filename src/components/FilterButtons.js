import React from 'react'
import FilterButton from './FilterButton'

const FilterButtons = () => (
  <div>
    <FilterButton filter="ALL">All</FilterButton>
    <FilterButton filter="ACTIVE">Active</FilterButton>
    <FilterButton filter="COMPLETED">Completed</FilterButton>
  </div>
)

export default FilterButtons