import React, { Component } from "react";

class CalculadorLlamada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duracion: 0,
      costoTotal: 0,
    };
  }

  handleDuracionChange = (event) => {
    this.setState({ duracion: event.target.value });
  };

  calcularCostoTotal = () => {
    let costo = 0;
    const duracion = this.state.duracion;
    if (duracion <= 3) {
      costo = 100;
    } else {
      costo = 100 + (duracion - 3) * 50;
    }
    this.setState({ costoTotal: costo });
  };

  render() {
    return (
      <div>
        <h1>Calcular Llamadas</h1>
        <form>
          <label>
            Duración de la llamada (minutos):
            <input
              type="number"
              value={this.state.duracion}
              onChange={this.handleDuracionChange}
            />
          </label>
        </form>
        <button onClick={this.calcularCostoTotal}>Calcular</button>
        <h2>Costo total: {this.state.costoTotal} pesos</h2>
      </div>
    );
  }
}

export default CalculadorLlamada;
