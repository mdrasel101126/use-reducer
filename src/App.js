import "./App.css";
import PeopleContext from "./Context/PeopleContext";
import LoginForm from "./LoginForm/LoginForm";
import People from "./People/People";

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <PeopleContext>
        <People />
      </PeopleContext>
    </div>
  );
}

export default App;
