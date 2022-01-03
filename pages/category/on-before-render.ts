import type { PageContextBuiltIn } from 'vite-plugin-ssr'

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    return {
        pageContext: {
            documentProps: {
                title: `Category ${pageContext.routeParams.categorySlug}`,
                keywords: `Category ${pageContext.routeParams.categorySlug} keywords`,
                description: `Category ${pageContext.routeParams.categorySlug} description`,
                isNotFound: !['odezhda', 'palatki', 'velosipedy'].includes(
                    pageContext.routeParams.categorySlug
                )
            },
            pageProps: {
                category: { id: 1, slug: pageContext.routeParams.categorySlug }
            }
        }
    }
}

export { onBeforeRender }
