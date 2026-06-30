import personService from "../services/persons";

const Persons = ({ persons, search, setPersons, setAddedMessage }) => {
  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase()),
  );
  const handleDeletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name} ?`)) {
      personService
        .deletePerson(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch(() => {
          setAddedMessage(
            `Information of ${person.name} has already been removed from server`,
          );
          setPersons(persons.filter((person) => person.id !== id));
          setTimeout(() => {
            setAddedMessage(null);
          }, 5000);
        });
    }
  };
  return (
    <div>
      {filtered.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDeletePerson(person.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Persons;
