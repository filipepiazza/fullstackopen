// const Hello = (props) => {

//   console.log(props)
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {

//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>

//       <Hello name='Maya' age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }

// export default App


// function Header({ course }) {
//   return <h1>{course}</h1>
// }


// function Part({part}){
//   return <>{part.name} {part.exercises}</>
// }

// function Content({ parts }) {
//   return (<>
//     {parts.map(part =>

//       <p key={part.name}>
//        <Part part={part} />
//       </p>
//     )}
//   </>
//   )
// }

// function Total({ exercises }) {
//   let total = 0
//   exercises.forEach((exercise => {
//     total = total + exercise
//   }))
//   return <p>Number of exercises {total}</p>
// }


// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts : [
//       { name: 'Fundamentals of React', exercises: 10 },
//       { name: 'Using props to pass data', exercises: 7 },
//       { name: 'State of a component', exercises: 14 },
//     ]
//   }

  // const part1 = { name: 'Fundamentals of React', exercises: 10 }
  // const part2 = { name: 'Using props to pass data', exercises: 7 }
  // const part3 = { name: 'State of a component', exercises: 14 }

  // const partList = [
  //   part1,
  //   part2,
  //   part3,
  // ]

//   const exerciseList = [course.parts[0].exercises,course.parts[1].exercises, course.parts[2].exercises]


//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total exercises={exerciseList} />
//     </div>
//   )
// }

// import { useState } from 'react'

// function Percentages({good, bad, neutral, total, average, percentage}){

//   if(total > 0 ){
//     return (
//       <>
//       <h2>Statistics</h2>
//       <table>
//         <tbody>
//           <tr><StatisticLine text={"good"} value={good} /></tr>
//           <tr><StatisticLine text={"neutral"} value={neutral} /></tr>
//           <tr><StatisticLine text={"bad"} value={bad} /></tr>
//           <tr><StatisticLine text={"total"} value={total} /></tr>
//           <tr><StatisticLine text={"average"} value={average} /></tr>
//           <tr><StatisticLine text={"positive"} value={percentage} /></tr>
//         </tbody>
//       </table>
//       </>    
//     );
//   }

//   return <>
//     <h2>Statistics</h2>
//     <span>no feedback given</span>
  
//   </>
  
// }

// function StatisticLine({text, value}){
//   return (
//     <>
//     <td>{text}</td><td>{value}</td> 
//     </>
//   );

// }

// function Button({onClick, children}){
//   return (
//     <button onClick={onClick}>
//       {children}
//     </button>
//   );
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)
//   const [total, setTotal] = useState(0)
//   const [average, setAverage] = useState(0)
//   const [percentage, setPercentage] = useState(0)

//   function getPercentage(){
//     let posPercent = 0
//     if(good > 0){
//       posPercent = (good * 100 )/ total
//     }
//     setPercentage(posPercent)
//   }

//   function getAverage(){
//     setAverage((good - bad)/3)
//   }

//   function handleGoodFeedback() {
//     setGood(good + 1)
//     setTotal(total + 1)
//     getAverage()
//     getPercentage()
//   }

//   function handleNeutralFeedback() {
//     setNeutral(neutral + 1)
//     setTotal(total + 1)
//     getAverage()
//     getPercentage()
//   }

//   function handleBadFeedback() {
//     setBad(bad + 1)
//     setTotal(total + 1)
//     getAverage()
//     getPercentage()
//   }

//   return (
//     <div>
//       <h1><b>give feedback</b></h1>
//       <Button onClick={handleGoodFeedback}>good</Button>
//       <Button onClick={handleNeutralFeedback}>neutral</Button>
//       <Button onClick={handleBadFeedback}>bad</Button>
//       <Percentages good={good} bad={bad} neutral={neutral} total={total} average={average} percentage={percentage} />
//     </div>
//   )
// }


// import React, { useState , useEffect} from 'react'

// const App = () => {
//   const anecdotes = [
//     'If it hurts, do it more often.',
//     'Adding manpower to a late software project makes it later!',
//     'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//     'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//     'Premature optimization is the root of all evil.',
//     'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
//     'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
//     'The only way to go fast, is to go well.'
//   ]
   
//   const [selected, setSelected] = useState('')
//   const [votes, setVotes] = useState({})
//   const [mostVoted, setMostVoted] = useState('')

//   const selectRandomString = () => {
//     const randomIndex = Math.floor(Math.random() * anecdotes.length);
//     setSelected(anecdotes[randomIndex]);
//   };

//   function createObjectFromArray(array) {
//     return array.reduce((acc, _, index) => {
//       acc[index] = '0';
//       return acc;
//     }, {});
//   }

//   useEffect(() => {
//     const newObject = createObjectFromArray(anecdotes);
//     setVotes(newObject);
//   }, []);

//   function mostVotedAnecdote(votes){

//     let highestKey = null;
//     let highestValue = 0;

//     for (const [key, value] of Object.entries(votes)) {
//       const numValue = Number(value);
//       if (numValue > highestValue) {
//         highestKey = key;
//         highestValue = numValue;
//       }
//     }

//     setMostVoted(anecdotes[highestKey])

//   }

//   function handleVote(index){
//     setVotes({
//       ...votes,
//       [index]: String(Number(votes[index]) + 1)
//     })
//     mostVotedAnecdote(votes)
//   }

//   return (
//     <div>
//       {selected && (
//         <p>{selected}</p>
//       )}
//       <p>This anectdote has: {votes[anecdotes.indexOf(selected)]}</p>
//       <button onClick={() => handleVote(anecdotes.indexOf(selected))}>vote</button>
//       <button onClick={selectRandomString}>next anecdote</button>
//       <p>Anectode with the most votes: </p>
//       <p>{mostVoted}</p>
//     </div>
//   )
// }

//export default App

//END OF PART 1

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

function Course({course}){
  return (
<>
    <Header course={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
    </>
  );
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  
  return (
    <>
    {courses.map(course =>
       <Course key={course.id} course={course} />
    )}
  </>
 
  );
}

//2.5 declare course component and subcomponents in separate module, imported by App

export default App