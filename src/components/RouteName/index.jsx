import React from 'react'
import { PropTypes } from 'prop-types'

export default function RouteName ({ routeNumber, startRegion, endRegion, startDate, timeZone }) {
  const date = new Date(Date.parse(startDate))
  return <h2>{date.toLocaleDateString([], { timeZone })} - {startRegion} to {endRegion} ({routeNumber})</h2>
}

RouteName.propTypes = {
  routeNumber: PropTypes.string.isRequired,
  startRegion: PropTypes.string.isRequired,
  endRegion: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  timeZone: PropTypes.string.isRequired
}
