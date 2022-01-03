import _axios from 'axios'
import _qs from 'query-string'

import type { PageContextBuiltIn } from 'vite-plugin-ssr'

async function onBeforeRender(pageContext: PageContextBuiltIn) {
    // const headers = {}
    // const params = {
    //     productId: pageContext.routeParams.productId
    // }
    // const url = `${import.meta.env.VITE_API_URL}/api/tuk-tuk`

    // try {
    //     await axios.post(url, qs.stringify(params), { headers })
    // } catch (_error) {

    // }

    return {
        pageContext: {
            documentProps: {
                title: `Product ${pageContext.routeParams.productId}`,
                keywords: `Product ${pageContext.routeParams.productId} keywords`,
                description: `Product ${pageContext.routeParams.productId} description`,
                isNotFound: !['123', '321', '333'].includes(
                    pageContext.routeParams.productId
                )
            },
            pageProps: {
                status: true
            }
        }
    }
}

export { onBeforeRender }
