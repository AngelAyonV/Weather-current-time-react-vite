import React, { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";
import axios from "axios";

const WeatherTimeApp = () => {
  const [city, setCity] = useState(""); // Estado para el input
  const [selectedCity, setSelectedCity] = useState(""); // Estado para la ciudad seleccionada
  const [weatherData, setWeatherData] = useState(null);
  const API_KEY = "d7e8bb302f9e49238da214137253001"; // Clave de WeatherAPI

  // Función para manejar cambios en el input
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  // Función para detectar cuando el usuario presiona Enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && city.trim() !== "") {
      setSelectedCity(city); // Guarda la ciudad en el estado principal
      fetchWeather(city);
      setCity(""); // Limpia el input
    }
  };

  // Función para obtener el clima de la API
  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cityName}`
      );
      console.log("Datos completos de la API:", response.data); // 🔥 Muestra toda la data en la consola
      setWeatherData(response.data); // Guarda los datos del clima
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null); // Limpia los datos si hay error
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <h2>Information about the time on my City</h2>
      <input
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {/* <WeatherInfo data={weatherData} city={selectedCity} />{" "}
      {/* Componente hijo */}
      {/* Muestra el clima solo si hay datos */}
      {weatherData == null ? <h4>Not selected city</h4> : <WeatherInfo data={weatherData} />}
    </div>
  );
};

export default WeatherTimeApp;
