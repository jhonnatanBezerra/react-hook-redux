import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    'REACTJS',
    'REACT NATIVE'
  ]
}

/*
Reducers recebe o estado anterior e uma ação(action) a ser feita
ai baseado na action recebida ele faz alguma coisa
*/

function courses(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_COURSE':
      return {
        ...state, data: [...state.data, action.title]
      }
    /*
    é retornado o objeto(state) com todo o estado
    é copiado tudo que esta dentro do estado com nome data
    e é adicionado um novo curso atravez da ação title
    */

    case 'REMOVE_COURSE':
      return {
        ...state, data: [...state.data !== action.title]
      }

    default:
      return state;
  }
}

const store = createStore(courses);

export default store;