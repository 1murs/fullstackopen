import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    personService.getAllPersons().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch} />
      <h3>Add a new</h3>
      <PersonForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setPersons={setPersons}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} search={search} setPersons={setPersons} />
    </div>
  );
};

export default App;
