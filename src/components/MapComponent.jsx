// src/components/MapComponent.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const locations = [
  { position: [20.5937, 78.9629], name: 'India' },
  { position: [37.0902, -95.7129], name: 'USA' },
  { position: [56.1304, -106.3468], name: 'Canada' },
  { position: [40.4637, -3.7492], name: 'Spain' },
  { position: [-25.2744, 133.7751], name: 'Australia' }
];

const MapComponent = () => {
  return (
    <div className="w-full h-full">
      <MapContainer center={[20, 0]} zoom={1} style={{ width: '100%', height: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position} icon={blueIcon}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
