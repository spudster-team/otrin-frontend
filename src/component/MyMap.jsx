import React, { useEffect, useState } from "react";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { MapContainer, Marker, TileLayer , Tooltip} from "react-leaflet";


const MyMap = ({filtered_prices, coordonnees}) => {

  const [markers, setMarkers] = useState([])
  //const [is_located, setIsLocated] = useState(false);
  const [coord, setCoord] = useState({lat: -19.87064, lon: 47.03499});

  const icon = L.icon({
    iconUrl: "marker.png",
    iconSize: [40]
  })

  useEffect(() => {
    /**
     * TODO position of user
     */
    /*if(coordonnees.lat !== undefined && coordonnees.lon !== undefined){
       setCoord({lat: coordonnees.lat, lon: coordonnees.lon});
       setIsLocated(true);
    }else{
      let lat = -19.87064, lon = 47.03499;
      setCoord({lat: lat, lon: lon});
      setIsLocated(false);
    }*/
    console.log(filtered_prices.prices);
    setCoord({lat: -19.87064, lon: 47.03499});
    setMarkers(filtered_prices.prices);
  }, [filtered_prices, coordonnees])

  /**
   * TODO handleclik on marker
   */
  /*const handleMarkerClick = (e) => {
    e.preventDefault();
    console.log("click");
  }*/
  
  return (
    <React.Fragment>
      <MapContainer center={[coord.lat, coord.lon]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {markers && markers.map((marker, index) => (
            <Marker key={index} 
            icon={icon}
            position={[marker.store.location.latitude, marker.store.location.longitude]}
            /*eventHandlers={{
              click : (e) => {
                console.log(e);
              },
            }}*/
            >
              <Tooltip direction="top" offset={[0, 0]} opacity={1}>
                {marker.product.name} <b>{marker.store.name}</b>  <i className="text-center">{marker.value} Ar</i> 
              </Tooltip>
            </Marker>
          ))}
      </MapContainer>
    </React.Fragment>
  );
}

/**
 * { is_located === true &&
          <Marker icon={icon_home}
            position={[coord.lat, coord.lon]}>
              <Tooltip direction="top" offset={[0, 0]} opacity={1} permanent>
                Votre position 
              </Tooltip>
          </Marker>
        }
 */

export default MyMap;
