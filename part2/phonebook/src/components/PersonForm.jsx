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
    const newObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };
    setPersons(persons.concat(newObject));
    setNewName("");
    setNewNumber("");
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
