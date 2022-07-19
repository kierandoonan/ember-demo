import './Route.css'

import React from 'react'
import { PropTypes } from 'prop-types'

export default function Route ({ stops }) {
  const details = stops.map((stop, i) => {
    const passed = stop.skipped || stop.departure.actual
    const timeOptions = { timeZone: stop.location.timezone }

    // Showing the time should follow these general rules
    // - If a bus has departed, show that time
    // - If it's the first stop, show the departure time
    // - Following stops show the arrival time
    // - If an estimated time is available, show that, otherwise show the scheduled time
    // - If a stop was skipped, don't show any time
    let timeShown
    if (stop.departure.actual) {
      const date = new Date(Date.parse(stop.departure.actual))
      timeShown = `Departed ${date.toLocaleTimeString([], timeOptions)}`
    } else if (stop.skipped) {
      timeShown = 'Skipped'
    } else if (i === 0 && stop.departure.estimated) {
      const date = new Date(Date.parse(stop.departure.estimated))
      timeShown = `Departing ${date.toLocaleTimeString([], timeOptions)}`
    } else if (i === 0) {
      const date = new Date(Date.parse(stop.departure.scheduled))
      timeShown = `Departing ${date.toLocaleTimeString([], timeOptions)}`
    } else if (stop.arrival.estimated) {
      const date = new Date(Date.parse(stop.arrival.estimated))
      timeShown = `Arriving ${date.toLocaleTimeString([], timeOptions)}`
    } else {
      const date = new Date(Date.parse(stop.arrival.scheduled))
      timeShown = `Arriving ${date.toLocaleTimeString([], timeOptions)}`
    }

    return <li key={stop.location.detailed_name} className={`stop ${passed ? 'grey' : 'green'}`}>
      <div className='stopName'>{ stop.location.detailed_name }</div><div className='stopTime'>{ timeShown }</div>
    </li>
  })

  return <ol className='route'>
    { details }
  </ol>
}

Route.propTypes = {
  stops: PropTypes.array.isRequired
}
