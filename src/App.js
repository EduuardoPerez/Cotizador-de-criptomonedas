import React from 'react';
import Formulario from './components/Formulario';

import imagen from './cryptomonedas.png'

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="Imagen criptomonedas"/>
        </div>
        <div className="one-half column">
          <h1>Cotiza criptomonedas al instante</h1>
          <Formulario />
        </div>
      </div>
    </div>
  );
}
export default App;