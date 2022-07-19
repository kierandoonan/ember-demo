import './BookButton.css'

import React from 'react'
import { PropTypes } from 'prop-types'

export default function BookButton ({ lastStop }) {
  const disabled = isDisabled(lastStop)

  return <button disabled={disabled} className='bookButton'>
    {disabled ? 'Booking Closed' : 'Book Now'}
  </button>
}

function isDisabled (lastStop) {
  if (lastStop.departure.actual) {
    return true
  }

  let departureTime
  if (lastStop.departure.estimated) {
    departureTime = lastStop.departure.estimated
  } else {
    departureTime = lastStop.departure.scheduled
  }

  const cuttoffMs = Date.parse(departureTime) + lastStop.booking_cut_off_mins
  const cuttoffDate = new Date(cuttoffMs)
  // Round to the nearest minute
  cuttoffDate.setUTCSeconds(0, 0)

  return cuttoffDate.getTime() > Date.UTC()
}

BookButton.propTypes = {
  lastStop: PropTypes.object.isRequired
}
