import { GoogleMap, type GoogleMapProps } from '@zzang535/react-google-map';

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', border: '10px solid white' }} >
      <GoogleMap
        apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
        center={{
            lat: 37.480392,
            lng: 126.998787,
        }}
        zoom={16}
        markers={[{
            lat: 37.480392,
            lng: 126.998787,
        }]}
        mapId={'map-id'}
      />
    </div>
  );
}
