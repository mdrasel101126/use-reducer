import React, { createContext, useContext } from "react";
import { usePeople } from "../Hooks/usePeople";
const PeopleCTX = createContext();
const PeopleContext = ({ children }) => {
  return (
    <PeopleCTX.Provider value={usePeople()}>{children}</PeopleCTX.Provider>
  );
};

export const usePeopleCTX = () => useContext(PeopleCTX);

export default PeopleContext;
