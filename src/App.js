import './App.css'
import React from 'react'

import useTrip from './api/useTrip'
import Route from './components/Route'
import Services from './components/Services'
import RouteName from './components/RouteName'

import logo from './assets/ember-logo.svg'

function App () {
  const tripId = window.location.pathname.replace(/\//g, '')

  const { trip, loaded } = useTrip(tripId)

  if (!tripId) {
    return <div className="App">No trip id given.</div>
  }

  if (!loaded) {
    return <div className="App">Loading...</div>
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='logoContainer'>
          <img src={logo} className='logo' />
        </div>
        <div className='headerNavigation'>
          <a href='#'>Live Map</a>
          <a href='#'>FAQ</a>
          <a href='#'>Contact</a>
          <a href='#'>Log In</a>
        </div>
      </div>
      <div className='routeNameContainer'>
        <RouteName
          routeNumber={trip.description.route_number}
          startRegion={trip.route[0].location.region_name}
          endRegion={trip.route[trip.route.length - 1].location.region_name}
          startDate={trip.route[0].departure.scheduled}
        />
      </div>
      { trip.description.notes_details &&
          <div className='noteContainer' dangerouslySetInnerHTML={{ __html: trip.description.notes_details.rendered_notes }} />
      }
      <div className='flexContainer'>
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
    </div>
  )
}

export default App
