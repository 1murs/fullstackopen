import personService from "../services/persons";

const PersonForm = ({
  persons,
  newName,
  newNumber,
  setNewName,
  setPersons,
  setNewNumber,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    if (persons.filter((person) => person.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`);
      setNewName("");
      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };

    // create a person in db.json
    personService.createPerson(newPerson).then((returnedPerson) => {
      console.log(returnedPerson);
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("")
    });
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNewNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
