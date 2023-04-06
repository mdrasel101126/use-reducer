import { useEffect, useReducer } from "react";
import { loadingReducer } from "../LoadingState/loadingReducer";
import { initialLoadingState, loadingTypes } from "../LoadingState/LodingState";

export const usePeople = () => {
  const [state, dispatch] = useReducer(loadingReducer, initialLoadingState);
  useEffect(() => {
    dispatch({ type: loadingTypes.LOADING_CONTINUE });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: loadingTypes.LOADING_SUCCESSFULL, payload: data })
      )
      .catch((err) => dispatch({ type: loadingTypes.LOADING_ERROR }));
  }, []);

  return state;
};
