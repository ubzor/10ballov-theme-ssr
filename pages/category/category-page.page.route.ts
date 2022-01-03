export default (pageContext: { url: string }) => {
    const { url } = pageContext

    if (!url.startsWith('/category/')) {
        return false
    }

    const categorySlug = url.split('/')[2] || 'null'

    return { routeParams: { categorySlug } }
}
