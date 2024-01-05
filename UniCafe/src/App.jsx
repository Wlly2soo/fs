import { useState } from 'react'

const Button = ({click, text}) => (
  <button onClick={click}>
    {text}
  </button>
)

const Statistics = (props) => {
  if(props.all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>
          No feedback given
        </p>
      </>
    )
  }
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <tr>
            <StatisticLine text="Good" value={props.good}/>
          </tr>
          <tr>
            <StatisticLine text="Neutral" value={props.neutral}/>
          </tr>
          <tr>
            <StatisticLine text="Bad" value={props.bad}/>
          </tr>
          <tr>
            <StatisticLine text="All" value={props.all}/>
          </tr>
          <tr>
            <StatisticLine text="Average" value={props.average/props.all}/>
          </tr>
          <tr>
            <StatisticLine text="positive" value={(props.good/props.all) * 100}/>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  console.log(text, value)
  if(text === 'positive') {
    return(
      <>
        <td>
          {text}:
        </td>
        <td>
          {value}%
        </td>
      </>
    )
  }
  return(
  <>
    <td>
      {text}:
    </td>
    <td>
      {value}
    </td>
  </>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    const newGood = good + 1
    setGood(newGood)
    const newAll = all + 1
    setAll(newAll)
    const newAvg = average + 1
    setAverage(newAvg)
  }
  
  const handleBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newAll = all + 1
    setAll(newAll)
    const newAvg = average - 1
    setAverage(newAvg)
  }
  
  const handleNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newAll = all + 1
    setAll(newAll)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button click={handleGood} text={'Good'} />
      <Button click={handleNeutral} text={'Neutral'} />
      <Button click={handleBad} text={'Bad'} />
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average}
      />
    </>
  )
}

export default App
