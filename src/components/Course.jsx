function Header({ course }) {
    return <h1>{course}</h1>
  }
  
  
  function Part({part}){
    return <>{part.name} {part.exercises}</>
  }
  
  function Content({ parts }) {
    return (<>
      {parts.map(part =>
  
        <p key={part.name}>
         <Part part={part} />
        </p>
      )}
    </>
    )
  }
  
  function Total({ parts }) {
    let total = 0
    total = parts.reduce((acc, curr) => acc = acc + curr.exercises, total)
    return <p>Total of : {total}</p>
  }
  
  export default function Course({course}){
    return (
  <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      </>
    );
  }