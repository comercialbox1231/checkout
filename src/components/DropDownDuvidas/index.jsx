import React, { Component } from "react";
import * as S from './styles'
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";

class DropdownComponent extends Component {
  state = {
    selectedOption: "EmGeral",
    selectedDescription: null
  };

  handleClick = (option) => {
    this.setState({ selectedOption: option });
  };

  handleClickDescription = (option) => {
    this.setState({ selectedDescription: option });
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedDescription } = this.state;

    return (
      <S.Wrapper>
        <S.DropDownCtn>
          <S.ItemDd onClick={() => this.handleClick("EmGeral")} className={selectedOption === "EmGeral" ? "activeDropDown" : ""}>
            <h3>EM GERAL</h3>
          </S.ItemDd>

          <S.ItemDd onClick={() => this.handleClick("Envio")} className={selectedOption === "Envio" ? "activeDropDown" : ""}>
            <h3>ENVIO</h3>
          </S.ItemDd>

          <S.ItemDd onClick={() => this.handleClick("Pedidos")} className={selectedOption === "Pedidos" ? "activeDropDown" : ""}>
            <h3>PEDDIDOS</h3>
          </S.ItemDd>

          <S.ItemDd onClick={() => this.handleClick("Pagamento")} className={selectedOption === "Pagamento" ? "activeDropDown" : ""}>
            <h3>PAGAMENTO</h3>
          </S.ItemDd>
        </S.DropDownCtn>

        <S.ShowContent>
          {selectedOption === "EmGeral" && (
            <S.CtnIternItem>
              <h1>Em Geral</h1>

              <S.CtnDescription onClick={() => handleClickDescription("lojaConfiavel")} className={selectedDescription === "lojaConfiavel" ? "activeDescription" : ""}>
                <h3 className="title">
                  Está Loja é confiável?
                </h3>
                <span className="minus">
                </span>
              </S.CtnDescription>
            </S.CtnIternItem>
          )}
        </S.ShowContent>

        <S.ShowContent>
          {selectedOption === "Envio" && (
            <S.CtnIternItem>
              <h1>Envio</h1>
            </S.CtnIternItem>
          )}
        </S.ShowContent>

        <S.ShowContent>
          {selectedOption === "Pedidos" && (
            <S.CtnIternItem>
              <h1>Pedidos</h1>
            </S.CtnIternItem>
          )}
        </S.ShowContent>

        <S.ShowContent>
          {selectedOption === "Pagamento" && (
            <S.CtnIternItem>
              <h1>Pagamento</h1>
            </S.CtnIternItem>
          )}
        </S.ShowContent>

      </S.Wrapper>
    );
  }
}

export default DropdownComponent;