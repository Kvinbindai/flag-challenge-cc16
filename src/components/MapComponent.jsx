import React, { useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup ,useMap } from 'react-leaflet';
import { FlagContext } from '../context/FlagContext';

const MapComponent = () => {
  // const { currentLocation } = props.location
  // const animateRef = useRef(false)
  const { currentLocation } = useContext(FlagContext)
  // const [ map , setMap] = useState(null) 

  const RecenterAutomatically = ({lat,lng}) => {
    const map = useMap();
     useEffect(() => {
       map.setView([lat, lng]);
     }, [lat,lng]);
     return null;
   }


  return (
    <MapContainer center={ currentLocation } scrollWheelZoom={false} dragging={false}  zoom={13} style={{ height: '300px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={ currentLocation }>
        <Popup>
          A sample popup for the marker.
        </Popup>
      </Marker>
      <RecenterAutomatically lat={currentLocation[0]} lng={currentLocation[1]} />
    </MapContainer>
  );
};

export default MapComponent;
