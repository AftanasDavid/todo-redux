import {v1 as uuid} from "uuid"

export const addItem = text => {
  return {
    type: 'ADD_ITEM',
    id: uuid(),
    text
  }
}

export const deleteItem = id => ({
    type: 'DELETE_ITEM',
    id
  });

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const setComplete = id => {
  return {
    type: 'SET_COMPLETE',
    id
  }
}