import './App.css'
import React from 'react'

import useTrip from './api/useTrip'
import Route from './components/Route'

function App () {
  const tripId = window.location.pathname.replace(/\//g, '')

  const { trip, loaded, error } = useTrip(tripId)

  if (!tripId) {
    return <div className="App">No trip id given.</div>
  }

  if (!loaded) {
    return <div className="App">Loading...</div>
  }
  console.log(trip)
  console.log(error)
  return (
    <div className="App">
      <Route stops={trip.route} />
    </div>
  )
}

export default App
