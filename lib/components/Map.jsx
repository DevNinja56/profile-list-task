// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({ latitude, longitude }) => {
  // const googleMapsApiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your Google Maps API key

  return (
    <div className="min-h-[400px] w-full">
      {/* <LoadScript googleMapsApiKey={googleMapsApiKey}>
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          center={{ lat: latitude, lng: longitude }}
          zoom={13}
        >
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      </LoadScript> */}
      <iframe
        src={`http://maps.google.com/maps?q=${latitude},${longitude}&z=16&output=embed`}
        height={450}
        width={"100%"}
      />
    </div>
  );
};

export default Map;
