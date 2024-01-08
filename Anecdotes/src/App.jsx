import { useState } from 'react'

function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  const [newSelected, setNewSelect] = useState(0)

  console.log(votes)
  console.log(anecdotes[selected])
  console.log(selected)
  const m = votes.indexOf(Math.max(...votes))
  console.log(m)

  return (
    <>
    <h1>
      Anecdote of the day
    </h1>
      <p>
        Anecdote: {anecdotes[selected]}
      </p> 
      <p>
        votes: {votes[selected]}
      </p>
      <button onClick={() => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
      }}>
        Vote
      </button>
      <button onClick={() => {
        setNewSelect(Math.floor(Math.random() * 8))
        setSelected(newSelected)
      }}>
        Next Anecdote
      </button>  
      <h1>
        Anecdote with most votes
      </h1>
      <p>
        {anecdotes[m]}
      </p>
    </>
  )
}

export default App
