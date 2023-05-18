function addToCard(priceOfProduct, nameOfProduct) {
    fbq('track', 'AddToCart', {
        content_type: nameOfProduct,
        value: priceOfProduct,
        currency: 'BRL'
    })
};

export default addToCard;
