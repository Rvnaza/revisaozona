import { useState } from "react";
import './Converter.css'

function Converter() {

  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("celsius");

  const convertTemperature = () => {
    if (temperature === "") {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const temperatureValue = parseFloat(temperature);
    if (isNaN(temperatureValue)) {
      alert("Insira um número válido.");
      return;
    }

    let celsius, fahrenheit, kelvin;

    if (scale === "celsius") {
      celsius = temperatureValue;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = celsius + 273.15;
    } else if (scale === "fahrenheit") {
      fahrenheit = temperatureValue;
      celsius = (fahrenheit - 32) * 5 / 9;
      kelvin = celsius + 273.15;
    } else if (scale === "kelvin") {
      kelvin = temperatureValue;
      celsius = kelvin - 273.15;
      fahrenheit = (celsius * 9) / 5 + 32;
    }

    alert(`Celsius: ${celsius.toFixed(2)}°C\nFahrenheit: ${fahrenheit.toFixed(2)}°F\nKelvin: ${kelvin.toFixed(2)}K`);
  };

  return (
    <div className="container-converter">
      <input
        type="number"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        placeholder="Digite a temperatura"
        className="p-2 border rounded-lg"
      />
      <select onChange={(e) => setScale(e.target.value)} className="p-2 border rounded-lg">
        <option value="celsius">Celsius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
      </select>
      <button
        onClick={convertTemperature}
      >
        Converter
      </button>
    </div>
  );
}

export default Converter