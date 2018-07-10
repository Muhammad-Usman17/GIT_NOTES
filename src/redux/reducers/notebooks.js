import * as types from '../actions'

export default function notebooks(state = {}, action) {
  const {meta, type, payload,notebooks} = action
  switch (type) {

    case types.CREATE_NOTEBOOK_SUCCESS:
      {
        console.log('state', state);
        const {notebooks} = state;
        const newArray = [...notebooks, payload]
        return { ...state,
          created: false,
          notebooks: newArray
        }
      }
    case types.NOTEBOOK_DELETE_SUCCESS:
      {
        const {index} = meta
        const {notebooks} = state;
        const newArray = notebooks.filter(a => notebooks.indexOf(a) !== index);
        return { ...state,deleted: true,notebooks: newArray}
      }
    case  types.NOTEBOOK_LIST_SUCCESS:
      {
        console.log('i am list reducer')
        return { ...state,notebooks}
      }
    case types.NOTEBOOK_LIST_FAILED:
      {
        return { ...state,error: payload}
      }

    case types.NOTEBOOK_DELETE_FAILED:
      {
        return { ...state,error: payload,deleted: false}
      }
    case types.NOTEBOOK_DELETE_OK:
      {
        return { ...state,deleted: false}
      }
    case types.CREATE_NOTEBOOK_FAILED:
      {
        return { ...state,created: false}
      }
    case types.CREATE_NOTEBOOK_OK:
      {
        return { ...state, created: false}
      }
      default: {
        return state
      }
}
}
