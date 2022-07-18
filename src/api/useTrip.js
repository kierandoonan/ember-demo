import { useState, useEffect } from 'react';

export default function useTrip(tripId) {
  const [error, setError] = useState(null);
  const [trip, setTrip] = useState({});

  useEffect(() => {
    fetch(`https://api.ember.to/v1/trips/${tripId}/`)
      .then(res => res.json())
      .then(
        res => setTrip(res),
        err => setError(err),
      )
  }, [tripId]);

  return {trip, error}
}
