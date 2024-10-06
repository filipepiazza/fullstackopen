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

// import Course from "./components/Course";

// const App = () => {
//   const courses = [
//     {
//       name: 'Half Stack application development',
//       id: 1,
//       parts: [
//         {
//           name: 'Fundamentals of React',
//           exercises: 10,
//           id: 1
//         },
//         {
//           name: 'Using props to pass data',
//           exercises: 7,
//           id: 2
//         },
//         {
//           name: 'State of a component',
//           exercises: 14,
//           id: 3
//         },
//         {
//           name: 'Redux',
//           exercises: 11,
//           id: 4
//         }
//       ]
//     }, 
//     {
//       name: 'Node.js',
//       id: 2,
//       parts: [
//         {
//           name: 'Routing',
//           exercises: 3,
//           id: 1
//         },
//         {
//           name: 'Middlewares',
//           exercises: 7,
//           id: 2
//         }
//       ]
//     }
//   ]
  
//   return (
//     <>
//     {courses.map(course =>
//        <Course key={course.id} course={course} />
//     )}
//   </>
 
//   );
// }

// export default App

// import { useState, useEffect } from 'react'
// import SearchFilter from './components/SearchFilter'
// import PersonForm from './components/PersonForm'
// import PersonList from './components/PersonList'
// import PhonebookService from './services/PhonebookService'
// import Notification from './components/Notification'

// const App = () => {
//   const [persons, setPersons] = useState([]) 
//   const [newName, setNewName] = useState('')
//   const [newNumber, setNewNumber] = useState('')
//   const [showAll, setShowAll] = useState(true)
//   const [search, setSearch] = useState('')
//   const [errorMessage, setErrorMessage] = useState('')
//   const [errorMessageStyle, setErrorMessageStyle] = useState('green')

//   useEffect(() => {
//     console.log('effect')
//     PhonebookService.getAll()
//       .then(response => {
//         console.log('promise fulfilled')
//         setPersons(response.data)
//       })
//   }, [])

//   function handleSubmit(e){
//     e.preventDefault()
//     const existingPerson = persons.find(person => person.name.includes(newName))
//     //const exists = persons.some(person => person.name === newName);
//     if (existingPerson != undefined) {
//       if (window.confirm(`${existingPerson.name} already exists in the phonebook. Replace the old number with the new one? `)) {
//         const newPerson = { ...existingPerson, number: newNumber }
//         PhonebookService.update(existingPerson.id, newPerson)
//           .then(response => {
//             setPersons(persons.map(person => person.id !== existingPerson.id ? person : response.data))
//           }).then(() => {
//             setErrorMessage('Person number updated')
//             setErrorMessageStyle('green')
//             setTimeout(() => {
//               setErrorMessage(null)
//             }, 5000)
//           }).catch(error => {
//             console.log(error);
//             setErrorMessage(`${error.message} - ${error.response.data}`)
//             setErrorMessageStyle('red')
//             setTimeout(() => {
//               setErrorMessage(null)
//             }, 5000)
//           })
      
//       }
//     }
//     else{
//       const person = {
//         name: newName,
//         number: newNumber
//        }

//        PhonebookService.create(person)
//         .then(response => {
//           setPersons(persons.concat(response.data))
//         }).then(() => {
//           setErrorMessage('New person added to phonebook')
//           setErrorMessageStyle('green')
//           setTimeout(() => {
//             setErrorMessage(null)
//           }, 5000)
//         }).catch(error => {
//           setErrorMessage(`${error.message} - ${error.response.data}`)
//           setErrorMessageStyle('red')
//           setTimeout(() => {
//             setErrorMessage(null)
//           }, 5000)
//         })
     
//     }
   
//     setNewName('')
//     setNewNumber('')
//   }

//   function handleNameChange(e){
//     setNewName(e.target.value)
//   }

//   function handleNumberChange(e){
//     setNewNumber(e.target.value)
//   }

//   function handleSearchChange(e){
//     setShowAll(false)
//     setSearch(e.target.value)
//   }

