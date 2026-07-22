import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function Home() {
  const [brideName, setBrideName] = useState("");
  const [groomName, setGroomName] = useState("");
  const [venue, setVenue] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");

  

  const [showQR, setShowQR] = useState(false);
  const [generatedId, setGeneratedId] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [weddingTime, setWeddingTime] = useState("");
  const [railwayLink, setRailwayLink] = useState("");
const [busStandLink, setBusStandLink] = useState("");
const [airportLink, setAirportLink] = useState("");
const [photo, setPhoto] = useState("");

 const handleSubmit = async () => {
  try {
    const res = await fetch("http://10.89.5.94:5000/wedding", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        brideName,
        groomName,
        venue,
        location,
        contact,
        weddingDate,
        weddingTime,
        railwayLink,
        busStandLink,
        airportLink,
        photo,
      }),
    });

    if (!res.ok) {
  const error = await res.text();
  console.log(error);
  alert(error);
  return;
}

const data = await res.json();

console.log("Returned Data:", data);

setGeneratedId(data.id);
setShowQR(true);
    setShowQR(true);

    alert("Wedding Saved Successfully!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
  return (
    <div className="container">
      <h1>💍 Smart Wedding Navigation System</h1>

      <input placeholder="Bride Name" value={brideName}
        onChange={(e) => setBrideName(e.target.value)} />

      <input placeholder="Groom Name" value={groomName}
        onChange={(e) => setGroomName(e.target.value)} />

      <input placeholder="Marriage Hall Name" value={venue}
        onChange={(e) => setVenue(e.target.value)} />

      <input placeholder="Google Map Link" value={location}
        onChange={(e) => setLocation(e.target.value)} />

      <input placeholder="Contact Number" value={contact}
        onChange={(e) => setContact(e.target.value)} />
         <input
  type="text"
  placeholder="Railway Station Google Maps Link"
  value={railwayLink}
  onChange={(e) => setRailwayLink(e.target.value)}
/>

<input
  type="text"
  placeholder="Bus Stand Google Maps Link"
  value={busStandLink}
  onChange={(e) => setBusStandLink(e.target.value)}
/>

<input
  type="text"
  placeholder="Airport Google Maps Link"
  value={airportLink}
  onChange={(e) => setAirportLink(e.target.value)}
/>

        <input
        type="date"
        value={weddingDate}
         onChange={(e) => setWeddingDate(e.target.value)}
  />

        <input
          type="time"
          value={weddingTime}
          onChange={(e) => setWeddingTime(e.target.value)}
        />
       <input
  type="file"
  accept="image/*"
  onChange={(e) => setPhoto(e.target.files[0])}
/>

      <button onClick={handleSubmit}>
        Save Wedding Details
      </button>

      {showQR && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3>Wedding QR Code</h3>

         <QRCodeCanvas
  value={`http://10.89.5.94:3000/invitation/${generatedId}`}
  size={200}
/>
        </div>
      )}
    </div>
  );
}

export default Home;