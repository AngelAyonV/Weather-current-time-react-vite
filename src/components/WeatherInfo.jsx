import React from "react";

const WeatherInfo = ({ city, data }) => {
  return (
    <div className="weather-container">
      <div className="city-column">
        <h3>Selected City:</h3>
        {/* {city ? <p>{city}</p> : <p>No city selected</p>} */}
        <h3>
          {data.location.name}, {data.location.region}, {data.location.country}.
        </h3>
        <h3>Weather current</h3>
        <h4>{data.current.condition.text}</h4>
        <img
          src={`https:${data.current.condition.icon}`}
          alt="Icono del clima"
        />
      </div>
      <div className="information-column">
        <h3 >Weather information</h3>
        <h4>
          🌡️ Temperatura: {data.current.temp_c}°C / {data.current.temp_f}°F
        </h4>
        <h4>
          🤗 Sensación térmica: {data.current.feelslike_c}°C /{" "}
          {data.current.feelslike_f}°F
        </h4>
        <h4>
          🔥 Índice de calor: {data.current.heatindex_c}°C /{" "}
          {data.current.heatindex_f}°F
        </h4>
        <h4>
          💨 Viento: {data.current.wind_kph} km/h / {data.current.wind_mph} mph
        </h4>
        <h4>🧭 Dirección del viento: {data.current.wind_dir}</h4>
        <h4>💦 Humedad: {data.current.humidity}%</h4>
        <h4>
          📏 Presión: {data.current.pressure_mb} mb / {data.current.pressure_in}{" "}
          in
        </h4>
        <h4>☀️ Índice UV: {data.current.uv}</h4>
        <h4>
          👀 Visibilidad: {data.current.vis_km} km / {data.current.vis_miles} mi
        </h4>
        <h4>
          ☔ Precipitación: {data.current.precip_mm} mm /{" "}
          {data.current.precip_in} in
        </h4>
        <h4>🕒 Última actualización: {data.current.last_updated}</h4>
      </div>
    </div>
  );
};

export default WeatherInfo;
