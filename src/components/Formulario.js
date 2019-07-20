import React from 'react';

function Formulario(){
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