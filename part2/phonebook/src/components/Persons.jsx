const Persons = ({ persons, search}) => {
  const filtered = persons.filter((person) =>
    person.name.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div>
      {filtered.map((person) => (
        <div key={person.id}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
};


export default Persons;