import './App.css';
import { useState } from "react";
import Persons from "./Persons";
import CreatePerson from "./CreatePerson";

function App() {

  const initState = {
    persons: [
      { id: 1, fname: 'Phat', lname: 'Nguyen' },
      { id: 2, fname: 'Ruby', lname: 'Nguyen' }
    ],
    value: 1
  }

  const [personState, setPersonState] = useState(initState);

  const onAddPersonClicked = (person) => {

      const persons = [...personState.persons, person];
      setPersonState({
          ...personState,
          persons
      })
  }

  const onButtonClicked = () => {
    let value = personState.value + 1;
    setPersonState({...initState, value})
  }

  return (
      <div>
        <CreatePerson addPerson={onAddPersonClicked} currentId={2}/>
        <p><input type='button' value='Click' onClick={onButtonClicked} /></p>
        {personState.value}
        <Persons persons={personState.persons} />
      </div>

  );
}

export default App;
