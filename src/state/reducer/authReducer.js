import { SHOW_LOGIN_DRAWER } from '../actionTypes'

const intialState = {
  showLogin: false,
}
export default function AuthLoginReducer(state = intialState, action) {
  switch (action.type) {
    case SHOW_LOGIN_DRAWER: {
      return {
        ...state,
        showLogin: !state.showLogin,
      }
    }
    default: {
      return state
    }
  }
}
