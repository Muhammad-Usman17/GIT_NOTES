
export default function noteReducer(state = {}, action) {
 
  console.log('reducer',state);
      switch (action.type) {
        
        case 'NOTEBOOK_LOADED': {
          console.log('state',state);
          return {...state,  note:action.payload}
        }
        default: {
            return state
          }
  }
}
