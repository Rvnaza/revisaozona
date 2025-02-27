import { useState } from 'react';
import './Moedas.css'

function Moedas() {
    const [moedas, setMoedas] = useState("");
    const [scale, setScale] = useState("real");
  
    const convertMoedas = () => {
      if (moedas === "") {
        alert("Por favor, insira um valor válido.");
        return;
      }
  
      const moedasValue = parseFloat(moedas);
      if (isNaN(moedasValue)) {
        alert("Insira um número válido.");
        return;
      }
  
      let real, dolar, euro;
  
      if (scale === "real") {
        real = moedasValue;
        dolar = real / 5.89;
        euro = real / 6.09;
      } else if (scale === "dolar") {
        dolar = moedasValue;
        real = dolar * 5.89;
        euro = real / 6.09;
      } else if (scale === "euro") {
        euro = moedasValue;
        real = euro * 6.09; 
        dolar = real / 5.89;
      }
      
  
      alert(`Real: ${real.toFixed(2)}\ndolar: ${dolar.toFixed(2)}\neuro: ${euro.toFixed(2)}`);
    };
  
    return (
      <div className="container-moedas">
        <input
          type="number"
          value={moedas}
          onChange={(e) => setMoedas(e.target.value)}
          placeholder="Digite a temperatura"
          className="p-2 border rounded-lg"
        />
        <select onChange={(e) => setScale(e.target.value)} className="p-2 border rounded-lg">
          <option value="real">Real</option>
          <option value="dolar">Dólar</option>
          <option value="euro">Euro</option>
        </select>
        <button
          onClick={convertMoedas}
        >
          Converter
        </button>
      </div>
    );
  }
  

export default Moedas