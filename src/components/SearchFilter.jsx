export default function SearchFilter({value, onChange}){
    return (
        <>
        <p>Search <input value={value} onChange={onChange}></input></p>
        </>
      );    
}