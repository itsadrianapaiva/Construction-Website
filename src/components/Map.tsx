import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L, { LatLngExpression } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
    iconSize: [25, 41],     
    iconAnchor: [12, 41],   
    popupAnchor: [1, -34],  
    shadowSize: [41, 41]    
  });
  
  L.Marker.prototype.options.icon = DefaultIcon;
  
  interface MapComponentProps {
    latitude?: number;
    longitude?: number;
    zoom?: number;
  }
const MapComponent: React.FC<MapComponentProps> = () => {
  const position = [43.6532, -79.3832] as LatLngExpression; // Toronto coordinates

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Grand Toronto Area, Ontario
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
