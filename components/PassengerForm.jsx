import React, { useState } from 'react';

const PassengerForm = () => {
    const [numPassengers, setNumPassengers] = useState(0);
    const [passengerDetails, setPassengerDetails] = useState([]);

    const handleNumPassengersChange = (e) => {
        setNumPassengers(parseInt(e.target.value, 10));
    };

    const handlePassengerDetailChange = (index, field, value) => {
        const newPassengerDetails = [...passengerDetails];
        newPassengerDetails[index] = {
            ...newPassengerDetails[index],
            [field]: value
        };
        setPassengerDetails(newPassengerDetails);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(passengerDetails);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Number of Passengers:</label>
                    <input
                        type="number"
                        value={numPassengers}
                        onChange={handleNumPassengersChange}
                    />
                </div>
                {Array.from({ length: numPassengers }).map((_, index) => (
                    <div key={index}>
                        <h3>Passenger {index + 1}</h3>
                        <label>Name:</label>
                        <input
                            type="text"
                            onChange={(e) =>
                                handlePassengerDetailChange(index, 'name', e.target.value)
                            }
                        />
                        <label>Age:</label>
                        <input
                            type="number"
                            onChange={(e) =>
                                handlePassengerDetailChange(index, 'age', e.target.value)
                            }
                        />
                        <label>Gender:</label>
                        <select
                            onChange={(e) =>
                                handlePassengerDetailChange(index, 'gender', e.target.value)
                            }
                        >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PassengerForm;
