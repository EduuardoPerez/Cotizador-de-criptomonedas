import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import imagen from './cryptomonedas.png'

function App() {

  const[moneda, guardarMoneda] = useState('');
  const[criptomoneda, guardarCriptomoneda] = useState('');

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      console.log(resultado)
    }

    cotizarCriptomoneda();
  }, [criptomoneda, moneda]);

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="Imagen criptomonedas"/>
        </div>
        <div className="one-half column">
          <h1>Cotiza criptomonedas al instante</h1>
          <Formulario 
            guardarMoneda={guardarMoneda}
            guardarCriptomoneda={guardarCriptomoneda}
          />
        </div>
      </div>
    </div>
  );
}
export default App;