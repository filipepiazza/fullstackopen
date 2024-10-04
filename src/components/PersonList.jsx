import Person from "./Person";

export default function PersonList({persons, onDelete}){
    return (
        <>
        {persons.map(person => <Person key={person.id} name={person.name} number={person.number} id={person.id} onDelete={onDelete} />)}
        </>
      );    
}