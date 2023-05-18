import React from "react"
import {
  FirstDescription,
  ContainerDescriptionTwo,
  DescriptionRight,
  ImageLpSty

} from "./styles"

const ImageLp = ({
  receptStyled,
  image
}) => {
  return (
    <div>
      <ImageLpSty style={receptStyled} src={image} alt="Imagem do produto" />
    </div>
  )
}

export { ImageLp }
