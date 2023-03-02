import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import {
    MapContainer,
    Marker,
    Popup,
    FeatureGroup,
    TileLayer,
    Circle,
    Polygon,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import { useState } from "react";
import BuildingInfo from "./BuildingInfo";
import MarkerInfo from "./MarkerInfo";

function App() {
    const [isMarker, setisMarker] = useState(false);

    const building1 = [
        [40.62800004874421, -8.625463843345644],
        [40.627890122415295, -8.625200986862184],
        [40.62833796928893, -8.62479329109192],
        [40.628508964575666, -8.625029325485231],
    ];

    const building2 = [
        [
            [
                {
                    lat: 40.62775576776755,
                    lng: -8.62404763698578,
                },
                {
                    lat: 40.628065190187066,
                    lng: -8.623693585395815,
                },
                {
                    lat: 40.6279878347166,
                    lng: -8.62354338169098,
                },
                {
                    lat: 40.627637698308526,
                    lng: -8.623929619789125,
                },
            ],
        ],
    ];

    return (
        <div id="container">
            <MapContainer
                center={[40.6274374, -8.62356465]}
                zoom={18}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Polygon
                    positions={building2}
                    eventHandlers={{ click: (ev) => setisMarker(false) }}
                ></Polygon>
                <Marker
                    eventHandlers={{ click: (ev) => setisMarker(true) }}
                    position={{
                        lat: 40.62690004874421,
                        lng: -8.624263843345644,
                    }}
                ></Marker>
                <FeatureGroup>
                    <EditControl
                        position="topright"
                        onCreated={(ev) =>
                            console.log(ev.layer.editing.latlngs)
                        }
                        draw={{
                            rectangle: false,
                            circle: false,
                            polyline: false,
                            polygon: true,
                            marker: true,
                            circlemarker: false,
                        }}
                    />
                    {/* Can edit whats inside this */}
                    <Polygon
                        eventHandlers={{ click: (ev) => setisMarker(false) }}
                        positions={building1}
                    ></Polygon>
                </FeatureGroup>
            </MapContainer>
            <div id="side-bar">
                {isMarker ? <MarkerInfo /> : <BuildingInfo />}
            </div>
        </div>
    );
}

export default App;
