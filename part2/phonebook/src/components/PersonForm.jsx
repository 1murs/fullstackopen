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
    const isSamePerson = persons.find((person) => person.name === newName);
    if (isSamePerson) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const toChangePerson = {
          ...isSamePerson,
          number: newNumber,
        };
        personService
          .updatePerson(toChangePerson.id, toChangePerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== returnedPerson.id ? person : returnedPerson,
              ),
            );
            setNewName("");
            setNewNumber("");
          });
      } else {
        setNewName("");
        setNewNumber("");
        return;
      }

      return;
    }
    const newPerson = {
      name: newName,
      number: newNumber,
      // id: String(persons.length + 1), why ?  because json-server himself return people already with [ id ]
    };

    // create a person in db.json
    personService.createPerson(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
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
