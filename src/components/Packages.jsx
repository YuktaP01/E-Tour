import React from 'react';
import './Packages.css';
import InternationalVideo from "../components/Assets/International.mp4"; // Adjust path
import DomesticVideo from "../components/Assets/Domestic.mp4"; // Adjust path
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Packages = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInternationalClick= () => {
        navigate('/International'); // Navigate to the specified route
    };
   
      

    const handledomestic = () => {
        navigate('/Domestic'); // Navigate to the specified route
    };

    const handleeventbased = () => {
        navigate('/Eventbased'); // Navigate to the specified route
    };
    
      

    return (
        <>
            <div className="container">
                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src={InternationalVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-text">INTERNATIONAL</div>
                    <button className="video-button" onClick={handleInternationalClick}>
                        Book Now
                    </button>
                </div>

                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src={DomesticVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-text">DOMESTIC</div>
                    <button className="video-button" onClick={handledomestic}>
                        Book Now
                    </button>
                   
                    
                </div>

                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src={DomesticVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-text">EVENT BASED</div>
                    <button className="video-button" onClick={handleeventbased}>
                        Book Now
                    </button>
                </div>
            </div>
        </>
    );
};

export default Packages;
