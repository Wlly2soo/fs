const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({ parts }) => {
  console.log(parts)
  
  return (
    <div>
      <Part name = {parts[0].name} exercises = {parts[0].exercises}/>
      <Part name = {parts[1].name} exercises = {parts[1].exercises}/>
      <Part name = {parts[2].name} exercises = {parts[2].exercises}/>
    </div>
  )
}

const Total = ({ parts }) => {
  console.log(parts)
  return (
    <p>{parts[0].exercises + 
      parts[1].exercises + 
      parts[2].exercises}</p>
      )
    }
    
    const Part = ({ name, exercises }) => {
      console.log(name, exercises)
      return (
        <p>Name: {name}, Number of exercises:{exercises}</p>
      )
    }

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total parts = {parts} />
    </div>
  )
}

export default App