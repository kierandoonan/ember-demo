import React from 'react'
import { PropTypes } from 'prop-types'

export default function RouteName ({ routeNumber, startRegion, endRegion, startDate }) {
  const date = new Date(Date.parse(startDate))
  return <h2>{date.toLocaleDateString()} - {startRegion} to {endRegion} ({routeNumber})</h2>
}

RouteName.propTypes = {
  routeNumber: PropTypes.string.isRequired,
  startRegion: PropTypes.string.isRequired,
  endRegion: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
}
