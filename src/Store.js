import React, { useState } from 'react'

export const MoodContext = React.createContext('Angry')
export const DayContext = React.createContext('Sunny')

const Store = ({children}) => {
  const [mood, setMood] = useState('Angry')
  const [day, setDay] = useState('Sunny')
  return (
    <MoodContext.Provider value={[mood, setMood]}>
      <DayContext.Provider value={[day, setDay]}>
        {children}
      </DayContext.Provider>
    </MoodContext.Provider>
  )
}

export default Store