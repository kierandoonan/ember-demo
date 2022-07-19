import React from 'react'
import { PropTypes } from 'prop-types'

import Service from '../Service'

export default function Services ({ hasWifi, hasToilet, hasBicycle, hasWheelchair }) {
  return <div>
    <Service available={hasWifi} name='Wifi' icon='fa-wifi' />
    <Service available={hasToilet} name='Toilet' icon='fa-toilet-paper' />
    <Service available={hasWheelchair} name='Wheelchair access' icon='fa-wheelchair' />
    <Service available={hasBicycle} name='Bicycle storage' icon='fa-bicycle' />
  </div>
}

Services.propTypes = {
  hasWifi: PropTypes.bool.isRequired,
  hasToilet: PropTypes.bool.isRequired,
  hasBicycle: PropTypes.bool.isRequired,
  hasWheelchair: PropTypes.bool.isRequired
}
