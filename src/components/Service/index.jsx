import React from 'react'
import { PropTypes } from 'prop-types'

// This component uses the fa-solid version of fa-ban which is a bit too thick.
// Ideally I'd want to use fa-thin but that is only available with a pro subscription.
export default function Service ({ available, name, icon }) {
  return <span className='fa-stack fa-2x'>
    <i className={`fa-solid ${icon} fa-stack-1x`} alt={`${name} ${available ? 'available' : 'unavailable'}`}></i>
    <i
      className={`${available ? 'fa-regular fa-circle' : 'fa-solid fa-ban'} fa-stack-2x`}
      style={{ color: available ? 'green' : 'tomato' }}
    ></i>
  </span>
}

Service.propTypes = {
  available: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}
