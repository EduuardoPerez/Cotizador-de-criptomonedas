import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Formulario(){
  
  const[criptomonedas, guardarCriptomonedas] = useState([]);

  useEffect(() => {
    
    // Implementacion de la consulta
    const consultarAPI = async () => {
      const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
      const resultado = await axios.get(url);

      // Colocar respuesta en el state
      guardarCriptomonedas(resultado.data.Data);
    }
    // Ejecución de la consulta
    consultarAPI();

  }, []);

  return(
    <form>
      <div className="row">
        <label>Elige tu moneda</label>
        <select
          className="u-full-width"
        >
          <option value="">Elige tu moneda</option>
          <option value="USD">Dolar estadounidense</option>
          <option value="ARG">Peso argentino</option>
          <option value="MXN">Peso mexicano</option>
          <option value="GBP">Libra</option>
          <option value="EUR">Euro</option>
        </select>

        <div className="row">
          <label>Elige tu criptomoneda</label>
          <select
            className="u-full-width"
          >

          </select>
        </div>
      </div>
    </form>
  );
}
export default Formulario;