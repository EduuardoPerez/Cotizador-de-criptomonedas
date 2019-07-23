import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import imagen from './cryptomonedas.png'

function App() {

  const[moneda, guardarMoneda] = useState('');
  const[criptomoneda, guardarCriptomoneda] = useState('');
  const[cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {

      // Si no hay moneda, no ejecutar
      if(moneda==='') return;
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      console.log(resultado);

      guardarCargando(true);
      setTimeout(() => {
        guardarCargando(false);
      }, 3000);
    }

    cotizarCriptomoneda();
  }, [criptomoneda, moneda]);

  // Mostrar Spinner o resultado
  const componente = (cargando) ? <Spinner /> : null;

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
          {componente}
        </div>
      </div>
    </div>
  );
}
export default App;