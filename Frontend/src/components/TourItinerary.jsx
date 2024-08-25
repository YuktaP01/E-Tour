import React, { useState, useEffect } from 'react';

const TourItinerary = ({ tourId }) => {
  const [tour, setTour] = useState(null);
  const [dailyItineraries, setDailyItineraries] = useState([]);

  useEffect(() => {
    const fetchTour = async () => {
      const response = await fetch(`http://localhost:8080/api/tours/${tourId}`);
      const data = await response.json();
      setTour(data);
    };

    const fetchDailyItineraries = async () => {
      const response = await fetch(`http://localhost:8080/api/daily-itineraries?tourId=${tourId}`);
      const data = await response.json();
      setDailyItineraries(data);
    };

    fetchTour();
    fetchDailyItineraries();
  }, [tourId]);

  return (
    <div>
      {tour && (
        <>
          <h1>{tour.tourName}</h1>
          <h2>Duration: {tour.tourDuration}</h2>
          <h3>Cost: ${tour.tourCost}</h3>
          <h4>Destinations: {tour.tourDestinations}</h4>
          <p>{tour.tourDescription}</p>
          <h2>Daily Itinerary</h2>
          <ul>
            {dailyItineraries.map(itinerary => (
              <li key={itinerary.id}>
                <h3>Day {itinerary.dayNumber}</h3>
                <p>{itinerary.activities}</p>
                <p>Duration: {itinerary.duration}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TourItinerary;
