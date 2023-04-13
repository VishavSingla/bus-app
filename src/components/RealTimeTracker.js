import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';

const RealTimeTracker = () => {
  const [busLocations, setBusLocations] = useState([]);
  const [selectedBus, setSelectedBus] = useState(null);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 37.7749,
    lng: -122.4194,
  };

  const fetchBusLocations = async () => {
    const response = await fetch('http://webservices.nextbus.com/service/publicJSONFeed?command=vehicleLocations&a=sf-muni&r=1&t=0');
    const data = await response.json();
    const locations = data.vehicle;
    setBusLocations(locations);
  };

  useEffect(() => {
    fetchBusLocations();
    const interval = setInterval(() => {
      fetchBusLocations();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Real-Time Bus Tracker</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={13}
        center={center}
      >
        {busLocations.map((bus) => (
          <Marker
            key={bus.id}
            position={{ lat: parseFloat(bus.lat), lng: parseFloat(bus.lon) }}
            onClick={() => setSelectedBus(bus)}
          />
        ))}
        {selectedBus && (
          <InfoWindow
            position={{ lat: parseFloat(selectedBus.lat), lng: parseFloat(selectedBus.lon) }}
            onCloseClick={() => setSelectedBus(null)}
          >
            <div>
              <h4>Bus {selectedBus.id}</h4>
              <p>Speed: {selectedBus.speedKmHr} km/hr</p>
              <p>Heading: {selectedBus.heading}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default RealTimeTracker;
