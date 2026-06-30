import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [addedMessage, setAddedMessage] = useState(null);

  useEffect(() => {
    personService.getAllPersons().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={addedMessage} />
      <Filter search={search} setSearch={setSearch} />
      <h3>add a new</h3>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setPersons={setPersons}
        setNewNumber={setNewNumber}
        setAddedMessage={setAddedMessage}
      />
      <h2>numbers</h2>
      <Persons persons={persons} search={search} setPersons={setPersons} setAddedMessage={setAddedMessage}/>
    </div>
  );
};

export default App;
