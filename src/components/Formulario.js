import React, {useState, useEffect} from 'react';
import Criptomoneda from './Criptomoneda';
import axios from 'axios';

function Formulario(){
  
  const[criptomonedas, guardarCriptomonedas] = useState([]);
  const[monedaCotizar, guardarMonedaCotizar] = useState('');
  const[criptoCotizar, guardarCriptoCotizar] = useState('');
  const[error, guardarError] = useState(false);

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

  // Validar que el usuario complete los campos
  const cotizarMoneda = e => {
    e.preventDefault();

    // Validar si ambos campos están llenos
    if(monedaCotizar==='' || criptoCotizar===''){
      guardarError(true);
      return;
    }

    // Pasar los datos al componente principal
    guardarError(false);
  }

  return(
    <form
      onSubmit={cotizarMoneda}
    >
      <div className="row">
        <label>Elige tu moneda</label>
        <select
          className="u-full-width"
          onChange={e => guardarMonedaCotizar(e.target.value)}
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
            onChange={e => guardarCriptoCotizar(e.target.value)}
          >
            <option value="">Elige tu criptomoneda</option>
            {criptomonedas.map(criptomoneda => (
              <Criptomoneda
                key={criptomoneda.CoinInfo.Id}
                criptomoneda={criptomoneda}
              />
            ))}
          </select>
        </div>
      </div>
      <input type="submit" className="button-primary u-full-width" value="Calcular"/>
    </form>
  );
}
export default Formulario;