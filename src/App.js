import './App.css'
import React from 'react'

import useTrip from './api/useTrip'
import Route from './components/Route'
import Services from './components/Services'

function App () {
  const tripId = window.location.pathname.replace(/\//g, '')

  const { trip, loaded } = useTrip(tripId)

  if (!tripId) {
    return <div className="App">No trip id given.</div>
  }

  if (!loaded) {
    return <div className="App">Loading...</div>
  }

  console.log(trip)
  return (
    <div className="App">
      <div className='routeContainer'>
        <Route stops={trip.route} />
      </div>
      <div className='servicesContainer'>
        <Services
          hasBicycle={trip.vehicle.bicycle > 0}
          hasToilet={trip.vehicle.has_toilet}
          hasWheelchair={trip.vehicle.wheelchair > 0}
          hasWifi={trip.vehicle.has_wifi}
        />
      </div>
    </div>
  )
}

export default App
