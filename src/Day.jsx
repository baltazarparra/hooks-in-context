/* eslint-disable no-sequences */
import React, { useContext } from 'react'
import { MoodContext, DayContext } from './Store'

const Day = () => {
  const [day, setDay] = useContext(DayContext)
  const [, setMood] = useContext(MoodContext)

  return (
    <>
      <p>Cause is a {day} day!</p>
      <button onClick={() => { return setDay('Rainy'), setMood('Chill')}}>
        Set rainy day
      </button>
    </>
  )
}

export default Day