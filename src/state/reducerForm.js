import { actionTypes } from "./actionTypes";

export const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  subject: "",
  pc: 0,
  comment: "",
  agree: false,
};
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case actionTypes.TOGGLE:
      return {
        ...state,
        agree: !state.agree,
      };
    case actionTypes.INCREMENT:
      return {
        ...state,
        pc: state.pc + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        pc: state.pc - 1,
      };
    default:
      return state;
  }
};
