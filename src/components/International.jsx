import React from 'react'
import nashik_monsoon from '../components/Assets/nashik_monsoon.jpg'
import kerla2 from '../components/Assets/kerla2.jpg'
import './International.css'
import { useNavigate } from 'react-router-dom';

const International = () => {

   const navigate = useNavigate();

   const handlebooking = (tourId) => {
      navigate(`/TourDetails/${tourId}`); 
  };
 
  const tours = [
   { id: 1, name: "International" },
   { id: 2, name: "Domestic" },
   { id: 3, name: "Event-based" }, // Adjust videoSrc as needed
 ];


  return (
     <><div className="grid-container"> 
        <div className="card" style={{ backgroundImage: `url(${"https://a.travel-assets.com/findyours-php/viewfinder/images/res70/56000/56828-Dubai.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', marginBottom: '26px', height: '30vh', backgroundPositionY: '-250px' }}>
           <div className="card-body" >
              <h1>Dubai Safar</h1>
             

              <button onClick={()=>handlebooking(1)} style={{ backgroundColor: '#ff6347', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                 Book Now
              </button>
           </div>
        </div>

        <div className="card" style={{ backgroundImage: `url(${"https://www.qantas.com/images/qantas/destinations/new-zealand-and-south-pacific/queenstown-mountains/jpg/hero.desktop.jpg"})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white,', marginBottom: '26px', height: '30vh' }}>
           <div className="card-body">
              <h1>New Zealand </h1>
             

              <button onClick={()=>handlebooking(2)} style={{ backgroundColor: '#ff6347', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                 Book Now
              </button>
           </div>
        </div>

        <div className="card" style={{ backgroundImage: `url(${"https://www.expat.hsbc.com/content/dam/hsbc/mbos/img/international-banking/16-9/3347-thailand-2-2000x1125.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', backgroundPositionY: '-200px', marginBottom: '26px', height: '30vh' }}>
           <div className="card-body">
              <h1 style={{ color: 'white' }}>Thailand Tour</h1>
              
              <button onClick={()=>handlebooking(3)} style={{ backgroundColor: '#ff6347', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                 Book Now
              </button>
           </div>
        </div>
           <button onClick={handlebooking}>Book Now </button>
        </div>
     </>
  )
}

export default International;