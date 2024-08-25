import "./Domestic.css";
import React from 'react'

import nashik_monsoon from '../components/Assets/nashik_monsoon.jpg'
import kerla2 from '../components/Assets/kerla2.jpg'
import { useNavigate } from 'react-router-dom';



function Domestic() {

   const navigate = useNavigate();

   const handlebooking = () => {
      navigate('/TourDetails'); 
  };

  return (
  
    <>
    <div className="grid-container">
            <div className="card" style={{ backgroundImage: `url(${nashik_monsoon})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', marginBottom: '26px'}}>
               <div className="card-body">
                  <h1>Nashik Monsoon Tour</h1>
                  
                  <button onClick={handlebooking}  style={{ backgroundColor: '#ff6347', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
               </div>
            </div>

            <div className="card" style={{ backgroundImage:` url(${kerla2})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', marginBottom: '26px'}}>
               <div className="card-body">
                  <h1>Kerla Tour</h1>
                 
                  <button onClick={handlebooking}  style={{ backgroundColor: '#ff6347', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
               </div>
            </div>

            <div className="card" style={{ backgroundImage: `url(${"https://static2.tripoto.com/media/filter/tst/img/1356094/TripDocument/1559127574_1559127559952.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', marginBottom: '26px'}}>
               <div className="card-body">
                  <h1 style={{ color: '' }}>North-East India </h1>
                  
                  <button onClick={handlebooking}  style={{ backgroundColor: '#ff6347', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
               </div>
            </div>
         </div>
    </>
   


  

  );
}

export default Domestic;
