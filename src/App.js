import './App.css'
import React from 'react'

import useTrip from './api/useTrip'
import Route from './components/Route'

function App () {
  const { trip, loaded, error } = useTrip('hybD6XS9GbdvFuH5PyXdmv')

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
