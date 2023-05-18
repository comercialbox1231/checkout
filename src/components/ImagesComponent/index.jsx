import React from "react"

import { Image } from "./styles"

const ImageComponent = ({ imagesrc }) => {
    return (
        <Image src={imagesrc} alt="Imagem do Produto" />
    )
}

export { ImageComponent }