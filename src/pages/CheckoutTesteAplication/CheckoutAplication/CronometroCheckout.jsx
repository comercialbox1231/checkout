import React, { Component } from "react"

class Cronometro extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutos: props.minutos,
      segundos: props.segundos,
      start: false,
    }
    this.timer = null
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.segundos === 0 && this.state.minutos === 0) {
        clearInterval(this.timer)
      } else {
        let segundosRestantes = this.state.segundos - 1
        let minutosRestantes = this.state.minutos
        if (segundosRestantes < 0) {
          minutosRestantes--
          segundosRestantes = 59
        }
        this.setState({
          minutos: minutosRestantes,
          segundos: segundosRestantes,
        })
      }
    }, 1000)
    this.setState({ start: true })
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        <p>
          {this.state.minutos.toString().padStart(2, "0")}:
          {this.state.segundos.toString().padStart(2, "0")}
        </p>
      </div>
    )
  }
}

export default Cronometro
