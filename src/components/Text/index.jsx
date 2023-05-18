import React from "react"

import { TextItem } from "./styles"

const Text = ({ textItem, variant = "primary" }) => {
    return (
        <TextItem variant={variant}>{textItem}</TextItem>
    )
}

export { Text }