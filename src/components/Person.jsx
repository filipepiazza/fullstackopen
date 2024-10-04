export default function Person({name, number, id, onDelete}){
    return (
        <>
        <p>{name} {': '} {number} <button onClick={() => onDelete(id)}>Delete</button></p>   
        </>
      );    
}