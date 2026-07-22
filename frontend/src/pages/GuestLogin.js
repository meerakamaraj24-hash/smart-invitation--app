import React, { useState } from "react";

function GuestLogin() {
  const [bride, setBride] = useState("");
  const [groom, setGroom] = useState("");
  const [details, setDetails] = useState(null);

  const checkWedding = () => {
    const data = JSON.parse(
      localStorage.getItem("weddingData")
    );

    if (
      data &&
      data.brideName === bride &&
      data.groomName === groom
    ) {
      setDetails(data);
    } else {
      alert("Wedding Not Found");
    }
  };

  return (
    <div className="container">
      <h1>👨‍👩‍👧 Guest Login</h1>

      <input
        placeholder="Bride Name"
        onChange={(e) => setBride(e.target.value)}
      />

      <input
        placeholder="Groom Name"
        onChange={(e) => setGroom(e.target.value)}
      />

      <button onClick={checkWedding}>
        View Wedding
      </button>

      {details && (
        <div>
          <h3>{details.venue}</h3>

          <p>
            Contact: {details.contact}
          </p>
          <p>
            🚆 Railway Station: {details.railway}
        </p>

        <p>
        🚌 Bus Stand: {details.busStand}
        </p>

        <p>
        ✈ Airport: {details.airport}
        </p>

          <a
            href={details.location}
            target="_blank"
            rel="noreferrer"
          >
            Open Google Maps
          </a>
        </div>
      )}
    </div>
  );
}

export default GuestLogin;