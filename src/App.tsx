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

function App() {
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
        <MapContainer
            center={[40.6274374, -8.62166465]}
            zoom={18}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polygon positions={building2}></Polygon>
            <FeatureGroup>
                <EditControl
                    position="topright"
                    onCreated={(ev) => console.log(ev.layer.editing.latlngs)}
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
                    eventHandlers={{
                        click: (ev) => {
                            console.log("Click", ev);
                        },
                    }}
                    positions={building1}
                ></Polygon>
            </FeatureGroup>
        </MapContainer>
    );
}

export default App;
