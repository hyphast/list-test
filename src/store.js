import { createStore } from 'redux'

const ADD_ITEM = 'list/ADD_ITEM'
const DELETE_ITEM = 'list/DELETE_ITEM'

const initialState = {
  list: [{ id: crypto.randomUUID(), text: 'Text' }],
}

function listReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        list: [
          ...state.list,
          { id: crypto.randomUUID(), text: action.payload },
        ],
      }
    case DELETE_ITEM:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      }
    default:
      return state
  }
}

export const addItem = (text) => {
  return { type: ADD_ITEM, payload: text }
}
export const deleteItem = (id) => {
  return { type: DELETE_ITEM, payload: id }
}

const store = createStore(listReducer)

export default store
