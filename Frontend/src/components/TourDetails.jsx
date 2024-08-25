import React, { useState, useEffect } from 'react';
import './TourDetails.css';
import Placeholder from 'react-bootstrap/Placeholder';
import { useNavigate, useParams } from 'react-router-dom';

const TourDetails = () => {
  const [tourData, setTourData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { tourId } = useParams(); 
  console.log(tourId);

  useEffect(() => {
    fetchData();
  }, [tourId]);

  const handleBooking = () => {
    navigate(`/BookingPage/${tourId}`); // Corrected the path
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch(`http://localhost:8080/api/tours/${tourId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data); // Check the data in the console
      setTourData(data);
    } catch (error) {
      console.error('Error fetching tour data:', error);
      setError('Failed to fetch tour data. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  

  const getImageUrl = () => {
    switch (tourId) {
      case '1':
        return 'https://www.planetware.com/wpimages/2020/11/europe-top-attractions-colosseum-rome.jpg';
      case '2':
        return 'https://th.bing.com/th/id/OIP.NjAoQwSfkV8Kjm5e_7Ek1gHaE8?rs=1&pid=ImgDetMain';
      case '3':
        return 'https://example.com/tour-3-image.jpg'; // Replace with the correct image URL for tourId 3
      default:
        return 'https://example.com/default-image.jpg'; // Optional: Default image if tourId is not matched
    }
  };

  return (
    <div className="tour-details-container">
      {isLoading && <Placeholder as="p" animation="glow">Loading...</Placeholder>}
      {error && <p className="error-message">{error}</p>}
      {tourData && (
        <div className="tour-data-wrapper">
          <h2>{tourData.name}</h2>
          <p>Destination: {tourData.destination}</p>
          <p>Duration: {tourData.duration}</p>
          <p>Description: {tourData.description}</p>
          <p>Cost: ${tourData.cost}</p>
          <img
            src={getImageUrl()} 
            alt={`Tour package: ${tourData.name}`} // Corrected alt attribute
            className="tour-image"
          />
        </div>
      )}
      <button className="book-now-button" onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default TourDetails;
