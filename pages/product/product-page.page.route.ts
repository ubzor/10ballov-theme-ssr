export default (pageContext: { url: string }) => {
    const { url } = pageContext

    if (!url.startsWith('/product/')) {
        return false
    }

    const productId = url.split('/')[2] || 'null'

    return { routeParams: { productId } }
}
