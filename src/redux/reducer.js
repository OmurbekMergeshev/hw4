const initialState = {
    result: 0,
  }
  
  
  export default function reducer(state = initialState, action) {
    if (action.type === "FIRST_VALUE") {
      return {...state, firstValue: action.payload}
    }
  
    else if (action.type === "SECOND_VALUE") {
      return {...state, secondValue: action.payload}
    }
  
  
    else if (action.type === "PLUS") {
      return {...state, result: state.firstValue + state.secondValue}
    }
  
    else if (action.type === "MINUS"){
      return {...state, result: state.firstValue - state.secondValue }
    }
  
    else if (action.type === "MULTIPLY"){
      return {...state, result: state.firstValue * state.secondValue}
    }
  
    else if (action.type === "DIVIDE"){
      return {...state, result: state.firstValue / state.secondValue}
    }
  
    return state
  }