//   function handleOnClickDelete(id){
//     const person = persons.find(person => person.id === id)
//     if (window.confirm(`Delete ${person.name} ? `)) {
//       PhonebookService.deletePerson(id)
//         .then(() => {
//           setPersons(persons.filter(person => person.id !== id))
//         }).then(() => {
//           setErrorMessage('Person deleted from phonebook')
//           setErrorMessageStyle('green')
//           setTimeout(() => {
//             setErrorMessage(null)
//           }, 5000)
//         }).catch(error => {
//           setErrorMessage(`${error.message} - ${error.response.data}`)
//           setErrorMessageStyle('red')
//             setTimeout(() => {
//               setErrorMessage(null)
//             }, 5000)
//           })
//     }
    
//   }

//   const namesToShow = showAll
//     ? persons
//     : persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

//   return (
//     <div>
//       <h2>Phonebook</h2>
//       <Notification message={errorMessage} currentStyle={errorMessageStyle}/>
//       <SearchFilter value={search} onChange={handleSearchChange} />
//       <h2><b>Add new</b></h2>
//       <PersonForm name={newName} number={newNumber} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
//       <h2>Numbers</h2>
//       <PersonList persons={namesToShow} onDelete={handleOnClickDelete} />
//     </div>
//   )
// }

// export default App


import { useState, useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import CountryService from './services/CountryService'
import WeatherService from './services/WeatherService';

function Display({ errorMessage, countriesToShow , onButtonClick}) {

  if (errorMessage !== '') {
    return (
      <p>{errorMessage}</p>
    );
  }
  else if(countriesToShow.length > 1){
    return (
      <div>
        {countriesToShow.map(countryShow => <p key={countryShow.name.official}>{countryShow.name.common}<button onClick={() => onButtonClick(countryShow.name.common)}>show</button></p>)}
      </div>
    );
  }
  else if(countriesToShow.length == 1){
    const country = countriesToShow[0]
    const languages = []
    for(const [key, value] of Object.entries(country.languages)) {
      languages.push(value)
      console.log(key, value);
    }
    console.log(languages);
    
    return (
      <div>
        <h2>{country.name.official}</h2>
        <p>Capital : {country.capital[0]}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {languages.map(language => <li key={country.capital}>{language}</li>)}
        </ul>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    );
  }

}

const App = () => {

  const [countries, setCountries] = useState([]) 
  const [countriesToShow, setCountriesToShow] = useState([])
  const [weather, setWeather] = useState([])
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    console.log('effect')
    CountryService.getAll()
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    console.log('effect 2')
    if(search !== ''){
      const matchingCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))
      if (matchingCountries.length > 10){
        setErrorMessage('too many matches, specify another filter')
      }
      else if(matchingCountries.length < 10 && matchingCountries.length > 1){
        setErrorMessage('')
        setCountriesToShow(matchingCountries)
      }
      else if(matchingCountries.length == 1)
      {
        setErrorMessage('')
        console.log('effect 3')
        CountryService.getOne(matchingCountries[0].name.common)
        .then(response => {
          const oneCountry = response.data
          matchingCountries[0] = oneCountry
          setCountriesToShow(matchingCountries)
          console.log('one country')
        })
        // console.log('capitainfo:',matchingCountries[0].capitalInfo);
        // WeatherService.getCoordinates(matchingCountries[0].capital)
        // .then(response => {
        //   console.log('weatherresponse',response);
        //   WeatherService.getWeather(response.data[0].lat, response.data[0].lon)
        //   .then(response => {
        //     console.log('weatherresponse 2',response);
        //     //setWeather()
        //   })
        // })
      }
    }
  }, [search])

  function handleSearchChange(e){
    setSearch(e.target.value)
  }

  function handleOnButtonClick(countryName){
    setSearch(countryName)
  }

  return(
  <div>
      <h2>find countries</h2>
      <SearchFilter value={search} onChange={handleSearchChange} />
      <Display errorMessage={errorMessage} countriesToShow={countriesToShow} onButtonClick={handleOnButtonClick}/>
    </div>
  );
}

export default App