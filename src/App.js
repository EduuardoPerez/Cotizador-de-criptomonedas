import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Spinner from './components/Spinner';
import imagen from './cryptomonedas.png'

function App() {

  const[moneda, guardarMoneda] = useState('');
  const[criptomoneda, guardarCriptomoneda] = useState('');
  const[cargando, guardarCargando] = useState(false);
  const[resultado, guardarResultado] = useState({});

  useEffect(() => {
    const cotizarCriptomoneda = async () => {

      // Si no hay moneda, no ejecutar
      if(moneda==='') return;
      
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
      const resultado = await axios.get(url);

      // Mostrar Spinner
      guardarCargando(true);

      // Ocultar Spinner y agregar el resultado
      setTimeout(() => {
        guardarCargando(false);
        guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
      }, 3000);
    }

    cotizarCriptomoneda();
  }, [criptomoneda, moneda]);

  // Mostrar Spinner o resultado
  const componente = (cargando) ? <Spinner /> : <Cotizacion resultado={resultado} />;

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