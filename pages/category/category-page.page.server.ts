async function prerender() {
    const categorySlugs = ['odezhda', 'palatki', 'velosipedy']

    const productPages = categorySlugs.map((categorySlug) => {
        const url = `/category/${categorySlug}`
        return {
            url
        }
    })

    return productPages
}

export { prerender }
