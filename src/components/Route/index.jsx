import './Route.css'

import React from 'react'
import { PropTypes } from 'prop-types'

export default function Route ({ stops }) {
  const details = stops.map(stop => {
    const passed = stop.skipped || stop.departure.actual
    return <li key={stop.location.detailed_name} className={`stop ${passed ? 'grey' : 'green'}`}>
      { stop.location.detailed_name } { stop.departure.estimated }
    </li>
  })

  return <ol className='route'>
    { details }
  </ol>
}

Route.propTypes = {
  stops: PropTypes.array.isRequired
}
