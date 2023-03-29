import React, { useReducer } from "react";
import { initialState, reducer } from "../state/reducerForm";

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id=""
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id=""
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </div>
        <div>
          <p>Gender:</p>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="other"
            value="other"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          <label htmlFor="other">Other</label>
        </div>
        <div>
          <p>Subject:</p>
          <select
            name="subject"
            id=""
            defaultValue="CSE"
            onChange={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          >
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="CE">CE</option>
          </select>
        </div>
        <div>
          <p>Number Of PC</p>
          <p>
            <span onClick={(e) => dispatch({ type: "DECREMENT" })}>-</span>
            <span>{state.pc}</span>
            <span onClick={(e) => dispatch({ type: "INCREMENT" })}>+</span>
          </p>
        </div>
        <div>
          <textarea
            name="comment"
            id=""
            cols="30"
            rows="10"
            placeholder="please write comment"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          ></textarea>
        </div>
        <label htmlFor="agree">Agree:</label>
        <input
          type="checkbox"
          name="agree"
          id="agree"
          onClick={(e) =>
            dispatch({
              type: "TOGGLE",
            })
          }
        />
        <input disabled={!state.agree} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginForm;
