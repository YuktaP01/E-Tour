import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingPage.css';
import axios from 'axios';

const BookingPage = () => {
  const [booking, setBooking] = useState({
    firstname: '',
    lastname: '',
    age: '',
    mobileno: '',
    numberOfPassenger: '',
    gender: '',
    dateofbirth: '',
    email: '',
    adhaarno: '',
    address: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    numberOfChildWithBed: '',
    numberOfChildWithoutBed: '',
    bookingDate: '',
  });

  const [error, setError] = useState('');
  const [passengerDetails, setPassengerDetails] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleWheel = (event) => {
      if (document.activeElement.type === 'number') {
        event.preventDefault();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking((prevBooking) => ({
      ...prevBooking,
      [name]: value,
    }));
  };

  const handleAddPassenger = () => {
    const numPassengers = parseInt(booking.numberOfPassenger) || 0;

    if (numPassengers > 0 && numPassengers !== passengerDetails.length) {
      const newPassengerDetails = Array.from({ length: numPassengers }, (_, index) => ({
        name: passengerDetails[index]?.name || '',
        age: passengerDetails[index]?.age || '',
        email: passengerDetails[index]?.email || '',
        mobileNo: passengerDetails[index]?.mobileNo || '',
      }));

      setPassengerDetails(newPassengerDetails);
    }
  };

  const handlePassengerDetailChange = (index, field, value) => {
    const newPassengerDetails = [...passengerDetails];
    newPassengerDetails[index][field] = value;
    setPassengerDetails(newPassengerDetails);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!booking.firstname || !booking.lastname || !booking.mobileno || !booking.email) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/bookings',
        { ...booking, passengers: passengerDetails },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (response.status !== 201) {
        throw new Error('Failed to create booking.');
      }

      // Redirect to PaymentPage with booking details
      navigate('/PaymentPage', {
        state: {
          passengerCount: booking.numberOfPassenger,
          childWithBedCount: booking.numberOfChildWithBed,
          childWithoutBedCount: booking.numberOfChildWithoutBed
        }
      });

    } catch (error) {
      console.error('Error:', error);
      setError('Failed to create booking.');
    }
  };

  return (
    <div className="booking-container">
      <h1>Booking Page</h1>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Firstname:</label>
        <input type="text" name="firstname" value={booking.firstname} onChange={handleInputChange} />
        <br />

        <label>Lastname:</label>
        <input type="text" name="lastname" value={booking.lastname} onChange={handleInputChange} />
        <br />

        <label>Age:</label>
        <input type="number" name="age" value={booking.age} onChange={handleInputChange} />
        <br />

        <label>Mobile No:</label>
        <input type="tel" name="mobileno" value={booking.mobileno} onChange={handleInputChange} />
        <br />

        <label>Gender:</label>
        <select name="gender" value={booking.gender} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />

        <label>Date of Birth:</label>
        <input type="date" name="dateofbirth" value={booking.dateofbirth} onChange={handleInputChange} />
        <br />

        <label>Email:</label>
        <input type="email" name="email" value={booking.email} onChange={handleInputChange} />
        <br />

        <label>Aadhaar No:</label>
        <input type="text" name="adhaarno" value={booking.adhaarno} onChange={handleInputChange} />
        <br />

        <label>Address:</label>
        <input type="text" name="address" value={booking.address} onChange={handleInputChange} />
        <br />

        <label>City:</label>
        <input type="text" name="city" value={booking.city} onChange={handleInputChange} />
        <br />

        <label>State:</label>
        <input type="text" name="state" value={booking.state} onChange={handleInputChange} />
        <br />

        <label>Country:</label>
        <input type="text" name="country" value={booking.country} onChange={handleInputChange} />
        <br />

        <label>Pincode:</label>
        <input type="text" name="pincode" value={booking.pincode} onChange={handleInputChange} />
        <br />

        <label>No. of Passengers:</label>
        <input type="number" name="numberOfPassenger" value={booking.numberOfPassenger} onChange={handleInputChange} />
        <button type="button" onClick={handleAddPassenger}>Add Passengers</button>
        <br />

        {passengerDetails.map((passenger, index) => (
          <div key={index}>
            <h3>Passenger {index + 1}</h3>
            <label>Name:</label>
            <input
              type="text"
              value={passenger.name}
              onChange={(e) => handlePassengerDetailChange(index, 'name', e.target.value)}
            />
            <br />
            <label>Age:</label>
            <input
              type="number"
              value={passenger.age}
              onChange={(e) => handlePassengerDetailChange(index, 'age', e.target.value)}
            />
            <br />
            <label>Email:</label>
            <input
              type="email"
              value={passenger.email}
              onChange={(e) => handlePassengerDetailChange(index, 'email', e.target.value)}
            />
            <br />
            <label>Mobile No:</label>
            <input
              type="tel"
              value={passenger.mobileNo}
              onChange={(e) => handlePassengerDetailChange(index, 'mobileNo', e.target.value)}
            />
            <br />
          </div>
        ))}

        <label>No. of Children with Bed:</label>
        <input type="number" name="numberOfChildWithBed" value={booking.numberOfChildWithBed} onChange={handleInputChange} />
        <br />

        <label>No. of Children without Bed:</label>
        <input type="number" name="numberOfChildWithoutBed" value={booking.numberOfChildWithoutBed} onChange={handleInputChange} />
        <br />

        <label>Booking Date:</label>
        <input type="date" name="bookingDate" value={booking.bookingDate} onChange={handleInputChange} />
        <br />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingPage;
