import React, { useState, useEffect } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import axios from 'axios';

const BusTracker = () => {
  const [busLocation, setBusLocation] = useState(null);

  useEffect(() => {
    const fetchBusLocation = async () => {
      const response = await axios.get('https://api.example.com/bus/location');
      setBusLocation(response.data);
    };

    fetchBusLocation();
  }, []);

  return (
    <div>
      <h1>Bus Tracker</h1>
      {busLocation ? (
        <div>
          <FaMapMarker size={30} />
          <p>Latitude: {busLocation.latitude}</p>
          <p>Longitude: {busLocation.longitude}</p>
        </div>
      ) : (
        <p>Loading bus location...</p>
      )}
    </div>
  );
};

export default BusTracker;
