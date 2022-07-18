import { useState, useEffect } from 'react'

export default function useTrip (tripId) {
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [trip, setTrip] = useState({})

  useEffect(() => {
    if (!tripId) {
      return
    }

    fetch(`https://api.ember.to/v1/trips/${tripId}/`)
      .then(res => res.json())
      .then(
        res => setTrip(res),
        err => setError(err)
      )
      .then(() => setLoaded(true))
  }, [tripId])

  return { trip, loaded, error }
}
