import { renderToNodeStream } from '@vue/server-renderer'
import { escapeInject } from 'vite-plugin-ssr'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'

import { createApp } from '@/app/app'
import { getPageMeta } from '@/plugins/page-meta'

import type { PageContext } from '@/typings/page-context'

const passToClient = ['pageProps', 'documentProps']

async function render(pageContext: PageContextBuiltIn & PageContext) {
    const app = createApp(pageContext)
    const stream = renderToNodeStream(app)

    const { title, keywords, description } = getPageMeta(pageContext)

    return escapeInject`<!DOCTYPE html>
<html>
    <head>
        <title>${title}</title>
        <meta name="keywords" content="${keywords}" />
        <meta name="description" content="${description}" />
    </head>
    <body>
        <div id="app">${stream}</div>
    </body>
</html>`
}

export { passToClient, render }
