import React from "react";
import { usePeopleCTX } from "../Context/PeopleContext";

const People = () => {
  const state = usePeopleCTX();

  const { error, loading, people } = state;

  console.log(error, loading, people);

  if (loading) {
    return <p>Loading.........</p>;
  }
  return (
    <div>
      <h1>Hello People</h1>
      <p>Total People: {people.length}</p>
    </div>
  );
};

export default People;
