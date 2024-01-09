import React from 'react'

const Course = ({ course }) => {
    return(
        <>
        <Header course={course.name} />
        <Content parts={course.parts}/>
        <Total parts={course.parts} />
        </>
    )
}

const Header = ({ course }) => {
    return (
        <h2>{course}</h2>
    )
}

const Content = ({ parts }) => {
console.log('content parts', parts)

    return (
        <>
        {parts.map(p => <Part key={p.id} name={p.name} exercises={p.exercises} />)}
        </>
    )
}

const Total = ({ parts }) => {
    console.log('total parts', parts)
    const total = parts.reduce((s, p) => s + p.exercises, 0)

    return (
        <p>
        Total of {total} exercises
        </p>
    )
}
    
const Part = ({ name, exercises }) => {
    console.log(name, exercises)
    
    return (
        <p>Name: {name}, Number of exercises:{exercises}</p>
    )
}

export default Course