import React, { Component } from "react"

class CronometroPix extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      minutos: 0,
      segundos: 0,
      dataCompleta: props.dataCompleta,
      intervalId: null,
    }
  }

  componentDidMount() {
    this.atualizarCronometro()
    this.setState({
      intervalId: setInterval(this.atualizarCronometro, 1000),
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  atualizarCronometro = () => {
    const dataAtual = new Date()
    const diferenca = this.state.dataCompleta.getTime() - dataAtual.getTime()
    if (diferenca <= 0) {
      clearInterval(this.state.intervalId)
      return
    }
    const minutosRestantes = Math.floor(diferenca / (1000 * 60))
    const segundosRestantes = Math.floor((diferenca % (1000 * 60)) / 1000)
    this.setState({
      minutos: minutosRestantes,
      segundos: segundosRestantes,
    })
  }

  render() {
    return (
      <div>
        {this.state.minutos < 10
          ? "0" + this.state.minutos
          : this.state.minutos}
        :
        {this.state.segundos < 10
          ? "0" + this.state.segundos
          : this.state.segundos}
      </div>
    )
  }
}
export default CronometroPix
