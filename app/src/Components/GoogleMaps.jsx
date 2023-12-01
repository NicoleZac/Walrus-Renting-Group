import React from "react";

const MapContainer = ({ address }) => {
  // Replace "your_api_key_here" with your actual Google Maps API key
  const apiKey = "add_key";

  // Convert the address to a format suitable for the Google Maps Static API
  const formattedAddress = encodeURIComponent(address);

  // Specify the marker and circle parameters for the Static API
  const marker = `markers=color:red|label:M|${formattedAddress}`;
  const zoom = 10;

  // Construct the URL for the Static Map image
  const imageUrl = `https://maps.googleapis.com/maps/api/staticmap?${marker}&size=400x400&zoom=${zoom}&key=${apiKey}`;

  return (
    <div style={{ top: "675px", position: "absolute", marginLeft: "50px" }}>
      <img src={imageUrl} />
    </div>
  );
};

export default MapContainer;
