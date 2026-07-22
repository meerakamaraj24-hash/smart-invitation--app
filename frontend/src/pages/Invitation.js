import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Invitation() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://smart-invitation-backend.onrender.com/wedding/${id}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  return (
    <div className="invitation-card">

      <div className="top-design">❀ ❀ ❀</div>

      <h4 className="invite-title">
        Together With Their Families
      </h4>

      <h1 className="main-title">
        Wedding Invitation
      </h1>

      <p className="quote">
        "Where Love Begins, Forever Blooms."
      </p>

      {data.photo && (
        <img
          src={data.photo}
          alt="Couple"
          className="couple-photo"
        />
      )}

      <p className="welcome-text">
        With immense joy and heartfelt gratitude,
        we invite you to witness the beginning of our
        beautiful journey together.
      </p>

      <div className="couple-box">
        <h2>{data.brideName}</h2>

        <div className="heart">❤</div>

        <h2>{data.groomName}</h2>
      </div>

      <hr />

      <h3>📅 Wedding Ceremony</h3>

      <div className="details-box">
        <p>
          <strong>Date</strong><br />
          {data.weddingDate}
        </p>

        <p>
          <strong>Time</strong><br />
          {data.weddingTime}
        </p>
      </div>

      <hr />

      <h3>🏛 Wedding Venue</h3>

      <h2>{data.venue}</h2>

      <p>
        Your gracious presence and blessings
        will make this celebration complete.
        We look forward to celebrating this
        memorable day with you.
      </p>

      <hr />

      <h3>🧭 Guest Navigation</h3>

      <p>
        For your convenience, navigation links
        are provided below.
      </p>

      <div className="button-grid">

        <a
          href={data.railwayLink}
          target="_blank"
          rel="noreferrer"
          className="travel-btn"
        >
          🚆 Railway Station
        </a>

        <a
          href={data.busStandLink}
          target="_blank"
          rel="noreferrer"
          className="travel-btn"
        >
          🚌 Bus Stand
        </a>

        <a
          href={data.airportLink}
          target="_blank"
          rel="noreferrer"
          className="travel-btn"
        >
          ✈ Airport
        </a>

        <a
          href={data.location}
          target="_blank"
          rel="noreferrer"
          className="map-btn"
        >
          📍 Navigate to Wedding Hall
        </a>

      </div>

      <hr />

      <h3>📞 Contact</h3>

      <h2>{data.contact}</h2>

      <p className="footer-message">
        Every blessing, every smile,
        and every cherished moment shared
        with you will become a treasured
        memory in our new journey together.
        <br /><br />
        We eagerly await your gracious presence.
      </p>

      <h2 className="thankyou">
        With Love & Gratitude ❤️
      </h2>

      <div className="bottom-design">
        ❀ ❀ ❀
      </div>

    </div>
  );
}

export default Invitation;