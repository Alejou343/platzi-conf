import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import '../Styles/Map.css';

const Map = () => {
    return (
    <div className='leaflet-container'>
        <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
    />

    <MapContainer center={[6.230833, -75.590553]} zoom={16} scrollWheelZoom={false}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <Marker position={[6.230833, -75.590553]}>
        <i className="fa-solid fa-location-dot"></i>
        </Marker>
    </MapContainer> 
    </div>
    );
}

export default Map;