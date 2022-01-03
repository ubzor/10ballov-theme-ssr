async function prerender() {
    const productIds = [123, 321, 333]

    const productPages = productIds.map((productId) => {
        const url = `/product/${productId}`
        return {
            url
        }
    })

    return productPages
}

export { prerender }
