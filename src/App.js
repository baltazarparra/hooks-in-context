import React, { useContext } from 'react'
import { MoodContext, DayContext } from './Store'
import Day from './Day'

const App = () => {
  const [mood] = useContext(MoodContext)
  const [day] = useContext(DayContext)
  return (
    <div>
      <h1>React Hooks in Context</h1>
      <h2>Today's is day of {mood}</h2>
      <Day />
      <p>current state: {day}</p>
    </div>
  )
}

export default App